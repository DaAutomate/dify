const translation = {
  steps: {
    header: {
      creation: 'Crea Conoscenza',
      update: 'Aggiungi dati',
    },
    one: 'Scegli fonte dati',
    two: 'Preprocessamento e Pulizia del Testo',
    three: 'Esegui e termina',
  },
  error: {
    unavailable: 'Questa Conoscenza non è disponibile',
  },
  firecrawl: {
    configFirecrawl: 'Configura 🔥Firecrawl',
    apiKeyPlaceholder: 'Chiave API da firecrawl.dev',
    getApiKeyLinkText: 'Ottieni la tua chiave API da firecrawl.dev',
  },
  stepOne: {
    filePreview: 'Anteprima del File',
    pagePreview: 'Anteprima della Pagina',
    dataSourceType: {
      file: 'Importa da file',
      notion: 'Sincronizza da Notion',
      web: 'Sincronizza da sito web',
    },
    uploader: {
      title: 'Carica file',
      button: 'Trascina e rilascia il file, o',
      browse: 'Sfoglia',
      tip: 'Supporta {{supportTypes}}. Max {{size}}MB ciascuno.',
      validation: {
        typeError: 'Tipo di file non supportato',
        size: 'File troppo grande. Il massimo è {{size}}MB',
        count: 'Più file non supportati',
        filesNumber:
          'Hai raggiunto il limite di caricamento batch di {{filesNumber}}.',
      },
      cancel: 'Annulla',
      change: 'Cambia',
      failed: 'Caricamento fallito',
    },
    notionSyncTitle: 'Notion non è connesso',
    notionSyncTip:
      'Per sincronizzare con Notion, deve essere stabilita prima la connessione a Notion.',
    connect: 'Vai a connettere',
    button: 'Avanti',
    emptyDatasetCreation: 'Voglio creare una Conoscenza vuota',
    modal: {
      title: 'Crea una Conoscenza vuota',
      tip: 'Una Conoscenza vuota non conterrà documenti, e potrai caricare documenti in qualsiasi momento.',
      input: 'Nome della Conoscenza',
      placeholder: 'Per favore inserisci',
      nameNotEmpty: 'Il nome non può essere vuoto',
      nameLengthInvaild: 'Il nome deve essere tra 1 e 40 caratteri',
      cancelButton: 'Annulla',
      confirmButton: 'Crea',
      failed: 'Creazione fallita',
    },
    website: {
      fireCrawlNotConfigured: 'Firecrawl non è configurato',
      fireCrawlNotConfiguredDescription:
        'Configura Firecrawl con la chiave API per usarlo.',
      configure: 'Configura',
      run: 'Esegui',
      firecrawlTitle: 'Estrai contenuti web con 🔥Firecrawl',
      firecrawlDoc: 'Documenti Firecrawl',
      firecrawlDocLink:
        'https://docs.dify.ai/guides/knowledge-base/sync_from_website',
      options: 'Opzioni',
      crawlSubPage: 'Crawl sotto-pagine',
      limit: 'Limite',
      maxDepth: 'Profondità massima',
      excludePaths: 'Escludi percorsi',
      includeOnlyPaths: 'Includi solo percorsi',
      extractOnlyMainContent:
        'Estrai solo il contenuto principale (senza intestazioni, nav, piè di pagina, ecc.)',
      exceptionErrorTitle:
        'Si è verificata un\'eccezione durante l\'esecuzione del lavoro Firecrawl:',
      unknownError: 'Errore sconosciuto',
      totalPageScraped: 'Pagine totali estratte:',
      selectAll: 'Seleziona tutto',
      resetAll: 'Reimposta tutto',
      scrapTimeInfo: 'Estratte {{total}} pagine in totale in {{time}}s',
      preview: 'Anteprima',
      maxDepthTooltip:
        'Profondità massima da eseguire rispetto all\'URL inserito. La profondità 0 estrae solo la pagina dell\'URL inserito, la profondità 1 estrae l\'URL e tutto ciò che segue l\'URL inserito + uno /, e così via.',
    },
  },
  stepTwo: {
    segmentation: 'Impostazioni dei blocchi',
    auto: 'Automatico',
    autoDescription:
      'Imposta automaticamente le regole dei blocchi e del preprocessamento. Gli utenti non familiari sono consigliati di selezionare questo.',
    custom: 'Personalizzato',
    customDescription:
      'Personalizza le regole dei blocchi, la lunghezza dei blocchi e le regole di preprocessamento, ecc.',
    separator: 'Identificatore di segmento',
    separatorPlaceholder:
      'Ad esempio, nuova linea (\\\\n) o separatore speciale (come `***`)',
    maxLength: 'Lunghezza massima del blocco',
    overlap: 'Sovrapposizione del blocco',
    overlapTip:
      'Impostare la sovrapposizione del blocco può mantenere la rilevanza semantica tra di loro, migliorando l\'effetto di recupero. Si consiglia di impostare il 10%-25% della dimensione massima del blocco.',
    overlapCheck:
      'la sovrapposizione del blocco non dovrebbe essere maggiore della lunghezza massima del blocco',
    rules: 'Regole di preprocessamento del testo',
    removeExtraSpaces: 'Sostituisci spazi, nuove linee e tab consecutivi',
    removeUrlEmails: 'Elimina tutti gli URL e gli indirizzi email',
    removeStopwords: 'Rimuovi parole vuote come `a`, `an`, `the`',
    preview: 'Conferma & Anteprima',
    reset: 'Reimposta',
    indexMode: 'Modalità indice',
    qualified: 'Alta Qualità',
    recommend: 'Consigliato',
    qualifiedTip:
      'Chiama l\'interfaccia di embedding di sistema predefinita per l\'elaborazione per fornire maggiore accuratezza quando gli utenti fanno query.',
    warning:
      'Per favore configura prima la chiave API del fornitore del modello.',
    click: 'Vai alle impostazioni',
    economical: 'Economico',
    economicalTip:
      'Usa motori vettoriali offline, indici di parole chiave, ecc. per ridurre l\'accuratezza senza spendere token',
    QATitle: 'Segmentazione in formato Domanda & Risposta',
    QATip: 'Abilitare questa opzione consumerà più token',
    QALanguage: 'Segmenta usando',
    emstimateCost: 'Stima',
    emstimateSegment: 'Blocchi stimati',
    segmentCount: 'blocchi',
    calculating: 'Calcolo in corso...',
    fileSource: 'Preprocessa documenti',
    notionSource: 'Preprocessa pagine',
    websiteSource: 'Preprocessa sito web',
    other: 'e altri ',
    fileUnit: ' file',
    notionUnit: ' pagine',
    webpageUnit: ' pagine',
    previousStep: 'Passo precedente',
    nextStep: 'Salva & Elabora',
    save: 'Salva & Elabora',
    cancel: 'Annulla',
    sideTipTitle: 'Perché segmentare e preprocessare?',
    sideTipP1:
      'Quando si elabora dati testuali, la segmentazione e la pulizia sono due passaggi di preprocessamento importanti.',
    sideTipP2:
      'La segmentazione divide il testo lungo in paragrafi così i modelli possono comprendere meglio. Questo migliora la qualità e la rilevanza dei risultati del modello.',
    sideTipP3:
      'La pulizia rimuove caratteri e formati non necessari, rendendo la Conoscenza più pulita e facile da analizzare.',
    sideTipP4:
      'Una corretta segmentazione e pulizia migliorano le prestazioni del modello, fornendo risultati più accurati e preziosi.',
    previewTitle: 'Anteprima',
    previewTitleButton: 'Anteprima',
    previewButton: 'Passaggio al formato Domanda & Risposta',
    previewSwitchTipStart:
      'L\'anteprima del blocco corrente è in formato testo, il passaggio a un\'anteprima in formato domanda e risposta',
    previewSwitchTipEnd: ' consumerà token aggiuntivi',
    characters: 'caratteri',
    indexSettedTip: 'Per cambiare il metodo di indicizzazione, vai alle ',
    retrivalSettedTip: 'Per cambiare il metodo di indicizzazione, vai alle ',
    datasetSettingLink: 'impostazioni della Conoscenza.',
  },
  stepThree: {
    creationTitle: '🎉 Conoscenza creata',
    creationContent:
      'Abbiamo automaticamente nominato la Conoscenza, puoi modificarla in qualsiasi momento',
    label: 'Nome della Conoscenza',
    additionTitle: '🎉 Documento caricato',
    additionP1: 'Il documento è stato caricato nella Conoscenza',
    additionP2: ', puoi trovarlo nella lista dei documenti della Conoscenza.',
    stop: 'Ferma l\'elaborazione',
    resume: 'Riprendi l\'elaborazione',
    navTo: 'Vai al documento',
    sideTipTitle: 'Cosa succede dopo',
    sideTipContent:
      'Dopo che il documento ha terminato l\'indicizzazione, la Conoscenza può essere integrata nell\'applicazione come contesto, puoi trovare l\'impostazione del contesto nella pagina di orchestrazione del prompt. Puoi anche crearla come un plugin di indicizzazione indipendente di ChatGPT per la pubblicazione.',
    modelTitle: 'Sei sicuro di fermare l\'embedding?',
    modelContent:
      'Se hai bisogno di riprendere l\'elaborazione in seguito, continuerai da dove hai interrotto.',
    modelButtonConfirm: 'Conferma',
    modelButtonCancel: 'Annulla',
  },
}

export default translation
