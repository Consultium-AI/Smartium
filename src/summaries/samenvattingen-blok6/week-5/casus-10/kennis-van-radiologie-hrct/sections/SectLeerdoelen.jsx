import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het doornemen van deze stof moet je kunnen uitleggen op welke verschillende manieren een CT-scanner de thorax kan afbeelden. Daarnaast moet je normale anatomische structuren op een CT-thorax kunnen herkennen en aanwijzen. Tot slot moet je verschillende patronen van longafwijkingen op CT van elkaar kunnen onderscheiden.`}</Inline></p>
    </div>
  )
}
