import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Koorts in de zwangerschap`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Koorts in de zwangerschap kan verschillende oorzaken hebben en moet altijd serieus genomen worden. Mogelijke oorzaken zijn infecties, maar ook niet-infectieuze aandoeningen.`}</Inline></p>
    </div>
  )
}
