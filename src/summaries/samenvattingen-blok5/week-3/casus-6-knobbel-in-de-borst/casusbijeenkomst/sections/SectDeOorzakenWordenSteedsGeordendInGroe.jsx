import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`De oorzaken worden steeds geordend in groepen:`}</Inline></SubHeading>
      <PBody text={`**vasculair**`} />
      <PBody text={`**hematologisch**`} />
      <PBody text={`**infectieus**`} />
      <PBody text={`**iatrogeen**`} />
      <PBody text={`**solide tumor**`} />
      <PBody text={`**systemisch**`} />
      <PBody text={`**traumatisch**`} />
      <PBody text={`**psychogeen**`} />
      <PBody text={`**Vraagje:** waarom is die indeling handig?
**Antwoord:** omdat je dan niet alleen aan één ziekte denkt, maar systematisch alle grote oorzaken langsloopt.`} />
    </div>
  )
}
