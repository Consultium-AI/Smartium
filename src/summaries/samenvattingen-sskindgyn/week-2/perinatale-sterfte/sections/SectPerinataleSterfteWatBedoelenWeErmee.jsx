import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Perinatale sterfte: wat bedoelen we ermee?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Perinatale sterfte betekent letterlijk: sterfte rondom de geboorte. Het gaat om sterfte vóór de geboorte, dus foetale sterfte, en sterfte ná de geboorte, dus neonatale sterfte. In deze stof wordt perinatale sterfte gedefinieerd als sterfte per 1000 dood- en levendgeborenen vanaf een zwangerschapsduur van 22 weken tot 7 dagen na de geboorte.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Daarbij horen twee onderdelen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Foetale sterfte**: doodgeboorte vóór of tijdens de baring.`}</Inline></li>
        <li><Inline>{`**Vroege neonatale sterfte**: sterfte in de eerste week na de geboorte.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Er worden ook twee definities naast elkaar gebruikt:`}</Inline></p>
      <DataTable rows={[["Definitie", "Afbakening"], ["Internationale definitie", "Doodgeborenen en levendgeborenen van 500 gram en meer, plus sterfte in de eerste levensweek"], ["Nederlandse wettelijke definitie", "Doodgeborenen en levendgeborenen vanaf 24 weken zwangerschap, plus sterfte in de eerste levensweek"]]} />
      <PBody text={`In Nederland wordt juridisch dus de grens van **24 weken** aangehouden. Dat is niet hetzelfde als de grens van de WHO/FIGO, die **22 weken** gebruikt.`} />
      <PBody text={`**Aandacht-vraagje:** waarom is die grens belangrijk?
**Mini-antwoord:** omdat de manier van tellen invloed heeft op de cijfers en dus op de vergelijking tussen landen.`} />
    </div>
  )
}
