import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Vaststellen van de zwangerschap`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Zwangerschap wordt in eerste instantie vastgesteld met een zwangerschapstest. Die test berust op het aantonen van hCG in de urine. De test heeft een sensitiviteit en specificiteit van 99%. Als er daarnaast ook subjectieve zwangerschapstekenen zijn, zoals moeheid en gespannen borsten, is zwangerschap vrijwel zeker.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij twijfel, bijvoorbeeld bij een onregelmatige cyclus of problemen met de test, wordt deze herhaald. Zekerheid over een intacte zwangerschap krijg je met echoscopie vanaf ongeveer 6 weken zwangerschapsduur via vaginale echo, of door het horen van foetale harttonen met een doptone vanaf ongeveer 12 weken.`}</Inline></p>
      <SubHeading><Inline>{`Hoe bepaal je de zwangerschapsduur?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De normale draagtijd van de mens is 266 dagen vanaf de ovulatie. Omdat de ovulatie lastig vast te stellen is, wordt in de praktijk gewerkt met amenorroe: de duur vanaf de eerste dag van de laatste menstruatie. Dan kom je uit op 280 dagen, oftewel 40 weken.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De berekening op basis van de laatste menstruatie is niet erg betrouwbaar, omdat cycli vaak niet exact regelmatig zijn. Daarom wordt tegenwoordig de uitgerekende datum bepaald op basis van de eerste echo, meestal een termijnecho tussen 10 en 13 weken. De crown-rump length, oftewel kruin-stuitlengte (CRL), is het meest geschikt tussen 10 en 12 weken.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 1. Zwangerschapsduur en begrippen`}</Inline></SubHeading>
      <DataTable rows={[["Begrip", "Betekenis"], ["Amenorroe", "Zwangerschapsduur gerekend vanaf de eerste dag van de laatste menstruatie"], ["Conceptieduur", "Duur vanaf bevruchting/ovulatie"], ["Termijnecho", "Echo waarmee de zwangerschapsduur en uitgerekende datum worden vastgesteld"], ["CRL", "Kruin-stuitlengte, gebruikt bij vroege echo"]]} />
      <p className="leading-relaxed"><Inline>{`De regel van Nägele is een klassieke manier om de uitgerekende datum te berekenen: eerste dag van de laatste menstruatie + 9 maanden + 1 week. Tegenwoordig wordt deze berekening vervangen door de echoscopische bepaling met CRL.`}</Inline></p>
      <SubHeading><Inline>{`Aandacht-vraagje`}</Inline></SubHeading>
      <PBody text={`**Waarom wordt in de praktijk meestal amenorroe gebruikt?**
Omdat de eerste dag van de laatste menstruatie veel makkelijker vast te stellen is dan het exacte moment van ovulatie.`} />
    </div>
  )
}
