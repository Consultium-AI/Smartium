import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Sentinel node-procedure bij melanoom`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De sentinel node is de eerste lymfeklier waar tumorcellen waarschijnlijk terechtkomen vanuit de primaire tumor. Bij melanoom is de lymfedrainage afhankelijk van de plaats van de tumor. Daardoor kan de sentinel node op verschillende plekken liggen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij een melanoom op de arm ligt de eerste lymfeklier vaak in de oksel. Bij een melanoom op de schouder kan de drainage meerdere kanten op gaan, bijvoorbeeld naar de oksel, hals of liezen. Soms zijn er dus meerdere sentinel nodes.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De sentinel node-scintigrafie laat zien waar de eerste lymfeklier of lymfeklieren zitten. Die moeten worden verwijderd om te beoordelen of er metastasen aanwezig zijn.`}</Inline></p>
    </div>
  )
}
