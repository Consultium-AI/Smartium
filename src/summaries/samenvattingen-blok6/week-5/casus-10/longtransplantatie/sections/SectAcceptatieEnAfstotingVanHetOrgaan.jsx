import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Acceptatie en afstoting van het orgaan`}</Inline></SubHeading>
      <PBody text={`Na transplantatie is een van de belangrijkste doelen dat het afweersysteem van de ontvanger de donorlong niet aanvalt. Zo’n aanval heet **afstoting** of **rejectie**.`} />
      <p className="leading-relaxed"><Inline>{`Afstoting komt in ongeveer 40% van de patiënten voor in de eerste twee jaar na transplantatie. Daarom krijgt de patiënt medicijnen die de afweer onderdrukken.`}</Inline></p>
    </div>
  )
}
