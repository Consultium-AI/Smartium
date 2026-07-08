import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wat controleer je bij elke zwangerschapscontrole?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een reguliere controle let je op meerdere onderdelen.`}</Inline></p>
      <DataTable rows={[["Onderdeel", "Waar let je op?"], ["Foetale bewegingen", "Vanaf ongeveer 20 weken voelbaar; verandering of vermindering is altijd reden voor verder onderzoek"], ["Klachten", "Ook klachten passend bij pre-eclampsie"], ["Bloedverlies, vruchtwaterverlies, harde buiken", "Altijd verder onderzoek; kan wijzen op beginnende baring of pathologie"], ["Bloeddruk", "Hypertensie is ≥140 systolisch en/of ≥90 diastolisch"], ["Fundushoogte", "Moet passen bij de zwangerschapsduur"], ["Foetale harttonen", "Bij elke controle beluisteren met doptone en/of echo"]]} />
      <SubHeading><Inline>{`Foetale bewegingen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Foetale bewegingen worden meestal vanaf ongeveer 20 weken gevoeld. Multigravidae voelen ze vaak eerder. Verminderde, maar vooral veranderde foetale bewegingen zijn altijd een indicatie voor verder onderzoek. Vanaf de levensvatbare termijn, ongeveer 24 weken, zijn echoscopie en CTG aangewezen. Verminderd foetaal leven kan passen bij chronische of acute foetale nood.`}</Inline></p>
      <SubHeading><Inline>{`Bloeddruk`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Normotensie wordt nagestreefd. Hypertensie is een systolische bloeddruk van 140 mmHg of hoger en/of een diastolische bloeddruk van 90 mmHg of hoger. Bij hypertensie moet urine- en bloedonderzoek volgen.`}</Inline></p>
      <SubHeading><Inline>{`Fundushoogte`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De fundushoogte moet passen bij de zwangerschapsduur. Vanaf 12 weken kan deze met palpatie en eventueel een meetlint worden bepaald. Vanaf 30 weken kunnen de handgrepen van Leopold worden gebruikt. Een te lage fundushoogte kan wijzen op groeirestrictie, een belangrijke oorzaak van perinatale morbiditeit en mortaliteit. Bij afwijkingen is verder onderzoek nodig.`}</Inline></p>
      <SubHeading><Inline>{`Foetale harttonen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij iedere controle worden de foetale harttonen gecontroleerd met de doptone en/of echoscopie.`}</Inline></p>
      <SubHeading><Inline>{`Aandacht-vraagje`}</Inline></SubHeading>
      <PBody text={`**Waarom krijgt de groei in het derde trimester extra aandacht?**
Omdat veel groeirestricties pas in het derde trimester zichtbaar worden.`} />
    </div>
  )
}
