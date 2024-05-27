const translation = {
  common: {
    editing: '編集中',
    autoSaved: '自動保存済み',
    unpublished: '未公開',
    published: '公開済み',
    publish: '公開する',
    update: '更新',
    run: '実行',
    running: '実行中',
    inRunMode: '実行モード中',
    inPreview: 'プレビュー中',
    inPreviewMode: 'プレビューモード中',
    preview: 'プレビュー',
    viewRunHistory: '実行履歴を表示',
    runHistory: '実行履歴',
    goBackToEdit: '編集に戻る',
    conversationLog: '会話ログ',
    features: '機能',
    debugAndPreview: 'デバッグとプレビュー',
    restart: '再起動',
    currentDraft: '現在の下書き',
    currentDraftUnpublished: '現在の下書き（未公開）',
    latestPublished: '最新の公開済み',
    publishedAt: '公開日時',
    restore: '復元',
    runApp: 'アプリを実行',
    batchRunApp: 'バッチでアプリを実行',
    accessAPIReference: 'APIリファレンスにアクセス',
    embedIntoSite: 'サイトに埋め込む',
    addTitle: 'タイトルを追加...',
    addDescription: '説明を追加...',
    noVar: '変数なし',
    searchVar: '変数を検索',
    variableNamePlaceholder: '変数名',
    setVarValuePlaceholder: '変数を設定',
    needConnecttip: 'このステップは何にも接続されていません',
    maxTreeDepth: 'ブランチごとの最大制限は{{depth}}ノードです',
    needEndNode: '終了ブロックを追加する必要があります',
    needAnswerNode: '回答ブロックを追加する必要があります',
    workflowProcess: 'ワークフロー処理',
    notRunning: 'まだ実行されていません',
    previewPlaceholder: 'チャットボットのデバッグを開始するには、以下のボックスにコンテンツを入力してください',
    effectVarConfirm: {
      title: '変数を削除',
      content: '他のノードで変数が使用されています。それでも削除しますか？',
    },
    insertVarTip: 'クイック挿入のために\'/\'キーを押します',
    processData: 'データ処理',
    input: '入力',
    output: '出力',
    jinjaEditorPlaceholder: '変数を挿入するには「/」または「{」を入力してください',
    viewOnly: '表示のみ',
    showRunHistory: '実行履歴を表示',
    enableJinja: 'Jinjaテンプレートのサポートを有効にする',
    learnMore: '詳細を学ぶ',
    copy: 'コピー',
    duplicate: '複製',
    addBlock: 'ブロックを追加',
    pasteHere: 'ここに貼り付け',
    pointerMode: 'ポインターモード',
    handMode: 'ハンドモード',
  },
  errorMsg: {
    fieldRequired: '{{field}}は必須です',
    authRequired: '認証が必要です',
    invalidJson: '{{field}}は無効です',
    fields: {
      variable: '変数名',
      variableValue: '変数値',
      code: 'コード',
      model: 'モデル',
      rerankModel: '再ランクモデル',
    },
    invalidVariable: '無効な変数',
  },
  singleRun: {
    testRun: 'テスト実行',
    startRun: '実行を開始',
    running: '実行中',
  },
  tabs: {
    'searchBlock': 'ブロックを検索',
    'blocks': 'ブロック',
    'builtInTool': '組み込みツール',
    'customTool': 'カスタムツール',
    'question-understand': '質問の理解',
    'logic': 'ロジック',
    'transform': '変換',
    'utilities': 'ユーティリティ',
    'noResult': '一致するものが見つかりませんでした',
  },
  blocks: {
    'start': '開始',
    'end': '終了',
    'answer': '回答',
    'llm': 'LLM',
    'knowledge-retrieval': '知識取得',
    'question-classifier': '質問分類器',
    'if-else': 'IF/ELSE',
    'code': 'コード',
    'template-transform': 'テンプレート',
    'http-request': 'HTTPリクエスト',
    'variable-assigner': '変数割り当て',
  },
  blocksAbout: {
    'start': 'ワークフローの開始に必要なパラメータを定義します',
    'end': 'ワークフローの終了と結果のタイプを定義します',
    'answer': 'チャット会話の応答内容を定義します',
    'llm': '大規模言語モデルを呼び出して質問に回答したり、自然言語を処理したりします',
    'knowledge-retrieval': 'ユーザーの質問に関連するテキストコンテンツを知識からクエリできるようにします',
    'question-classifier': 'ユーザーの質問の分類条件を定義し、LLMは分類記述に基づいて会話がどのように進行するかを定義できます',
    'if-else': 'IF/ELSE条件に基づいてワークフローを2つのブランチに分割できます',
    'code': 'カスタムロジックを実装するためにPythonまたはNodeJSコードを実行します',
    'template-transform': 'Jinjaテンプレート構文を使用してデータを文字列に変換します',
    'http-request': 'HTTPプロトコル経由でサーバーリクエストを送信できます',
    'variable-assigner': '異なるブランチで同じ変数に変数を割り当てて、後続のノードの一元化された構成を実現できます',
  },
  operator: {
    zoomIn: '拡大',
    zoomOut: '縮小',
    zoomTo50: '50％にズーム',
    zoomTo100: '100％にズーム',
    zoomToFit: 'フィットにズーム',
  },
  panel: {
    userInputField: 'ユーザー入力フィールド',
    changeBlock: 'ブロックを変更',
    helpLink: 'ヘルプリンク',
    about: '情報',
    createdBy: '作成者 ',
    nextStep: '次のステップ',
    addNextStep: 'このワークフローで次のブロックを追加',
    selectNextStep: '次のブロックを選択',
    runThisStep: 'このステップを実行',
    checklist: 'チェックリスト',
    checklistTip: '公開する前にすべての問題が解決されていることを確認してください',
    checklistResolved: 'すべての問題が解決されました',
    organizeBlocks: 'ブロックを整理',
    change: '変更',
  },
  nodes: {
    common: {
      outputVars: '出力変数',
      insertVarTip: '変数を挿入',
      memory: {
        memory: 'メモリ',
        memoryTip: 'チャットメモリ設定',
        windowSize: 'ウィンドウサイズ',
        conversationRoleName: '会話ロール名',
        user: 'ユーザー接頭辞',
        assistant: 'アシスタント接頭辞',
      },
      memories: {
        title: 'メモリ',
        tip: 'チャットメモリ',
        builtIn: '組み込み',
      },
    },
    start: {
      required: '必須',
      inputField: '入力フィールド',
      builtInVar: '組み込み変数',
      outputVars: {
        query: 'ユーザー入力',
        memories: {
          des: '会話履歴',
          type: 'メッセージタイプ',
          content: 'メッセージ内容',
        },
        files: 'ファイルリスト',
      },
      noVarTip: 'ワークフローで使用できる入力を設定します',
    },
    end: {
      outputs: '出力',
      output: {
        type: '出力タイプ',
        variable: '出力変数',
      },
      type: {
        'none': 'なし',
        'plain-text': 'プレーンテキスト',
        'structured': '構造化',
      },
    },
    answer: {
      answer: '回答',
      outputVars: '出力変数',
    },
    llm: {
      model: 'モデル',
      variables: '変数',
      context: 'コンテキスト',
      contextTooltip: 'コンテキストとして知識をインポートできます',
      notSetContextInPromptTip: 'コンテキスト機能を有効にするには、PROMPTにコンテキスト変数を記入してください。',
      prompt: 'プロンプト',
      roleDescription: {
        system: '会話の高レベルな命令を与えます',
        user: 'モデルへの指示、クエリ、またはテキストベースの入力を提供します',
        assistant: 'ユーザーメッセージに基づいてモデルの応答',
      },
      addMessage: 'メッセージを追加',
      vision: 'ビジョン',
      files: 'ファイル',
      resolution: {
        name: '解像度',
        high: '高い',
        low: '低い',
      },
      outputVars: {
        output: 'コンテンツを生成',
        usage: 'モデルの使用情報',
      },
      singleRun: {
        variable: '変数',
      },
      sysQueryInUser: 'ユーザーメッセージにsys.queryが必要です',
    },
    knowledgeRetrieval: {
      queryVariable: 'クエリ変数',
      knowledge: '知識',
      outputVars: {
        output: '検索されたセグメント化されたデータ',
        content: 'セグメント化されたコンテンツ',
        title: 'セグメント化されたタイトル',
        icon: 'セグメント化されたアイコン',
        url: 'セグメント化されたURL',
        metadata: 'その他のメタデータ',
      },
    },
    http: {
      inputVars: '入力変数',
      api: 'API',
      apiPlaceholder: 'URLを入力、「/」を入力して変数を挿入',
      notStartWithHttp: 'APIはhttp://またはhttps://で始まる必要があります',
      key: 'キー',
      value: '値',
      bulkEdit: '一括編集',
      keyValueEdit: 'キー-値の編集',
      headers: 'ヘッダー',
      params: 'パラメータ',
      body: 'ボディ',
      outputVars: {
        body: 'レスポンスコンテンツ',
        statusCode: 'レスポンスステータスコード',
        headers: 'レスポンスヘッダーリストJSON',
        files: 'ファイルリスト',
      },
      authorization: {
        'authorization': '認証',
        'authorizationType': '認証タイプ',
        'no-auth': 'なし',
        'api-key': 'APIキー',
        'auth-type': '認証タイプ',
        'basic': '基本',
        'bearer': 'Bearer',
        'custom': 'カスタム',
        'api-key-title': 'APIキー',
        'header': 'ヘッダー',
      },
      insertVarPlaceholder: '変数を挿入するには\'/\'を入力してください',
      timeout: {
        title: 'タイムアウト',
        connectLabel: '接続タイムアウト',
        connectPlaceholder: '接続タイムアウトを秒で入力',
        readLabel: '読み取りタイムアウト',
        readPlaceholder: '読み取りタイムアウトを秒で入力',
        writeLabel: '書き込みタイムアウト',
        writePlaceholder: '書き込みタイムアウトを秒で入力',
      },
    },
    code: {
      inputVars: '入力変数',
      outputVars: '出力変数',
      advancedDependencies: '高度な依存関係',
      advancedDependenciesTip: '消費に時間がかかる、またはデフォルトで組み込まれていない事前ロードされた依存関係を追加します',
      searchDependencies: '依存関係を検索',
    },
    templateTransform: {
      inputVars: '入力変数',
      code: 'コード',
      codeSupportTip: 'Jinja2のみをサポートしています',
      outputVars: {
        output: '変換されたコンテンツ',
      },
    },
    ifElse: {
      if: 'もし',
      else: 'それ以外',
      elseDescription: 'IF条件が満たされない場合に実行するロジックを定義します。',
      and: 'かつ',
      or: 'または',
      operator: '演算子',
      notSetVariable: 'まず変数を設定してください',
      comparisonOperator: {
        'contains': '含む',
        'not contains': '含まない',
        'start with': 'で始まる',
        'end with': 'で終わる',
        'is': 'である',
        'is not': 'でない',
        'empty': '空',
        'not empty': '空でない',
        'null': 'null',
        'not null': 'nullでない',
      },
      enterValue: '値を入力',
      addCondition: '条件を追加',
      conditionNotSetup: '条件が設定されていません',
    },
    variableAssigner: {
      title: '変数を割り当てる',
      outputType: '出力タイプ',
      outputVarType: '出力変数のタイプ',
      varNotSet: '変数が設定されていません',
      noVarTip: '割り当てる変数を追加してください',
      type: {
        string: '文字列',
        number: '数値',
        object: 'オブジェクト',
        array: '配列',
      },
      outputVars: {
        output: '割り当てられた変数の値',
      },
    },
    tool: {
      toAuthorize: '承認するには',
      inputVars: '入力変数',
      outputVars: {
        text: 'ツールが生成したコンテンツ',
        files: {
          title: 'ツールが生成したファイル',
          type: 'サポートタイプ。現在は画像のみサポートされています',
          transfer_method: '転送方法。値はremote_urlまたはlocal_fileです',
          url: '画像URL',
          upload_file_id: 'アップロードファイルID',
        },
      },
    },
    questionClassifiers: {
      model: 'モデル',
      inputVars: '入力変数',
      outputVars: {
        className: 'クラス名',
      },
      class: 'クラス',
      classNamePlaceholder: 'クラス名を入力してください',
      advancedSetting: '高度な設定',
      topicName: 'トピック名',
      topicPlaceholder: 'トピック名を入力してください',
      addClass: 'クラスを追加',
      instruction: '指示',
      instructionPlaceholder: '指示を入力してください',
    },
  },
  tracing: {
    stopBy: '{{user}}によって停止',
  },
}

export default translation
