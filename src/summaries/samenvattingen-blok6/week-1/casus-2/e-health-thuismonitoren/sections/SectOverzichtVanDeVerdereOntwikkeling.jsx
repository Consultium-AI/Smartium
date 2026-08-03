import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Overzicht van de verdere ontwikkeling`}</Inline></SubHeading>
      <DataTable rows={[["Stap", "Ontwikkeling", "Effect"], ["1", "Thuismeten voor huidige patiënten", "Betrouwbare metingen en meer regie voor de patiënt"], ["2", "Thuis of regionaal bloed afnemen", "Minder ziekenhuisbezoeken"], ["3", "Verpleegkundig specialist als telemonitor", "Alarmen en zorgvragen sneller afhandelen"], ["4", "Data monitoring centrum", "Efficiëntere zorg met behoud van inhoudelijke kwaliteit"]]} />
    </div>
  )
}
