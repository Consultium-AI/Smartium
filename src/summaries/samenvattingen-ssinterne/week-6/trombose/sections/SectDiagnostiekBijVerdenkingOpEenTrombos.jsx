import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Diagnostiek bij verdenking op een trombosebeen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een patiënt met een dik, rood, glanzend en pijnlijk been kan een trombosebeen hebben, maar er zijn veel andere mogelijke oorzaken. De differentiaaldiagnose is breed.`}</Inline></p>
    </div>
  )
}
