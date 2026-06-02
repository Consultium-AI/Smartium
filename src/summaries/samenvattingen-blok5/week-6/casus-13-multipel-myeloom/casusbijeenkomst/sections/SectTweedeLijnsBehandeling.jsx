import { Inline, DataTable, SubHeading } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="leading-relaxed m-0">
        <Inline>{`Bij terugkerend multipel myeloom zijn er verschillende behandelopties. De keuze hangt af van eerdere behandeling en van refractariteit.`}</Inline>
      </p>

      <SubHeading level={3}>Belangrijke behandelopties</SubHeading>

      <SubHeading level={4}>1. Anti-CD38 + carfilzomib + dexamethason</SubHeading>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li><Inline>{`**daratumumab-carfilzomib-dexamethason**`}</Inline></li>
        <li><Inline>{`**isatuximab-carfilzomib-dexamethason**`}</Inline></li>
      </ul>
      <p className="leading-relaxed m-0">
        <Inline>{`Dit zijn sterke opties als de patiënt **niet refractair** is voor anti-CD38-therapie. Ze geven langere progressievrije overleving dan carfilzomib-dexamethason alleen.`}</Inline>
      </p>

      <SubHeading level={4}>2. Daratumumab + bortezomib + dexamethason</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Dit kan ook werken, maar bortezomib is vaak al eerder gegeven en geeft relatief vaak **polyneuropathie**. In deze casus is dat dus minder aantrekkelijk.`}</Inline>
      </p>

      <SubHeading level={4}>3. Pomalidomide-gebaseerde schema’s</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Deze worden vaker vanaf de **3e lijn** gebruikt. Voorbeelden zijn:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li><Inline>{`pomalidomide-bortezomib-dexamethason`}</Inline></li>
        <li><Inline>{`pomalidomide-cyclofosfamide-dexamethason`}</Inline></li>
        <li><Inline>{`isatuximab-pomalidomide-dexamethason`}</Inline></li>
        <li><Inline>{`daratumumab-pomalidomide-dexamethason`}</Inline></li>
      </ul>

      <p className="font-semibold text-slate-900 dark:text-slate-100 m-0 pt-2">
        <Inline>{`Tabel 3. Keuze bij recidief myeloom`}</Inline>
      </p>
      <DataTable
        rows={[
          ['Situatie', 'Voorkeursoptie'],
          ['---', '---'],
          [
            'Niet refractair voor anti-CD38',
            'isatuximab-carfilzomib-dexamethason of daratumumab-carfilzomib-dexamethason',
          ],
          [
            'Anti-CD38 refractair of intolerant',
            'pomalidomide-bortezomib-dexamethason of carfilzomib-dexamethason',
          ],
          [
            'Verder gevorderde lijnen',
            'combinaties met pomalidomide en cyclofosfamide, of andere 3e-lijns schema’s',
          ],
        ]}
      />
    </div>
  )
}
