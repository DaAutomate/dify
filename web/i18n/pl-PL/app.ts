const translation = {
  createApp: 'UTWÓRZ APLIKACJĘ',
  types: {
    all: 'Wszystkie',
    chatbot: 'Chatbot',
    agent: 'Agent',
    workflow: 'Przepływ pracy',
    completion: 'Zakończenie',
  },
  duplicate: 'Duplikuj',
  duplicateTitle: 'Duplikuj aplikację',
  export: 'Eksportuj DSL',
  exportFailed: 'Eksport DSL nie powiódł się.',
  importDSL: 'Importuj plik DSL',
  createFromConfigFile: 'Utwórz z pliku DSL',
  deleteAppConfirmTitle: 'Usunąć tę aplikację?',
  deleteAppConfirmContent:
    'Usunięcie aplikacji jest nieodwracalne. Użytkownicy nie będą mieli już dostępu do twojej aplikacji, a wszystkie konfiguracje monitów i dzienniki zostaną trwale usunięte.',
  appDeleted: 'Aplikacja usunięta',
  appDeleteFailed: 'Nie udało się usunąć aplikacji',
  join: 'Dołącz do społeczności',
  communityIntro:
    'Dyskutuj z członkami zespołu, współtwórcami i deweloperami na różnych kanałach.',
  roadmap: 'Zobacz naszą mapę drogową',
  newApp: {
    startFromBlank: 'Utwórz od podstaw',
    startFromTemplate: 'Utwórz z szablonu',
    captionAppType: 'Jaki typ aplikacji chcesz stworzyć?',
    chatbotDescription:
      'Zbuduj aplikację opartą na czacie. Ta aplikacja używa formatu pytań i odpowiedzi, umożliwiając wielokrotne rundy ciągłej konwersacji.',
    completionDescription:
      'Zbuduj aplikację generującą teksty wysokiej jakości na podstawie monitów, takich jak generowanie artykułów, streszczeń, tłumaczeń i innych.',
    completionWarning: 'Ten typ aplikacji nie będzie już obsługiwany.',
    agentDescription:
      'Zbuduj inteligentnego agenta, który może autonomicznie wybierać narzędzia do wykonywania zadań',
    workflowDescription:
      'Zbuduj aplikację, która w oparciu o przepływ pracy generuje teksty wysokiej jakości z dużą możliwością dostosowania. Jest odpowiednia dla doświadczonych użytkowników.',
    workflowWarning: 'Obecnie w fazie beta',
    chatbotType: 'Metoda orkiestracji chatbota',
    basic: 'Podstawowy',
    basicTip: 'Dla początkujących, można przełączyć się później na Chatflow',
    basicFor: 'Dla początkujących',
    basicDescription:
      'Podstawowa orkiestracja pozwala na skonfigurowanie aplikacji Chatbot za pomocą prostych ustawień, bez możliwości modyfikacji wbudowanych monitów. Jest odpowiednia dla początkujących.',
    advanced: 'Chatflow',
    advancedFor: 'Dla zaawansowanych użytkowników',
    advancedDescription:
      'Orkiestracja przepływu pracy organizuje Chatboty w formie przepływów pracy, oferując wysoki stopień dostosowania, w tym możliwość edycji wbudowanych monitów. Jest odpowiednia dla doświadczonych użytkowników.',
    captionName: 'Ikona i nazwa aplikacji',
    appNamePlaceholder: 'Podaj nazwę swojej aplikacji',
    appMaxActiveRequests: 'Maksymalna liczba aktywnych żądań',
    appMaxActiveRequestsPlaceholder: 'Maksymalna liczba aktywnych żądań dla aplikacji, gdzie 0 oznacza brak limitu, powinna być liczbą nieujemną całkowitą.',
    captionDescription: 'Opis',
    appDescriptionPlaceholder: 'Wprowadź opis aplikacji',
    useTemplate: 'Użyj tego szablonu',
    previewDemo: 'Podgląd demo',
    chatApp: 'Asystent',
    chatAppIntro:
      'Chcę zbudować aplikację opartą na czacie. Ta aplikacja używa formatu pytań i odpowiedzi, umożliwiając wielokrotne rundy ciągłej konwersacji.',
    agentAssistant: 'Nowy asystent agenta',
    completeApp: 'Generator tekstu',
    completeAppIntro:
      'Chcę stworzyć aplikację, która generuje teksty wysokiej jakości na podstawie monitów, takich jak generowanie artykułów, streszczeń, tłumaczeń i innych.',
    showTemplates: 'Chcę wybrać z szablonu',
    hideTemplates: 'Wróć do wyboru trybu',
    Create: 'Utwórz',
    Cancel: 'Anuluj',
    nameNotEmpty: 'Nazwa nie może być pusta',
    appTemplateNotSelected: 'Proszę wybrać szablon',
    appTypeRequired: 'Proszę wybrać typ aplikacji',
    appCreated: 'Aplikacja utworzona',
    appCreateFailed: 'Nie udało się utworzyć aplikacji',
  },
  editApp: 'Edytuj informacje',
  editAppTitle: 'Edytuj informacje o aplikacji',
  editDone: 'Informacje o aplikacji zaktualizowane',
  editFailed: 'Nie udało się zaktualizować informacji o aplikacji',
  emoji: {
    ok: 'OK',
    cancel: 'Anuluj',
  },
  switch: 'Przełącz na Orkiestrację Przepływu Pracy',
  switchTipStart:
    'Dla ciebie zostanie utworzona nowa kopia aplikacji, a nowa kopia przełączy się na Orkiestrację Przepływu Pracy. Nowa kopia będzie ',
  switchTip: 'nie pozwoli',
  switchTipEnd: ' na powrót do Podstawowej Orkiestracji.',
  switchLabel: 'Kopia aplikacji do utworzenia',
  removeOriginal: 'Usuń oryginalną aplikację',
  switchStart: 'Rozpocznij przełączanie',
  typeSelector: {
    all: 'WSZYSTKIE Typy',
    chatbot: 'Chatbot',
    agent: 'Agent',
    workflow: 'Przepływ pracy',
    completion: 'Zakończenie',
  },
}

export default translation
