import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Toepassingen van röntgen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Röntgenfoto’s worden veel gebruikt voor:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`longonderzoek, vooral de **X-thorax**;`}</Inline></li>
        <li><Inline>{`het opsporen van **botbreuken**;`}</Inline></li>
        <li><Inline>{`**interventies**, zoals dotteren van een vernauwde kransslagader;`}</Inline></li>
        <li><Inline>{`**tandheelkunde**;`}</Inline></li>
        <li><Inline>{`**mammografie**.`}</Inline></li>
      </ul>
    </div>
  )
}
