import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Interventies bij verzuim en re-integratie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Er kunnen verschillende interventies worden ingezet om herstel, benutbare mogelijkheden en re-integratie te bevorderen. Denk aan:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`het maken, uitvoeren en zo nodig bijstellen van een plan van aanpak;`}</Inline></li>
        <li><Inline>{`beoordelen of iemand geschikt is voor eigen werk;`}</Inline></li>
        <li><Inline>{`prognose van herstel;`}</Inline></li>
        <li><Inline>{`opstellen of verbeteren van de FML;`}</Inline></li>
        <li><Inline>{`psychosociale ondersteuning;`}</Inline></li>
        <li><Inline>{`motiverende en voorlichtende gespreksvoering;`}</Inline></li>
        <li><Inline>{`diagnostiek en onderzoek bij comorbiditeit;`}</Inline></li>
        <li><Inline>{`monitoren van herstelgedrag en re-integratiegedrag;`}</Inline></li>
        <li><Inline>{`signaleren van stagnatie;`}</Inline></li>
        <li><Inline>{`sollicitatietraining, beroepskeuzetesten en gerichte scholing;`}</Inline></li>
        <li><Inline>{`goede nazorg en terugvalpreventie.`}</Inline></li>
      </ul>
    </div>
  )
}
