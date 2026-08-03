import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Referentiewaarden: ziek of gezond?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Om te beoordelen of een longfunctie normaal is, vergelijk je de gemeten waarden met referentiewaarden. De Global Lung Initiative heeft een grote database met longwaarden van gezonde mensen. Op basis van leeftijd, lengte, geslacht en geografische afkomst kun je voorspelde waarden berekenen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De uitslag wordt vaak uitgedrukt als:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`predicted: de voorspelde waarde;`}</Inline></li>
        <li><Inline>{`% predicted: het percentage van de voorspelde waarde;`}</Inline></li>
        <li><Inline>{`Z-score: het aantal standaarddeviaties dat de meting afwijkt van het gemiddelde.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Een Z-score tussen -1,64 en +1,64 valt binnen het normale bereik. Een Z-score lager dan -1,64 ligt onder de Lower Limit of Normal, dus buiten de normale range.`}</Inline></p>
      <DataTable rows={[["Tabel 3. Interpretatie van referentiewaarden"], ["Begrip", "Betekenis"], ["Predicted", "Voorspelde waarde"], ["% predicted", "Gemeten waarde als percentage van voorspeld"], ["Z-score", "Afwijking in standaarddeviaties"], ["LLN", "Lower Limit of Normal, ondergrens van normaal"], ["ULN", "Upper Limit of Normal, bovengrens van normaal"]]} />
      <p className="leading-relaxed"><Inline>{`Een waarde kan dus op het eerste gezicht nog redelijk lijken in procenten, maar toch afwijkend zijn als de Z-score onder -1,64 ligt.`}</Inline></p>
    </div>
  )
}
