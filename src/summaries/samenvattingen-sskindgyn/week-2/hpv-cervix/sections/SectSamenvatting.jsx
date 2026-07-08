import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <PBody text={`De cervix heeft een belangrijke **transformatiezone**, waar premaligne afwijkingen vrijwel altijd ontstaan. Deze afwijkingen worden vaak veroorzaakt door een **persisterende high risk HPV-infectie**. HPV komt heel vaak voor en verdwijnt meestal vanzelf, maar als het blijft bestaan kan het leiden tot **CIN** en uiteindelijk tot **cervixcarcinoom**.`} />
      <PBody text={`Een uitstrijkje wordt afgenomen op de transformatiezone en beoordeeld met de **Pap-classificatie** en de **KOPAC-B-classificatie**. Bij een afwijkende uitslag hangt het vervolg af van de combinatie van HPV en cytologie. Bij een positieve HPV-test en afwijkende cytologie volgt vaak verwijzing voor **colposcopie**. De behandeling hangt daarna af van de histologie: **CIN 1** wordt meestal afgewacht, terwijl **CIN 2 en CIN 3** meestal worden behandeld met een lisexcisie.`} />
    </div>
  )
}
