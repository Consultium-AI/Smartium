import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Casus met reumatoïde artritis`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een vrouw met reumatoïde artritis en een kinderwens komt in aanmerking voor specialistische preconceptiezorg. Bij voorkeur gebeurt dit in samenwerking tussen gynaecoloog en reumatoloog.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij deze situatie zijn de belangrijkste risico’s:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de reumatoïde artritis zelf;`}</Inline></li>
        <li><Inline>{`het gebruik van methotrexaat;`}</Inline></li>
        <li><Inline>{`een partner met een congenitale afwijking.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De adviezen zijn dan:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`medicatie wijzigen samen met de behandelend reumatoloog;`}</Inline></li>
        <li><Inline>{`afvallen en een gezonder voedingspatroon ontwikkelen;`}</Inline></li>
        <li><Inline>{`een indicatie voor geavanceerd ultrageluidsonderzoek in verband met de congenitale afwijking bij de partner;`}</Inline></li>
        <li><Inline>{`een negatief zwangerschapsadvies totdat veilige medicatie is ingesteld;`}</Inline></li>
        <li><Inline>{`anticonceptie gebruiken tot dat moment.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Daarnaast kan de Slimmer Zwanger-app helpen bij het verbeteren van leefstijl, bijvoorbeeld voeding en stoppen met roken of drinken. Deze app is bedoeld voor vrouwen en mannen en wordt als effectief gezien voor stellen die gezond zwanger willen worden.`}</Inline></p>
    </div>
  )
}
