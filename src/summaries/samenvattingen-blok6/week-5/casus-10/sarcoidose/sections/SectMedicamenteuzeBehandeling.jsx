import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Medicamenteuze behandeling`}</Inline></SubHeading>
      <PBody text={`Vroeger werd meestal gestart met **corticosteroïden**. Recent onderzoek laat echter zien dat **methotrexaat** als eerstelijnsbehandeling dezelfde resultaten kan geven, maar met minder bijwerkingen.`} />
      <p className="leading-relaxed"><Inline>{`Andere tweede lijnsopties zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**azathioprine**`}</Inline></li>
        <li><Inline>{`**mycofenolaat**`}</Inline></li>
      </ul>
      <PBody text={`Als deze behandeling onvoldoende werkt, kunnen **TNF-alfa-blokkers** worden overwogen.`} />
      <SubHeading><Inline>{`Tabel 4. Behandeling in grote lijnen`}</Inline></SubHeading>
      <DataTable rows={[["Situatie", "Beleid"], ["Löfgren-syndroom", "Meestal geen behandeling nodig"], ["Stadium I longsarcoïdose", "Geen behandeling nodig"], ["Stadium II en III", "Behandeling afhankelijk van klachten en longfunctie"], ["Onvoldoende effect tweede lijn", "TNF-alfa-blokker mogelijk"]]} />
    </div>
  )
}
