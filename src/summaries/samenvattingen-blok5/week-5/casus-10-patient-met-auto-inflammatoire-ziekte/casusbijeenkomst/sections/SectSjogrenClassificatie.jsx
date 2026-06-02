import { Inline, DataTable, SubHeading } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="leading-relaxed m-0">
        <Inline>{`Voor Sjögren zijn classificatiecriteria opgesteld. De belangrijkste punten zijn:`}</Inline>
      </p>
      <DataTable
        rows={[
          ['Onderdeel', 'Score'],
          ['---', '---'],
          ['Labiaal speekselklierbiopt met focusscore ≥ 1', '3'],
          ['Anti-SS-A/Ro positief', '3'],
          ['Ocular staining score verhoogd', '1'],
          ['Schirmer-test ≤ 5 mm/5 min', '1'],
          ['Ongestroomde speekselvloed ≤ 0,1 ml/min', '1'],
        ]}
      />
      <p className="leading-relaxed m-0">
        <Inline>{`Een score van **4 of meer** classificeert een patiënt, mits er sprake is van droge ogen en/of droge mond of verdenking op Sjögren en er geen exclusiecriteria zijn.`}</Inline>
      </p>
      <p className="leading-relaxed m-0">
        <Inline>{`Daarnaast worden patiënten in deze casus ingedeeld in vier groepen:`}</Inline>
      </p>
      <ol className="list-decimal pl-6 space-y-2 m-0">
        <li><Inline>{`**BALS**: B-cell active disease and low symptom burden`}</Inline></li>
        <li><Inline>{`**HSA**: high systemic disease activity`}</Inline></li>
        <li><Inline>{`**LSAHS**: low systemic disease activity and high symptom burden`}</Inline></li>
        <li><Inline>{`**Overlapbeelden / orgaanspecifieke auto-immuniteit**`}</Inline></li>
      </ol>

      <SubHeading level={2}>Hoe herken je de categorieën?</SubHeading>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li>
          <Inline>{`**LSAHS**: veel klachten, vooral droogte en vermoeidheid, maar weinig objectieve systemische activiteit`}</Inline>
        </li>
        <li>
          <Inline>{`**BALS**: duidelijke B-celactivatie, maar relatief weinig klachten`}</Inline>
        </li>
        <li>
          <Inline>{`**HSA**: duidelijke systemische orgaanbetrokkenheid, zoals neuropathie of longziekte`}</Inline>
        </li>
        <li>
          <Inline>{`**Categorie 4**: Sjögren samen met een andere auto-immuunziekte, zoals SLE, SSc, IIM of Hashimoto`}</Inline>
        </li>
      </ul>
    </div>
  )
}
