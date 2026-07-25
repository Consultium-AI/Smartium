import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het doornemen van deze stof kun je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de fysiologie van de hypothalamus-hypofyse-bijnier-as (HPA-as) uitleggen;`}</Inline></li>
        <li><Inline>{`diagnostiek en behandeling van het syndroom van Cushing uitvoeren;`}</Inline></li>
        <li><Inline>{`diagnostiek en behandeling van bijnierschorsinsufficiëntie uitvoeren.`}</Inline></li>
      </ul>
    </div>
  )
}
