import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het doornemen van deze stof kun je uitleggen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`welke factoren de keuze voor een vorm van nierfunctievervangende therapie beïnvloeden;`}</Inline></li>
        <li><Inline>{`wat de basisprincipes zijn van niertransplantatie en welke complicaties daarbij horen;`}</Inline></li>
        <li><Inline>{`wanneer acute dialyse of continue hemofiltratie nodig is;`}</Inline></li>
        <li><Inline>{`wat de basisprincipes zijn van intermitterende hemodialyse, continue hemofiltratie en peritoneale dialyse;`}</Inline></li>
        <li><Inline>{`welke belangrijke complicaties bij deze behandelingen kunnen optreden.`}</Inline></li>
      </ul>
    </div>
  )
}
