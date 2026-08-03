import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Dikke deel van de lis van Henle`}</Inline></SubHeading>
      <PBody text={`Het **dikke deel van de lis van Henle** ligt in het opgaande deel, terug richting de schors. Hier vindt actieve reabsorptie plaats van natrium, kalium en chloride via de **Na⁺/K⁺/2Cl⁻-co-transporter**.`} />
      <p className="leading-relaxed"><Inline>{`Dit segment is impermeabel voor water. Daardoor wordt de voorurine verdund. Tegelijk helpt dit deel bij het creëren van een osmotische gradiënt in het niermerg.`}</Inline></p>
    </div>
  )
}
