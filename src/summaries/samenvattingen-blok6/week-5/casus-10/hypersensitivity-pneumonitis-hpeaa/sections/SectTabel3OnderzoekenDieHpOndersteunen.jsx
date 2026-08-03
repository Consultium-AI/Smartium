import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Tabel 3. Onderzoeken die HP ondersteunen`}</Inline></SubHeading>
      <DataTable rows={[["Onderzoek", "Typische bevinding"], ["Bloedonderzoek", "IgG-antistoffen tegen vermoedelijke antigenen"], ["BAL", "Lymfocytose >15%, soms tot 60%"], ["Longbiopt", "Niet-verkazende granulomen"], ["HRCT", "Ground-glass opaciteiten, centrilobulaire noduli, fibrose, air trapping"]]} />
    </div>
  )
}
