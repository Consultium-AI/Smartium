import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Serum en plasma`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het verschil tussen serum en plasma is een klassiek basisbegrip.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Plasma** is het vloeibare deel van bloed **met stollingsfactoren** erin.`}</Inline></li>
        <li><Inline>{`**Serum** is het vloeibare deel dat overblijft **na stolling**; daarbij zijn de stollingsfactoren dus grotendeels verdwenen.`}</Inline></li>
      </ul>
      <PBody text={`Je kunt het zo onthouden: plasma is bloedvloeistof **voor** stolling, serum is bloedvloeistof **na** stolling.`} />
      <SubHeading><Inline>{`Stollingsfactoren: aanwezig of afwezig?`}</Inline></SubHeading>
      <PBody text={`In **serum** zijn stollingsfactoren afwezig, omdat het bloed eerst heeft mogen stollen. In **plasma** zijn ze nog aanwezig, omdat de stolling juist is tegengegaan met een additief in de buis.`} />
      <SubHeading><Inline>{`Kleine verschillen tussen serum en plasma`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Voor sommige biomarkers is er een klein verschil tussen serum en plasma. Twee voorbeelden zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Kalium**: in serum kan de concentratie iets hoger zijn dan in plasma, omdat tijdens het stollen kalium uit bloedcellen kan vrijkomen.`}</Inline></li>
        <li><Inline>{`**Totaal eiwit**: hier kan ook een klein verschil bestaan tussen serum en plasma, doordat plasma nog stollingsfactoren bevat en serum niet.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Tabel 1. Bloedafnamebuizen en materiaal`}</Inline></SubHeading>
      <DataTable rows={[["Buistype", "Dopkleur", "Verkregen materiaal"], ["EDTA", "paars/lila", "plasma"], ["Citraat", "lichtblauw", "plasma"], ["Heparine", "groen", "plasma"], ["Stolbuis", "rood/geel afhankelijk van type", "serum"]]} />
      <SubHeading><Inline>{`Welke buis gebruik je?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Voor verschillende bepalingen is een andere buis nodig. Dat hangt samen met het soort monster en met eventuele stolling of toevoegingen.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 2. Voorbeelden van geschikte buizen per biomarker`}</Inline></SubHeading>
      <DataTable rows={[["Biomarker", "EDTA", "Citraat", "Heparine", "Stolbuis"], ["Kreatinine", "", "", "x", "x"], ["Hemoglobine", "x", "", "", ""], ["PT", "", "x", "", ""], ["Leukocyten", "x", "", "", ""], ["ALAT", "", "", "x", "x"], ["Actief B12", "x", "", "", ""], ["Chromogranine A", "", "", "", "x"]]} />
      <PBody text={`**Aandachtspunt:** sommige bepalingen kunnen in meer dan één type materiaal worden gedaan, maar in de praktijk is het belangrijk om de juiste buis te kiezen voor een betrouwbare uitslag.`} />
    </div>
  )
}
