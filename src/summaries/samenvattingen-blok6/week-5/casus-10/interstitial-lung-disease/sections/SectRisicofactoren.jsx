import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Risicofactoren`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij reumatoïde artritis zijn risicofactoren voor ILD:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`mannelijk geslacht`}</Inline></li>
        <li><Inline>{`hogere leeftijd`}</Inline></li>
        <li><Inline>{`langere ziekteduur`}</Inline></li>
        <li><Inline>{`roken`}</Inline></li>
        <li><Inline>{`hogere ontstekingswaarden in bloed`}</Inline></li>
        <li><Inline>{`aanwezigheid van auto-antistoffen zoals reumafactor en anti-CCP`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij systemische sclerose zijn diffuse systemische sclerose en anti-Scl-70-positiviteit belangrijke risicofactoren.`}</Inline></p>
    </div>
  )
}
