import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Glasgow Coma Scale / EMV-score`}</Inline></SubHeading>
      <PBody text={`De Glasgow Coma Scale wordt in de praktijk weergegeven als de **EMV-score**. Deze score helpt niet om de diagnose te stellen, maar is wel belangrijk om het beloop te volgen.`} />
    </div>
  )
}
