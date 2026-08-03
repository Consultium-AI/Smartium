import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Coronaire circulatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De hartspier zelf heeft ook bloed nodig. Dat gebeurt via de kransslagaders, die ontspringen uit de aorta net boven de aortaklep.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Belangrijke takken zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**RCA**: verzorgt meestal rechterhart, deel van septum en vaak SA- en AV-knoop`}</Inline></li>
        <li><Inline>{`**LCA**: splitst in`}</Inline></li>
        <li><Inline>{`**LAD**: voorwand linkerkamer, septum en apex`}</Inline></li>
        <li><Inline>{`**LCX**: laterale en posterieure wand linkerkamer`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De coronaire doorbloeding vindt vooral plaats tijdens de diastole, omdat de vaten in systole worden samengedrukt.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`---`}</Inline></p>
    </div>
  )
}
