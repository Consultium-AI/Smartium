import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Tabel 5. Indeling op basis van ejectiefractie`}</Inline></SubHeading>
      <DataTable rows={[["Categorie", "Afkorting", "Ejectiefractie"], ["Hartfalen met verminderde ejectiefractie", "HFrEF", "LVEF < 40%"], ["Hartfalen met mid-range ejectiefractie", "HFmrEF", "LVEF 40–49%"], ["Hartfalen met preserved ejectiefractie", "HFpEF", "LVEF ≥ 50%"]]} />
      <p className="leading-relaxed"><Inline>{`HFmrEF is de tussencategorie. De medicamenteuze behandeling in deze groep wordt nog verder onderzocht.`}</Inline></p>
    </div>
  )
}
