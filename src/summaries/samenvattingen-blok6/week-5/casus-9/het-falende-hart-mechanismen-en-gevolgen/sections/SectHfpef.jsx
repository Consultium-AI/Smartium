import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`HFpEF`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`HFpEF staat voor heart failure with preserved ejection fraction. De EF is 50% of hoger, maar er zijn wel klachten van hartfalen. Het probleem zit hier vooral in de diastolische functie: de kamer is stijver, vult slechter en de vullingsdrukken lopen op. Vaak gaat het om oudere patiënten met hypertensie, diabetes en overgewicht. De diagnose is lastiger, omdat de EF normaal blijft en aanvullende echoparameters nodig zijn.`}</Inline></p>
      <PBody text={`**Tabel 6. Kenmerken van de drie klinische vormen**`} />
      <DataTable rows={[["Type", "Typische patiënt", "Belangrijkste eigenschap"], ["HFrEF", "Vaak gedilateerde ventrikel", "Verminderde contractiliteit"], ["HFmrEF", "Tussenvorm", "EF licht verlaagd"], ["HFpEF", "Vaak oudere patiënt met hypertensie/diabetes", "Stijve kamer, normale EF"]]} />
    </div>
  )
}
