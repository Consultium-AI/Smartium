import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Ladingselectiviteit en grootte-selectiviteit`}</Inline></SubHeading>
      <PBody text={`De filtratiebarrière houdt stoffen op twee manieren tegen: door **ladingselectiviteit** en door **grootte-selectiviteit**.`} />
      <PBody text={`Bij **ladingselectiviteit** gaat het vooral om de glycocalyx en het endotheel. Negatief geladen stoffen worden hier afgestoten. Dat is belangrijk, omdat veel eiwitten in het bloed, zoals albumine, negatief geladen zijn.`} />
      <PBody text={`Bij **grootte-selectiviteit** gaat het vooral om de filtratiespleet tussen de podocytenvoetjes. Grote eiwitten passen daar niet goed doorheen en worden daarom tegengehouden.`} />
      <PBody text={`**Tabel 2. Verschil tussen ladingselectiviteit en grootte-selectiviteit**`} />
      <DataTable rows={[["Selectiviteit", "Waar vooral?", "Wat wordt tegengehouden?"], ["Ladingselectiviteit", "Glycocalyx en endotheel", "Vooral negatief geladen eiwitten"], ["Grootte-selectiviteit", "Filtratiespleet tussen podocytenvoetjes", "Vooral grote eiwitten"]]} />
      <PBody text={`**Aandacht-vraagje:** Waarom zijn eiwitten in de urine ongewenst?
**Mini-antwoord:** Omdat het lichaam die eiwitten heeft opgebouwd uit kostbare aminozuren; verlies via de urine is dus ongunstig.`} />
      <p className="leading-relaxed"><Inline>{`Kleine eiwitten kunnen soms toch door de filtratiebarrière heen. Die worden normaal gesproken in de proximale tubulus weer teruggeresorbeerd. De nier gaat dus zeer zorgvuldig met eiwitten om.`}</Inline></p>
    </div>
  )
}
