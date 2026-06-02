import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Casus 1: welke onderzoeken zijn logisch?`}</Inline></SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`De drie goede aanvullende bepalingen zijn:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**CRP/BSE**: om ontsteking aan te tonen;`}</Inline></li>
        <li><Inline>{`**trombocyten**: om een trombocytopenie uit te sluiten;`}</Inline></li>
        <li><Inline>{`**creatinine**: om nierbetrokkenheid te beoordelen.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Urineonderzoek is ook belangrijk, omdat erytrocyten in de urine kunnen wijzen op betrokkenheid van de nieren. In de notities staat ook dat de urine ery’s 4+ bevat.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`ANCA-antistoffen worden juist doorgestreept. Dat past bij het idee dat dit niet de kern van deze casus is.`}</Inline></p>
    </div>
  )
}
