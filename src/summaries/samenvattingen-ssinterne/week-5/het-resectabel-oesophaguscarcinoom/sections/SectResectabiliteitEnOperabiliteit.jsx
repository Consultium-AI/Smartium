import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Resectabiliteit en operabiliteit`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een resectabel oesophaguscarcinoom is het belangrijk om twee begrippen uit elkaar te houden: resectabiliteit en operabiliteit.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 4. Verschil tussen resectabiliteit en operabiliteit`}</Inline></SubHeading>
      <DataTable rows={[["Begrip", "Betekenis"], ["Resectabiliteit", "Zegt iets over de tumor: is deze technisch en praktisch te verwijderen?"], ["Operabiliteit", "Zegt iets over de patiënt: kan deze veilig een operatie en narcose ondergaan?"]]} />
      <p className="leading-relaxed"><Inline>{`Resectabiliteit gaat dus over de tumor zelf, bijvoorbeeld over ingroei in de omgeving. Operabiliteit gaat over de conditie van de patiënt, zoals hart- en longfunctie en de algemene belastbaarheid.`}</Inline></p>
    </div>
  )
}
