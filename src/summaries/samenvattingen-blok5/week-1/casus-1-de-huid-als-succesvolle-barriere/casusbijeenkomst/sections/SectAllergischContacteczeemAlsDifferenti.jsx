import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Allergisch contacteczeem als differentiaaldiagnose`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Allergisch contacteczeem hoort in de differentiaaldiagnose, maar het mechanisme is anders.`}</Inline></p>
    </div>
  )
}
