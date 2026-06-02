import { Inline, DataTable, SubHeading } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="leading-relaxed m-0">
        <Inline>{`De bijeenkomst zet een aantal reumatische aandoeningen naast elkaar. Dat helpt om de klinische kenmerken te onthouden.`}</Inline>
      </p>
      <DataTable
        rows={[
          ['Ziekte', 'Typische kernkenmerken'],
          ['---', '---'],
          [
            'Reumatoïde artritis (RA)',
            'gewrichtspijn, moeheid, gedeformeerde handgewrichten',
          ],
          [
            'Ziekte van Sjögren',
            'droge ogen, droge mond, moeheid, zwelling van grote speekselklieren, gewrichtspijn',
          ],
          ['SLE', 'vlindervormig erytheem, gewrichtspijn, moeheid, glomerulonefritis'],
          [
            'Systemische sclerose (SSc)',
            'strakke huid, longfibrose, digitale ulcera, moeheid, gewrichtspijn',
          ],
          [
            'Idiopathische inflammatoire myopathie (IIM)',
            'spierpijn en zwakte, Gottronse papels, moeheid, gewrichtspijn',
          ],
        ]}
      />

      <SubHeading level={2}>Kort per ziektebeeld</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`**RA** is een chronische auto-immuunziekte van de synoviale gewrichten. Dat geeft pijn, stijfheid en gewrichtsschade. Er kunnen ook extra-articulaire klachten zijn, bijvoorbeeld van huid en longen.`}</Inline>
      </p>
      <p className="leading-relaxed m-0">
        <Inline>{`**Sjögren** richt zich vooral tegen exocriene klieren. Daardoor ontstaan droge ogen en droge mond. Ook vermoeidheid, gewrichtspijn en orgaanbetrokkenheid kunnen voorkomen.`}</Inline>
      </p>
      <p className="leading-relaxed m-0">
        <Inline>{`**SLE** is een systemische auto-immuunziekte met betrokkenheid van huid, gewrichten, nieren en soms het centrale zenuwstelsel. Het beloop wisselt met exacerbaties en remissies.`}</Inline>
      </p>
      <p className="leading-relaxed m-0">
        <Inline>{`**Systemische sclerose** draait vooral om vasculopathie en fibrose. Endotheelbeschadiging leidt tot vaatvernauwing en verminderde perfusie, en collageenproductie zorgt voor fibrose van huid en organen.`}</Inline>
      </p>
      <p className="leading-relaxed m-0">
        <Inline>{`**IIM** is een groep auto-immuunziekten met chronische spierontsteking en vooral proximale spierzwakte. Huidafwijkingen en longziekte kunnen ook voorkomen.`}</Inline>
      </p>
    </div>
  )
}
