import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Tabel 5. Antistollingsmiddelen en hun werking`}</Inline></SubHeading>
      <DataTable rows={[["Middel", "Werking"], ["Heparine", "versterkt de werking van antitrombine"], ["LMWH", "remt vooral factor Xa"], ["Pentasaccharide (fondaparinux)", "remt factor Xa"], ["Vitamine K-antagonist", "verlaagt factor II, VII, IX en X"], ["DOAC", "remt factor Xa of trombine (FIIa)"]]} />
    </div>
  )
}
