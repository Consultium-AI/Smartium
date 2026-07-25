import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het doornemen van deze stof kun je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`een analyse van het valrisico uitvoeren om mogelijk beïnvloedbare risicofactoren te herkennen;`}</Inline></li>
        <li><Inline>{`de risicofactoren, diagnostiek en behandeling van osteoporose benoemen;`}</Inline></li>
        <li><Inline>{`het fractuurrisico van een patiënt analyseren.`}</Inline></li>
      </ul>
    </div>
  )
}
