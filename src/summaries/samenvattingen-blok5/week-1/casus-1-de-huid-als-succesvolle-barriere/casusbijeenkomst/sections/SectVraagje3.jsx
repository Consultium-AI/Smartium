import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <PBody text={`**Waarom is bescherming tegen de zon belangrijk voor de huid?**
Omdat UV-straling huidveroudering en schade aan de huidstructuur veroorzaakt.`} />
    </div>
  )
}
