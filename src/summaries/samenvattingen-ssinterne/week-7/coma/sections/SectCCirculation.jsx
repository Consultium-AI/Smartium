import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`C – Circulation`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Zoek naar shock als oorzaak van bewustzijnsdaling. Zorg voor intraveneuze toegang en neem bloed af. Bij shock en coma is snelle intraveneuze vulling belangrijk. Maak ook een ECG.`}</Inline></p>
    </div>
  )
}
