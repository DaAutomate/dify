const translation = {
  title: 'Anotaciones',
  name: 'Respuesta de Anotación',
  editBy: 'Respuesta editada por {{author}}',
  noData: {
    title: 'Sin anotaciones',
    description: 'Puedes editar anotaciones durante la depuración de la aplicación o importar anotaciones en masa aquí para obtener una respuesta de alta calidad.',
  },
  table: {
    header: {
      question: 'pregunta',
      answer: 'respuesta',
      createdAt: 'creado el',
      hits: 'aciertos',
      actions: 'acciones',
      addAnnotation: 'Agregar Anotación',
      bulkImport: 'Importar en Masa',
      bulkExport: 'Exportar en Masa',
      clearAll: 'Borrar Todas las Anotaciones',
    },
  },
  editModal: {
    title: 'Editar Respuesta de Anotación',
    queryName: 'Consulta del Usuario',
    answerName: 'Bot Narrador',
    yourAnswer: 'Tu Respuesta',
    answerPlaceholder: 'Escribe tu respuesta aquí',
    yourQuery: 'Tu Consulta',
    queryPlaceholder: 'Escribe tu consulta aquí',
    removeThisCache: 'Eliminar esta Anotación',
    createdAt: 'Creado el',
  },
  addModal: {
    title: 'Agregar Respuesta de Anotación',
    queryName: 'Pregunta',
    answerName: 'Respuesta',
    answerPlaceholder: 'Escribe la respuesta aquí',
    queryPlaceholder: 'Escribe la pregunta aquí',
    createNext: 'Agregar otra respuesta anotada',
  },
  batchModal: {
    title: 'Importación en Masa',
    csvUploadTitle: 'Arrastra y suelta tu archivo CSV aquí, o ',
    browse: 'navega',
    tip: 'El archivo CSV debe cumplir con la siguiente estructura:',
    question: 'pregunta',
    answer: 'respuesta',
    contentTitle: 'contenido del fragmento',
    content: 'contenido',
    template: 'Descarga la plantilla aquí',
    cancel: 'Cancelar',
    run: 'Ejecutar Lote',
    runError: 'Error al ejecutar el lote',
    processing: 'En proceso de lote',
    completed: 'Importación completada',
    error: 'Error de importación',
    ok: 'OK',
  },
  errorMessage: {
    answerRequired: 'Se requiere una respuesta',
    queryRequired: 'Se requiere una pregunta',
  },
  viewModal: {
    annotatedResponse: 'Respuesta de Anotación',
    hitHistory: 'Historial de Aciertos',
    hit: 'Acierto',
    hits: 'Aciertos',
    noHitHistory: 'Sin historial de aciertos',
  },
  hitHistoryTable: {
    query: 'Consulta',
    match: 'Coincidencia',
    response: 'Respuesta',
    source: 'Fuente',
    score: 'Puntuación',
    time: 'Tiempo',
  },
  initSetup: {
    title: 'Configuración Inicial de Respuesta de Anotación',
    configTitle: 'Configuración de Respuesta de Anotación',
    confirmBtn: 'Guardar y Habilitar',
    configConfirmBtn: 'Guardar',
  },
  embeddingModelSwitchTip: 'Modelo de vectorización de texto de anotación, cambiar de modelo volverá a incrustar, lo que resultará en costos adicionales.',
}

export default translation
