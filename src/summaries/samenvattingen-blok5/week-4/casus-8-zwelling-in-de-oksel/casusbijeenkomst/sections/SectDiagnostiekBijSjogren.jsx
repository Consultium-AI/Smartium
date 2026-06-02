import { Inline, DataTable, SubHeading } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}>Belangrijke onderzoeken</SubHeading>
      <DataTable
        rows={[
          ['Onderzoek', 'Betekenis'],
          ['---', '---'],
          ['Schirmer-test', 'meet traanproductie'],
          ['Speekselfunctietest', 'meet speekselproductie'],
          ['Speekselklierbiopt', 'toont focusscore en lymfoepitheliale laesies'],
          ['ANA, anti-SSA/Ro, anti-SSB', 'serologische ondersteuning'],
          ['IgG, complement', 'wijzen op B-celactivatie of verbruik'],
          ['Oogartsbeoordeling', 'bevestigt keratoconjunctivitis sicca'],
        ]}
      />

      <SubHeading level={2}>Wat zegt welk resultaat?</SubHeading>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li>
          <Inline>{`**Verlaagde Schirmer-test**: past bij droge ogen.`}</Inline>
        </li>
        <li>
          <Inline>{`**Verlaagde speekselflow**: past bij droge mond.`}</Inline>
        </li>
        <li>
          <Inline>{`**Focusscore ≥ 1**: ondersteunt Sjögren sterk.`}</Inline>
        </li>
        <li>
          <Inline>{`**Verhoogd IgG en verlaagd complement**: passen bij B-celactivatie.`}</Inline>
        </li>
        <li>
          <Inline>{`**Anti-SSA/Ro positief**: belangrijk serologisch kenmerk.`}</Inline>
        </li>
        <li>
          <Inline>{`**Anti-SSB positief**: ondersteunt het beeld.`}</Inline>
        </li>
      </ul>
    </div>
  )
}
