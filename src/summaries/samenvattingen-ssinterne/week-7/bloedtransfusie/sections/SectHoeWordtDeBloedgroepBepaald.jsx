import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hoe wordt de bloedgroep bepaald?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een patiënt waarvan de bloedgroep nog niet bekend is, wordt de bloedgroep vastgesteld door:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`het bepalen van de antigenen op de erytrocyten;`}</Inline></li>
        <li><Inline>{`het bepalen van de reguliere antistoffen, dus anti-A en anti-B.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De definitieve bloedgroep wordt twee keer bepaald uit onafhankelijk afgenomen monsters. Dat betekent dat er op twee verschillende momenten bloed wordt afgenomen en dat beide bepalingen identiek moeten zijn. Zo wordt voorkomen dat een bloedgroep aan de verkeerde patiënt wordt gekoppeld.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Als de ABO-bloedgroep al bekend is in het laboratorium, volstaat het bepalen van de ABO-antigenen.`}</Inline></p>
    </div>
  )
}
