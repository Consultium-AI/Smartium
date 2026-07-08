import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wat is preconceptiezorg?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Preconceptiezorg is het geheel aan maatregelen dat genomen kan worden om risico’s voor de gezondheid van de aanstaande ouders en het toekomstige kind op tijd te herkennen. Het doel is dat mensen geïnformeerde keuzes kunnen maken en risico’s zo veel mogelijk kunnen verminderen. Het gaat dus om het opsporen van risicofactoren waarbij handelen vóór de conceptie of vroeg in de zwangerschap echt effect kan hebben op de uitkomst. De verwachting is dat preconceptiezorg leidt tot minder perinatale sterfte en minder perinatale morbiditeit.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Preconceptiezorg is daarmee niet alleen “advies geven voor een zwangerschap”, maar vooral: risico’s inventariseren, uitleg geven en zo nodig tijdig beleid inzetten.`}</Inline></p>
    </div>
  )
}
