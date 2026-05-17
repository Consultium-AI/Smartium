import { Inline, PBody, DataTable } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Doelen van bewegen`}</Inline></h3>
      <p><Inline>{`Bewegen kan verschillende doelen hebben. In de praktijk zijn vooral drie soorten oefeningen belangrijk:`}</Inline></p>
      <p><Inline>{`**Spierversterkende activiteiten**: deze zijn bedoeld om kracht, vermogen, uithoudingsvermogen en spieromvang te verbeteren.`}</Inline></p>
      <p><Inline>{`**Botversterkende activiteiten**: hierbij wordt het lichaam met het eigen gewicht belast, wat helpt om de botten sterk te houden.`}</Inline></p>
      <p><Inline>{`**Balansoefeningen**: deze verbeteren de samenwerking van de spieren, zodat iemand makkelijker in evenwicht blijft en minder snel valt.`}</Inline></p>
      <p><Inline>{`Tabel 2. Doel van bewegen`}</Inline></p>
      <DataTable rows={[["Doel", "Wat wordt ermee verbeterd?", "Voorbeelden"], ["Spierversterkend", "Kracht, vermogen, uithoudingsvermogen, spieromvang", "krachttraining, opstaan uit stoel, springen"], ["Botversterkend", "Botsterkte", "rennen, springen, touwtje springen"], ["Balans", "Evenwicht en spiercoördinatie", "op één been staan, yoga, dansen"]]} />
      <PBody text={`**Aandacht-vragetje:** *Wat is het verschil tussen spierversterkend en botversterkend bewegen?*  
**Kort antwoord:** Spierversterkend maakt spieren sterker; botversterkend belast het skelet met het eigen lichaamsgewicht en helpt botten sterk te houden.`} />
    </div>
  )
}
