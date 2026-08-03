import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Idiopathische pulmonale fibrose, IPF`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`IPF is een chronische interstitiële longziekte en de meest voorkomende en ernstigste vorm van idiopathische interstitiële pneumonie. De oorzaak is onbekend, maar de ziekte hangt sterk samen met roken. De pathogenese past bij de triade van epitheelbeschadiging, veroudering en genetische aanleg.`}</Inline></p>
    </div>
  )
}
