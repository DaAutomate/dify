const translation = {
  common: {
    editing: 'Édition',
    autoSaved: 'Enregistré automatiquement',
    unpublished: 'Non publié',
    published: 'Publié',
    publish: 'Publier',
    update: 'Mettre à jour',
    run: 'Exécuter',
    running: 'En cours',
    inRunMode: 'En mode exécution',
    inPreview: 'En prévisualisation',
    inPreviewMode: 'En mode prévisualisation',
    preview: 'Aperçu',
    viewRunHistory: 'Voir l\'historique d\'exécution',
    runHistory: 'Historique d\'exécution',
    goBackToEdit: 'Retourner à l\'éditeur',
    conversationLog: 'Journal de conversation',
    features: 'Fonctionnalités',
    debugAndPreview: 'Déboguer et prévisualiser',
    restart: 'Redémarrer',
    currentDraft: 'Brouillon actuel',
    currentDraftUnpublished: 'Brouillon actuel non publié',
    latestPublished: 'Dernière publication',
    publishedAt: 'Publié',
    restore: 'Restaurer',
    runApp: 'Exécuter l\'application',
    batchRunApp: 'Exécuter l\'application en lot',
    accessAPIReference: 'Accéder à la référence de l\'API',
    embedIntoSite: 'Intégrer dans le site',
    addTitle: 'Ajouter un titre...',
    addDescription: 'Ajouter une description...',
    noVar: 'Aucune variable',
    searchVar: 'Rechercher une variable',
    variableNamePlaceholder: 'Nom de la variable',
    setVarValuePlaceholder: 'Définir la variable',
    needConnecttip: 'Cette étape n\'est connectée à rien',
    maxTreeDepth: 'Limite maximale de {{depth}} nœuds par branche',
    needEndNode: 'Le bloc de fin doit être ajouté',
    needAnswerNode: 'Le bloc de réponse doit être ajouté',
    workflowProcess: 'Processus de workflow',
    notRunning: 'Pas encore en cours d\'exécution',
    previewPlaceholder: 'Saisissez du contenu dans la zone ci-dessous pour commencer le débogage du Chatbot',
    effectVarConfirm: {
      title: 'Supprimer la variable',
      content: 'La variable est utilisée dans d\'autres nœuds. Voulez-vous toujours la supprimer ?',
    },
    insertVarTip: 'Appuyez sur la touche \'/\' pour insérer rapidement',
    processData: 'Traiter les données',
    input: 'Entrée',
    output: 'Sortie',
    jinjaEditorPlaceholder: 'Tapez \'/\' ou \'{\' pour insérer une variable',
    viewOnly: 'Vue Seulement',
    showRunHistory: 'Afficher l\'Historique des Exécutions',
    enableJinja: 'Activer le support des modèles Jinja',
    learnMore: 'En Savoir Plus',
    copy: 'Copier',
    duplicate: 'Dupliquer',
    addBlock: 'Ajouter un Bloc',
    pasteHere: 'Coller Ici',
    pointerMode: 'Mode Pointeur',
    handMode: 'Mode Main',
  },
  errorMsg: {
    fieldRequired: '{{field}} est requis',
    authRequired: 'L\'autorisation est requise',
    invalidJson: '{{field}} est un JSON invalide',
    fields: {
      variable: 'Nom de la variable',
      variableValue: 'Valeur de la variable',
      code: 'Code',
      model: 'Modèle',
      rerankModel: 'Modèle de retrait',
    },
    invalidVariable: 'Variable invalide',
  },
  singleRun: {
    testRun: 'Exécution de test ',
    startRun: 'Démarrer l\'exécution',
    running: 'En cours',
  },
  tabs: {
    'searchBlock': 'Rechercher un bloc',
    'blocks': 'Blocs',
    'builtInTool': 'Outil intégré',
    'customTool': 'Outil personnalisé',
    'question-understand': 'Compréhension des questions',
    'logic': 'Logique',
    'transform': 'Transformer',
    'utilities': 'Utilitaires',
    'noResult': 'Aucune correspondance trouvée',
  },
  blocks: {
    'start': 'Démarrer',
    'end': 'Fin',
    'answer': 'Réponse',
    'llm': 'LLM',
    'knowledge-retrieval': 'Récupération de connaissances',
    'question-classifier': 'Classificateur de questions',
    'if-else': 'SI/SINON',
    'code': 'Code',
    'template-transform': 'Modèle',
    'http-request': 'Requête HTTP',
    'variable-assigner': 'Assignateur de variables',
  },
  blocksAbout: {
    'start': 'Définir les paramètres initiaux pour lancer un flux de travail',
    'end': 'Définir la fin et le type de résultat d\'un flux de travail',
    'answer': 'Définir le contenu de réponse d\'une conversation',
    'llm': 'Appeler de grands modèles de langage pour répondre aux questions ou traiter le langage naturel',
    'knowledge-retrieval': 'Vous permet de interroger le contenu textuel lié aux questions des utilisateurs à partir des connaissances',
    'question-classifier': 'Définir les conditions de classification des questions des utilisateurs, LLM peut définir comment la conversation progresse en fonction de la description de la classification',
    'if-else': 'Vous permet de diviser le flux de travail en deux branches en fonction de conditions SI/SINON',
    'code': 'Exécuter un morceau de code Python ou NodeJS pour implémenter une logique personnalisée',
    'template-transform': 'Convertir des données en chaîne à l\'aide de la syntaxe du modèle Jinja',
    'http-request': 'Permet d\'envoyer des requêtes serveur via le protocole HTTP',
    'variable-assigner': 'Attribuer des variables dans différentes branches à la même variable pour obtenir une configuration unifiée des post-nœuds',
  },
  operator: {
    zoomIn: 'Zoomer',
    zoomOut: 'Dézoomer',
    zoomTo50: 'Zoom à 50%',
    zoomTo100: 'Zoom à 100%',
    zoomToFit: 'Ajuster à la fenêtre',
  },
  panel: {
    userInputField: 'Champ de saisie utilisateur',
    changeBlock: 'Changer de bloc',
    helpLink: 'Lien d\'aide',
    about: 'À propos',
    createdBy: 'Créé par ',
    nextStep: 'Étape suivante',
    addNextStep: 'Ajouter le prochain bloc dans ce flux de travail',
    selectNextStep: 'Sélectionner le bloc suivant',
    runThisStep: 'Exécuter cette étape',
    checklist: 'Liste de contrôle',
    checklistTip: 'Assurez-vous que tous les problèmes sont résolus avant de publier',
    checklistResolved: 'Tous les problèmes sont résolus',
    organizeBlocks: 'Organiser les blocs',
    change: 'Changer',
  },
  nodes: {
    common: {
      outputVars: 'Variables de sortie',
      insertVarTip: 'Insérer une variable',
      memory: {
        memory: 'Mémoire',
        memoryTip: 'Paramètres de mémoire de chat',
        windowSize: 'Taille de la fenêtre',
        conversationRoleName: 'Nom du rôle de conversation',
        user: 'Préfixe utilisateur',
        assistant: 'Préfixe assistant',
      },
      memories: {
        title: 'Mémoires',
        tip: 'Mémoire de chat',
        builtIn: 'Intégré',
      },
    },
    start: {
      required: 'requis',
      inputField: 'Champ d\'entrée',
      builtInVar: 'Variables intégrées',
      outputVars: {
        query: 'Entrée utilisateur',
        memories: {
          des: 'Historique de conversation',
          type: 'type de message',
          content: 'contenu du message',
        },
        files: 'Liste de fichiers',
      },
      noVarTip: 'Définissez les entrées pouvant être utilisées dans le flux de travail',
    },
    end: {
      outputs: 'Sorties',
      output: {
        type: 'type de sortie',
        variable: 'variable de sortie',
      },
      type: {
        'none': 'Aucun',
        'plain-text': 'Texte brut',
        'structured': 'Structuré',
      },
    },
    answer: {
      answer: 'Réponse',
      outputVars: 'Variables de sortie',
    },
    llm: {
      model: 'modèle',
      variables: 'variables',
      context: 'contexte',
      contextTooltip: 'Vous pouvez importer des connaissances comme contexte',
      notSetContextInPromptTip: 'Pour activer la fonction de contexte, veuillez remplir la variable de contexte dans PROMPT.',
      prompt: 'invite',
      roleDescription: {
        system: 'Donnez des instructions générales pour la conversation',
        user: 'Fournir des instructions, des requêtes ou toute entrée basée sur du texte au modèle',
        assistant: 'Les réponses du modèle basées sur les messages de l\'utilisateur',
      },
      addMessage: 'Ajouter un message',
      vision: 'vision',
      files: 'Fichiers',
      resolution: {
        name: 'Résolution',
        high: 'Élevée',
        low: 'Faible',
      },
      outputVars: {
        output: 'Générer du contenu',
        usage: 'Informations sur l\'utilisation du modèle',
      },
      singleRun: {
        variable: 'Variable',
      },
      sysQueryInUser: 'sys.query dans l\'entrée utilisateur',
    },
    knowledgeRetrieval: {
      queryVariable: 'Variable de requête',
      knowledge: 'Connaissances',
      outputVars: {
        output: 'Données segmentées de récupération',
        content: 'Contenu segmenté',
        title: 'Titre segmenté',
        icon: 'Icône segmentée',
        url: 'URL segmentée',
        metadata: 'Autres métadonnées',
      },
    },
    http: {
      inputVars: 'Variables d\'entrée',
      api: 'API',
      apiPlaceholder: 'Saisissez l\'URL, tapez ‘/’ pour insérer une variable',
      notStartWithHttp: 'L\'API doit commencer par http:// ou https://',
      key: 'Clé',
      value: 'Valeur',
      bulkEdit: 'Édition en masse',
      keyValueEdit: 'Édition clé-valeur',
      headers: 'En-têtes',
      params: 'Paramètres',
      body: 'Corps',
      outputVars: {
        body: 'Contenu de la réponse',
        statusCode: 'Code d\'état de la réponse',
        headers: 'Liste d\'en-têtes de réponse JSON',
        files: 'Liste de fichiers',
      },
      authorization: {
        'authorization': 'Autorisation',
        'authorizationType': 'Type d\'autorisation',
        'no-auth': 'Aucune',
        'api-key': 'Clé API',
        'auth-type': 'Type d\'authentification',
        'basic': 'De base',
        'bearer': 'Porteur',
        'custom': 'Personnalisé',
        'api-key-title': 'Clé API',
        'header': 'En-tête',
      },
      insertVarPlaceholder: 'tapez \'/\' pour insérer une variable',
      timeout: {
        title: 'Délai d\'expiration',
        connectLabel: 'Délai de connexion',
        connectPlaceholder: 'Entrez le délai de connexion en secondes',
        readLabel: 'Délai de lecture',
        readPlaceholder: 'Entrez le délai de lecture en secondes',
        writeLabel: 'Délai d\'écriture',
        writePlaceholder: 'Entrez le délai d\'écriture en secondes',
      },
    },
    code: {
      inputVars: 'Variables d\'entrée',
      outputVars: 'Variables de sortie',
      advancedDependencies: 'Dépendances Avancées',
      advancedDependenciesTip: 'Ajoutez ici des dépendances préchargées qui prennent plus de temps à consommer ou qui ne sont pas intégrées par défaut',
      searchDependencies: 'Rechercher des Dépendances',
    },
    templateTransform: {
      inputVars: 'Variables d\'entrée',
      code: 'Code',
      codeSupportTip: 'Ne prend en charge que Jinja2',
      outputVars: {
        output: 'Contenu transformé',
      },
    },
    ifElse: {
      if: 'Si',
      else: 'Sinon',
      elseDescription: 'Utilisé pour définir la logique qui doit être exécutée lorsque la condition SI n\'est pas remplie.',
      and: 'et',
      or: 'ou',
      operator: 'Opérateur',
      notSetVariable: 'Veuillez d\'abord définir la variable',
      comparisonOperator: {
        'contains': 'contient',
        'not contains': 'ne contient pas',
        'start with': 'commence par',
        'end with': 'se termine par',
        'is': 'est',
        'is not': 'n\'est pas',
        'empty': 'est vide',
        'not empty': 'n\'est pas vide',
        'null': 'est nul',
        'not null': 'n\'est pas nul',
      },
      enterValue: 'Entrer une valeur',
      addCondition: 'Ajouter une condition',
      conditionNotSetup: 'Condition NON configurée',
    },
    variableAssigner: {
      title: 'Attribuer des variables',
      outputType: 'Type de sortie',
      outputVarType: 'Type de variable de sortie',
      varNotSet: 'Variable non définie',
      noVarTip: 'Ajoutez les variables à attribuer',
      type: {
        string: 'Chaîne',
        number: 'Nombre',
        object: 'Objet',
        array: 'Tableau',
      },
      outputVars: {
        output: 'Valeur de la variable attribuée',
      },
    },
    tool: {
      toAuthorize: 'Pour autoriser',
      inputVars: 'Variables d\'entrée',
      outputVars: {
        text: 'contenu généré par l\'outil',
        files: {
          title: 'fichiers générés par l\'outil',
          type: 'Type de support. Actuellement, seul le support de l\'image est pris en charge',
          transfer_method: 'Méthode de transfert. La valeur est remote_url ou local_file',
          url: 'URL de l\'image',
          upload_file_id: 'ID du fichier téléchargé',
        },
      },
    },
    questionClassifiers: {
      model: 'modèle',
      inputVars: 'Variables d\'entrée',
      outputVars: {
        className: 'Nom de la classe',
      },
      class: 'Classe',
      classNamePlaceholder: 'Écrivez votre nom de classe',
      advancedSetting: 'Paramètre avancé',
      topicName: 'Nom du sujet',
      topicPlaceholder: 'Écrivez votre nom de sujet',
      addClass: 'Ajouter une classe',
      instruction: 'Instruction',
      instructionPlaceholder: 'Écrivez votre instruction',
    },
  },
  tracing: {
    stopBy: 'Arrêté par {{user}}',
  },
}

export default translation
