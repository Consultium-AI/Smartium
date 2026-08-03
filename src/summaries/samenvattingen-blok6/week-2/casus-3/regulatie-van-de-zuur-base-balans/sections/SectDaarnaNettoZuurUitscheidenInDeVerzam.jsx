import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Daarna: netto zuur uitscheiden in de verzamelbuis`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De echte netto zuur excretie vindt plaats in de verzamelbuis. Daar pompt de H+-ATPase actief H+ het lumen in. Dit is een actief proces en kan een maximale gradiënt van ongeveer 1:1000 opbouwen. Daardoor kan de urine pH niet lager worden dan ongeveer 4,4 tot 4,5.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Vrij H+ uitscheiden levert maar weinig op, omdat de hoeveelheid die je zo kwijt kunt beperkt is. Daarom gebruikt de nier buffers in de urine om meer H+ kwijt te kunnen zonder dat de urine nog zuurder hoeft te worden.`}</Inline></p>
      <SubHeading><Inline>{`Drie manieren om H+ uit te scheiden`}</Inline></SubHeading>
      <PBody text={`**Tabel 2. Mechanismen van H+-uitscheiding in de urine**`} />
      <DataTable rows={[["Mechanisme", "Belang", "Opmerking"], ["NH3/NH4+-systeem", "Belangrijkst", "Kan in absolute zin 50-100 mmol H+ binden"], ["Titreerbaar zuur", "Tweede plaats", "Afhankelijk van het dieet"], ["Vrij H+", "Minst belangrijk", "Beperkt door minimale urine-pH"]]} />
      <p className="leading-relaxed"><Inline>{`Het NH3/NH4+-systeem is het belangrijkste systeem. NH3 is altijd beschikbaar en kan snel worden ingezet. Het bindt H+ tot NH4+, waardoor H+ effectief kan worden uitgescheiden. Titreerbaar zuur, zoals fosfaat of sulfaat, kan ook H+ binden, maar de hoeveelheid daarvan hangt af van het dieet en is dus minder betrouwbaar voor snelle regulatie.`}</Inline></p>
    </div>
  )
}
