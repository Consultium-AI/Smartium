import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leefstijladviezen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na een pneumothorax zijn leefstijladviezen belangrijk:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`stop met roken`}</Inline></li>
        <li><Inline>{`vermijd activiteiten die extra druk op de longen geven, zoals:`}</Inline></li>
        <li><Inline>{`scuba diving`}</Inline></li>
        <li><Inline>{`vliegen in een niet-onder druk staand vliegtuig`}</Inline></li>
        <li><Inline>{`blaasinstrumenten bespelen`}</Inline></li>
      </ul>
    </div>
  )
}
