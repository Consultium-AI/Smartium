import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hoe vaak komt osteoporose voor?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Osteoporose komt vooral voor bij ouderen. Bij 55-plussers komt het voor bij ongeveer 12% van de mannen en 29% van de vrouwen. De meest voorkomende osteoporotische fracturen zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`wervelfracturen;`}</Inline></li>
        <li><Inline>{`heupfracturen;`}</Inline></li>
        <li><Inline>{`polsfracturen.`}</Inline></li>
      </ul>
    </div>
  )
}
