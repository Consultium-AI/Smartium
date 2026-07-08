import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Niet-hormonale alternatieven`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Niet iedere vrouw wil hormonale behandeling. Dan zijn er alternatieven, al is het effect vaak beperkt.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Mogelijke niet-hormonale opties zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`leefstijlinterventies, zoals meer bewegen;`}</Inline></li>
        <li><Inline>{`clonidine, vooral soms effectief bij vrouwen die tamoxifen gebruiken;`}</Inline></li>
        <li><Inline>{`SSRI’s, zoals efexor en fevarin;`}</Inline></li>
        <li><Inline>{`acupunctuur;`}</Inline></li>
        <li><Inline>{`voeding met fyto-oestrogenen.`}</Inline></li>
      </ul>
      <PBody text={`Bij deze behandelingen speelt ook een aanzienlijk **placebo-effect** mee. Dat betekent dat een deel van de verbetering niet alleen door het middel zelf komt, maar ook door verwachting en beleving.`} />
    </div>
  )
}
