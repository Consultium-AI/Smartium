import { Inline, PBody, DataTable } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Symptomen van DM2`}</Inline></h3>
      <p><Inline>{`De klachten bij DM2 zijn vaak subtieler dan bij DM1. Klassieke symptomen van hyperglykemie kunnen voorkomen, maar vaker zijn de klachten vaag. Daardoor wordt DM2 regelmatig laat ontdekt.`}</Inline></p>
      <p><Inline>{`Tabel 4. Belangrijkste symptomen van DM2 en de verklaring`}</Inline></p>
      <DataTable rows={[["Symptoom", "Verklaring"], ["Vermoeidheid", "Glucose komt minder goed de cellen in, waardoor energie tekortschiet; daarnaast wordt spierweefsel afgebroken voor gluconeogenese"], ["Polyurie", "Glucose in de urine trekt water mee via osmose, waardoor meer urine ontstaat"], ["Polydipsie", "Door het vochtverlies bij polyurie ontstaat dorst"], ["Onbedoeld gewichtsverlies", "Vetten worden minder goed opgeslagen en soms juist afgebroken als energiebron"], ["Visusproblemen", "Toegenomen bloedglucose kan zwelling van ooglenzen veroorzaken, waardoor veraf kijken lastiger wordt"], ["Recidiverende schimmel- en urineweginfecties", "Meer glucose en een verminderde afweer geven een gunstig groeimedium voor infecties"]]} />
      <p><Inline>{`Een belangrijk punt is dat **neuropathie** ook al bij de diagnose aanwezig kan zijn. Dit kan gaan om mononeuropathie, neuropathische pijn of sensibiliteitsstoornissen. Omdat de klachten bij DM2 vaak geleidelijk ontstaan, worden ze soms niet direct aan diabetes gekoppeld.`}</Inline></p>
    </div>
  )
}
