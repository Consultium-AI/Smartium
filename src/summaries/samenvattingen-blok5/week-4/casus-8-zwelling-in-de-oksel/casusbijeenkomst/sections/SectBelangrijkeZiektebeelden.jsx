import { Inline, DataTable, SubHeading } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}>Reumatoïde artritis, Sjögren, SLE, systemische sclerose en IIM</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Vijf belangrijke reumatische aandoeningen werden herhaald en met elkaar vergeleken:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li>
          <Inline>{`**Reumatoïde artritis (RA)**: chronische auto-immuunziekte van de synoviale gewrichten met pijn, stijfheid en gewrichtsschade.`}</Inline>
        </li>
        <li>
          <Inline>{`**Ziekte van Sjögren**: auto-immuunziekte van vooral traan- en speekselklieren, met droge ogen en droge mond.`}</Inline>
        </li>
        <li>
          <Inline>{`**Systemische lupus erythematosus (SLE)**: multisysteemziekte met huid-, gewrichts-, nier- en CZS-betrokkenheid.`}</Inline>
        </li>
        <li>
          <Inline>{`**Systemische sclerose (SSc)**: vasculopathie en fibrose staan centraal, met Raynaud, digitale ulcera, longfibrose en strakke huid.`}</Inline>
        </li>
        <li>
          <Inline>{`**Idiopathische inflammatoire myopathie (IIM)**: spierontsteking met proximale spierzwakte, soms huid- en longafwijkingen.`}</Inline>
        </li>
      </ul>
      <p className="font-semibold text-slate-900 dark:text-slate-100 m-0 pt-2">
        <Inline>{`Tabel 2. Typische klachten per reumatische aandoening`}</Inline>
      </p>
      <DataTable
        rows={[
          ['Klacht', 'RA', 'Sjögren', 'SLE', 'SSc', 'IIM'],
          ['---', '---', '---', '---', '---', '---'],
          ['Gewrichtspijn', 'ja', 'ja', 'ja', 'ja', 'ja'],
          ['Droge ogen', 'nee', 'ja', 'nee', 'nee', 'nee'],
          ['Droge mond', 'nee', 'ja', 'nee', 'nee', 'nee'],
          ['Vlindervormig erytheem', 'nee', 'nee', 'ja', 'nee', 'nee'],
          ['Strakke huid', 'nee', 'nee', 'nee', 'ja', 'nee'],
          ['Longfibrose', 'nee', 'nee', 'nee', 'ja', 'soms'],
          ['Digitale ulcera', 'nee', 'nee', 'nee', 'ja', 'nee'],
          ['Zwelling grote speekselklieren', 'nee', 'ja', 'nee', 'nee', 'nee'],
          ['Glomerulonefritis', 'nee', 'nee', 'ja', 'nee', 'nee'],
          ['Spierpijn en zwakte', 'nee', 'nee', 'nee', 'nee', 'ja'],
          ['Gottronse papels', 'nee', 'nee', 'nee', 'nee', 'ja'],
          ['Gedeformeerde handgewrichten', 'ja', 'nee', 'nee', 'nee', 'nee'],
          ['Moeheid', 'ja', 'ja', 'ja', 'ja', 'ja'],
        ]}
      />
    </div>
  )
}
