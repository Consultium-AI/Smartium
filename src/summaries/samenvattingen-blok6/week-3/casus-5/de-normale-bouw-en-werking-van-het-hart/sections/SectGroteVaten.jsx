import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Grote vaten`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De belangrijkste grote vaten zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`vena cava superior en inferior`}</Inline></li>
        <li><Inline>{`arteria pulmonalis`}</Inline></li>
        <li><Inline>{`venae pulmonales`}</Inline></li>
        <li><Inline>{`aorta`}</Inline></li>
      </ul>
    </div>
  )
}
