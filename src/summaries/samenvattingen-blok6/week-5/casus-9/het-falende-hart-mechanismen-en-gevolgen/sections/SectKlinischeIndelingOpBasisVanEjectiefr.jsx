import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Klinische indeling op basis van ejectiefractie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`In de kliniek delen we hartfalen vaak in op basis van de ejectiefractie. Dat geeft drie hoofdgroepen:`}</Inline></p>
      <PBody text={`**Tabel 5. Klinische indeling van hartfalen**`} />
      <DataTable rows={[["Type", "EF", "Onderliggend mechanisme"], ["HFrEF", "< 40%", "Systolische dysfunctie"], ["HFmrEF", "40–49%", "Mild verminderde systolische functie, soms gemengd"], ["HFpEF", "≥ 50%", "Diastolische dysfunctie"]]} />
    </div>
  )
}
