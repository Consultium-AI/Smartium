import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <PBody text={`**Waarom is de epidermis zo belangrijk?**
Omdat deze laag de eerste verdedigingslinie van de huid vormt en uitdroging en binnendringen van schadelijke stoffen helpt voorkomen.`} />
    </div>
  )
}
