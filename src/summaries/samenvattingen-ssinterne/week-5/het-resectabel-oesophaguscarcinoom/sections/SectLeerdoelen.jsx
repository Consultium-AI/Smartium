import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het doornemen van deze stof moet je kunnen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`het diagnostische en therapeutische traject bij een patiënt met een resectabel oesophaguscarcinoom beschrijven;`}</Inline></li>
        <li><Inline>{`de klachten en symptomen van het resectabel oesophaguscarcinoom beschrijven;`}</Inline></li>
        <li><Inline>{`de rol van de verschillende betrokken specialisten uitleggen;`}</Inline></li>
        <li><Inline>{`het huidige standaardbeleid en de richtlijnen beschrijven;`}</Inline></li>
        <li><Inline>{`nieuwe ontwikkelingen in diagnostiek en behandeling benoemen.`}</Inline></li>
      </ul>
    </div>
  )
}
