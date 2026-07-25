import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Behandeling van ritmestoornissen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Er zijn verschillende behandelopties, afhankelijk van het ritme en de ernst van de situatie:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Elektrische cardioversie (ECV)**: een elektrische schok om het hart uit een abnormaal ritme te brengen.`}</Inline></li>
        <li><Inline>{`**Defibrillatie**: een elektrische schok bij levensbedreigende ritmes zoals VF.`}</Inline></li>
        <li><Inline>{`**Pacemakerplaatsing**: tijdelijk of definitief, om de elektrische aansturing over te nemen.`}</Inline></li>
        <li><Inline>{`**Medicatie**: anti-aritmica en andere middelen die invloed hebben op depolarisatie en repolarisatie.`}</Inline></li>
        <li><Inline>{`**Elektrofysiologisch onderzoek (EFO)** en **radiofrequente catheterablatie (RFCA)**: hiermee kan de elektrische geleiding worden onderzocht en beïnvloed. Bij ablatie worden kleine littekens gemaakt om geleiding te blokkeren.`}</Inline></li>
      </ul>
    </div>
  )
}
