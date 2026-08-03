import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`De urethra en de sluitspier`}</Inline></SubHeading>
      <PBody text={`De **urethra** wordt afgesloten door de **m. sphincter externus**. Deze sluitspier ligt in het gebied van het **diaphragma urogenitale**. Dat is de plek waar de urethra actief afgesloten kan worden.`} />
      <p className="leading-relaxed"><Inline>{`De sluitspier speelt een belangrijke rol bij het ophouden van urine. De blaas kan urine opslaan, maar de urethra en de sluitspieren bepalen uiteindelijk wanneer urine het lichaam verlaat.`}</Inline></p>
      <PBody text={`> **Aandachtsvraag:** Wat is het verschil tussen opslag en lozing van urine?
> **Mini-antwoord:** De blaas slaat urine op, terwijl de detrusor en de urethra samen zorgen voor het uitplassen.`} />
    </div>
  )
}
