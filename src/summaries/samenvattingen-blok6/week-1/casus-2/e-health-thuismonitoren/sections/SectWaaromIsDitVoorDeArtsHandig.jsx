import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Waarom is dit voor de arts handig?`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`Consulten kunnen beter worden voorbereid.`}</Inline></li>
        <li><Inline>{`Acute hulpvragen kunnen beter worden ingeschat.`}</Inline></li>
        <li><Inline>{`Onnodige fysieke consulten kunnen worden voorkomen.`}</Inline></li>
        <li><Inline>{`De werkdruk in het ziekenhuis kan afnemen.`}</Inline></li>
      </ul>
    </div>
  )
}
