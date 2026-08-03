import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Preventie en maatregelen op de werkplek`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij lawaai op de werkplek moet de werkgever:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`voorlichting geven;`}</Inline></li>
        <li><Inline>{`gehoorbescherming verstrekken;`}</Inline></li>
        <li><Inline>{`periodieke keuringen of testen uitvoeren.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Dat laat zien dat preventie een belangrijk onderdeel is van de aanpak van beroepsziekten.`}</Inline></p>
    </div>
  )
}
