import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Metabole ziekten en de hielprik`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Metabole ziekten zijn individueel zeldzaam, maar als groep komen ze relatief vaak voor. Ze kunnen zich op alle leeftijden presenteren en geven vaak klachten van meerdere orgaansystemen. Sommige zijn goed behandelbaar en snelle behandeling kan levensreddend zijn.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Omdat het om zeldzame aandoeningen gaat, is het belangrijk dat artsen eraan denken. De screening helpt juist om deze diagnoses vroeg te stellen.`}</Inline></p>
    </div>
  )
}
