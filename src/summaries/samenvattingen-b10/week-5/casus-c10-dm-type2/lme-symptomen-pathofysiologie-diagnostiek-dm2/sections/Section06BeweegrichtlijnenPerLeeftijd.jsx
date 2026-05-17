import { Inline, PBody, DataTable } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Beweegrichtlijnen per leeftijd`}</Inline></h3>
      <p><Inline>{`De beweegrichtlijnen verschillen per leeftijdsgroep. De kern is dat kinderen veel moeten bewegen, volwassenen wekelijks voldoende matig tot intensief moeten bewegen, en ouderen daarnaast ook aandacht moeten besteden aan spierkracht en balans.`}</Inline></p>
      <p><Inline>{`Tabel 3. Beweegrichtlijnen per leeftijd`}</Inline></p>
      <DataTable rows={[["Leeftijd", "Matig tot zwaar intensief bewegen", "Spier- en botversterkende oefeningen", "Balansoefeningen", "Totale beweging"], ["1–3 jaar", "≥60 min/dag", "—", "—", "≥180 min/dag"], ["4–17 jaar", "≥60 min/dag", "≥3x/week", "—", "—"], ["18–65 jaar", "≥150 min/week", "≥2x/week", "—", "—"], ["≥65 jaar", "≥150 min/week", "≥2x/week", "≥2x/week", "—"]]} />
      <p><Inline>{`Voor **volwassenen en senioren** geldt dus als basis: minimaal 2,5 uur per week matig tot zwaar intensief bewegen. Daarnaast horen spier- en botversterkende activiteiten minstens twee keer per week bij het advies. Voor **senioren** zijn balansoefeningen extra belangrijk, en die worden ook twee keer per week geadviseerd. Voor **jonge kinderen** draait het vooral om veel dagelijkse beweging, met minimaal 180 minuten per dag totaal.`}</Inline></p>
    </div>
  )
}
