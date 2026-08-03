import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Waarom verandert de halfwaardetijd?`}</Inline></SubHeading>
      <PBody text={`De **halfwaardetijd (T1/2)** hangt af van het distributievolume en de klaring. Als het Vd groter wordt en de klaring gelijk blijft, wordt de halfwaardetijd langer.`} />
      <p className="leading-relaxed"><Inline>{`Bij de obese persoon is de klaring gelijk, maar het Vd is groter. Daardoor is de halfwaardetijd langer. De fenytoïne die zich buiten de bloedbaan bevindt, vooral in vetweefsel, moet eerst terug naar de bloedbaan voordat het via de nieren kan worden verwijderd. Dat kost tijd.`}</Inline></p>
      <PBody text={`**Aandacht-vraagje:** Waarom wordt de halfwaardetijd langer bij een groter Vd?
**Mini-antwoord:** Omdat meer geneesmiddel eerst uit de weefsels terug moet naar het bloed voordat het kan worden geklaard.`} />
    </div>
  )
}
