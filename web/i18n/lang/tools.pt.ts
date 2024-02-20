const translation = {
  title: 'Ferramentas',
  createCustomTool: 'Criar Ferramenta Personalizada',
  type: {
    all: 'Todas',
    builtIn: 'Integradas',
    custom: 'Personal...',
  },
  contribute: {
    line1: 'Estou interessado em ',
    line2: 'contribuir com ferramentas para o Dify.',
    viewGuide: 'Ver o guia',
  },
  author: 'Por',
  auth: {
    unauthorized: 'Não autorizado',
    authorized: 'Autorizado',
    setup: 'Configurar autorização para usar',
    setupModalTitle: 'Configurar Autorização',
    setupModalTitleDescription: 'Após configurar as credenciais, todos os membros do espaço de trabalho podem usar essa ferramenta ao orquestrar aplicativos.',
  },
  includeToolNum: '{{num}} ferramentas incluídas',
  addTool: 'Adicionar Ferramenta',
  createTool: {
    title: 'Criar Ferramenta Personalizada',
    editAction: 'Configurar',
    editTitle: 'Editar Ferramenta Personalizada',
    name: 'Nome',
    toolNamePlaceHolder: 'Digite o nome da ferramenta',
    schema: 'Esquema',
    schemaPlaceHolder: 'Digite seu esquema OpenAPI aqui',
    viewSchemaSpec: 'Ver a Especificação OpenAPI-Swagger',
    importFromUrl: 'Importar de URL',
    importFromUrlPlaceHolder: 'https://...',
    urlError: 'Digite uma URL válida',
    examples: 'Exemplos',
    exampleOptions: {
      json: 'Clima (JSON)',
      yaml: 'Pet Store (YAML)',
      blankTemplate: 'Modelo em Branco',
    },
    availableTools: {
      title: 'Ferramentas Disponíveis',
      name: 'Nome',
      description: 'Descrição',
      method: 'Método',
      path: 'Caminho',
      action: 'Ações',
      test: 'Testar',
    },
    authMethod: {
      title: 'Método de Autorização',
      type: 'Tipo de Autorização',
      types: {
        none: 'Nenhum',
        api_key: 'Chave de API',
      },
      key: 'Chave',
      value: 'Valor',
    },
    privacyPolicy: 'Política de Privacidade',
    privacyPolicyPlaceholder: 'Digite a política de privacidade',
  },
  test: {
    title: 'Testar',
    parametersValue: 'Parâmetros e Valor',
    parameters: 'Parâmetros',
    value: 'Valor',
    testResult: 'Resultados do Teste',
    testResultPlaceholder: 'O resultado do teste será exibido aqui',
  },
  thought: {
    using: 'Usando',
    used: 'Usado',
    requestTitle: 'Requisição para',
    responseTitle: 'Resposta de',
  },
  setBuiltInTools: {
    info: 'Informações',
    setting: 'Configuração',
    toolDescription: 'Descrição da Ferramenta',
    parameters: 'parâmetros',
    string: 'string',
    number: 'número',
    required: 'Obrigatório',
    infoAndSetting: 'Informações e Configurações',
  },
  noCustomTool: {
    title: 'Nenhuma ferramenta personalizada!',
    content: 'Você não possui ferramentas personalizadas. ',
    createTool: 'Criar Ferramenta',
  },
  noSearchRes: {
    title: 'Desculpe, sem resultados!',
    content: 'Não encontramos nenhuma ferramenta que corresponda à sua pesquisa.',
    reset: 'Redefinir Pesquisa',
  },
  builtInPromptTitle: 'Prompt',
  toolRemoved: 'Ferramenta removida',
  howToGet: 'Como conseguir',
}

export default translation
