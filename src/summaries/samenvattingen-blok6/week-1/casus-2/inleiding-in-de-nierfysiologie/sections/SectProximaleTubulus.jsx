import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Proximale tubulus`}</Inline></SubHeading>
      <PBody text={`De **proximale tubulus** ligt direct na het kapsel van Bowman in de nierschors. Hier vindt een enorme hoeveelheid reabsorptie plaats. Ongeveer 65-70% van het gefilterde water, natrium, chloride, glucose, aminozuren en bicarbonaat wordt hier teruggeresorbeerd.`} />
      <PBody text={`Daarnaast worden creatinine en bepaalde geneesmiddelen hier gesecreteerd. De proximale tubulus bevat veel mitochondriën en een **borstelzoom** met microvilli. Dat past bij de grote transportactiviteit: hier is veel energie nodig.`} />
    </div>
  )
}
