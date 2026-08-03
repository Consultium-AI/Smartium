import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Behandeling`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De behandeling van HP draait om vroeg herkennen en ingrijpen. Hoe eerder de diagnose wordt gesteld, hoe beter de kans om verdere schade te beperken.`}</Inline></p>
    </div>
  )
}
