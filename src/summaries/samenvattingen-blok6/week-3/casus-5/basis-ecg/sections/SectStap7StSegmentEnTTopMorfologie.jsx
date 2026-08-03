import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Stap 7: ST-segment en T-top morfologie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het ST-segment en de T-top weerspiegelen de repolarisatie. Het ST-segment is normaal een iso-elektrische lijn van het J-punt tot het begin van de T-top.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`Een verhoging heet **ST-elevatie**`}</Inline></li>
        <li><Inline>{`Een verlaging heet **ST-depressie**`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`ST-elevatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`ST-elevatie meet je meestal 60 tot 80 ms na het J-punt. Een stijging van 1,5 tot 2 mm boven de basislijn is afwijkend.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een belangrijke oorzaak is acute ischemie, meestal bij een hartinfarct. Bij transmuraal ischemie door een afgesloten kransslagader zie je ST-elevatie. Andere oorzaken zijn onder andere linkerbundeltakblok, linkerventrikelhypertrofie, pericarditis en vroege repolarisatie.`}</Inline></p>
      <SubHeading><Inline>{`Lokalisatie van infarcten`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Afleidingen die in dezelfde richting kijken, horen bij bepaalde wandgebieden:`}</Inline></p>
      <SubHeading><Inline>{`Tabel 4. Afleidingen en bijbehorende wand`}</Inline></SubHeading>
      <DataTable rows={[["Afleidingen", "Wandgebied"], ["I, aVL", "Hoog lateraal"], ["II, III, aVF", "Onderwand"], ["V1, V2", "Septum"], ["V3, V4", "Voorwand"], ["V5, V6", "Laterale wand"], ["aVR", "Niet specifiek, kan wijzen op hoofdstamafwijkingen"]]} />
      <p className="leading-relaxed"><Inline>{`Reciproque depressies zijn depressies in tegenoverliggende afleidingen.`}</Inline></p>
      <SubHeading><Inline>{`Vroege repolarisatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Vroege repolarisatie is een onschuldig fenomeen, vaak bij jonge gezonde mensen en sporters. Kenmerken zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`concaaf ST-verloop`}</Inline></li>
        <li><Inline>{`duidelijk J-punt in de elevatie`}</Inline></li>
        <li><Inline>{`symmetrische T-toppen`}</Inline></li>
        <li><Inline>{`geen reciproque depressies`}</Inline></li>
        <li><Inline>{`elevaties in meer dan één stroomgebied`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`ST-depressie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`ST-depressie is een verlaging van meer dan 1 tot 1,5 mm onder de basislijn. De belangrijkste oorzaak is ook hier ischemie, maar dan meestal subendocardiaal. Andere oorzaken zijn reciproque depressies, linkerventrikelhypertrofie, digitalisgebruik, elektrolytstoornissen en een hoge hartfrequentie.`}</Inline></p>
      <SubHeading><Inline>{`T-topveranderingen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De T-top hoort in principe dezelfde richting te hebben als het QRS-complex. Als het QRS-complex gemiddeld positief is, is de T-top dat normaal ook. Afleiding III vormt hier soms een uitzondering op.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Belangrijke afwijkingen zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`spitse T-toppen bij hyperkaliëmie`}</Inline></li>
        <li><Inline>{`symmetrische negatieve T-toppen na een doorgemaakt infarct`}</Inline></li>
        <li><Inline>{`strain-patroon bij linkerventrikelhypertrofie`}</Inline></li>
        <li><Inline>{`inversie van de T-top`}</Inline></li>
        <li><Inline>{`vlakke T-toppen`}</Inline></li>
      </ul>
    </div>
  )
}
