import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Aanvullend onderzoek`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij HP kunnen verschillende onderzoeken de diagnose ondersteunen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Serologie:** specifieke IgG-antistoffen tegen verdachte antigenen kunnen aanwezig zijn.`}</Inline></li>
        <li><Inline>{`**BAL (bronchoalveolaire lavage):** hierbij zie je vaak een duidelijke lymfocytose, meestal >15% en soms tot 60%.`}</Inline></li>
        <li><Inline>{`**Longbiopt:** een transbronchiaal longbiopt kan niet-verkazende granulomen laten zien.`}</Inline></li>
        <li><Inline>{`**HRCT:** dit is het gouden standaard beeldvormend onderzoek.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`HRCT kan onder andere laten zien:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`ground-glass opaciteiten;`}</Inline></li>
        <li><Inline>{`centrilobulaire noduli;`}</Inline></li>
        <li><Inline>{`fibrose in gevorderde stadia;`}</Inline></li>
        <li><Inline>{`air trapping.`}</Inline></li>
      </ul>
    </div>
  )
}
