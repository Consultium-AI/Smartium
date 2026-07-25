import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Type & Screen-beleid`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Type & Screen is een strategie waarbij alleen de bloedgroep en de screening op irregulaire antistoffen worden bepaald. Daarna kunnen bloedproducten worden uitgegeven zonder kruisproef. Dat scheelt tijd.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Type & Screen is niet geschikt bij:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`patiënten met bekende irregulaire antistoffen;`}</Inline></li>
        <li><Inline>{`pasgeborenen tot 3 maanden;`}</Inline></li>
        <li><Inline>{`intra-uteriene transfusie;`}</Inline></li>
        <li><Inline>{`3 maanden na orgaantransplantatie;`}</Inline></li>
        <li><Inline>{`na allogene stamceltransplantatie.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij deze groepen wordt wel een kruisproef gedaan. Een kruisproef is het mengen van donorerytrocyten met plasma van de patiënt om te kijken of er een reactie optreedt.`}</Inline></p>
    </div>
  )
}
