import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het doornemen van deze stof kun je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`hemostase als basisproces in het lichaam begrijpen en uitleggen wat de gevolgen zijn van specifieke afwijkingen;`}</Inline></li>
        <li><Inline>{`aangeven welke laboratoriumtesten worden gebruikt om stoornissen in de hemostase op te sporen.`}</Inline></li>
      </ul>
    </div>
  )
}
