import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Rode urine is niet altijd hemoglobine`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een belangrijke les is dat rode urine niet automatisch betekent dat er erytrocyten of hemoglobine in zitten. De urinstick kan negatief zijn voor hemoglobine terwijl de urine toch rood is.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Dat kan bijvoorbeeld komen door:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**kleurstoffen**;`}</Inline></li>
        <li><Inline>{`**bieten**;`}</Inline></li>
        <li><Inline>{`**bepaalde geneesmiddelen**;`}</Inline></li>
        <li><Inline>{`kleurstoffen in voeding;`}</Inline></li>
        <li><Inline>{`in een uitzonderlijk voorbeeld: **lippenstift**.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Ook andere urinekleuren kunnen voorkomen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**donkergeel tot goudgroen** bij veel bilirubine;`}</Inline></li>
        <li><Inline>{`**groene urine** na bepaalde geneesmiddelen of na methyleenblauw;`}</Inline></li>
        <li><Inline>{`**oranje urine** bij veel caroteen of door rifampicine;`}</Inline></li>
        <li><Inline>{`**paarse urine** bij porfyrie of bij een urineweginfectie met blaaskatheter en urinezak.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Tabel 1. Voorbeelden van afwijkende urinekleuren`}</Inline></SubHeading>
      <DataTable rows={[["Kleur van de urine", "Mogelijke verklaring"], ["Rood", "Bloed, maar ook kleurstoffen, voeding, medicijnen"], ["Donkergeel/goudgroen", "Bilirubine"], ["Groen", "Geneesmiddelen, methyleenblauw"], ["Oranje", "Caroteen, rifampicine"], ["Paars", "Porfyrie, purple urine bag syndrome"]]} />
    </div>
  )
}
