import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Effect van afterload`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Meer afterload betekent dat de ventrikel een hogere druk moet opbouwen om de aortaklep te openen. Daardoor blijft er meer bloed achter, stijgt het ESV en daalt het slagvolume.`}</Inline></p>
    </div>
  )
}
