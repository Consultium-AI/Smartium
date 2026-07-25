import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Waar let je op in de anamnese?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Je vraagt onder andere naar:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`sinds wanneer de klachten bestaan;`}</Inline></li>
        <li><Inline>{`of de patiënt zelf klachten heeft opgemerkt;`}</Inline></li>
        <li><Inline>{`of er recente ziekte, koorts of andere somatische klachten zijn geweest;`}</Inline></li>
        <li><Inline>{`medicatiewijzigingen;`}</Inline></li>
        <li><Inline>{`intoxicaties, zoals alcohol, drugs of overdosering van medicatie;`}</Inline></li>
        <li><Inline>{`functioneren in het dagelijks leven;`}</Inline></li>
        <li><Inline>{`problemen met oriëntatie;`}</Inline></li>
        <li><Inline>{`slaap-waakritme;`}</Inline></li>
        <li><Inline>{`hallucinaties.`}</Inline></li>
      </ul>
    </div>
  )
}
