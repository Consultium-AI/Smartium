import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Psychosociale gevolgen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De diagnose POI heeft vaak een grote impact. Veel vrouwen ervaren:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`ongewenste kinderloosheid of het verlies van de mogelijkheid om biologisch eigen kinderen te krijgen;`}</Inline></li>
        <li><Inline>{`relatieproblemen;`}</Inline></li>
        <li><Inline>{`overgangsklachten op jonge leeftijd;`}</Inline></li>
        <li><Inline>{`het gevoel minder vrouw te zijn of dat het eigen lichaam faalt;`}</Inline></li>
        <li><Inline>{`onzichtbaar leed en weinig begrip uit de omgeving.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Daarom is aandacht voor begeleiding in de spreekkamer belangrijk. Als dat niet voldoende is, moet laagdrempelig worden verwezen voor psychologische ondersteuning.`}</Inline></p>
    </div>
  )
}
