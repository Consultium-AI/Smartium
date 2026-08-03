import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het bestuderen van deze stof kun je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de belangrijkste medicamenteuze en niet-medicamenteuze behandelingen van hartfalen benoemen;`}</Inline></li>
        <li><Inline>{`het onderscheid maken tussen de behandeling van HFrEF, HFmrEF en HFpEF;`}</Inline></li>
        <li><Inline>{`de stappen in de behandeling van acuut versus chronisch hartfalen herkennen;`}</Inline></li>
        <li><Inline>{`uitleggen waarom het belangrijk is om therapie tijdig te starten en volledig op te bouwen.`}</Inline></li>
      </ul>
    </div>
  )
}
