import { Inline, PBody, DataTable } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Klinische toepassing`}</Inline></h3>
      <p><Inline>{`Een patiënt kan dus best een nog normale nuchtere glucose hebben, terwijl het HbA1c toch te hoog blijft. Dat wijst erop dat de glykemische controle over de afgelopen maanden onvoldoende is geweest. In zo’n situatie kan aanvullende behandeling nodig zijn, maar het is ook belangrijk om mee te wegen hoe lang leefstijlbehandeling al loopt en of het effect al voldoende tijd heeft gehad om zichtbaar te worden.`}</Inline></p>
    </div>
  )
}
