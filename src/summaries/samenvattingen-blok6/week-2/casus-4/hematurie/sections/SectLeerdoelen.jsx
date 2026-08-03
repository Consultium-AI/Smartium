import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het doornemen van deze stof kun je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`het onderscheid uitleggen tussen microscopische en macroscopische hematurie;`}</Inline></li>
        <li><Inline>{`de meest voorkomende oorzaken van hematurie benoemen;`}</Inline></li>
        <li><Inline>{`het onderscheid uitleggen tussen spierinvasief en niet-spierinvasief blaascarcinoom;`}</Inline></li>
        <li><Inline>{`de belangrijkste behandelingsmogelijkheden bij blaaskanker benoemen.`}</Inline></li>
      </ul>
    </div>
  )
}
