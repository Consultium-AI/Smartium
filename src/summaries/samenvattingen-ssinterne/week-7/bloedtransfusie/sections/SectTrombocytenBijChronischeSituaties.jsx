import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Trombocyten bij chronische situaties`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Voor trombocytentransfusie gelden verschillende drempels, afhankelijk van de ingreep of situatie. Na transfusie controleer je het trombocytenaantal het liefst na 1 uur. Als het aantal niet stijgt, kan er antistofvorming tegen trombocyten zijn en is speciale selectie van een donor nodig.`}</Inline></p>
      <DataTable rows={[["Tabel 6. Voorbeelden van trombocytenaantallen per ingreep"], ["Geen bijzondere maatregelen", "sternum/cristapunctie, huidstans, diagnostische pleura- of ascitespunctie met dunne naald"], [">20 x 10^9/L", "scopieën zonder biopsie, EMG, verwijderen CVC, maagsonde, katheter à demeure, lumbaalpunctie"], [">50 x 10^9/L", "veel invasieve ingrepen, biopsieën, chirurgie, endoscopie met biopsie, leverbiopsie, pacemakerimplantatie, tandextracties"], [">100 x 10^9/L", "neurochirurgie, oogchirurgie behalve cataract"]]} />
    </div>
  )
}
