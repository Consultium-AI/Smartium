import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het doornemen van deze stof kun je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de pathofysiologie van hyponatriëmie beschrijven;`}</Inline></li>
        <li><Inline>{`oorzaken en classificaties van hyponatriëmie benoemen;`}</Inline></li>
        <li><Inline>{`een differentiaaldiagnose opstellen bij hyponatriëmie;`}</Inline></li>
        <li><Inline>{`de criteria en oorzaken van SIADH benoemen;`}</Inline></li>
        <li><Inline>{`de behandeling van acute en chronische hyponatriëmie beschrijven.`}</Inline></li>
      </ul>
    </div>
  )
}
