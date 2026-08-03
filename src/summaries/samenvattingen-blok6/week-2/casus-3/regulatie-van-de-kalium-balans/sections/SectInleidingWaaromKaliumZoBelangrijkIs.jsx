import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Inleiding: waarom kalium zo belangrijk is`}</Inline></SubHeading>
      <PBody text={`Kalium is een van de belangrijkste elektrolyten in het lichaam. Het bijzondere is dat bijna al het kalium **in de cellen** zit, terwijl er in het serum maar een heel klein deel aanwezig is. Slechts ongeveer **0,3% van de totale kaliumvoorraad** bevindt zich in het serum. Dat betekent dat kleine verschuivingen tussen intracellulaire en extracellulaire ruimte al snel grote gevolgen kunnen hebben voor de serumkaliumwaarde.`} />
      <PBody text={`Dat is klinisch belangrijk, want een normale maaltijd bevat al snel **50 tot 100 mmol kalium**. Zonder goede regulatie zou zo’n maaltijd al kunnen leiden tot een gevaarlijk hoge serumkaliumwaarde met ernstige neuromusculaire verstoring. Het lichaam moet dus na elke kaliumbelasting snel en efficiënt ingrijpen.`} />
      <PBody text={`De kaliumbalans staat bovendien nauw in verband met de **zuur-basebalans**. Daarom spelen ook acidose en alkalose een rol in de verdeling van kalium over de compartimenten. In deze stof gaat het dus niet alleen om kalium zelf, maar ook om de manier waarop het lichaam kalium en zuur-base samen regelt.`} />
      <PBody text={`**Aandachtsvraag:** waarom is een kleine verandering in serumkalium zo belangrijk?
**Mini-antwoord:** omdat bijna al het kalium in de cellen zit en maar een heel klein deel in het serum.`} />
    </div>
  )
}
