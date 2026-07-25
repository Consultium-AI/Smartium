import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Tabel 7. Gebruikelijke doseringen van DOAC’s bij DVT`}</Inline></SubHeading>
      <DataTable rows={[["DOAC", "Dosering"], ["Rivaroxaban", "2x daags 15 mg gedurende 3 weken, daarna 1x daags 20 mg"], ["Apixaban", "2x daags 10 mg gedurende 1 week, daarna 2x daags 5 mg; na 6 maanden 2x daags 2,5 mg"], ["Edoxaban", "eerst 5 dagen LMWH, daarna 1x daags 60 mg"], ["Dabigatran", "eerst 5 dagen LMWH, daarna 2x daags 150 mg"]]} />
    </div>
  )
}
