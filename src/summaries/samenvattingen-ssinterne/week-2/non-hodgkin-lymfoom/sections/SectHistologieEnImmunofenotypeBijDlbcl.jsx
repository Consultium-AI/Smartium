import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Histologie en immunofenotype bij DLBCL`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`DLBCL laat een diffuus groeipatroon zien van grote blastaire cellen. Dat betekent dat de cellen groot zijn en verspreid door het weefsel liggen, zonder duidelijke klierstructuur.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Het immunofenotype past bij een B-cel lymfoom. Kenmerkend zijn onder andere:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`CD20 positief;`}</Inline></li>
        <li><Inline>{`s/cIg meestal positief of variabel;`}</Inline></li>
        <li><Inline>{`CD10 positief of negatief;`}</Inline></li>
        <li><Inline>{`BCL6 positief;`}</Inline></li>
        <li><Inline>{`MUM1 positief of negatief.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`MUM1 is een transcriptiefactor die betrokken is bij B-celdifferentiatie. Het immunofenotype helpt dus om het lymfoom verder te typeren.`}</Inline></p>
    </div>
  )
}
