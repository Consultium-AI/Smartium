import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <PBody text={`**Waarom is een beschadigde huid extra kwetsbaar?**
Omdat water makkelijker verdampt en irriterende stoffen, allergenen en micro-organismen makkelijker binnendringen.`} />
    </div>
  )
}
