import { Inline, PBody, DataTable } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`HbA1c: waarom is dit getal zo belangrijk?`}</Inline></h3>
      <p><Inline>{`HbA1c is geglycosyleerd hemoglobine. Het is een maat voor de gemiddelde bloedglucose van de afgelopen drie maanden. Daarmee kun je de behandeling afstemmen, bijvoorbeeld leefstijl, voedingsadvies en medicatie.`}</Inline></p>
      <PBody text={`**Aandachtsvraag: wat vertelt HbA1c eigenlijk?**  
**Kort antwoord:** het geeft een indruk van de gemiddelde bloedsuiker van de afgelopen drie maanden.`} />
    </div>
  )
}
