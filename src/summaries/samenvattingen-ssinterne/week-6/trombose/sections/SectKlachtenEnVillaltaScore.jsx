import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Klachten en Villalta-score`}</Inline></SubHeading>
      <PBody text={`De klachten van PTS worden gescoord met de **Villalta-score**. Daarbij worden zowel symptomen als klinische tekenen beoordeeld.`} />
    </div>
  )
}
