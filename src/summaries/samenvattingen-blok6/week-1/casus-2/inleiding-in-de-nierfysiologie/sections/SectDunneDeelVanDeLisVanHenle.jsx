import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Dunne deel van de lis van Henle`}</Inline></SubHeading>
      <PBody text={`Het **dunne deel van de lis van Henle** ligt in het niermerg. Het neergaande deel is doorlaatbaar voor water, maar niet voor zouten. Daardoor wordt water teruggeresorbeerd en raakt de voorurine geconcentreerd.`} />
      <PBody text={`Het opgaande deel is juist weinig doorlaatbaar voor water, maar laat passieve reabsorptie van natrium en chloride toe. Dit segment speelt een belangrijke rol in het **tegenstroomprincipe** voor urineconcentratie.`} />
    </div>
  )
}
