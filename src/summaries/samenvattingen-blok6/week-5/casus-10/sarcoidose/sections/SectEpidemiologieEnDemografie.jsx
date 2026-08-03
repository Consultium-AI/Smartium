import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Epidemiologie en demografie`}</Inline></SubHeading>
      <PBody text={`Sarcoïdose komt wereldwijd voor, maar de frequentie verschilt sterk per regio en populatie. De kans op sarcoïdose hangt samen met **leeftijd, geslacht, ras en etnische achtergrond**.`} />
      <PBody text={`De prevalentie varieert bijvoorbeeld van ongeveer **60 per 100.000** in de Verenigde Staten tot veel lagere of hogere waarden elders in de wereld. Ook de incidentie verschilt sterk.`} />
    </div>
  )
}
