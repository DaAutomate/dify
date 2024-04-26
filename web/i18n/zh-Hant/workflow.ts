const translation = {
  common: {
    editing: '編輯中',
    autoSaved: '自動儲存',
    unpublished: '未釋出',
    published: '已釋出',
    publish: '釋出',
    update: '更新',
    run: '執行',
    running: '執行中',
    inRunMode: '在執行模式中',
    inPreview: '預覽中',
    inPreviewMode: '預覽中',
    preview: '預覽',
    viewRunHistory: '檢視執行歷史',
    runHistory: '執行歷史',
    goBackToEdit: '返回編輯模式',
    conversationLog: '對話記錄',
    features: '功能',
    debugAndPreview: '除錯和預覽',
    restart: '重新開始',
    currentDraft: '當前草稿',
    currentDraftUnpublished: '當前草稿未釋出',
    latestPublished: '最新發布',
    publishedAt: '釋出於',
    restore: '恢復',
    runApp: '執行',
    batchRunApp: '批次執行',
    accessAPIReference: '訪問 API',
    embedIntoSite: '嵌入網站',
    addTitle: '新增標題...',
    addDescription: '新增描述...',
    noVar: '沒有變數',
    variableNamePlaceholder: '變數名',
    searchVar: '搜尋變數',
    setVarValuePlaceholder: '設定變數值',
    needConnecttip: '此節點尚未連線到其他節點',
    maxTreeDepth: '每個分支最大限制 {{depth}} 個節點',
    needEndNode: '必須新增結束節點',
    needAnswerNode: '必須新增直接回復節點',
    workflowProcess: '工作流',
    notRunning: '尚未執行',
    previewPlaceholder: '在下面的框中輸入內容開始除錯聊天機器人',
    effectVarConfirm: {
      title: '移除變數',
      content: '該變數在其他節點中使用。您是否仍要刪除它？',
    },
    insertVarTip: '按 \'/\' 鍵快速插入',
    processData: '資料處理',
    input: '輸入',
    output: '輸出',
  },
  errorMsg: {
    fieldRequired: '{{field}} 不能為空',
    authRequired: '請先授權',
    invalidJson: '{{field}} 是非法的 JSON',
    fields: {
      variable: '變數名',
      variableValue: '變數值',
      code: '程式碼',
      model: '模型',
      rerankModel: 'Rerank 模型',
    },
    invalidVariable: '無效的變數',
  },
  singleRun: {
    testRun: '測試執行 ',
    startRun: '開始執行',
    running: '執行中',
  },
  tabs: {
    'searchBlock': '搜尋節點',
    'blocks': '節點',
    'builtInTool': '內建工具',
    'customTool': '自定義工具',
    'question-understand': '問題理解',
    'logic': '邏輯',
    'transform': '轉換',
    'utilities': '工具',
    'noResult': '未找到匹配項',
  },
  blocks: {
    'start': '開始',
    'end': '結束',
    'answer': '直接回復',
    'llm': 'LLM',
    'knowledge-retrieval': '知識檢索',
    'question-classifier': '問題分類器',
    'if-else': '條件分支',
    'code': '程式碼執行',
    'template-transform': '模板轉換',
    'http-request': 'HTTP 請求',
    'variable-assigner': '變數賦值',
  },
  blocksAbout: {
    'start': '定義一個 workflow 流程啟動的初始引數',
    'end': '定義一個 workflow 流程的結束和結果型別',
    'answer': '定義一個聊天對話的回覆內容',
    'llm': '呼叫大語言模型回答問題或者對自然語言進行處理',
    'knowledge-retrieval': '允許你從知識庫中查詢與使用者問題相關的文字內容',
    'question-classifier': '定義使用者問題的分類條件，LLM 能夠根據分類描述定義對話的進展方式',
    'if-else': '允許你根據 if/else 條件將 workflow 拆分成兩個分支',
    'code': '執行一段 Python 或 NodeJS 程式碼實現自定義邏輯',
    'template-transform': '使用 Jinja 模板語法將資料轉換為字串',
    'http-request': '允許透過 HTTP 協議傳送伺服器請求',
    'variable-assigner': '將不同分支中的變數指派給同一個變數，以實現後置節點統一配置',
  },
  operator: {
    zoomIn: '放大',
    zoomOut: '縮小',
    zoomTo50: '縮放到 50%',
    zoomTo100: '放大到 100%',
    zoomToFit: '自適應檢視',
  },
  panel: {
    userInputField: '使用者輸入欄位',
    changeBlock: '更改節點',
    helpLink: '幫助連結',
    about: '關於',
    createdBy: '作者',
    nextStep: '下一步',
    addNextStep: '新增此工作流程中的下一個節點',
    selectNextStep: '選擇下一個節點',
    runThisStep: '執行此步驟',
    checklist: '檢查清單',
    checklistTip: '釋出前確保所有問題均已解決',
    checklistResolved: '所有問題均已解決',
    organizeBlocks: '整理節點',
    change: '更改',
  },
  nodes: {
    common: {
      outputVars: '輸出變數',
      insertVarTip: '插入變數',
      memory: {
        memory: '記憶',
        memoryTip: '聊天記憶設定',
        windowSize: '記憶視窗',
        conversationRoleName: '對話角色名',
        user: '使用者字首',
        assistant: '助手字首',
      },
      memories: {
        title: '記憶',
        tip: '聊天記憶',
        builtIn: '內建',
      },
    },
    start: {
      required: '必填',
      inputField: '輸入欄位',
      builtInVar: '內建變數',
      outputVars: {
        query: '使用者輸入',
        memories: {
          des: '會話歷史',
          type: '訊息型別',
          content: '訊息內容',
        },
        files: '檔案列表',
      },
      noVarTip: '設定的輸入可在工作流程中使用',
    },
    end: {
      outputs: '輸出',
      output: {
        type: '輸出型別',
        variable: '輸出變數',
      },
      type: {
        'none': '無',
        'plain-text': '純文字',
        'structured': '結構化',
      },
    },
    answer: {
      answer: '回覆',
      outputVars: '輸出變數',
    },
    llm: {
      model: '模型',
      variables: '變數',
      context: '上下文',
      contextTooltip: '您可以匯入知識庫作為上下文',
      notSetContextInPromptTip: '要啟用上下文功能，請在提示中填寫上下文變數。',
      prompt: '提示詞',
      addMessage: '新增訊息',
      roleDescription: {
        system: '為對話提供高層指導',
        user: '向模型提供指令、查詢或任何基於文字的輸入',
        assistant: '基於使用者訊息的模型回覆',
      },
      vision: '視覺',
      files: '檔案',
      resolution: {
        name: '解析度',
        high: '高',
        low: '低',
      },
      outputVars: {
        output: '生成內容',
        usage: '模型用量資訊',
      },
      singleRun: {
        variable: '變數',
      },
      sysQueryInUser: 'user message 中必須包含 sys.query',
    },
    knowledgeRetrieval: {
      queryVariable: '查詢變數',
      knowledge: '知識庫',
      outputVars: {
        output: '召回的分段',
        content: '分段內容',
        title: '分段標題',
        icon: '分段圖示',
        url: '分段連結',
        metadata: '其他元資料',
      },
    },
    http: {
      inputVars: '輸入變數',
      api: 'API',
      apiPlaceholder: '輸入 URL，輸入變數時請鍵入‘/’',
      notStartWithHttp: 'API 應該以 http:// 或 https:// 開頭',
      key: '鍵',
      value: '值',
      bulkEdit: '批次編輯',
      keyValueEdit: '鍵值編輯',
      headers: 'Headers',
      params: 'Params',
      body: 'Body',
      outputVars: {
        body: '響應內容',
        statusCode: '響應狀態碼',
        headers: '響應頭列表 JSON',
        files: '檔案列表',
      },
      authorization: {
        'authorization': '鑑權',
        'authorizationType': '鑑權型別',
        'no-auth': '無',
        'api-key': 'API-Key',
        'auth-type': 'API 鑑權型別',
        'basic': '基礎',
        'bearer': 'Bearer',
        'custom': '自定義',
        'api-key-title': 'API Key',
        'header': 'Header',
      },
      insertVarPlaceholder: '鍵入 \'/\' 鍵快速插入變數',
    },
    code: {
      inputVars: '輸入變數',
      outputVars: '輸出變數',
    },
    templateTransform: {
      inputVars: '輸入變數',
      code: '程式碼',
      codeSupportTip: '只支援 Jinja2',
      outputVars: {
        output: '轉換後內容',
      },
    },
    ifElse: {
      if: 'If',
      else: 'Else',
      elseDescription: '用於定義當 if 條件不滿足時應執行的邏輯。',
      and: 'and',
      or: 'or',
      operator: '運算子',
      notSetVariable: '請先設定變數',
      comparisonOperator: {
        'contains': '包含',
        'not contains': '不包含',
        'start with': '開始是',
        'end with': '結束是',
        'is': '是',
        'is not': '不是',
        'empty': '為空',
        'not empty': '不為空',
        'null': '空',
        'not null': '不為空',
      },
      enterValue: '輸入值',
      addCondition: '新增條件',
      conditionNotSetup: '條件未設定',
    },
    variableAssigner: {
      title: '變數賦值',
      outputType: '輸出型別',
      outputVarType: '輸出變數型別',
      varNotSet: '未設定變數',
      noVarTip: '新增需要賦值的變數',
      type: {
        string: 'String',
        number: 'Number',
        object: 'Object',
        array: 'Array',
      },
      outputVars: {
        output: '指派的變數值',
      },
    },
    tool: {
      toAuthorize: '授權',
      inputVars: '輸入變數',
      outputVars: {
        text: '工具生成的內容',
        files: {
          title: '工具生成的檔案',
          type: '支援型別。現在只支援圖片',
          transfer_method: '傳輸方式。值為 remote_url 或 local_file',
          url: '圖片連結',
          upload_file_id: '上傳檔案ID',
        },
      },
    },
    questionClassifiers: {
      model: '模型',
      inputVars: '輸入變數',
      class: '分類',
      classNamePlaceholder: '輸入你的分類名稱',
      advancedSetting: '高階設定',
      topicName: '主題內容',
      topicPlaceholder: '在這裡輸入你的主題內容',
      addClass: '新增分類',
      instruction: '指令',
      instructionPlaceholder: '在這裡輸入你的指令',
    },
  },
  tracing: {
    stopBy: '由{{user}}終止',
  },
}

export default translation
