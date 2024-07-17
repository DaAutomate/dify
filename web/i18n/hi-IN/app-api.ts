const translation = {
  apiServer: 'एपीआई सर्वर',
  apiKey: 'एपीआई कुंजी',
  status: 'स्थिति',
  disabled: 'अक्षम',
  ok: 'सेवा में',
  copy: 'प्रतिलिपि',
  copied: 'प्रतिलिपि बन गई',
  play: 'चलाएं',
  pause: 'विराम',
  playing: 'चल रहा है',
  loading: 'लोड हो रहा है',
  merMaind: {
    rerender: 'पुनः रीरेंडर करें',
  },
  never: 'कभी नहीं',
  apiKeyModal: {
    apiSecretKey: 'एपीआई गुप्त कुंजी',
    apiSecretKeyTips: 'एपीआई का दुरुपयोग रोकने के लिए, अपनी एपीआई कुंजी की सुरक्षा करें। फ्रंट-एंड कोड में इसे सादे पाठ के रूप में उपयोग करने से बचें। :)',
    createNewSecretKey: 'नई गुप्त कुंजी बनाएँ',
    secretKey: 'गुप्त कुंजी',
    created: 'बनाई गई',
    lastUsed: 'अंतिम उपयोग',
    generateTips: 'इस कुंजी को एक सुरक्षित और सुलभ स्थान पर रखें।',
  },
  actionMsg: {
    deleteConfirmTitle: 'इस गुप्त कुंजी को हटाएं?',
    deleteConfirmTips: 'यह क्रिया पूर्ववत नहीं की जा सकती।',
    ok: 'ठीक',
  },
  completionMode: {
    title: 'पूर्णता ऐप एपीआई',
    info: 'उच्च गुणवत्ता वाली पाठ पीढ़ी के लिए, जैसे लेख, सारांश, और अनुवाद, उपयोगकर्ता इनपुट के साथ पूर्णता-संदेश एपीआई का उपयोग करें। पाठ पीढ़ी मॉडल पैरामीटर और प्रॉम्प्ट टेम्पलेट्स पर निर्भर करती है जो प्रॉम्प्ट इंजीनियरिंग में सेट होते हैं।',
    createCompletionApi: 'पूर्णता संदेश बनाएँ',
    createCompletionApiTip: 'प्रश्न-उत्तर मोड का समर्थन करने के लिए पूर्णता संदेश बनाएँ।',
    inputsTips: '(वैकल्पिक) उपयोगकर्ता इनपुट फ़ील्ड को कुंजी-मूल्य जोड़े के रूप में प्रदान करें, जो प्रॉम्प्ट इंजीनियरिंग में चर के अनुरूप हो। कुंजी चर का नाम है, मूल्य पैरामीटर मूल्य है। यदि फ़ील्ड प्रकार चयन है, तो प्रस्तुत मूल्य प्रीसेट विकल्पों में से एक होना चाहिए।',
    queryTips: 'उपयोगकर्ता इनपुट पाठ सामग्री।',
    blocking: 'ब्लॉकिंग प्रकार, निष्पादन पूरा होने की प्रतीक्षा करता है और परिणाम लौटाता है। (प्रक्रिया लंबी होने पर अनुरोधों को रोका जा सकता है)',
    streaming: 'स्ट्रीमिंग रिटर्न। एसएसई (सर्वर-सेंट इवेंट्स) के आधार पर स्ट्रीमिंग रिटर्न का कार्यान्वयन।',
    messageFeedbackApi: 'संदेश प्रतिक्रिया (पसंद)',
    messageFeedbackApiTip: 'उपयोगकर्ताओं की ओर से प्राप्त संदेशों को पसंद या नापसंद करें। यह डेटा लॉग और एनोटेशन पृष्ठ में दिखाई देता है और भविष्य के मॉडल सुधार के लिए उपयोग किया जाता है।',
    messageIDTip: 'संदेश आईडी',
    ratingTip: 'पसंद या नापसंद, null पूर्ववत है',
    parametersApi: 'एप्लिकेशन पैरामीटर जानकारी प्राप्त करें',
    parametersApiTip: 'कॉन्फ़िगर किए गए इनपुट पैरामीटर प्राप्त करें, जिनमें चर नाम, फ़ील्ड नाम, प्रकार और डिफ़ॉल्ट मान शामिल हैं। आमतौर पर इन फ़ील्डों को फ़ॉर्म में प्रदर्शित करने या क्लाइंट लोड होने के बाद डिफ़ॉल्ट मान भरने के लिए उपयोग किया जाता है।',
  },
  chatMode: {
    title: 'चैट ऐप एपीआई',
    info: 'विविध बातचीत ऐप्स के लिए जो प्रश्न-उत्तर प्रारूप का उपयोग करते हैं, चैट-संदेश एपीआई को कॉल करें। संवाद शुरू करने के लिए या मौजूदा बातचीत को जारी रखने के लिए conversation_id पास करें। उत्तर पैरामीटर और टेम्पलेट प्रॉम्प्ट इंजीनियरिंग सेटिंग्स पर निर्भर करते हैं।',
    createChatApi: 'चैट संदेश बनाएँ',
    createChatApiTip: 'नई बातचीत संदेश बनाएँ या मौजूदा संवाद जारी रखें।',
    inputsTips: '(वैकल्पिक) उपयोगकर्ता इनपुट फ़ील्ड को कुंजी-मूल्य जोड़े के रूप में प्रदान करें, जो प्रॉम्प्ट इंजीनियरिंग में चर के अनुरूप हो। कुंजी चर का नाम है, मूल्य पैरामीटर मूल्य है। यदि फ़ील्ड प्रकार चयन है, तो प्रस्तुत मूल्य प्रीसेट विकल्पों में से एक होना चाहिए।',
    queryTips: 'उपयोगकर्ता इनपुट/प्रश्न सामग्री',
    blocking: 'ब्लॉकिंग प्रकार, निष्पादन पूरा होने की प्रतीक्षा करता है और परिणाम लौटाता है। (प्रक्रिया लंबी होने पर अनुरोधों को रोका जा सकता है)',
    streaming: 'स्ट्रीमिंग रिटर्न। एसएसई (सर्वर-सेंट इवेंट्स) के आधार पर स्ट्रीमिंग रिटर्न का कार्यान्वयन।',
    conversationIdTip: '(वैकल्पिक) बातचीत आईडी: पहली बार बातचीत के लिए खाली छोड़ दें; संवाद जारी रखने के लिए संदर्भ से conversation_id पास करें।',
    messageFeedbackApi: 'संदेश अंतिम उपयोगकर्ता प्रतिक्रिया, पसंद',
    messageFeedbackApiTip: 'उपयोगकर्ताओं की ओर से प्राप्त संदेशों को पसंद या नापसंद करें। यह डेटा लॉग और एनोटेशन पृष्ठ में दिखाई देता है और भविष्य के मॉडल सुधार के लिए उपयोग किया जाता है।',
    messageIDTip: 'संदेश आईडी',
    ratingTip: 'पसंद या नापसंद, null पूर्ववत है',
    chatMsgHistoryApi: 'चैट इतिहास संदेश प्राप्त करें',
    chatMsgHistoryApiTip: 'पहला पृष्ठ नवीनतम `limit` बार लौटाता है, जो उल्टे क्रम में होता है।',
    chatMsgHistoryConversationIdTip: 'बातचीत आईडी',
    chatMsgHistoryFirstId: 'वर्तमान पृष्ठ पर पहले चैट रिकॉर्ड का आईडी। डिफ़ॉल्ट रूप से कोई नहीं।',
    chatMsgHistoryLimit: 'एक अनुरोध में कितनी चैट लौटाई जाती है',
    conversationsListApi: 'बातचीत सूची प्राप्त करें',
    conversationsListApiTip: 'वर्तमान उपयोगकर्ता की सत्र सूची प्राप्त करता है। डिफ़ॉल्ट रूप से, अंतिम 20 सत्र लौटाए जाते हैं।',
    conversationsListFirstIdTip: 'वर्तमान पृष्ठ पर अंतिम रिकॉर्ड का आईडी, डिफ़ॉल्ट कोई नहीं।',
    conversationsListLimitTip: 'एक अनुरोध में कितनी चैट लौटाई जाती है',
    conversationRenamingApi: 'बातचीत का पुनः नामकरण',
    conversationRenamingApiTip: 'बातचीत का पुनः नामकरण करें; नाम बहु-सत्र क्लाइंट इंटरफेस में प्रदर्शित होता है।',
    conversationRenamingNameTip: 'नया नाम',
    parametersApi: 'एप्लिकेशन पैरामीटर जानकारी प्राप्त करें',
    parametersApiTip: 'कॉन्फ़िगर किए गए इनपुट पैरामीटर प्राप्त करें, जिनमें चर नाम, फ़ील्ड नाम, प्रकार और डिफ़ॉल्ट मान शामिल हैं। आमतौर पर इन फ़ील्डों को फ़ॉर्म में प्रदर्शित करने या क्लाइंट लोड होने के बाद डिफ़ॉल्ट मान भरने के लिए उपयोग किया जाता है।',
  },
  develop: {
    requestBody: 'अनुरोध निकाय',
    pathParams: 'पथ पैरामीटर',
    query: 'प्रश्न',
  },
}

export default translation
