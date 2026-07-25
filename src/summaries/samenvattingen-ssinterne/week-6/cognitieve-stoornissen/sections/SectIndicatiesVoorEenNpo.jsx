import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Indicaties voor een NPO`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een NPO is nuttig voor:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`kwantificeren van cognitieve functiestoornissen;`}</Inline></li>
        <li><Inline>{`diagnose en differentiaaldiagnose;`}</Inline></li>
        <li><Inline>{`vroege herkenning van dementie;`}</Inline></li>
        <li><Inline>{`volgen van het beloop;`}</Inline></li>
        <li><Inline>{`uitkomstmaat in interventiestudies.`}</Inline></li>
      </ul>
    </div>
  )
}
