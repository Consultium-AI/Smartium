import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`4. Hartcyclus en PV-loop`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Je kunt de cardiale cyclus uitleggen, inclusief de relatie met ECG en harttonen. Ook kun je de druk-volume-loop van de ventrikel uitleggen en beredeneren wat er gebeurt bij veranderingen in preload, afterload en contractiliteit.`}</Inline></p>
    </div>
  )
}
