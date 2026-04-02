// Blok 5 · Week 7 · Casus 14 · LME 60 Dermatoloog in je broekzak — oefenvragen (bron: docx; vragen 9–15)
export const blok5Week7Casus14DermatoloogInJeBroekzakQuestionsPart02 = [
  {
    id: 9,
    question:
      'Wat is het belangrijkste verschil tussen testen op de trainingsdata en testen op een externe dataset?',
    options: [
      {
        letter: 'A',
        text: 'Testen op de trainingsdata laat vooral zien of het model ook op nieuwe data generaliseert',
      },
      {
        letter: 'B',
        text: 'Een externe dataset is minder waardevol omdat die al bekend is bij het model',
      },
      {
        letter: 'C',
        text: 'Testen op trainingsdata kan een te rooskleurig beeld geven; externe data zegt meer over echte toepasbaarheid',
      },
      {
        letter: 'D',
        text: 'Een externe dataset is alleen nuttig als die uit exact hetzelfde ziekenhuis komt',
      },
    ],
    correctAnswer: 'C',
  },
  {
    id: 10,
    question:
      'Waarom is de positief voorspellende waarde bij een zeldzame aandoening vaak laag, zelfs als de test best goed is?',
    options: [
      { letter: 'A', text: 'Omdat sensitiviteit dan automatisch daalt' },
      {
        letter: 'B',
        text: 'Omdat bij lage prevalentie relatief veel positieve uitslagen toch fout-positief zijn',
      },
      {
        letter: 'C',
        text: 'Omdat specificiteit alleen nog geldig is bij veel voorkomende ziekten',
      },
      {
        letter: 'D',
        text: 'Omdat de test dan alleen geschikt is voor mensen met huidtype 1',
      },
    ],
    correctAnswer: 'B',
  },
  {
    id: 11,
    question: 'Wat is een logisch effect van gerichte inzet van een huidkanker-app bij mensen met hoger risico?',
    options: [
      {
        letter: 'A',
        text: 'De PPV daalt, omdat de test meer mensen met klachten bereikt',
      },
      {
        letter: 'B',
        text: 'Het aantal fout-positieve verwijzingen neemt toe, omdat de groep kleiner is',
      },
      {
        letter: 'C',
        text: 'De PPV stijgt waarschijnlijk en het aantal fout-positieven daalt',
      },
      {
        letter: 'D',
        text: 'De sensitiviteit wordt altijd lager, ongeacht de risicogroep',
      },
    ],
    correctAnswer: 'C',
  },
  {
    id: 12,
    question:
      'Welke combinatie past het best bij een verhoogd risico waarop een app gericht kan worden ingezet?',
    options: [
      {
        letter: 'A',
        text: 'Jonge leeftijd, donker huidtype, weinig moedervlekken',
      },
      {
        letter: 'B',
        text: 'Leeftijd 50+, zonverbranding op jonge leeftijd, hoog aantal moedervlekken',
      },
      {
        letter: 'C',
        text: 'Leeftijd onder 30, geen zonblootstelling, geen voorgeschiedenis',
      },
      {
        letter: 'D',
        text: 'Alleen het hebben van een smartphone en een recente foto',
      },
    ],
    correctAnswer: 'B',
  },
  {
    id: 13,
    question: 'Waarom kan een algoritme door bias minder goed werken op gepigmenteerde huid?',
    options: [
      {
        letter: 'A',
        text: 'Omdat het netwerk dan te weinig neuronen heeft om kleurverschillen te verwerken',
      },
      {
        letter: 'B',
        text: 'Omdat veel trainingsdata afkomstig zijn van mensen met een lichte huid',
      },
      {
        letter: 'C',
        text: 'Omdat gepigmenteerde huid nooit op foto\u2019s herkend kan worden',
      },
      {
        letter: 'D',
        text: 'Omdat bias alleen ontstaat door foutieve labels, niet door de samenstelling van de dataset',
      },
    ],
    correctAnswer: 'B',
  },
  {
    id: 14,
    question:
      'Welke situatie kan het algoritme in de war brengen doordat het een onbedoeld verband leert?',
    options: [
      { letter: 'A', text: 'Een huidafwijking naast een liniaal op de foto' },
      { letter: 'B', text: 'Een huidafwijking die asymmetrisch is' },
      { letter: 'C', text: 'Een afwijking met meerdere kleurtinten' },
      {
        letter: 'D',
        text: 'Een foto die genomen is met een smartphone in plaats van een dermatoscoop',
      },
    ],
    correctAnswer: 'A',
  },
  {
    id: 15,
    question: 'Wat past het best bij een preventieve app zoals Sunface / UV-selfie?',
    options: [
      {
        letter: 'A',
        text: 'Ze behandelt UV-schade direct met software en voorkomt zo zonnebrand',
      },
      {
        letter: 'B',
        text: 'Ze maakt zichtbaar wat langdurige UV-blootstelling met de huid kan doen en kan gedrag beïnvloeden',
      },
      {
        letter: 'C',
        text: 'Ze is vooral bedoeld om bestaande melanomen te classificeren op basis van een foto',
      },
      {
        letter: 'D',
        text: 'Ze werkt alleen als de gebruiker al huidkanker heeft gehad',
      },
    ],
    correctAnswer: 'B',
  },
]
