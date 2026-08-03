import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Behandeling van een COPD-exacerbatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een exacerbatie is een snelle verslechtering van dyspneu en/of hoesten, al dan niet met sputum, die verder gaat dan de normale variatie en waarvoor aanpassing van de behandeling nodig is.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De behandeling bestaat uit:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`kortwerkende luchtwegverwijders, meestal SABA en/of SAMA;`}</Inline></li>
        <li><Inline>{`orale corticosteroïden, meestal prednisolon 40 mg per dag gedurende 5 dagen, eventueel met afbouwschema.`}</Inline></li>
      </ul>
    </div>
  )
}
