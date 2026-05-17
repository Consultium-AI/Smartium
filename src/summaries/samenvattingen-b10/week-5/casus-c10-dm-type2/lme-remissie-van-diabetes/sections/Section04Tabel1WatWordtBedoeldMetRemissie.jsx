import { Inline, PBody, DataTable } from './SectionShared'

const ROWS = [
  ['Begrip', 'Betekenis'],
  [
    'Remissie van DM2',
    'HbA1c < 48 mmol/mol en/of nuchtere bloedglucose < 7 mmol/L, **zonder medicatie**',
  ],
  ['Goede glucoseregulatie', 'Glucosewaarden zijn verbeterd, maar dit kan ook met medicatie zijn'],
  [
    'Medicationsvrije remissie',
    'Remissie waarbij de patiënt geen glucoseverlagende medicatie meer nodig heeft',
  ],
]

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="font-medium text-slate-900 dark:text-slate-100">
        <Inline>{`Tabel 1. Wat wordt bedoeld met remissie?`}</Inline>
      </p>
      <DataTable rows={ROWS} />
      <PBody
        text={`**Aandacht-vraagje:** Waarom is dit onderscheid belangrijk?  
**Kort antwoord:** omdat een patiënt goede glucosewaarden kan hebben terwijl die nog wel medicatie gebruikt; dat is dan niet hetzelfde als medicatievrije remissie.`}
      />
    </div>
  )
}
