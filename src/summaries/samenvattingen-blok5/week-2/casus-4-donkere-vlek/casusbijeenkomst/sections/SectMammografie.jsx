import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Mammografie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een mammogram is de eerste stap in de beeldvorming. Het doel is niet alleen het zien van een afwijking, maar ook het inschatten van de kans op maligniteit.`}</Inline></p>
    </div>
  )
}
