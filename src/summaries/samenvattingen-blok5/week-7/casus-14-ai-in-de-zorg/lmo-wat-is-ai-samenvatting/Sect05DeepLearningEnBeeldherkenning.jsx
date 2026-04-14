export default function Sect05DeepLearningEnBeeldherkenning() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Deep learning en neurale netwerken</h2>
      <p className="whitespace-pre-line">
        {`Deep learning
 is een vorm van machine learning die goed werkt met grote hoeveelheden 
ongestructureerde data
, zoals foto’s, video’s en geluid.`}
      </p>
      <p>
        Bij beeldherkenning is dat belangrijk. Een foto is niet meteen “een gezicht” of “een auto”. Voor een computer is een
        afbeelding eerst gewoon een enorme verzameling pixels. Deep learning-modellen leren in meerdere lagen patronen
        herkennen:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>eenvoudige vormen en randen</li>
        <li>daarna onderdelen zoals ogen of neuzen</li>
        <li>daarna complete objecten of gezichten</li>
      </ul>
      <p>Zo kan een systeem uiteindelijk een afbeelding classificeren.</p>
      <p className="whitespace-pre-line">
        {`Een 
neuraal netwerk
 is het type model dat hier vaak achter zit. Je hoeft het niet biologisch op te vatten: het is vooral een model met meerdere lagen die informatie stap voor stap verwerken.`}
      </p>

      <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 pt-4">Beeldherkenning: wat computers kunnen zien</h3>
      <p>
        Beeldherkenning laat goed zien hoe krachtig deep learning is. Computers kunnen kentekens lezen, gezichten herkennen,
        bagage detecteren of afwijkingen op beelden signaleren.
      </p>
      <p>De stof laat een paar belangrijke punten zien:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>een afbeelding bestaat uit pixels</li>
        <li>simpele patronen zijn nog overzichtelijk, echte foto’s zijn veel complexer</li>
        <li>deep learning maakt het mogelijk om in die complexiteit toch patronen te vinden</li>
        <li>dat levert nuttige toepassingen op, maar ook privacyvragen</li>
      </ul>
      <p>
        Een praktisch voorbeeld is een parkeergarage of wasstraat die automatisch open gaat als een camera jouw kenteken
        herkent.
      </p>
      <p className="whitespace-pre-line">
        {`Een ander voorbeeld is 
gezichtsherkenning
. Technisch kan het veel, maar juridisch en ethisch ligt het gevoelig. De cursus benadrukt dat realtime gezichtsherkenning in openbare ruimtes in principe niet mag, behalve bij uitzonderingen.`}
      </p>
    </div>
  )
}
