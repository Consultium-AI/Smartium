import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Specialistische risico-inventarisatie: wat moet je uitvragen?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een specialistisch preconceptieconsult moet je nog uitgebreider vragen stellen. Denk aan:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`actuele problemen;`}</Inline></li>
        <li><Inline>{`cyclus en regelmaat;`}</Inline></li>
        <li><Inline>{`anticonceptiegebruik;`}</Inline></li>
        <li><Inline>{`foliumzuurgebruik;`}</Inline></li>
        <li><Inline>{`opleiding, werk en eventuele financiële problemen;`}</Inline></li>
        <li><Inline>{`samenwonen of gehuwd zijn;`}</Inline></li>
        <li><Inline>{`afkomst en etniciteit;`}</Inline></li>
        <li><Inline>{`consanguiniteit;`}</Inline></li>
        <li><Inline>{`uitslag van een eventuele risico-inventarisatie;`}</Inline></li>
        <li><Inline>{`algemene voorgeschiedenis van de partner;`}</Inline></li>
        <li><Inline>{`geboortedatum en beroep van de partner.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Ook de familieanamnese is belangrijk. Je vraagt naar:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`hart- en vaatziekten;`}</Inline></li>
        <li><Inline>{`diabetes mellitus;`}</Inline></li>
        <li><Inline>{`mentale beperkingen;`}</Inline></li>
        <li><Inline>{`aangeboren afwijkingen;`}</Inline></li>
        <li><Inline>{`erfelijke afwijkingen;`}</Inline></li>
        <li><Inline>{`trombose;`}</Inline></li>
        <li><Inline>{`herhaalde miskramen;`}</Inline></li>
        <li><Inline>{`perinatale sterfte.`}</Inline></li>
      </ul>
    </div>
  )
}
