import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Positieve FIT`}</Inline></SubHeading>
      <PBody text={`Als iemand bloed in de ontlasting heeft, is de kans niet meteen groot dat er darmkanker is. De kans op darmkanker is ongeveer **10%**. De kans op een voortgeschreden, niet-kwadaardige poliep is ongeveer **40%**. Dat laat zien dat een positieve FIT niet automatisch kanker betekent, maar wel verder onderzoek nodig maakt.`} />
    </div>
  )
}
