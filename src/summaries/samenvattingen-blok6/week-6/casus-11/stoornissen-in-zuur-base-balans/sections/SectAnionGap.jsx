import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Anion gap`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een metabole acidose is de bicarbonaatconcentratie verlaagd. Dan kan bicarbonaat vervangen zijn door chloride, of door een ander negatief geladen ion.`}</Inline></p>
      <PBody text={`Dat onderscheid maak je met de **anion gap**: het verschil tussen gemeten kationen en gemeten anionen in bloed.`} />
      <PBody text={`Normaal is de anion gap ongeveer **8–12 mM** als alleen Na⁺ wordt meegeteld, of **11–16 mM** als ook K⁺ wordt meegeteld.`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Normale anion gap**: bicarbonaat is vooral vervangen door chloride, dus hyperchloremische metabole acidose.`}</Inline></li>
        <li><Inline>{`**Verhoogde anion gap**: bicarbonaat is vervangen door een onbekend anion, bijvoorbeeld ketonlichamen of lactaat.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Tabel 5. Metabole acidose met normale of verhoogde anion gap`}</Inline></SubHeading>
      <DataTable rows={[["Type metabole acidose", "Kenmerk", "Voorbeelden"], ["Normale anion gap", "HCO₃⁻ vervangen door Cl⁻", "diarree, renale tubulaire acidose, CA-remmers"], ["Verhoogde anion gap", "HCO₃⁻ vervangen door ander anion", "diabetes, vasten, ischemie, methanol, ethyleenglycol, aspirine-overdosering"]]} />
    </div>
  )
}
