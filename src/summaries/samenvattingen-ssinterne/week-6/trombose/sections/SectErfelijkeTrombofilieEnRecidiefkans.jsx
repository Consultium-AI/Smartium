import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Erfelijke trombofilie en recidiefkans`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een erfelijke trombofiliefactor verhoogt de kans op een eerste trombose, maar de kans op een tweede trombose is niet duidelijk extra verhoogd door die erfelijke factor alleen. Veneuze trombose is namelijk multifactorieel. Na een doorgemaakte trombose is het recidiefrisico al verhoogd, ook zonder erfelijke trombofilie.`}</Inline></p>
    </div>
  )
}
