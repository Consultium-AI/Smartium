import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Behandeling van hartfalen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De behandeling van hartfalen hangt af van het type hartfalen, de ernst, de onderliggende oorzaak en de leeftijd en conditie van de patiënt. Het doel van de behandeling verschilt ook per patiënt.`}</Inline></p>
      <PBody text={`Bij een **jonge patiënt** zijn de doelen meestal:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`het verlengen van de levensduur;`}</Inline></li>
        <li><Inline>{`het verminderen van ziekenhuisopnames;`}</Inline></li>
        <li><Inline>{`het verbeteren van de kwaliteit van leven.`}</Inline></li>
      </ul>
      <PBody text={`Bij een **oudere patiënt** met veel comorbiditeit ligt de volgorde anders:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`het verbeteren van de kwaliteit van leven;`}</Inline></li>
        <li><Inline>{`het verminderen van ziekenhuisopnames;`}</Inline></li>
        <li><Inline>{`het verlengen van de levensduur.`}</Inline></li>
      </ul>
    </div>
  )
}
