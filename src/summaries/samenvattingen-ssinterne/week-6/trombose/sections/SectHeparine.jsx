import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Heparine`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Heparine heeft een korte halfwaardetijd en kan intraveneus of subcutaan worden gegeven. De werking wordt gecontroleerd met de APTT, die ongeveer 2 tot 2,5 keer verlengd moet zijn.`}</Inline></p>
    </div>
  )
}
