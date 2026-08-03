import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hestia-score`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De Hestia-score helpt bepalen of een patiënt met longembolie veilig thuis behandeld kan worden. Het gaat om klinische stabiliteit, bloedingsrisico, orgaanfunctie en sociale omstandigheden.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Belangrijke criteria zijn onder andere:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`hemodynamische instabiliteit;`}</Inline></li>
        <li><Inline>{`actieve bloeding of hoog bloedingsrisico;`}</Inline></li>
        <li><Inline>{`ernstige nierinsufficiëntie;`}</Inline></li>
        <li><Inline>{`ernstige leverinsufficiëntie;`}</Inline></li>
        <li><Inline>{`actieve maligniteit;`}</Inline></li>
        <li><Inline>{`onvoldoende therapietrouw;`}</Inline></li>
        <li><Inline>{`onvoldoende zorg thuis.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Als geen van deze problemen speelt, kan thuisbehandeling vaak mogelijk zijn.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 6. Kern van de Hestia-score`}</Inline></SubHeading>
      <DataTable rows={[["Niet geschikt voor thuisbehandeling bij onder andere", "Voorbeelden"], ["Instabiliteit", "Hypotensie, shock"], ["Bloedingsrisico", "Actieve bloeding, hoog risico op bloeding"], ["Orgaanfalen", "Creatinineklaring <30 ml/min, ernstige leverinsufficiëntie"], ["Overige redenen", "Actieve maligniteit, onvoldoende therapietrouw, geen adequate thuissituatie"]]} />
    </div>
  )
}
