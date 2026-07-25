import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Waarom wordt FDG uitgescheiden via de nieren?`}</Inline></SubHeading>
      <PBody text={`FDG is zo aangepast dat het wel via de nieren kan worden uitgescheiden. Dat is gunstig, omdat je zo een deel van de radioactiviteit uitplast en de **stralenbelasting** verlaagt.`} />
      <PBody text={`Bij tumoren in de **urinewegen** is dit wel lastig, omdat activiteit in urine en blaas de beoordeling kan bemoeilijken. Daarom kan soms **furosemide** worden gegeven om de blaasactiviteit te verminderen.`} />
    </div>
  )
}
