import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <PBody text={`Na het doornemen van deze module kun je de begrippen **agonist, partiële agonist, antagonist, potentie en effectiviteit** uitleggen. Ook kun je uitleggen hoe **responsen op liganden gekwantificeerd** worden.`} />
    </div>
  )
}
