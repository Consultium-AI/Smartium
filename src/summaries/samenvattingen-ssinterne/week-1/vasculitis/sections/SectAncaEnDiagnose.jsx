import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`ANCA en diagnose`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij GPA kunnen ANCA-bepalingen helpen. Een positief pANCA met anti-MPO past bij ANCA-geassocieerde vasculitis. De combinatie van klachten, afwijkend laboratoriumonderzoek en ANCA-positiviteit ondersteunt de diagnose.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Histologische bevestiging met een biopt van nier of long kan de diagnose bevestigen, maar is niet altijd noodzakelijk. Een biopt is invasief en levert niet altijd een conclusieve uitslag op. Bij voldoende klinische en biochemische aanwijzingen kun je de diagnose ook zonder biopt stellen.`}</Inline></p>
    </div>
  )
}
