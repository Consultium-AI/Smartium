import { Inline, PBody, SubHeading } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Etiologische groepen`}</Inline></SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`De oorzaken worden steeds geordend in groepen:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**vasculair**`}</Inline></li>
        <li><Inline>{`**hematologisch**`}</Inline></li>
        <li><Inline>{`**infectieus**`}</Inline></li>
        <li><Inline>{`**iatrogeen**`}</Inline></li>
        <li><Inline>{`**solide tumor**`}</Inline></li>
        <li><Inline>{`**systemisch**`}</Inline></li>
        <li><Inline>{`**traumatisch**`}</Inline></li>
        <li><Inline>{`**psychogeen**`}</Inline></li>
      </ul>
      <PBody
        text={`**Vraagje:** waarom is die indeling handig?
**Antwoord:** omdat je dan niet alleen aan één ziekte denkt, maar systematisch alle grote oorzaken langsloopt.`}
      />
    </div>
  )
}
