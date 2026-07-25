import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Artritis`}</Inline></SubHeading>
      <PBody text={`Bij **artritis** is er sprake van een ontstekingsproces in of rond het gewricht. De belangrijkste vorm die hier besproken wordt is **RA**.`} />
    </div>
  )
}
