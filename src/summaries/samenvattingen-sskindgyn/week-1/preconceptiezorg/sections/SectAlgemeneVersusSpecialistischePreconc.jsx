import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Algemene versus specialistische preconceptiezorg`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Preconceptiezorg kent verschillende vormen die elkaar aanvullen.`}</Inline></p>
      <SubHeading><Inline>{`Algemene preconceptiezorg`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Dit is zorg waarbij een hulpverlener zoals de huisarts, verloskundige of specialist met het paar in gesprek gaat om risicofactoren te inventariseren en voorlichting te geven. Dit past bij veel mensen met een kinderwens.`}</Inline></p>
      <SubHeading><Inline>{`Collectieve preconceptiezorg`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Dit is zorg waarbij alle vrouwen in de vruchtbare leeftijd collectief worden aangesproken. Voorbeelden hiervan zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`jodering van keukenzout;`}</Inline></li>
        <li><Inline>{`rubellavaccinatie;`}</Inline></li>
        <li><Inline>{`voorlichting over foliumzuur;`}</Inline></li>
        <li><Inline>{`stralingsbescherming.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Specialistische preconceptiezorg`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij specialistische preconceptiezorg is er sprake van een verhoogd risico door bijvoorbeeld:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`maternale morbiditeit, zoals een chronische ziekte;`}</Inline></li>
        <li><Inline>{`maternale medicatie;`}</Inline></li>
        <li><Inline>{`belaste obstetrische voorgeschiedenis;`}</Inline></li>
        <li><Inline>{`verhoogde kans op aangeboren of erfelijke afwijkingen;`}</Inline></li>
        <li><Inline>{`psychosociale factoren.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Deze zorg wordt bij voorkeur multidisciplinair gegeven.`}</Inline></p>
    </div>
  )
}
