import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het doornemen van deze module kun je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de belangrijkste klachten en lichamelijke verschijnselen van hartfalen herkennen`}</Inline></li>
        <li><Inline>{`de ernst van klachten bij hartfalen indelen met de NYHA-classificatie`}</Inline></li>
        <li><Inline>{`uitleggen waarom klachten bij hartfalen vaak niet specifiek zijn`}</Inline></li>
        <li><Inline>{`toelichten hoe aanvullend onderzoek zoals ECG, NT-proBNP en echocardiografie helpt bij de diagnose`}</Inline></li>
        <li><Inline>{`onderscheid maken tussen hartfalen en andere oorzaken van kortademigheid, moeheid en oedeem`}</Inline></li>
      </ul>
    </div>
  )
}
