import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Tabel 2. De aldosteronparadox in het kort`}</Inline></SubHeading>
      <DataTable rows={[["Situatie", "RAAS/angiotensine II", "Natriumflow distaal", "Effect op kalium"], ["Hypovolemie", "Sterk geactiveerd", "Laag", "Geen kaliumexcretie"], ["Kaliumbelasting", "Niet geactiveerd", "Normaal", "Wel kaliumexcretie"]]} />
      <PBody text={`**Aandachtsvraag:** waarom leidt hoge aldosteronspiegel niet altijd tot kaliumverlies?
**Mini-antwoord:** omdat bij hypovolemie weinig natrium distaal aankomt door sterke proximale reabsorptie onder invloed van angiotensine II.`} />
    </div>
  )
}
