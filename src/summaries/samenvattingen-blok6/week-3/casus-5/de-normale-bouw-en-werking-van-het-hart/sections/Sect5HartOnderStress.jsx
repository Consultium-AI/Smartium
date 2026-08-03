import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`5. Hart onder stress`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Je begrijpt conceptueel hoe fysiologische stress, zoals inspanning en zwangerschap, het cardiovasculaire systeem beïnvloedt.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`---`}</Inline></p>
    </div>
  )
}
