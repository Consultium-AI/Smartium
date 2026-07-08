import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <PBody text={`Na het doornemen van deze stof kun je acute obstetrische complicaties herkennen en opvangen volgens het **ABCDEF-principe**. Daarbij hoort dat je niet alleen naar de moeder kijkt, maar ook steeds de foetale conditie meeneemt. In acute obstetrie geldt steeds: **de beste manier om de foetus te helpen, is de moeder helpen**.`} />
    </div>
  )
}
