import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Indaling volgens de vlakken van Hodge`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De vlakken van Hodge delen het baringskanaal in. Hodge 3 loopt door de spinae ischiadicae, dus door de interspinaallijn. Daarmee kun je de indaling van het hoofd beter beschrijven.`}</Inline></p>
    </div>
  )
}
