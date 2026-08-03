import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <PBody text={`Na het doornemen van deze module kun je de **microscopische anatomie van het hart- en vaatstelsel herkennen in histologische coupes**. Je leert dus vooral hoe bloedvaten er onder de microscoop uitzien, hoe je verschillende typen vaten van elkaar onderscheidt en hoe deze kennis klinisch relevant is bij bijvoorbeeld hypertensie, atherosclerose en nierafwijkingen.`} />
    </div>
  )
}
