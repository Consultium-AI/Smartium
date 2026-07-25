import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Secondary assessment en aanvullend onderzoek`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na de primary assessment en eventuele directe behandeling volgt de secondary assessment. Daarbij doe je een uitgebreide anamnese, indien mogelijk, en altijd een hetero-anamnese. Daarna volgt een top-tot-teen lichamelijk onderzoek met oriënterend neurologisch onderzoek.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Aanvullend onderzoek bestaat onder andere uit:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`elektrolyten;`}</Inline></li>
        <li><Inline>{`calcium;`}</Inline></li>
        <li><Inline>{`creatinine;`}</Inline></li>
        <li><Inline>{`leverenzymen;`}</Inline></li>
        <li><Inline>{`intoxicatiescreening;`}</Inline></li>
        <li><Inline>{`arteriële bloedgasanalyse inclusief HbCO;`}</Inline></li>
        <li><Inline>{`stolling;`}</Inline></li>
        <li><Inline>{`eventueel vitamine B1;`}</Inline></li>
        <li><Inline>{`TSH;`}</Inline></li>
        <li><Inline>{`cortisol;`}</Inline></li>
        <li><Inline>{`ammoniak.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Als er na de secondary assessment nog geen duidelijke diagnose is, consulteer je de neuroloog voor een CT van de hersenen en een lumbaalpunctie. Bij verdenking op alcoholabusus geef je thiamine 500 mg i.v.`}</Inline></p>
    </div>
  )
}
