import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`AV-geleidingsstoornissen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`AV-geleidingsstoornissen zijn stoornissen in de doorgifte van de prikkel van atria naar ventrikels. De ernst wordt ingedeeld in verschillende graden.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 2. AV-blokken`}</Inline></SubHeading>
      <DataTable rows={[["Type", "ECG-kenmerk", "Betekenis"], ["1e graads AV-blok", "PR-tijd > 200 ms", "Vertraagde geleiding, maar elke P-top wordt gevolgd door een QRS"], ["2e graads AV-blok type 1 (Wenckebach)", "PR-tijd verlengt steeds, daarna valt een slag uit", "Geleidingsvertraging met periodiek uitval"], ["2e graads AV-blok type 2 (Mobitz)", "Geen PR-verlenging, plots uitval van een P-top", "Ernstiger, vaak pathologisch"], ["3e graads AV-blok", "Geen relatie tussen P-toppen en QRS-complexen", "Volledige blokkade"], ["Hooggradig AV-blok", "Meerdere P-toppen achter elkaar worden niet gevolgd", "Ernstig, behandelen als 3e graads"], ["2:1-blok", "Elke tweede P-top valt uit", "Niet goed verder te typeren"]]} />
      <PBody text={`Bij een **eerstegraads AV-blok** is de geleiding vertraagd, maar niet onderbroken. Elke P-top wordt nog gevolgd door een QRS-complex. Dit is in principe ongevaarlijk en behoeft meestal geen behandeling.`} />
      <PBody text={`Bij een **tweedegraads AV-blok type 1** verlengt de PR-tijd steeds totdat een slag uitvalt. Daarna begint het patroon opnieuw. Dit is vaak nog fysiologisch en wordt vooral behandeld als er klachten zijn.`} />
      <PBody text={`Bij een **tweedegraads AV-blok type 2** ontbreekt die geleidelijke verlenging. De uitval komt onverwacht. Dit is vrijwel altijd pathologisch en verdient behandeling.`} />
      <PBody text={`Bij een **derdegraads AV-blok** is er geen enkele relatie meer tussen P-toppen en QRS-complexen. De atria en ventrikels werken dan los van elkaar.`} />
      <PBody text={`Een **hooggradig AV-blok** betekent dat meerdere P-toppen achter elkaar niet worden gevolgd door QRS-complexen, terwijl er daarvoor en daarna wel geleiding is. Dit moet je behandelen als een derdegraads AV-blok.`} />
      <PBody text={`Een **2:1-blok** betekent dat elke tweede P-top niet wordt voortgeleid. Dan kun je niet goed zien of er eerst PR-verlenging was.`} />
      <SubHeading><Inline>{`Behandeling van AV-blok`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De behandeling hangt af van de ernst en de oorzaak.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`Een 1e-graads AV-blok behoeft meestal geen behandeling.`}</Inline></li>
        <li><Inline>{`Een 2e-graads type 1 wordt alleen behandeld bij klachten.`}</Inline></li>
        <li><Inline>{`Een 2e-graads type 2 verdient behandeling.`}</Inline></li>
        <li><Inline>{`Een 3e-graads AV-blok moet direct behandeld worden.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Behandeling kan bestaan uit:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`het stoppen van vertragende medicatie;`}</Inline></li>
        <li><Inline>{`het geven van versnellende medicatie, zoals atropine of isoprenaline;`}</Inline></li>
        <li><Inline>{`tijdelijke of definitieve pacemakerplaatsing;`}</Inline></li>
        <li><Inline>{`in noodsituaties transcutaan pacen.`}</Inline></li>
      </ul>
    </div>
  )
}
