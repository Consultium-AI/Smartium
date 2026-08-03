import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Invloed van lichaamsgewicht en obesitas`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Lichaamsgewicht en vooral obesitas kunnen de verdeling van een geneesmiddel sterk beïnvloeden. Bij obesitas is het vetweefselcompartiment groter. Een lipofiel geneesmiddel kan zich dan langer richting dat compartiment verplaatsen. Daardoor blijft er minder geneesmiddel in de bloedbaan over en wordt de plasmaconcentratie lager.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij de vergelijking tussen een man van 73 kg en een man van 197 kg is de zwaardere man obees. Voor fenytoïne betekent dit dat het vetweefsel een groter compartiment vormt waarin het geneesmiddel kan verdwijnen. Daardoor is de plasmaconcentratie lager.`}</Inline></p>
    </div>
  )
}
