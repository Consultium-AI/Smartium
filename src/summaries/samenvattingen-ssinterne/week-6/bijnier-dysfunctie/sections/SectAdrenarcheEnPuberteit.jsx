import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Adrenarche en puberteit`}</Inline></SubHeading>
      <PBody text={`De binnenste zone van de bijnierschors, de zona reticularis, is bij de geboorte nog niet aanwezig. Deze ontwikkelt zich pas rond de leeftijd van 5 tot 8 jaar. Dit heet **adrenarche**.`} />
      <PBody text={`**Aandachtsvraag:** wat is het gevolg van adrenarche?
**Mini-antwoord:** de productie van bijnierandrogenen neemt toe, wat lokaal in de huid zorgt voor schaam- en okselhaar.`} />
      <p className="leading-relaxed"><Inline>{`De bijnierandrogenen zijn vooral voorlopers. Ze worden elders in het lichaam omgezet in actieve androgenen en oestrogenen.`}</Inline></p>
    </div>
  )
}
