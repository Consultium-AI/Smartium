// Blok 5 · Week 7 · Casus 14 · LME 60 Dermatoloog in je broekzak — oefenvragen (bron: docx; vragen 1–8)
export const blok5Week7Casus14DermatoloogInJeBroekzakQuestionsPart01 = [
  {
    id: 1,
    question: 'Wat is een belangrijke mogelijke meerwaarde van een huidkanker-app?',
    options: [
      {
        letter: 'A',
        text: 'Ze kan alleen kwaadaardige afwijkingen herkennen en goedaardige afwijkingen uitsluiten',
      },
      {
        letter: 'B',
        text: 'Ze kan vroege herkenning van huidkanker ondersteunen én onnodige zorg bij goedaardige afwijkingen verminderen',
      },
      { letter: 'C', text: 'Ze vervangt altijd het lichamelijk onderzoek door de arts' },
      {
        letter: 'D',
        text: 'Ze werkt vooral door de huidafwijking te behandelen in plaats van te beoordelen',
      },
    ],
    correctAnswer: 'B',
  },
  {
    id: 2,
    question: 'Wat is het belangrijkste doel van de ABCDE-methode?',
    options: [
      {
        letter: 'A',
        text: 'Vaststellen of een huidafwijking histopathologisch kwaadaardig is',
      },
      { letter: 'B', text: 'Verdachte huidafwijkingen eerder herkennen' },
      {
        letter: 'C',
        text: 'Alle moedervlekken automatisch classificeren als benign of maligne',
      },
      {
        letter: 'D',
        text: 'De diameter van een plekje exact meten met een smartphonecamera',
      },
    ],
    correctAnswer: 'B',
  },
  {
    id: 3,
    question: 'Welke uitspraak over sensitiviteit is juist?',
    options: [
      {
        letter: 'A',
        text: 'Het is het percentage mensen zonder ziekte dat een negatieve uitslag krijgt',
      },
      {
        letter: 'B',
        text: 'Het is het percentage mensen met ziekte dat door de test wordt gevonden',
      },
      {
        letter: 'C',
        text: 'Het is de kans dat een positieve testuitslag ook echt ziekte betekent',
      },
      {
        letter: 'D',
        text: 'Het zegt vooral iets over de kwaliteit van de labels in de dataset',
      },
    ],
    correctAnswer: 'B',
  },
  {
    id: 4,
    question: 'Welke situatie heeft in deze stof de hoogste combinatie van sensitiviteit en specificiteit?',
    options: [
      { letter: 'A', text: 'Algemene bevolking met de ABCDE-methode' },
      { letter: 'B', text: 'Huisartsbeoordeling op basis van een foto' },
      { letter: 'C', text: 'Dermatoloog met dermatoscoop in de spreekkamer' },
      { letter: 'D', text: 'Dermatoloog op basis van een foto' },
    ],
    correctAnswer: 'C',
  },
  {
    id: 5,
    question: 'Welke beschrijving past het best bij Deep Learning?',
    options: [
      {
        letter: 'A',
        text: 'De ontwikkelaar kiest handmatig kenmerken zoals kleur en grootte uit de foto',
      },
      {
        letter: 'B',
        text: 'Het algoritme gebruikt alleen vooraf vastgelegde regels om een diagnose te maken',
      },
      {
        letter: 'C',
        text: 'Het netwerk krijgt de hele foto en leert zelf welke kenmerken belangrijk zijn',
      },
      { letter: 'D', text: 'Het systeem werkt alleen met tekstlabels en niet met beelden' },
    ],
    correctAnswer: 'C',
  },
  {
    id: 6,
    question: 'Wat doet een Convolutional Neural Network vooral bij beeldherkenning?',
    options: [
      { letter: 'A', text: 'Het haalt via filtering relevante informatie uit het beeld' },
      {
        letter: 'B',
        text: 'Het vergelijkt de foto direct met een vaste lijst van diagnosen zonder training',
      },
      {
        letter: 'C',
        text: 'Het berekent vooral de prevalentie in de onderzochte groep',
      },
      {
        letter: 'D',
        text: 'Het geeft een uitkomst op basis van de patiëntgeschiedenis zonder beeldanalyse',
      },
    ],
    correctAnswer: 'A',
  },
  {
    id: 7,
    question: 'Welke gegevens zijn nodig om een Deep Learning-systeem goed te trainen?',
    options: [
      { letter: 'A', text: 'Alleen beelden met de afwijking die je wilt herkennen' },
      {
        letter: 'B',
        text: 'Alleen beelden zonder afwijking, zodat het systeem leert wat normaal is',
      },
      {
        letter: 'C',
        text: 'Beelden, labels en voorbeelden met én zonder de afwijking',
      },
      {
        letter: 'D',
        text: 'Alleen beelden met betrouwbare labels, ongeacht de inhoud',
      },
    ],
    correctAnswer: 'C',
  },
  {
    id: 8,
    question: 'Waarom is de kwaliteit van de labels zo belangrijk bij het trainen van een model?',
    options: [
      {
        letter: 'A',
        text: 'Omdat labels bepalen welke camera-instelling later automatisch gekozen wordt',
      },
      {
        letter: 'B',
        text: 'Omdat labels de referentiestandaard vormen voor wat het systeem moet leren',
      },
      {
        letter: 'C',
        text: 'Omdat labels vooral nodig zijn om de specificiteit achteraf te berekenen',
      },
      {
        letter: 'D',
        text: 'Omdat labels alleen gebruikt worden om de testset groter te maken',
      },
    ],
    correctAnswer: 'B',
  },
]
