import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`De ernst hangt af van de factoractiviteit:`}</Inline></SubHeading>
      <PBody text={`**ernstig**: spontane bloedingen`} />
      <PBody text={`**matig**: gewrichts- en spierbloedingen na klein trauma`} />
      <PBody text={`**mild**: bloedingen vooral na groot trauma of ingreep`} />
    </div>
  )
}
