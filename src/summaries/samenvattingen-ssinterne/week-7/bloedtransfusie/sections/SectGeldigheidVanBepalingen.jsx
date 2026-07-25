import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Geldigheid van bepalingen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De geldigheidsduur van transfusiegerelateerde bepalingen is belangrijk in de praktijk.`}</Inline></p>
      <DataTable rows={[["Tabel 4. Geldigheid van transfusiebepalingen"], ["ABO-(D)-bloedgroep", "praktisch iedere 72 uur herhalen kort voor transfusie"], ["Screening irregulaire antistoffen bij recente zwangerschap/transfusie", "72 uur"], ["Screening irregulaire antistoffen zonder recente zwangerschap/transfusie", "3 maanden"], ["Kruisproef", "binnen 72 uur vóór de transfusie"]]} />
    </div>
  )
}
