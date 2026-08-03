import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Contra-indicaties: wanneer kan het niet?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een contra-indicatie is een factor die de overleving na longtransplantatie beperkt. Sommige factoren zijn zo sterk ongunstig dat transplantatie niet mogelijk is. Andere factoren zijn minder zwaar en worden als risicofactoren gezien; dan kan het in sommige situaties nog wel, afhankelijk van de ervaring van het centrum en de totale situatie van de patiënt.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Er wordt onderscheid gemaakt tussen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**absolute contra-indicaties**: transplantatie kan niet`}</Inline></li>
        <li><Inline>{`**relatieve contra-indicaties**: transplantatie kan soms nog wel, maar met extra risico`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Het uiteindelijke besluit wordt genomen door het multidisciplinaire team. Er is dus ruimte voor verschil tussen centra.`}</Inline></p>
    </div>
  )
}
