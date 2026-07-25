import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Tabel 9. Uitslag Villalta-score`}</Inline></SubHeading>
      <DataTable rows={[["Score", "Conclusie"], ["0–4", "geen PTS"], ["5–14", "mild tot matig PTS"], ["> 15 of ulcus aanwezig", "ernstig PTS"]]} />
      <p className="leading-relaxed"><Inline>{`Typische verschijnselen zijn onder andere chronische zwelling van het been, huidverharding, pigmentatieveranderingen en soms een genezen of actief ulcus.`}</Inline></p>
    </div>
  )
}
