import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Westley-Croup-score`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De Westley-Croup-score helpt om de ernst van laryngitis subglottica in te schatten. Er wordt gekeken naar intrekkingen, stridor, cyanose, bewustzijn en ademgeruis. De score loopt van mild tot dreigend respiratoir falen.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 3. Indeling van de Westley-Croup-score`}</Inline></SubHeading>
      <DataTable rows={[["Ernst", "Score"], ["Mild", "0–2"], ["Matig", "3–5"], ["Ernstig", "6–11"], ["Dreigend respiratoir falen", "12–17"]]} />
      <p className="leading-relaxed"><Inline>{`Bij een ernstig beeld kunnen de punten bijvoorbeeld komen door duidelijke intrekkingen, stridor zonder stethoscoop en/of in rust, verminderd bewustzijn en afgenomen ademgeruis. Cyanose telt mee als de saturatie onder 92% komt.`}</Inline></p>
    </div>
  )
}
