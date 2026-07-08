import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Longgeluiden`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij auscultatie is een gestructureerde beoordeling belangrijk. Je beoordeelt eerst het ademgeruis en daarna de bijgeluiden.`}</Inline></p>
      <SubHeading><Inline>{`Ademgeruis`}</Inline></SubHeading>
      <PBody text={`Normaal hoor je **vesiculair** ademgeruis: symmetrisch en goed passend bij normale ventilatie. Als het ademgeruis verzwakt is, kan dat passen bij verminderde ventilatie, een afgesloten luchtweg, een infiltraat met gesloten bronchus of pleuravocht. **Bronchiaal** ademgeruis betekent dat het expirium luider is dan het inspirium; dat hoor je normaal boven de trachea, maar het kan ook passen bij een infiltraat met open bronchus.`} />
      <SubHeading><Inline>{`Bijgeluiden`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Rhonchi** zijn continue, muzikale geluiden. Polyfone rhonchi passen bij diffuse intrathoracale obstructie, zoals astma, bronchiolitis of bronchiolitis. Monofone rhonchi passen eerder bij lokale obstructie, bijvoorbeeld door een corpus alienum, stenose, vaatring of luchtwegmalacie.`}</Inline></li>
        <li><Inline>{`**Crepitaties** zijn discontinue geluiden. Fijne hoogfrequente crepitaties passen bijvoorbeeld bij virale bronchiolitis, een infiltraat met open bronchus, decompensatio cordis of interstitiële longpathologie. Grovere crepitaties kunnen passen bij bronchiëctasieën, longfibrose of bronchiolitis obliterans.`}</Inline></li>
        <li><Inline>{`**Slijmgeruis** of rochelen klinkt dichtbij en luid en is vaak zelfs voelbaar bij palpatie. Dit past bij mucusretentie en is vaak onschuldig.`}</Inline></li>
        <li><Inline>{`**Pleurawrijven** is zeldzaam en past bij pleuritis met weinig pleuravocht.`}</Inline></li>
        <li><Inline>{`**Wheezing** is piepen, vaak bij een intrathoracale obstructie.`}</Inline></li>
        <li><Inline>{`Een **verlengd expirium** betekent dat het expirium langer duurt dan het inspirium en past bij intrathoracale obstructie, zoals astma.`}</Inline></li>
      </ul>
      <PBody text={`Een belangrijk alarmsymptoom is een **silent chest**: dan hoor je nauwelijks of geen ademgeruis meer. Dat is een preterminaal teken.`} />
      <SubHeading><Inline>{`Tabel 2. Belangrijke longgeluiden en hun betekenis`}</Inline></SubHeading>
      <DataTable rows={[["Geluid", "Kenmerk", "Past bij"], ["Vesiculair ademgeruis", "normaal", "goed geventileerde long"], ["Verzwakt ademgeruis", "verminderd", "obstructie, infiltraat, pleuravocht"], ["Bronchiaal ademgeruis", "expirium luider dan inspirium", "infiltraat met open bronchus"], ["Rhonchi", "continu, muzikaal", "astma, bronchiolitis, obstructie"], ["Crepitaties", "discontinu", "slijm, infiltratie, interstitiële pathologie"], ["Slijmgeruis", "luid, dichtbij", "mucusretentie"], ["Pleurawrijven", "zeldzaam", "pleuritis"], ["Verlengd expirium", "expiratie langer dan inspiratie", "intrathoracale obstructie, astma"]]} />
    </div>
  )
}
