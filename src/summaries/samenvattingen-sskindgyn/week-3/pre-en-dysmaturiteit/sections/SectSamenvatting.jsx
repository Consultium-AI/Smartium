import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <PBody text={`Prematuriteit en dysmaturiteit gaan vooral samen met **onrijpheid van organen** en **groeivertraging**. De belangrijkste acute problemen zitten vaak in de longen, darmen, hersenen en ogen. Daarom moet je bij deze kinderen denken aan IRDS, PDA, IVH, NEC, BPD en ROP. Groei wordt beoordeeld met groeicurves, en bij dreigende extreme vroeggeboorte spelen perinatale counseling en longrijping een belangrijke rol. De Apgar-score, navelstreng-pH en criteria van Levene helpen bij de beoordeling direct rond de geboorte. Op de lange termijn is vaak multidisciplinaire follow-up nodig.`} />
    </div>
  )
}
