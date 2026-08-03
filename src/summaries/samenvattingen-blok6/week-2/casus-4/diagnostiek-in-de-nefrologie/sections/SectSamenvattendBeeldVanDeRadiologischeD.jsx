import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvattend beeld van de radiologische diagnostiek`}</Inline></SubHeading>
      <DataTable rows={[["Tabel 2. Praktisch overzicht van de belangrijkste technieken"], ["---"], ["**Echografie**: eerste keuze bij eenvoudige vragen, zoals cysten, pyelumdilatatie en resturine"], ["**CT**: beste voor stenen en het beoordelen van een niermassa"], ["**MRI**: geschikt voor nierarteriestenose en voor het meten van cystevolume"], ["**Nierscintigrafie**: geschikt voor functieverdeling en urinelekkage"]]} />
      <p className="leading-relaxed"><Inline>{`De keuze voor een techniek hangt dus af van de vraag die je wilt beantwoorden. Vaak is echografie voldoende, maar bij stenen, massa’s, vaatproblemen of functionele vragen heb je een andere techniek nodig.`}</Inline></p>
    </div>
  )
}
