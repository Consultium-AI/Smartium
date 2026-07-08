import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Waarom screenen?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Screening is alleen verantwoord als aan bepaalde criteria wordt voldaan. De klassieke criteria van Wilson en Jungner zijn hierbij belangrijk.`}</Inline></p>
    </div>
  )
}
