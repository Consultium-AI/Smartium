import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Werkt screening op darmkanker?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Ja. Er is wetenschappelijk bewijs dat screening op darmkanker werkt.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`Coloscopieën waarbij poliepen worden opgespoord en verwijderd, leiden op termijn tot een afname van darmkankergerelateerde sterfte.`}</Inline></li>
        <li><Inline>{`Ook eerdere gerandomiseerde studies lieten zien dat screening met een ontlastingstest leidt tot een daling van zowel incidentie als sterfte aan darmkanker.`}</Inline></li>
      </ul>
    </div>
  )
}
