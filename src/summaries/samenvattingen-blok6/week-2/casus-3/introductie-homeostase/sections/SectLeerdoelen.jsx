import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het doornemen van deze stof kun je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`het verschil uitleggen tussen **homeostatisch gereguleerde variabelen** en **niet-homeostatisch gereguleerde variabelen**`}</Inline></li>
        <li><Inline>{`de **5 kenmerken van een homeostatisch systeem** beschrijven en herkennen`}</Inline></li>
        <li><Inline>{`uitleggen dat **setpoints kunnen veranderen**`}</Inline></li>
        <li><Inline>{`uitleggen dat er een **hiërarchie** bestaat tussen homeostatisch gereguleerde variabelen`}</Inline></li>
      </ul>
    </div>
  )
}
