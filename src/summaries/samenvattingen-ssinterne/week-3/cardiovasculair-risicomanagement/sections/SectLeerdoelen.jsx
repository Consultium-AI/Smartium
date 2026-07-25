import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het doornemen van deze stof moet je kunnen uitleggen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`hoe het risico op hart- en vaatziekten tot stand komt;`}</Inline></li>
        <li><Inline>{`welke patiënten in aanmerking komen voor behandeling van dat risico;`}</Inline></li>
        <li><Inline>{`wat de belangrijkste risicofactoren zijn;`}</Inline></li>
        <li><Inline>{`welke leefstijlmaatregelen altijd geadviseerd moeten worden;`}</Inline></li>
        <li><Inline>{`wanneer je kiest voor medicamenteuze behandeling;`}</Inline></li>
        <li><Inline>{`hoe je een behandelplan maakt bij hypertensie of dyslipidemie;`}</Inline></li>
        <li><Inline>{`wanneer je moet denken aan secundaire hypertensie of een primaire dyslipidemie.`}</Inline></li>
      </ul>
    </div>
  )
}
