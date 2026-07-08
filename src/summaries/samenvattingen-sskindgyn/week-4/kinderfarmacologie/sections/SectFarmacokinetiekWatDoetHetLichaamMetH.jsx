import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Farmacokinetiek: wat doet het lichaam met het geneesmiddel?`}</Inline></SubHeading>
      <PBody text={`Farmacokinetiek gaat over **absorptie, distributie, metabolisme en eliminatie**. Bij kinderen verlopen deze processen anders dan bij volwassenen.`} />
    </div>
  )
}
