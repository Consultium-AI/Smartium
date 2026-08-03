import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na deze e-module kun je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`drie redenen benoemen waarom zorg op afstand wenselijk is;`}</Inline></li>
        <li><Inline>{`opsommen wat nodig is voor zorg op afstand;`}</Inline></li>
        <li><Inline>{`een concreet plan opstellen om te starten met zorg op afstand;`}</Inline></li>
        <li><Inline>{`succesfactoren en valkuilen bij de implementatie herkennen;`}</Inline></li>
        <li><Inline>{`voorspellen welke verdere ontwikkelingen zorg op afstand kan doormaken.`}</Inline></li>
      </ul>
    </div>
  )
}
