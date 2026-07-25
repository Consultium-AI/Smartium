import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Kwaliteit van de thoraxfoto`}</Inline></SubHeading>
      <PBody text={`Voordat je een thoraxfoto beoordeelt, moet je eerst nagaan of de opname van voldoende kwaliteit is. De foto moet in elk geval **van de longtoppen tot en met de basale longvelden** volledig zichtbaar zijn. Daarnaast let je op een aantal vaste kwaliteitsaspecten:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Overprojectie**: staan structuren niet te veel over elkaar heen?`}</Inline></li>
        <li><Inline>{`**Rotatie**: is de patiënt recht afgebeeld?`}</Inline></li>
        <li><Inline>{`**Inspiratie**: is er voldoende ingeademd?`}</Inline></li>
        <li><Inline>{`**Projectie en belichting**: is de opname technisch goed gemaakt?`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Een goede kwaliteit is belangrijk, omdat je anders afwijkingen kunt missen of verkeerd kunt interpreteren. Een slechte inspiratie of verkeerde belichting kan bijvoorbeeld de beoordeling van hartgrootte en longvelden beïnvloeden.`}</Inline></p>
    </div>
  )
}
