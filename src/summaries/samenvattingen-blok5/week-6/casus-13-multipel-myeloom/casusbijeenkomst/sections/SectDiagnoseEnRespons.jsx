import { Inline, DataTable } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="leading-relaxed m-0">
        <Inline>{`Na de eerste behandeling is het M-proteïne gedaald van **26 g/L naar 2 g/L**. Dat is een daling van meer dan 90%. Dit past bij een **Very Good Partial Response (VGPR)**.`}</Inline>
      </p>
      <p className="font-semibold text-slate-900 dark:text-slate-100 m-0">
        <Inline>{`Tabel 2. Respons volgens de IMWG-criteria`}</Inline>
      </p>
      <DataTable
        rows={[
          ['Respons', 'Kenmerk'],
          ['---', '---'],
          [
            'VGPR',
            '≥ 90% reductie van de oorspronkelijke serum M-component; negatieve immunofixatie is niet nodig',
          ],
        ]}
      />
      <p className="leading-relaxed m-0">
        <Inline>{`De patiënt heeft dus goed gereageerd op de eerste behandeling, maar is later toch weer progressief geworden tijdens onderhoud met lenalidomide.`}</Inline>
      </p>
      <p className="font-semibold text-slate-900 dark:text-slate-100 m-0 pt-4">
        <Inline>{`Lenalidomide-refractair: wat betekent dat?`}</Inline>
      </p>
      <p className="leading-relaxed m-0">
        <Inline>{`Als de ziekte terugkomt terwijl iemand **lenalidomide onderhoud** gebruikt, dan is de patiënt **lenalidomide-refractair**. Dat betekent dat lenalidomide niet meer voldoende werkt en dat je een ander schema moet kiezen.`}</Inline>
      </p>
      <p className="leading-relaxed m-0">
        <Inline>{`Een herhaling van hoge dosis melfalan met autologe transplantatie is hier **geen goede optie**, omdat de remissieduur te kort was.`}</Inline>
      </p>
    </div>
  )
}
