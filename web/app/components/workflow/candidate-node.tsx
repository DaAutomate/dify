import {
  memo,
} from 'react'
import produce from 'immer'
import {
  useReactFlow,
  useStoreApi,
  useViewport,
} from 'reactflow'
import { useEventListener } from 'ahooks'
import {
  useStore,
  useWorkflowStore,
} from './store'
import { WorkflowHistoryEvent, useNodesInteractions, useWorkflowHistory } from './hooks'
import { CUSTOM_NODE } from './constants'
import CustomNode from './nodes'
import CustomNoteNode from './note-node'
import { CUSTOM_NOTE_NODE } from './note-node/constants'

const CandidateNode = () => {
  const store = useStoreApi()
  const reactflow = useReactFlow()
  const workflowStore = useWorkflowStore()
  const candidateNode = useStore(s => s.candidateNode)
  const mousePosition = useStore(s => s.mousePosition)
  const { zoom } = useViewport()
  const { handleNodeSelect } = useNodesInteractions()
  const { saveStateToHistory } = useWorkflowHistory()

  useEventListener('click', (e) => {
    const { candidateNode, mousePosition } = workflowStore.getState()

    if (candidateNode) {
      e.preventDefault()
      const {
        getNodes,
        setNodes,
      } = store.getState()
      const { screenToFlowPosition } = reactflow
      const nodes = getNodes()
      const { x, y } = screenToFlowPosition({ x: mousePosition.pageX, y: mousePosition.pageY })
      const newNodes = produce(nodes, (draft) => {
        draft.push({
          ...candidateNode,
          data: {
            ...candidateNode.data,
            _isCandidate: false,
          },
          position: {
            x,
            y,
          },
        })
      })
      setNodes(newNodes)
      saveStateToHistory(WorkflowHistoryEvent.NoteAdd)
      workflowStore.setState({ candidateNode: undefined })

      if (candidateNode.type === CUSTOM_NOTE_NODE)
        handleNodeSelect(candidateNode.id)
    }
  })

  useEventListener('contextmenu', (e) => {
    const { candidateNode } = workflowStore.getState()
    if (candidateNode) {
      e.preventDefault()
      workflowStore.setState({ candidateNode: undefined })
    }
  })

  if (!candidateNode)
    return null

  return (
    <div
      className='absolute z-10'
      style={{
        left: mousePosition.elementX,
        top: mousePosition.elementY,
        transform: `scale(${zoom})`,
        transformOrigin: '0 0',
      }}
    >
      {
        candidateNode.type === CUSTOM_NODE && (
          <CustomNode {...candidateNode as any} />
        )
      }
      {
        candidateNode.type === CUSTOM_NOTE_NODE && (
          <CustomNoteNode {...candidateNode as any} />
        )
      }
    </div>
  )
}

export default memo(CandidateNode)
