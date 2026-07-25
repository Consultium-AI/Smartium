import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het doornemen van deze stof kun je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`uitleggen wat bewustzijn is en wat coma betekent;`}</Inline></li>
        <li><Inline>{`de meest voorkomende oorzaken van coma benoemen;`}</Inline></li>
        <li><Inline>{`een patiënt met verlaagd bewustzijn of coma volgens de ABCDE-methodiek opvangen;`}</Inline></li>
        <li><Inline>{`een hetero-anamnese afnemen bij een patiënt die zelf geen betrouwbare informatie kan geven;`}</Inline></li>
        <li><Inline>{`een oriënterend neurologisch onderzoek uitvoeren bij een patiënt met gedaald bewustzijn;`}</Inline></li>
        <li><Inline>{`de Glasgow Coma Scale/EMV-score gebruiken om de mate van bewustzijnsdaling vast te leggen.`}</Inline></li>
      </ul>
    </div>
  )
}
