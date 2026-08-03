import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Harttonen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De harttonen ontstaan door het sluiten van de kleppen.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**S1:** sluiten van mitralis- en tricuspidalisklep; begin van ventriculaire systole`}</Inline></li>
        <li><Inline>{`**S2:** sluiten van aorta- en pulmonalisklep; begin van ventriculaire diastole`}</Inline></li>
        <li><Inline>{`**S3:** vroege diastole, tijdens snelle vulling`}</Inline></li>
        <li><Inline>{`**S4:** late diastole, tijdens atriale contractie`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`S2 kan fysiologisch gesplitst klinken tijdens inspiratie, doordat de aortaklep iets eerder sluit dan de pulmonalisklep.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`---`}</Inline></p>
    </div>
  )
}
