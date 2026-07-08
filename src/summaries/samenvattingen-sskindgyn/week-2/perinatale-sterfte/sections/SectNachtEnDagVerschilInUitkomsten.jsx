import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Nacht en dag: verschil in uitkomsten`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`In ziekenhuizen blijkt de som van intra-partum sterfte en vroege neonatale sterfte ’s nachts hoger te zijn dan overdag. Mogelijke verklaringen zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`minder ervaren zorgverleners aanwezig;`}</Inline></li>
        <li><Inline>{`senior zorgverleners zijn op afstand;`}</Inline></li>
        <li><Inline>{`vermoeidheid;`}</Inline></li>
        <li><Inline>{`minder overleg tussen junior en senior;`}</Inline></li>
        <li><Inline>{`andere verwijs- en organisatiepatronen.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Dit laat zien dat niet alleen medische factoren, maar ook organisatie van zorg invloed kan hebben op uitkomsten.`}</Inline></p>
    </div>
  )
}
