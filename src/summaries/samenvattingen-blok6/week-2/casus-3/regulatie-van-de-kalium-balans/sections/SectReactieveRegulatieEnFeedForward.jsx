import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Reactieve regulatie en feed-forward`}</Inline></SubHeading>
      <PBody text={`Tot nu toe is vooral gekeken naar een **reactieve** manier van regulatie: stijgt het serumkalium, dan volgt redistributie naar de cellen of afgifte van aldosteron. Er is echter ook een **feed-forward mechanisme** beschreven. Daarbij wordt al gedetecteerd dat er kalium in de darm aanwezig is, waarna de nier de kaliumexcretie verhoogt, onafhankelijk van aldosteron.`} />
    </div>
  )
}
