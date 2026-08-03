import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Aortaregurgitatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De aortaklep sluit niet goed, waardoor bloed teruglekt naar de linkerventrikel tijdens diastole. Daardoor ontstaat volumeoverbelasting en een hoge preload.`}</Inline></p>
    </div>
  )
}
