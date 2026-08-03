import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenhang en klinische betekenis`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De verschillende segmenten werken nauw samen. De glomerulus zorgt voor filtratie, de tubulus voor gerichte terugresorptie en secretie. Samen zorgen ze voor:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`efficiënte afvalverwijdering`}</Inline></li>
        <li><Inline>{`behoud van essentiële stoffen`}</Inline></li>
        <li><Inline>{`regulatie van bloeddruk`}</Inline></li>
        <li><Inline>{`regulatie van pH`}</Inline></li>
        <li><Inline>{`regulatie van elektrolytenbalans`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Ook is het belangrijk dat je deze segmenten goed kent, omdat veel geneesmiddelen en ziekten juist op een bepaald deel van de tubulus of de filtratiebarrière aangrijpen. Daarom is het nuttig om de volgorde en functie van de segmenten goed te onthouden.`}</Inline></p>
    </div>
  )
}
