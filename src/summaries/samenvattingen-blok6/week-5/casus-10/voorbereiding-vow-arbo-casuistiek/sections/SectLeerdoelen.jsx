import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het bestuderen van deze stof kun je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de huidige wettelijke kaders rond verzuimbegeleiding en re-integratie beschrijven en in een historische context plaatsen;`}</Inline></li>
        <li><Inline>{`de werkwijze van bedrijfsartsen en hun samenwerking met verzekeringsartsen, huisartsen en medisch specialisten uitleggen;`}</Inline></li>
        <li><Inline>{`arbeidsgerelateerde en persoonlijke factoren benoemen die een rol kunnen spelen bij verzuim, en deze toepassen in een probleemanalyse en plan van aanpak;`}</Inline></li>
        <li><Inline>{`de criteria voor het melden van beroepsziekten beschrijven en toepassen.`}</Inline></li>
      </ul>
    </div>
  )
}
