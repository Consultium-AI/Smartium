import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hoe wordt ANA bepaald?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De belangrijkste techniek voor ANA-bepaling is indirecte immunofluorescentie. Dit is de gouden standaard. Daarbij worden HEp-2-cellen gebruikt, een epitheelcellijn afkomstig van humaan cervixcarcinoom. Het serum van de patiënt wordt op deze cellen gebracht. Als er autoantistoffen aanwezig zijn, binden die aan celbestanddelen en worden ze zichtbaar gemaakt met een fluorescerend antilichaam.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De uitslag wordt beoordeeld door een analist met een immunofluorescentiemicroscoop. Daarbij let men niet alleen op of ANA positief is, maar ook op het patroon.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Indirecte immunofluorescentie heeft een hoge sensitiviteit. De specificiteit is minder hoog, omdat een positieve ANA ook kan voorkomen bij infecties, maligniteiten en zelfs bij gezonde personen.`}</Inline></p>
    </div>
  )
}
