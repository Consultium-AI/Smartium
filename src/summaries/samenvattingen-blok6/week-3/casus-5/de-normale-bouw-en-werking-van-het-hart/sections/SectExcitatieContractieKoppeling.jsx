import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Excitatie-contractie koppeling`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Elektrische activatie leidt niet vanzelf tot contractie. Daarvoor is calcium nodig.`}</Inline></p>
    </div>
  )
}
