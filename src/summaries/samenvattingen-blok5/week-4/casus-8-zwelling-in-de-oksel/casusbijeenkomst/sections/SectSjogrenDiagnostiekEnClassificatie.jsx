import { Inline, DataTable, SubHeading } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}>Klassificatiecriteria</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Voor primaire Sjögren werden objectieve criteria genoemd. Een score van **4 of meer** classificeert een patiënt, mits er sprake is van droge ogen en/of droge mond of verdenking op Sjögren, en er geen exclusiecriteria zijn.`}</Inline>
      </p>
      <p className="font-semibold text-slate-900 dark:text-slate-100 m-0">
        <Inline>{`Tabel 3. ACR/EULAR-classificatiecriteria voor primaire Sjögren`}</Inline>
      </p>
      <DataTable
        rows={[
          ['Onderdeel', 'Score'],
          ['---', '---'],
          ['Labiaal speekselklierbiopt met focusscore ≥ 1', '3'],
          ['Anti-SS-A/Ro positief', '3'],
          ['Ocular staining score ≥ 5 of van Bijsterveld ≥ 4', '1'],
          ['Schirmer-test ≤ 5 mm/5 min', '1'],
          ['Ongestimuleerde speekselflow ≤ 0,1 ml/min', '1'],
        ]}
      />
      <p className="leading-relaxed m-0">
        <Inline>{`Belangrijke exclusiecriteria waren onder andere: hoofd-halsradiatie, actieve HCV-infectie, AIDS, sarcoïdose, amyloïdose, graft-versus-host disease en IgG4-gerelateerde ziekte.`}</Inline>
      </p>

      <SubHeading level={2}>Waarom is Sjögren meer dan alleen droogte?</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Sjögren werd niet alleen als een klacht van droge ogen en droge mond besproken, maar als een ziekte met verschillende klinische patronen. Er werd een indeling gebruikt in vier categorieën:`}</Inline>
      </p>
      <ol className="list-decimal pl-6 space-y-2 m-0">
        <li>
          <Inline>{`**BALS**: B-cell active disease and low symptom burden`}</Inline>
        </li>
        <li>
          <Inline>{`**HSA**: high systemic disease activity`}</Inline>
        </li>
        <li>
          <Inline>{`**LSAHS**: low systemic disease activity and high symptom burden`}</Inline>
        </li>
        <li>
          <Inline>{`**Overlap met andere auto-immuunziekten** of orgaanspecifieke auto-immuniteit`}</Inline>
        </li>
      </ol>
      <p className="leading-relaxed m-0">
        <Inline>{`Deze indeling laat zien dat sommige patiënten vooral biologische B-celactivatie hebben, terwijl anderen juist veel klachten ervaren met relatief weinig systemische activiteit.`}</Inline>
      </p>
      <p className="font-semibold text-slate-900 dark:text-slate-100 m-0 pt-2">
        <Inline>{`Tabel 4. Kenmerken die passen bij de verschillende Sjögren-categorieën`}</Inline>
      </p>
      <DataTable
        rows={[
          ['Kenmerk', 'BALS', 'HSA', 'LSAHS', 'Overlap'],
          ['---', '---', '---', '---', '---'],
          ['Droge ogen', 'ja', 'ja', 'ja', 'ja'],
          ['Droge mond', 'ja', 'ja', 'ja', 'ja'],
          ['Moeheid', 'soms', 'soms', 'sterk aanwezig', 'soms'],
          ['Gewrichtspijn', 'soms', 'soms', 'sterk aanwezig', 'soms'],
          ['Verhoogd IgG', 'ja', 'soms', 'nee', 'soms'],
          ['Verlaagd complement C3/C4', 'ja', 'soms', 'nee', 'soms'],
          ['Lymfadenopathie', 'nee', 'ja', 'nee', 'soms'],
          ['Neuropathie', 'nee', 'ja', 'nee', 'soms'],
          ['Longbetrokkenheid', 'nee', 'ja', 'nee', 'soms'],
          ['Anti-dsDNA / andere overlapantistoffen', 'nee', 'nee', 'nee', 'ja'],
          ['Sclerodactylie', 'nee', 'nee', 'nee', 'ja'],
        ]}
      />

      <SubHeading level={2}>Klinische redenering bij Sjögren</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`De kern van de diagnostiek is dat je **subjectieve klachten** combineert met **objectieve testen** en **biologische markers**.`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li>
          <Inline>{`Klachten: droge ogen, droge mond, moeheid, gewrichtspijn.`}</Inline>
        </li>
        <li>
          <Inline>{`Objectief: Schirmer-test, speekselfunctietest, oogheelkundig onderzoek, speekselklierbiopt.`}</Inline>
        </li>
        <li>
          <Inline>{`Serologie: ANA, anti-SSA/Ro, anti-SSB, reumafactor, IgG, complement.`}</Inline>
        </li>
      </ul>
      <p className="leading-relaxed m-0">
        <Inline>{`Een afwijkende Schirmer-test laat zien dat de traanproductie verminderd is. Een verlaagde speekselfunctietest laat zien dat de speekselproductie verminderd is. Een speekselklierbiopt met focusscore en lymfoepitheliale laesies ondersteunt de diagnose sterk.`}</Inline>
      </p>
    </div>
  )
}
