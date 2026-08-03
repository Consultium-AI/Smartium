import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Backward failure`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij backward failure loopt de druk op achter het hart. Links leidt dat tot verhoogde druk in het linker atrium en de longvenen, met longstuwing en longoedeem als gevolg. Daardoor ontstaan dyspneu, orthopneu, nachtelijk hoesten en crepitaties.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Rechts leidt backward failure tot verhoogde veneuze druk in het lichaam. Dan zie je perifeer oedeem, leverstuwing, ascites en gestuwde halsvenen. Het bloed hoopt zich dus op vóór het hart.`}</Inline></p>
    </div>
  )
}
