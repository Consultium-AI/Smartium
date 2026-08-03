import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Waarom koolmonoxide wordt gebruikt`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Koolmonoxide is geschikt voor diffusietesten omdat het zich gedraagt als een diffusiegas, maar zich veel sterker bindt aan hemoglobine dan zuurstof. De affiniteit van CO voor hemoglobine is ongeveer 210 keer zo groot als die van zuurstof. Daardoor blijft de vrije CO-partiële druk in het capillaire bloed vrijwel nul.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Dat is handig, want dan blijft het drukverschil tussen alveolus en capillair groot. CO is daardoor een ideaal testgas om de diffusiecapaciteit van het alveolo-capillaire membraan te beoordelen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij CO geldt dan vereenvoudigd:`}</Inline></p>
      <PBody text={`**V̇CO = DLCO × P A,CO**`} />
      <PBody text={`**Aandacht-vraagje:** Waarom is CO zo geschikt voor deze meting?
**Mini-antwoord:** Omdat CO sterk bindt aan hemoglobine en de capillaire partiële druk daardoor bijna nul blijft.`} />
      <SubHeading><Inline>{`Diffusie- of perfusiebeperkt gas`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Niet elk gas gedraagt zich hetzelfde in de long. Sommige gassen bereiken snel evenwicht tussen alveolus en capillair, andere niet.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 2. Verschil tussen perfusiebeperkt en diffusiebeperkt`}</Inline></SubHeading>
      <DataTable rows={[["Gas", "Gedrag", "Uitleg"], ["N2O", "Perfusiebeperkt", "Bereikt snel evenwicht; opname hangt af van bloedstroom"], ["O2", "Normaal perfusiebeperkt, maar bij ziekte diffusiebeperkt", "Bij gezonde longen snel evenwicht; bij verdikking of oppervlakverlies kan evenwicht uitblijven"], ["CO", "Diffusiebeperkt", "Bindt zo sterk aan Hb dat capillaire partiële druk bijna nul blijft"]]} />
      <PBody text={`**Perfusiebeperkt** betekent dat de opname van het gas vooral afhangt van hoeveel bloed langs het alveolus stroomt.
**Diffusiebeperkt** betekent dat de opname vooral wordt begrensd door de diffusie door het membraan.`} />
      <p className="leading-relaxed"><Inline>{`Bij gezonde mensen is zuurstof meestal perfusiebeperkt, omdat het al vroeg in het capillair evenwicht bereikt. Bij longfibrose of emfyseem kan zuurstof diffusiebeperkt worden. Vooral bij inspanning, wanneer het bloed sneller door de capillairen stroomt, kan dat leiden tot hypoxemie en een verlaagde zuurstofsaturatie.`}</Inline></p>
    </div>
  )
}
