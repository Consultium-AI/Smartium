import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Praktische benadering van een neonaat met icterus`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Als je een pasgeborene met geelzucht ziet, denk dan stap voor stap:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Is het ongeconjugeerd of geconjugeerd?**`}</Inline></li>
        <li><Inline>{`**Is er hemolyse?**`}</Inline></li>
        <li><Inline>{`anemie?`}</Inline></li>
        <li><Inline>{`reticulocytose?`}</Inline></li>
        <li><Inline>{`Coombs positief?`}</Inline></li>
        <li><Inline>{`bloedgroepantagonisme?`}</Inline></li>
        <li><Inline>{`**Zijn er tekenen van lever- of galwegproblemen?**`}</Inline></li>
        <li><Inline>{`geconjugeerd bilirubine?`}</Inline></li>
        <li><Inline>{`donkere urine?`}</Inline></li>
        <li><Inline>{`gekleurde ontlasting?`}</Inline></li>
        <li><Inline>{`leverfunctiestoornissen?`}</Inline></li>
        <li><Inline>{`**Past het bij een metabole stoornis?**`}</Inline></li>
        <li><Inline>{`positieve urine-reductie?`}</Inline></li>
        <li><Inline>{`slecht drinken?`}</Inline></li>
        <li><Inline>{`braken?`}</Inline></li>
        <li><Inline>{`sepsis?`}</Inline></li>
        <li><Inline>{`**Is behandeling direct nodig?**`}</Inline></li>
        <li><Inline>{`fototherapie;`}</Inline></li>
        <li><Inline>{`eventueel wisseltransfusie;`}</Inline></li>
        <li><Inline>{`bij galactosemie: direct lactosevrij voeden.`}</Inline></li>
      </ul>
    </div>
  )
}
