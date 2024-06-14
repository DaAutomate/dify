const translation = {
  pageTitle: {
    line1: "प्रॉम्प्ट",
    line2: "इंजीनियरिंग",
  },
  orchestrate: "व्यवस्थित करना",
  promptMode: {
    simple:
      "संपूर्ण प्रॉम्प्ट को संपादित करने के लिए एक्सपर्ट मोड में स्विच करें",
    advanced: "विशेषज्ञ मोड",
    switchBack: "वापस स्विच करें",
    advancedWarning: {
      title:
        "आपने विशेषज्ञ मोड में स्विच किया है, और एक बार जब आप प्रॉम्प्ट को संशोधित करते हैं, तो आप बेसिक मोड पर वापस नहीं जा सकते हैं।",
      description:
        "विशेषज्ञ मोड में, आप संपूर्ण प्रॉम्प्ट को संपादित कर सकते हैं।",
      learnMore: "और अधिक जानें",
      ok: "ठीक है",
    },
    operation: {
      addMessage: "संदेश जोड़ें",
    },
    contextMissing:
      "प्रसंग घटक गायब है, प्रॉम्प्ट की प्रभावशीलता अच्छी नहीं हो सकती है।",
  },
  operation: {
    applyConfig: "प्रकाशित करें",
    resetConfig: "रीसेट करें",
    debugConfig: "डीबग करें",
    addFeature: "विशेषता जोड़ें",
    automatic: "स्वचालित",
    stopResponding: "प्रतिक्रिया देना बंद करें",
    agree: "पसंद",
    disagree: "नापसंद",
    cancelAgree: "पसंद रद्द करें",
    cancelDisagree: "नापसंद रद्द करें",
    userAction: "उपयोगकर्ता ",
  },
  notSetAPIKey: {
    title: "एलएलएम प्रदाता कुंजी सेट नहीं की गई है",
    trailFinished: "परीक्षण समाप्त",
    description:
      "एलएलएम प्रदाता कुंजी सेट नहीं की गई है, और डीबग करने से पहले इसे सेट करने की आवश्यकता है।",
    settingBtn: "सेटिंग्स पर जाएं",
  },
  trailUseGPT4Info: {
    title: "अभी GPT-4 का समर्थन नहीं करता",
    description: "GPT-4 का उपयोग करने के लिए, कृपया API कुंजी सेट करें।",
  },
  feature: {
    groupChat: {
      title: "चैट संवर्धन",
      description:
        "ऐप्स के लिए पूर्व-संवाद सेटिंग्स जोड़ने से उपयोगकर्ता अनुभव को बढ़ाया जा सकता है।",
    },
    groupExperience: {
      title: "अनुभव संवर्धन",
    },
    conversationOpener: {
      title: "संवाद शुरू करने वाले",
      description:
        "एक चैट ऐप में, एआई द्वारा उपयोगकर्ता से सक्रिय रूप से बोले जाने वाला पहला वाक्य आमतौर पर एक स्वागत के रूप में उपयोग किया जाता है।",
    },
    suggestedQuestionsAfterAnswer: {
      title: "फॉलो-अप",
      description:
        "अगले प्रश्न सुझाव सेट करना उपयोगकर्ताओं को बेहतर चैट दे सकता है।",
      resDes: "उपयोगकर्ता के अगले प्रश्न के लिए 3 सुझाव।",
      tryToAsk: "पूछने का प्रयास करें",
    },
    moreLikeThis: {
      title: "ऐसा और",
      description:
        "एक बार में कई पाठ उत्पन्न करें, और फिर संपादित करें और जारी रखें",
      generateNumTip: "प्रत्येक उत्पन्न समय की संख्या",
      tip: "इस सुविधा का उपयोग करने से अतिरिक्त टोकन खर्च होगा",
    },
    speechToText: {
      title: "वाक् से पाठ",
      description: "सक्रिय होने पर, आप वॉयस इनपुट का उपयोग कर सकते हैं।",
      resDes: "वॉयस इनपुट सक्रिय है",
    },
    textToSpeech: {
      title: "पाठ से वाक्",
      description: "सक्रिय होने पर, पाठ को वाक् में परिवर्तित किया जा सकता है।",
      resDes: "पाठ से ऑडियो सक्रिय है",
    },
    citation: {
      title: "उद्धरण और संदर्भ",
      description:
        "सक्रिय होने पर, उत्पन्न सामग्री के स्रोत दस्तावेज़ और संदर्भित अनुभाग दिखाएं।",
      resDes: "उद्धरण और संदर्भ सक्रिय है",
    },
    annotation: {
      title: "एनोटेशन उत्तर",
      description:
        "आप उच्च-गुणवत्ता वाले उत्तर को कैश में मैन्युअल रूप से जोड़ सकते हैं ताकि समान उपयोगकर्ता प्रश्नों से प्राथमिकता से मेल खाया जा सके।",
      resDes: "एनोटेशन प्रतिक्रिया सक्रिय है",
      scoreThreshold: {
        title: "स्कोर थ्रेशोल्ड",
        description:
          "एनोटेशन उत्तर के लिए समानता थ्रेशोल्ड सेट करने के लिए उपयोग किया जाता है।",
        easyMatch: "आसान मेल",
        accurateMatch: "सटीक मेल",
      },
      matchVariable: {
        title: "मेल चर",
        choosePlaceholder: "मेल चर चुनें",
      },
      cacheManagement: "एनोटेशन",
      cached: "एनोटेटेड",
      remove: "निकालें",
      removeConfirm: "इस एनोटेशन को हटाएं?",
      add: "एनोटेशन जोड़ें",
      edit: "एनोटेशन संपादित करें",
    },
    dataSet: {
      title: "प्रसंग",
      noData: "आप संदर्भ के रूप में ज्ञान आयात कर सकते हैं",
      words: "शब्द",
      textBlocks: "पाठ खंड",
      selectTitle: "संदर्भ ज्ञान का चयन करें",
      selected: "ज्ञान चुना गया",
      noDataSet: "कोई ज्ञान नहीं मिला",
      toCreate: "बनाने के लिए जाएं",
      notSupportSelectMulti: "वर्तमान में केवल एक ज्ञान का समर्थन करता है",
      queryVariable: {
        title: "क्वेरी चर",
        tip: "इस चर को प्रसंग पुनर्प्राप्ति के लिए क्वेरी इनपुट के रूप में उपयोग किया जाएगा, इस चर के इनपुट से संबंधित प्रसंग जानकारी प्राप्त करना।",
        choosePlaceholder: "क्वेरी चर चुनें",
        noVar: "कोई चर नहीं",
        noVarTip: "कृपया वेरिएबल्स सेक्शन के तहत एक चर बनाएं",
        unableToQueryDataSet: "ज्ञान को क्वेरी करने में असमर्थ",
        unableToQueryDataSetTip:
          "ज्ञान को सफलतापूर्वक क्वेरी करने में असमर्थ, कृपया प्रसंग अनुभाग में एक संदर्भ क्वेरी चर चुनें।",
        ok: "ठीक है",
        contextVarNotEmpty: "संदर्भ क्वेरी चर खाली नहीं हो सकता",
        deleteContextVarTitle: 'चर "{{varName}}" को हटाएं?',
        deleteContextVarTip:
          "इस चर को संदर्भ क्वेरी चर के रूप में सेट किया गया है, और इसे हटाने से ज्ञान का सामान्य उपयोग प्रभावित होगा। यदि आपको इसे अभी भी हटाने की आवश्यकता है, तो कृपया संदर्भ अनुभाग में इसे पुनः चुनें।",
      },
    },
    tools: {
      title: "उपकरण",
      tips: "उपकरण उपयोगकर्ता इनपुट या चर को अनुरोध मापदंडों के रूप में लेते हुए बाहरी डेटा को संदर्भ के रूप में क्वेरी करने के लिए एक मानक एपीआई कॉल विधि प्रदान करते हैं।",
      toolsInUse: "{{count}} उपयोग में उपकरण",
      modal: {
        title: "उपकरण",
        toolType: {
          title: "उपकरण प्रकार",
          placeholder: "कृपया उपकरण प्रकार चुनें",
        },
        name: {
          title: "नाम",
          placeholder: "कृपया नाम दर्ज करें",
        },
        variableName: {
          title: "चर का नाम",
          placeholder: "कृपया चर का नाम दर्ज करें",
        },
      },
    },
    conversationHistory: {
      title: "संवाद इतिहास",
      description: "संवाद भूमिकाओं के लिए उपसर्ग नाम सेट करें",
      tip: "संवाद इतिहास सक्षम नहीं है, कृपया ऊपर दिए गए प्रॉम्प्ट में <histories> जोड़ें।",
      learnMore: "और अधिक जानें",
      editModal: {
        title: "संवाद भूमिका नाम संपादित करें",
        userPrefix: "उपयोगकर्ता उपसर्ग",
        assistantPrefix: "सहायक उपसर्ग",
      },
    },
    toolbox: {
      title: "उपकरण बॉक्स",
    },
    moderation: {
      title: "सामग्री मॉडरेशन",
      description:
        "मॉडरेशन एपीआई का उपयोग करके या संवेदनशील शब्द सूची बनाए रखकर मॉडल आउटपुट को सुरक्षित करें।",
      allEnabled: "इनपुट/आउटपुट सामग्री सक्षम",
      inputEnabled: "इनपुट सामग्री सक्षम",
      outputEnabled: "आउटपुट सामग्री सक्षम",
      modal: {
        title: "सामग्री मॉडरेशन सेटिंग्स",
        provider: {
          title: "प्रदाता",
          openai: "ओपनएआई मॉडरेशन",
          openaiTip: {
            prefix: "ओपनएआई मॉडरेशन के लिए",
            suffix:
              "में कॉन्फ़िगर किए गए ओपनएआई एपीआई कुंजी की आवश्यकता होती है।",
          },
          keywords: "कीवर्ड",
        },
        keywords: {
          tip: "प्रत्येक पंक्ति में एक, पंक्ति विभाजनों से अलग। प्रति पंक्ति 100 अक्षरों तक।",
          placeholder: "प्रत्येक पंक्ति में एक, पंक्ति विभाजनों से अलग",
          line: "पंक्ति",
        },
        content: {
          input: "इनपुट सामग्री मॉडरेट करें",
          output: "आउटपुट सामग्री मॉडरेट करें",
          preset: "पूर्वनिर्धारित उत्तर",
          placeholder: "यहाँ पूर्वनिर्धारित उत्तर सामग्री डालें",
          condition: "इनपुट और आउटपुट सामग्री मॉडरेट करें सक्षम होनी चाहिए",
          fromApi: "पूर्वनिर्धारित उत्तर एपीआई द्वारा लौटाए जाते हैं",
          errorMessage: "पूर्वनिर्धारित उत्तर खाली नहीं हो सकते",
          supportMarkdown: "मार्कडाउन समर्थित",
        },
        openaiNotConfig: {
          before: "ओपनएआई मॉडरेशन के लिए",
          after: "में कॉन्फ़िगर किए गए ओपनएआई एपीआई कुंजी की आवश्यकता होती है।",
        },
      },
    },
  },
  automatic: {
    title: "स्वचालित अनुप्रयोग आयोजन",
    description:
      "अपना परिदृश्य वर्णित करें, डिफाई आपके लिए एक अनुप्रयोग आयोजित करेगा।",
    intendedAudience: "लक्षित दर्शक कौन हैं?",
    intendedAudiencePlaceHolder: "उदा. छात्र",
    solveProblem: "वे कौन सी समस्याएं हैं जिन्हें एआई उनके लिए हल कर सकता है?",
    solveProblemPlaceHolder:
      "उदा. लंबे रिपोर्ट और लेख से अंतर्दृष्टि निकालें और जानकारी को संक्षेप में प्रस्तुत करें",
    generate: "उत्पन्न करें",
    audiencesRequired: "दर्शकों की आवश्यकता है",
    problemRequired: "समस्या आवश्यक है",
    resTitle: "हमने आपके लिए निम्नलिखित अनुप्रयोग आयोजित किया है।",
    apply: "इस आयोजन को लागू करें",
    noData:
      "बाईं ओर अपने उपयोग मामले का वर्णन करें, आयोजन पूर्वावलोकन यहाँ दिखाई देगा।",
    loading: "आपके लिए अनुप्रयोग आयोजित कर रहे हैं...",
    overwriteTitle: "मौजूदा कॉन्फ़िगरेशन को अधिलेखित करें?",
    overwriteMessage:
      "इस आयोजन को लागू करने से मौजूदा कॉन्फ़िगरेशन अधिलेखित हो जाएगा।",
  },
  resetConfig: {
    title: "रीसेट की पुष्टि करें?",
    message:
      "रीसेट परिवर्तनों को त्याग देता है, अंतिम प्रकाशित कॉन्फ़िगरेशन को पुनर्स्थापित करता है।",
  },
  errorMessage: {
    nameOfKeyRequired: "कुंजी का नाम: {{key}} आवश्यक",
    valueOfVarRequired: "{{key}} मूल्य खाली नहीं हो सकता",
    queryRequired: "अनुरोध पाठ आवश्यक है।",
    waitForResponse:
      "कृपया पिछले संदेश की प्रतिक्रिया पूरी होने तक प्रतीक्षा करें।",
    waitForBatchResponse:
      "कृपया बैच कार्य की प्रतिक्रिया पूरी होने तक प्रतीक्षा करें।",
    notSelectModel: "कृपया एक मॉडल चुनें",
    waitForImgUpload: "कृपया छवि अपलोड होने तक प्रतीक्षा करें",
  },
  chatSubTitle: "निर्देश",
  completionSubTitle: "प्रारंभिक प्रॉम्प्ट",
  promptTip:
    "प्रॉम्प्ट एआई प्रतिक्रियाओं को निर्देशों और सीमाओं के साथ मार्गदर्शन करता है। {{input}} जैसे वेरिएबल सम्मिलित करें। यह प्रॉम्प्ट उपयोगकर्ताओं को दिखाई नहीं देगा।",
  formattingChangedTitle: "स्वरूपण बदला गया",
  formattingChangedText:
    "स्वरूपण को संशोधित करने से डिबग क्षेत्र रीसेट हो जाएगा, क्या आप निश्चित हैं?",
  variableTitle: "वेरिएबल्स",
  variableTip:
    "उपयोगकर्ता वेरिएबल्स को भरते हैं, स्वचालित रूप से प्रॉम्प्ट में वेरिएबल्स को प्रतिस्थापित करते हैं।",
  notSetVar:
    "वेरिएबल्स उपयोगकर्ताओं को फॉर्म भरते समय प्रॉम्प्ट शब्द या प्रारंभिक टिप्पणी प्रस्तुत करने की अनुमति देते हैं। आप प्रॉम्प्ट शब्दों में '{{input}}' दर्ज करने का प्रयास कर सकते हैं।",
  autoAddVar:
    "प्रारंभिक प्रॉम्प्ट में निर्दिष्ट वेरिएबल्स अपरिभाषित हैं, क्या आप उन्हें उपयोगकर्ता इनपुट फॉर्म में जोड़ना चाहते हैं?",
  variableTable: {
    key: "वेरिएबल कुंजी",
    name: "उपयोगकर्ता इनपुट फ़ील्ड नाम",
    optional: "वैकल्पिक",
    type: "इनपुट प्रकार",
    action: "क्रियाएँ",
    typeString: "स्ट्रिंग",
    typeSelect: "चुनें",
  },
  varKeyError: {
    canNoBeEmpty: "वेरिएबल कुंजी खाली नहीं हो सकती",
    tooLong:
      "वेरिएबल कुंजी: {{key}} बहुत लंबी है। 30 वर्णों से अधिक नहीं हो सकती",
    notValid:
      "वेरिएबल कुंजी: {{key}} अवैध है। केवल अक्षर, संख्याएं, और अंडरस्कोर शामिल हो सकते हैं",
    notStartWithNumber:
      "वेरिएबल कुंजी: {{key}} एक संख्या से प्रारंभ नहीं हो सकती",
    keyAlreadyExists: "वेरिएबल कुंजी: {{key}} पहले से मौजूद है",
  },
  otherError: {
    promptNoBeEmpty: "प्रॉम्प्ट खाली नहीं हो सकता",
    historyNoBeEmpty: "संवाद इतिहास प्रॉम्प्ट में सेट होना चाहिए",
    queryNoBeEmpty: "प्रश्न प्रॉम्प्ट में सेट होना चाहिए",
  },
  variableConig: {
    addModalTitle: "इनपुट फ़ील्ड जोड़ें",
    editModalTitle: "इनपुट फ़ील्ड संपादित करें",
    description: "वेरिएबल {{varName}} के लिए सेटिंग",
    fieldType: "फ़ील्ड प्रकार",
    string: "छोटा पाठ",
    "text-input": "छोटा पाठ",
    paragraph: "अनुच्छेद",
    select: "चुनें",
    number: "संख्या",
    notSet:
      "सेट नहीं किया गया, प्रारंभिक प्रॉम्प्ट में {{input}} टाइप करने का प्रयास करें",
    stringTitle: "फॉर्म टेक्स्ट बॉक्स विकल्प",
    maxLength: "अधिकतम लंबाई",
    options: "विकल्प",
    addOption: "विकल्प जोड़ें",
    apiBasedVar: "एपीआई-आधारित वेरिएबल",
    varName: "वेरिएबल नाम",
    labelName: "लेबल नाम",
    inputPlaceholder: "कृपया इनपुट करें",
    content: "सामग्री",
    required: "आवश्यक",
    errorMsg: {
      varNameRequired: "वेरिएबल नाम आवश्यक है",
      labelNameRequired: "लेबल नाम आवश्यक है",
      varNameCanBeRepeat: "वेरिएबल नाम दोहराया नहीं जा सकता",
      atLeastOneOption: "कम से कम एक विकल्प आवश्यक है",
      optionRepeat: "विकल्प दोहराए गए हैं",
    },
  },
  vision: {
    name: "विजन",
    description:
      "विजन सक्षम करने से मॉडल को छवियों को लेने और उनके बारे में प्रश्नों का उत्तर देने की अनुमति मिलेगी।",
    settings: "सेटिंग्स",
    visionSettings: {
      title: "विजन सेटिंग्स",
      resolution: "रेज़ोल्यूशन",
      resolutionTooltip:
        "कम रेज़ोल्यूशन मॉडल को 512 x 512 पिक्सेल की कम-रेज़ोल्यूशन छवि प्राप्त करने की अनुमति देगा, और छवि को 65 टोकनों के बजट के साथ प्रस्तुत करेगा। इससे एपीआई को तेजी से उत्तर देने और कम इनपुट टोकनों का उपयोग करने की सुविधा मिलती है जो उच्च विवरण की आवश्यकता नहीं रखते हैं। \n उच्च रेज़ोल्यूशन पहले मॉडल को कम रेज़ोल्यूशन छवि देखने की अनुमति देगा और फिर इनपुट छवि के आकार के आधार पर 512px वर्ग के रूप में विस्तृत क्रॉप्स बनाएगा। प्रत्येक विस्तृत क्रॉप के लिए टोकन बजट दोगुना होता है, कुल 129 टोकन।",
      high: "उच्च",
      low: "कम",
      uploadMethod: "अपलोड विधि",
      both: "दोनों",
      localUpload: "स्थानीय अपलोड",
      url: "यूआरएल",
      uploadLimit: "अपलोड सीमा",
    },
  },
  voice: {
    name: "वॉयस",
    defaultDisplay: "डिफ़ॉल्ट वॉयस",
    description: "टेक्स्ट टू स्पीच वॉयस सेटिंग्स",
    settings: "सेटिंग्स",
    voiceSettings: {
      title: "वॉयस सेटिंग्स",
      language: "भाषा",
      resolutionTooltip: "टेक्स्ट-टू-स्पीच वॉयस सपोर्ट भाषा।",
      voice: "वॉयस",
    },
  },
  openingStatement: {
    title: "संवाद प्रारंभक",
    add: "जोड़ें",
    writeOpener: "प्रारंभक लिखें",
    placeholder:
      "यहां अपना प्रारंभक संदेश लिखें, आप वेरिएबल्स का उपयोग कर सकते हैं, {{variable}} टाइप करने का प्रयास करें।",
    openingQuestion: "प्रारंभिक प्रश्न",
    noDataPlaceHolder:
      "उपयोगकर्ता के साथ संवाद प्रारंभ करने से एआई को संवादात्मक अनुप्रयोगों में उनके साथ निकट संबंध स्थापित करने में मदद मिल सकती है।",
    varTip:
      "आप वेरिएबल्स का उपयोग कर सकते हैं, {{variable}} टाइप करने का प्रयास करें",
    tooShort:
      "संवाद प्रारंभ करने के लिए कम से कम 20 शब्दों के प्रारंभिक प्रॉम्प्ट की आवश्यकता होती है।",
    notIncludeKey:
      "प्रारंभिक प्रॉम्प्ट में वेरिएबल शामिल नहीं है: {{key}}। कृपया इसे प्रारंभिक प्रॉम्प्ट में जोड़ें।",
  },
  modelConfig: {
    model: "मॉडल",
    setTone: "प्रतिक्रियाओं की टोन सेट करें",
    title: "मॉडल और पैरामीटर",
    modeType: {
      chat: "चैट",
      completion: "पूर्ण",
    },
  },
  inputs: {
    title: "डिबग और पूर्वावलोकन",
    noPrompt:
      "प्रारंभिक प्रॉम्प्ट इनपुट में कुछ प्रॉम्प्ट लिखने का प्रयास करें",
    userInputField: "उपयोगकर्ता इनपुट फ़ील्ड",
    noVar:
      "वेरिएबल के मूल्य को भरें, जिसे प्रत्येक नए सत्र के शुरू होने पर स्वचालित रूप से प्रॉम्प्ट शब्द में प्रतिस्थापित किया जाएगा।",
    chatVarTip:
      "वेरिएबल के मूल्य को भरें, जिसे प्रत्येक नए सत्र के शुरू होने पर स्वचालित रूप से प्रॉम्प्ट शब्द में प्रतिस्थापित किया जाएगा",
    completionVarTip:
      "वेरिएबल के मूल्य को भरें, जिसे प्रत्येक प्रश्न प्रस्तुत करने पर स्वचालित रूप से प्रॉम्प्ट शब्दों में प्रतिस्थापित किया जाएगा।",
    previewTitle: "प्रॉम्प्ट पूर्वावलोकन",
    queryTitle: "प्रश्न सामग्री",
    queryPlaceholder: "कृपया अनुरोध पाठ दर्ज करें।",
    run: "चालू करें",
  },
  result: "आउटपुट टेक्स्ट",
  datasetConfig: {
    settingTitle: "पुनःप्राप्ति सेटिंग्स",
    knowledgeTip: 'ज्ञान जोड़ने के लिए "+" बटन पर क्लिक करें',
    retrieveOneWay: {
      title: "N-से-1 पुनःप्राप्ति",
      description:
        "उपयोगकर्ता के इरादे और ज्ञान विवरणों के आधार पर, एजेंट स्वायत्त रूप से सर्वश्रेष्ठ ज्ञान का चयन करता है। विशिष्ट, सीमित ज्ञान वाले अनुप्रयोगों के लिए सर्वश्रेष्ठ।",
    },
    retrieveMultiWay: {
      title: "बहु-पथ पुनःप्राप्ति",
      description:
        "उपयोगकर्ता के इरादे के आधार पर, सभी ज्ञान पर प्रश्न करता है, बहु-स्रोतों से प्रासंगिक पाठ पुनः प्राप्त करता है, और पुनः रैंकिंग के बाद उपयोगकर्ता प्रश्न से मेल खाने वाले सर्वश्रेष्ठ परिणामों का चयन करता है। पुनः रैंक मॉडल एपीआई का कॉन्फ़िगरेशन आवश्यक है।",
    },
    rerankModelRequired: "रिरैंक मॉडल आवश्यक है",
    params: "पैरामीटर",
    top_k: "शीर्ष K",
    top_kTip:
      "उपयोगकर्ता प्रश्नों के साथ सबसे अधिक समानता रखने वाले खंडों को फ़िल्टर करने के लिए उपयोग किया जाता है। चयनित मॉडल के max_tokens के अनुसार प्रणाली स्वचालित रूप से शीर्ष K के मूल्य को समायोजित करेगी।",
    score_threshold: "स्कोर थ्रेशोल्ड",
    score_thresholdTip:
      "खंडों को फ़िल्टर करने के लिए समानता थ्रेशोल्ड सेट करने के लिए उपयोग किया जाता है।",
    retrieveChangeTip:
      "सूचकांक मोड और पुनःप्राप्ति मोड को संशोधित करने से इस ज्ञान से जुड़े अनुप्रयोग प्रभावित हो सकते हैं।",
  },
  debugAsSingleModel: "एकल मॉडल के रूप में डिबग करें",
  debugAsMultipleModel: "एकाधिक मॉडलों के रूप में डिबग करें",
  duplicateModel: "डुप्लिकेट",
  publishAs: "के रूप में प्रकाशित करें",
  assistantType: {
    name: "सहायक प्रकार",
    chatAssistant: {
      name: "मूल सहायक",
      description: "एक बड़े भाषा मॉडल का उपयोग करके एक चैट-आधारित सहायक बनाएं",
    },
    agentAssistant: {
      name: "एजेंट सहायक",
      description:
        "एक बुद्धिमान एजेंट बनाएं जो स्वायत्त रूप से कार्यों को पूरा करने के लिए उपकरण चुन सके",
    },
  },
  agent: {
    agentMode: "एजेंट मोड",
    agentModeDes: "एजेंट के लिए अनुमान मोड का प्रकार सेट करें",
    agentModeType: {
      ReACT: "रिएक्ट",
      functionCall: "फंक्शन कॉलिंग",
    },
    setting: {
      name: "एजेंट सेटिंग्स",
      description:
        "एजेंट सहायक सेटिंग्स एजेंट मोड और बिल्ट-इन प्रॉम्प्ट जैसे उन्नत फीचर्स सेट करने की अनुमति देती हैं, जो केवल एजेंट प्रकार में उपलब्ध हैं।",
      maximumIterations: {
        name: "अधिकतम पुनरावृत्तियाँ",
        description:
          "एजेंट सहायक कितनी बार पुनरावृत्तियाँ कर सकता है इसकी सीमा निर्धारित करें",
      },
    },
    buildInPrompt: "बिल्ट-इन प्रॉम्प्ट",
    firstPrompt: "प्रथम प्रॉम्प्ट",
    nextIteration: "अगली पुनरावृत्ति",
    promptPlaceholder: "यहां अपना प्रॉम्प्ट लिखें",
    tools: {
      name: "उपकरण",
      description:
        "उपकरणों का उपयोग करके एलएलएम की क्षमताओं का विस्तार किया जा सकता है, जैसे इंटरनेट पर खोज करना या वैज्ञानिक गणनाएँ करना",
      enabled: "सक्षम",
    },
  },
};

export default translation;
