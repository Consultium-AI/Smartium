import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Oriënterend neurologisch onderzoek`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Tijdens de secondary assessment doe je ten minste een oriënterend neurologisch onderzoek. Daarbij beoordeel je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`hersenstamfuncties, zoals pupilreflex, oogbewegingen, corneareflex en ademhalingspatroon;`}</Inline></li>
        <li><Inline>{`aanwijzingen voor traumatisch hersen- of schedelletsel, zoals liquorroe, brilhematoom en palpabele schedelafwijkingen;`}</Inline></li>
        <li><Inline>{`symmetrie van motoriek, reflexen, tonus en sensibiliteit;`}</Inline></li>
        <li><Inline>{`de mate van bewustzijnsdaling met de EMV-score.`}</Inline></li>
      </ul>
    </div>
  )
}
