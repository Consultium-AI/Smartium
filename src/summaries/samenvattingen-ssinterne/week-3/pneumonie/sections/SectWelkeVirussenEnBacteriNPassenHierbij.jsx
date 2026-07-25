import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Welke virussen en bacteriën passen hierbij?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een alveolair-interstitieel beeld denk je vaak aan virale verwekkers zoals influenza en RS-virus. CMV veroorzaakt bij immuuncompetente personen meestal geen pneumonie. Norovirus geeft juist gastro-intestinale infecties en past dus niet.`}</Inline></p>
      <PBody text={`Als er daarna een bacteriële superinfectie ontstaat na influenza, dan zijn vooral **S. aureus** en **S. pneumoniae** belangrijke verwekkers. In deze casus wijzen de Gram-positieve coccen en de kliniek vooral richting **S. aureus**.`} />
    </div>
  )
}
