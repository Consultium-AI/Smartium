import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Behandeling`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De startdosering hangt af van de ernst.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 3. Startbehandeling bij reuscelarteritis`}</Inline></SubHeading>
      <DataTable rows={[["Situatie", "Startdosering prednison"], ["Ongecompliceerd, zonder kaak- of visusklachten", "40 mg 1x per dag"], ["Gecompliceerd, met kaak- en/of tongclaudicatio of visusklachten", "60 mg 1x per dag"], ["Visusverlies", "overweeg intraveneuze methylprednisolon 500 mg per dag gedurende 3 dagen"]]} />
      <p className="leading-relaxed"><Inline>{`Bij verdenking op reuscelarteritis moet je ook aspirine overwegen, als er geen contra-indicaties zijn, vanwege het risico op TIA’s en CVA’s.`}</Inline></p>
    </div>
  )
}
