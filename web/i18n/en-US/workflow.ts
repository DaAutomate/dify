const translation = {
  common: {
    undo: 'Undo',
    redo: 'Redo',
    editing: 'Editing',
    autoSaved: 'Auto-Saved',
    unpublished: 'Unpublished',
    published: 'Published',
    publish: 'Publish',
    update: 'Update',
    run: 'Run',
    running: 'Running',
    inRunMode: 'In Run Mode',
    inPreview: 'In Preview',
    inPreviewMode: 'In Preview Mode',
    preview: 'Preview',
    viewRunHistory: 'View run history',
    runHistory: 'Run History',
    goBackToEdit: 'Go back to editor',
    conversationLog: 'Conversation Log',
    features: 'Features',
    debugAndPreview: 'Debug and Preview',
    restart: 'Restart',
    currentDraft: 'Current Draft',
    currentDraftUnpublished: 'Current Draft Unpublished',
    latestPublished: 'Latest Published',
    publishedAt: 'Published',
    restore: 'Restore',
    runApp: 'Run App',
    batchRunApp: 'Batch Run App',
    accessAPIReference: 'Access API Reference',
    embedIntoSite: 'Embed Into Site',
    addTitle: 'Add title...',
    addDescription: 'Add description...',
    noVar: 'No variable',
    searchVar: 'Search variable',
    variableNamePlaceholder: 'Variable name',
    setVarValuePlaceholder: 'Set variable',
    needConnecttip: 'This step is not connected to anything',
    maxTreeDepth: 'Maximum limit of {{depth}} nodes per branch',
    needEndNode: 'The End block must be added',
    needAnswerNode: 'The Answer block must be added',
    workflowProcess: 'Workflow Process',
    notRunning: 'Not running yet',
    previewPlaceholder: 'Enter content in the box below to start debugging the Chatbot',
    effectVarConfirm: {
      title: 'Remove Variable',
      content: 'The variable is used in other nodes. Do you still want to remove it?',
    },
    insertVarTip: 'Press the \'/\' key to insert quickly',
    processData: 'Process Data',
    input: 'Input',
    output: 'Output',
    jinjaEditorPlaceholder: 'Type \'/\' or \'{\' to insert variable',
    viewOnly: 'View Only',
    showRunHistory: 'Show Run History',
    enableJinja: 'Enable Jinja template support',
    learnMore: 'Learn More',
    copy: 'Copy',
    duplicate: 'Duplicate',
    addBlock: 'Add Block',
    pasteHere: 'Paste Here',
    pointerMode: 'Pointer Mode',
    handMode: 'Hand Mode',
    model: 'Model',
    workflowAsTool: 'Workflow as Tool',
    configureRequired: 'Configure Required',
    configure: 'Configure',
    manageInTools: 'Manage in Tools',
    workflowAsToolTip: 'Tool reconfiguration is required after the workflow update.',
    viewDetailInTracingPanel: 'View details',
    syncingData: 'Syncing data, just a few seconds.',
    importDSL: 'Import DSL',
    importDSLTip: 'Current draft will be overwritten. Export workflow as backup before importing.',
    backupCurrentDraft: 'Backup Current Draft',
    chooseDSL: 'Choose DSL(yml) file',
    overwriteAndImport: 'Overwrite and Import',
    importFailure: 'Import failure',
    importSuccess: 'Import success',
  },
  env: {
    envPanelTitle: 'Environment Variables',
    envDescription: 'Environment variables can be used to store private information and credentials. They are read-only and can be separated from the DSL file during export.',
    envPanelButton: 'Add Variable',
    modal: {
      title: 'Add Environment Variable',
      editTitle: 'Edit Environment Variable',
      type: 'Type',
      name: 'Name',
      namePlaceholder: 'env name',
      value: 'Value',
      valuePlaceholder: 'env value',
    },
    export: {
      title: 'Export Secret environment variables?',
      checkbox: 'Export secret values',
      ignore: 'Export DSL',
      export: 'Export DSL with secret values ',
    },
  },
  changeHistory: {
    title: 'Change History',
    placeholder: 'You haven\'t changed anything yet',
    clearHistory: 'Clear History',
    hint: 'Hint',
    hintText: 'Your editing actions are tracked in a change history, which is stored on your device for the duration of this session. This history will be cleared when you leave the editor.',
    stepBackward_one: '{{count}} step backward',
    stepBackward_other: '{{count}} steps backward',
    stepForward_one: '{{count}} step forward',
    stepForward_other: '{{count}} steps forward',
    sessionStart: 'Session Start',
    currentState: 'Current State',
    nodeTitleChange: 'Block title changed',
    nodeDescriptionChange: 'Block description changed',
    nodeDragStop: 'Block moved',
    nodeChange: 'Block changed',
    nodeConnect: 'Block connected',
    nodePaste: 'Block pasted',
    nodeDelete: 'Block deleted',
    nodeAdd: 'Block added',
    nodeResize: 'Block resized',
    noteAdd: 'Note added',
    noteChange: 'Note changed',
    noteDelete: 'Note deleted',
    edgeDelete: 'Block disconnected',
  },
  errorMsg: {
    fieldRequired: '{{field}} is required',
    authRequired: 'Authorization is required',
    invalidJson: '{{field}} is invalid JSON',
    fields: {
      variable: 'Variable Name',
      variableValue: 'Variable Value',
      code: 'Code',
      model: 'Model',
      rerankModel: 'Rerank Model',
    },
    invalidVariable: 'Invalid variable',
  },
  singleRun: {
    testRun: 'Test Run ',
    startRun: 'Start Run',
    running: 'Running',
    testRunIteration: 'Test Run Iteration',
    back: 'Back',
    iteration: 'Iteration',
  },
  tabs: {
    'searchBlock': 'Search block',
    'blocks': 'Blocks',
    'tools': 'Tools',
    'allTool': 'All',
    'builtInTool': 'Built-in',
    'customTool': 'Custom',
    'workflowTool': 'Workflow',
    'question-understand': 'Question Understand',
    'logic': 'Logic',
    'transform': 'Transform',
    'utilities': 'Utilities',
    'noResult': 'No match found',
  },
  blocks: {
    'start': 'Start',
    'end': 'End',
    'answer': 'Answer',
    'llm': 'LLM',
    'knowledge-retrieval': 'Knowledge Retrieval',
    'question-classifier': 'Question Classifier',
    'if-else': 'IF/ELSE',
    'code': 'Code',
    'template-transform': 'Template',
    'http-request': 'HTTP Request',
    'variable-assigner': 'Variable Aggregator',
    'variable-aggregator': 'Variable Aggregator',
    'iteration-start': 'Iteration Start',
    'iteration': 'Iteration',
    'parameter-extractor': 'Parameter Extractor',
  },
  blocksAbout: {
    'start': 'Define the initial parameters for launching a workflow',
    'end': 'Define the end and result type of a workflow',
    'answer': 'Define the reply content of a chat conversation',
    'llm': 'Invoking large language models to answer questions or process natural language',
    'knowledge-retrieval': 'Allows you to query text content related to user questions from the Knowledge',
    'question-classifier': 'Define the classification conditions of user questions, LLM can define how the conversation progresses based on the classification description',
    'if-else': 'Allows you to split the workflow into two branches based on if/else conditions',
    'code': 'Execute a piece of Python or NodeJS code to implement custom logic',
    'template-transform': 'Convert data to string using Jinja template syntax',
    'http-request': 'Allow server requests to be sent over the HTTP protocol',
    'variable-assigner': 'Aggregate multi-branch variables into a single variable for unified configuration of downstream nodes.',
    'variable-aggregator': 'Aggregate multi-branch variables into a single variable for unified configuration of downstream nodes.',
    'iteration': 'Perform multiple steps on a list object until all results are outputted.',
    'parameter-extractor': 'Use LLM to extract structured parameters from natural language for tool invocations or HTTP requests.',
  },
  operator: {
    zoomIn: 'Zoom In',
    zoomOut: 'Zoom Out',
    zoomTo50: 'Zoom to 50%',
    zoomTo100: 'Zoom to 100%',
    zoomToFit: 'Zoom to Fit',
  },
  panel: {
    userInputField: 'User Input Field',
    changeBlock: 'Change Block',
    helpLink: 'Help Link',
    about: 'About',
    createdBy: 'Created By ',
    nextStep: 'Next Step',
    addNextStep: 'Add the next block in this workflow',
    selectNextStep: 'Select Next Block',
    runThisStep: 'Run this step',
    checklist: 'Checklist',
    checklistTip: 'Make sure all issues are resolved before publishing',
    checklistResolved: 'All issues are resolved',
    organizeBlocks: 'Organize blocks',
    change: 'Change',
  },
  nodes: {
    common: {
      outputVars: 'Output Variables',
      insertVarTip: 'Insert Variable',
      memory: {
        memory: 'Memory',
        memoryTip: 'Chat memory settings',
        windowSize: 'Window Size',
        conversationRoleName: 'Conversation Role Name',
        user: 'User prefix',
        assistant: 'Assistant prefix',
      },
      memories: {
        title: 'Memories',
        tip: 'Chat memory',
        builtIn: 'Built-in',
      },
    },
    start: {
      required: 'required',
      inputField: 'Input Field',
      builtInVar: 'Built-in Variables',
      outputVars: {
        query: 'User input',
        memories: {
          des: 'Conversation history',
          type: 'message type',
          content: 'message content',
        },
        files: 'File list',
      },
      noVarTip: 'Set inputs that can be used in the Workflow',
    },
    end: {
      outputs: 'Outputs',
      output: {
        type: 'output type',
        variable: 'output variable',
      },
      type: {
        'none': 'None',
        'plain-text': 'Plain Text',
        'structured': 'Structured',
      },
    },
    answer: {
      answer: 'Answer',
      outputVars: 'Output Variables',
    },
    llm: {
      model: 'model',
      variables: 'variables',
      context: 'context',
      contextTooltip: 'You can import Knowledge as context',
      notSetContextInPromptTip: 'To enable the context feature, please fill in the context variable in PROMPT.',
      prompt: 'prompt',
      roleDescription: {
        system: 'Give high level instructions for the conversation',
        user: 'Provide instructions, queries, or any text-based input to the model',
        assistant: 'The model’s responses  based on the user messages',
      },
      addMessage: 'Add Message',
      vision: 'vision',
      files: 'Files',
      resolution: {
        name: 'Resolution',
        high: 'High',
        low: 'Low',
      },
      outputVars: {
        output: 'Generate content',
        usage: 'Model Usage Information',
      },
      singleRun: {
        variable: 'Variable',
      },
      sysQueryInUser: 'sys.query in user message is required',
    },
    knowledgeRetrieval: {
      queryVariable: 'Query Variable',
      knowledge: 'Knowledge',
      outputVars: {
        output: 'Retrieval segmented data',
        content: 'Segmented content',
        title: 'Segmented title',
        icon: 'Segmented icon',
        url: 'Segmented URL',
        metadata: 'Other metadata',
      },
    },
    http: {
      inputVars: 'Input Variables',
      api: 'API',
      apiPlaceholder: 'Enter URL, type ‘/’ insert variable',
      notStartWithHttp: 'API should start with http:// or https://',
      key: 'Key',
      value: 'Value',
      bulkEdit: 'Bulk Edit',
      keyValueEdit: 'Key-Value Edit',
      headers: 'Headers',
      params: 'Params',
      body: 'Body',
      outputVars: {
        body: 'Response Content',
        statusCode: 'Response Status Code',
        headers: 'Response Header List JSON',
        files: 'Files List',
      },
      authorization: {
        'authorization': 'Authorization',
        'authorizationType': 'Authorization Type',
        'no-auth': 'None',
        'api-key': 'API-Key',
        'auth-type': 'Auth Type',
        'basic': 'Basic',
        'bearer': 'Bearer',
        'custom': 'Custom',
        'api-key-title': 'API Key',
        'header': 'Header',
      },
      insertVarPlaceholder: 'type \'/\' to insert variable',
      timeout: {
        title: 'Timeout',
        connectLabel: 'Connection Timeout',
        connectPlaceholder: 'Enter connection timeout in seconds',
        readLabel: 'Read Timeout',
        readPlaceholder: 'Enter read timeout in seconds',
        writeLabel: 'Write Timeout',
        writePlaceholder: 'Enter write timeout in seconds',
      },
    },
    code: {
      inputVars: 'Input Variables',
      outputVars: 'Output Variables',
      advancedDependencies: 'Advanced Dependencies',
      advancedDependenciesTip: 'Add some preloaded dependencies that take more time to consume or are not default built-in here',
      searchDependencies: 'Search Dependencies',
    },
    templateTransform: {
      inputVars: 'Input Variables',
      code: 'Code',
      codeSupportTip: 'Only supports Jinja2',
      outputVars: {
        output: 'Transformed content',
      },
    },
    ifElse: {
      if: 'If',
      else: 'Else',
      elseDescription: 'Used to define the logic that should be executed when the if condition is not met.',
      and: 'and',
      or: 'or',
      operator: 'Operator',
      notSetVariable: 'Please set variable first',
      comparisonOperator: {
        'contains': 'contains',
        'not contains': 'not contains',
        'start with': 'start with',
        'end with': 'end with',
        'is': 'is',
        'is not': 'is not',
        'empty': 'is empty',
        'not empty': 'is not empty',
        'null': 'is null',
        'not null': 'is not null',
      },
      enterValue: 'Enter value',
      addCondition: 'Add Condition',
      conditionNotSetup: 'Condition NOT setup',
      selectVariable: 'Select variable...',
    },
    variableAssigner: {
      title: 'Assign variables',
      outputType: 'Output Type',
      varNotSet: 'Variable not set',
      noVarTip: 'Add the variables to be assigned',
      type: {
        string: 'String',
        number: 'Number',
        object: 'Object',
        array: 'Array',
      },
      aggregationGroup: 'Aggregation Group',
      aggregationGroupTip: 'Enabling this feature allows the variable aggregator to aggregate multiple sets of variables.',
      addGroup: 'Add Group',
      outputVars: {
        varDescribe: '{{groupName}} output',
      },
      setAssignVariable: 'Set assign variable',
    },
    tool: {
      toAuthorize: 'To authorize',
      inputVars: 'Input Variables',
      outputVars: {
        text: 'tool generated content',
        files: {
          title: 'tool generated files',
          type: 'Support type. Now only support image',
          transfer_method: 'Transfer method.Value is  remote_url or local_file',
          url: 'Image url',
          upload_file_id: 'Upload file id',
        },
        json: 'tool generated json',
      },
    },
    questionClassifiers: {
      model: 'model',
      inputVars: 'Input Variables',
      outputVars: {
        className: 'Class Name',
      },
      class: 'Class',
      classNamePlaceholder: 'Write your class name',
      advancedSetting: 'Advanced Setting',
      topicName: 'Topic Name',
      topicPlaceholder: 'Write your topic name',
      addClass: 'Add Class',
      instruction: 'Instruction',
      instructionTip: 'Input additional instructions to help the question classifier better understand how to categorize questions.',
      instructionPlaceholder: 'Write your instruction',
    },
    parameterExtractor: {
      inputVar: 'Input Variable',
      extractParameters: 'Extract Parameters',
      importFromTool: 'Import from tools',
      addExtractParameter: 'Add Extract Parameter',
      addExtractParameterContent: {
        name: 'Name',
        namePlaceholder: 'Extract Parameter Name',
        type: 'Type',
        typePlaceholder: 'Extract Parameter Type',
        description: 'Description',
        descriptionPlaceholder: 'Extract Parameter Description',
        required: 'Required',
        requiredContent: 'Required is only used as a reference for model inference, and not for mandatory validation of parameter output.',
      },
      extractParametersNotSet: 'Extract Parameters not setup',
      instruction: 'Instruction',
      instructionTip: 'Input additional instructions to help the parameter extractor understand how to extract parameters.',
      advancedSetting: 'Advanced Setting',
      reasoningMode: 'Reasoning Mode',
      reasoningModeTip: 'You can choose the appropriate reasoning mode based on the model\'s ability to respond to instructions for function calling or prompts.',
      isSuccess: 'Is Success.On success the value is 1, on failure the value is 0.',
      errorReason: 'Error Reason',
    },
    iteration: {
      deleteTitle: 'Delete Iteration Node?',
      deleteDesc: 'Deleting the iteration node will delete all child nodes',
      input: 'Input',
      output: 'Output Variables',
      iteration_one: '{{count}} Iteration',
      iteration_other: '{{count}} Iterations',
      currentIteration: 'Current Iteration',
    },
    note: {
      addNote: 'Add Note',
      editor: {
        placeholder: 'Write your note...',
        small: 'Small',
        medium: 'Medium',
        large: 'Large',
        bold: 'Bold',
        italic: 'Italic',
        strikethrough: 'Strikethrough',
        link: 'Link',
        openLink: 'Open',
        unlink: 'Unlink',
        enterUrl: 'Enter URL...',
        invalidUrl: 'Invalid URL',
        bulletList: 'Bullet List',
        showAuthor: 'Show Author',
      },
    },
  },
  tracing: {
    stopBy: 'Stop by {{user}}',
  },
}

export default translation
