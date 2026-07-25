import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Waar let je op in de heteroanamnese?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Van een naaste wil je vooral weten:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`welke veranderingen in lichamelijk of geestelijk functioneren zijn opgevallen;`}</Inline></li>
        <li><Inline>{`hoe lang die veranderingen al bestaan;`}</Inline></li>
        <li><Inline>{`of er al vóór deze episode cognitieve klachten waren.`}</Inline></li>
      </ul>
      <PBody text={`**Aandachtsvraag:** waarom is de heteroanamnese zo belangrijk?
**Mini-antwoord:** omdat de patiënt zelf de klachten vaak niet goed kan overzien of beschrijven.`} />
    </div>
  )
}
