import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Gaswisseling in de long: ventilatie, diffusie en perfusie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De belangrijkste taak van de long is gaswisseling: zuurstof opnemen en koolstofdioxide afgeven. Dat gebeurt niet in één stap, maar als een continu proces met drie onderdelen.`}</Inline></p>
      <PBody text={`**Ventilatie** betekent dat lucht de alveoli bereikt en weer verlaat.
**Diffusie** is het passieve transport van gassen over het alveolo-capillaire membraan, ook wel de bloedgasbarrière genoemd. Daarbij bewegen gassen van een gebied met hoge partiële druk naar een gebied met lage partiële druk.
**Perfusie** is de doorstroming van bloed door de longcapillairen.`} />
      <p className="leading-relaxed"><Inline>{`Bij de diffusie zijn er eigenlijk twee dingen belangrijk. Eerst verplaatst het gas zich door het membraan zelf. Daarna volgt in het bloed een chemische stap: zuurstof bindt aan hemoglobine en koolstofdioxide wordt omgezet naar bicarbonaat. Zo wordt de gaswisseling in stand gehouden.`}</Inline></p>
      <SubHeading><Inline>{`Wat is partiële druk?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Partiële druk is de druk die één gas in een gasmengsel uitoefent. Dat is belangrijk, omdat juist het verschil in partiële druk de richting van diffusie bepaalt. Volgens de wet van Dalton is de totale druk van een gasmengsel de som van de partiële drukken van de afzonderlijke gassen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij zeeniveau is de atmosferische druk ongeveer 760 mmHg. Omdat zuurstof ongeveer 21% van de lucht uitmaakt, is de partiële zuurstofdruk in ingeademde lucht ongeveer 160 mmHg. In de alveoli is de pO2 lager, ongeveer 100 mmHg, en in gemengd veneus bloed nog lager, ongeveer 40 mmHg. Daardoor diffundeert zuurstof van de alveoli naar het bloed. Koolstofdioxide beweegt juist in de omgekeerde richting.`}</Inline></p>
      <PBody text={`**Aandacht-vraagje:** Waarom gaat zuurstof van de alveoli naar het bloed?
**Mini-antwoord:** Omdat de partiële druk van zuurstof hoger is in de alveoli dan in het bloed.`} />
    </div>
  )
}
