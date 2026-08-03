import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hoe beïnvloeden geneesmiddelen en ziekten dit mechanisme?`}</Inline></SubHeading>
      <DataTable rows={[["Middel / situatie", "Effect op kaliumuitscheiding"], ["Amiloride", "Blokkeert ENaC, dus minder natriumopname en minder kaliumuitscheiding"], ["Lisdiuretica", "Blokkeren NKCC2 in de lis van Henle, waardoor meer natrium distaal aankomt en meer kalium kan worden uitgescheiden"], ["Penicilline", "Negatief geladen in het tubuluslumen, versterkt de negatieve lading en bevordert kaliumuitscheiding"]]} />
      <SubHeading><Inline>{`Amiloride`}</Inline></SubHeading>
      <PBody text={`Amiloride blokkeert het **ENaC-kanaal**. Daardoor wordt minder natrium opgenomen in de verzamelbuis. Omdat er minder natriumreabsorptie is, ontstaat er ook minder negatieve lading in het lumen. Het gevolg is dat kalium minder makkelijk diffundeert en dus minder wordt uitgescheiden. Daarom is amiloride een **kaliumsparend diureticum**.`} />
      <SubHeading><Inline>{`Lisdiuretica`}</Inline></SubHeading>
      <PBody text={`Lisdiuretica zoals **bumetanide** en **furosemide** blokkeren **NKCC2** in de lis van Henle. Daardoor komt er meer natrium distaal in de verzamelbuis. Als aldosteron aanwezig is, wordt dat natrium daar via ENaC opgenomen. Daardoor ontstaat opnieuw een negatieve lading in het lumen, wat de kaliumuitscheiding stimuleert.`} />
      <SubHeading><Inline>{`Penicilline`}</Inline></SubHeading>
      <PBody text={`Penicilline wordt vaak als **natriumpenicilline** gegeven en valt uiteen in natrium en penicilline. Penicilline is negatief geladen en wordt niet gemakkelijk uit het tubuluslumen opgenomen. Daardoor neemt de negatieve lading in het lumen toe, wat de kaliumuitscheiding bevordert. Bovendien zorgt de extra natriumbelasting voor meer flow en dus ook voor meer natriumopname via ENaC.`} />
    </div>
  )
}
