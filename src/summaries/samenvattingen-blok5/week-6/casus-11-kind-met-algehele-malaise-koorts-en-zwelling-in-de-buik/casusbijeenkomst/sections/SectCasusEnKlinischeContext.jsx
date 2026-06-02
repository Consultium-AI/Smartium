import { Inline } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="leading-relaxed m-0">
        <Inline>{`Bij een kind met **algehele malaise**, **koorts** en een **zwelling in de buik** moet je breed denken, maar tegelijk snel herkennen dat een **massa in de buik bij een kind altijd serieus is**. De combinatie van algemene ziekteverschijnselen en een voelbare of zichtbare buikzwelling past niet alleen bij infectie of obstipatie, maar kan ook wijzen op een **tumor**.`}</Inline>
      </p>
      <p className="leading-relaxed m-0">
        <Inline>{`De kern van de casus is dat je niet blijft hangen bij de klacht “buikpijn” of “opgezette buik”, maar systematisch kijkt naar:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li><Inline>{`de **leeftijd** van het kind,`}</Inline></li>
        <li><Inline>{`de **aard van de massa**,`}</Inline></li>
        <li><Inline>{`begeleidende klachten zoals koorts, malaise, pijn en gewichtsverlies,`}</Inline></li>
        <li>
          <Inline>{`en de vraag of de massa uitgaat van een orgaan zoals **nier**, **lever** of **darm**.`}</Inline>
        </li>
      </ul>
      <p className="leading-relaxed m-0">
        <Inline>{`Bij kinderen zijn buikmassa’s vaak anders dan bij volwassenen. Een grote rol speelt de vraag of het gaat om een **goedaardige oorzaak**, een **infectieus proces**, een **aangeboren afwijking** of een **maligniteit**.`}</Inline>
      </p>
    </div>
  )
}
