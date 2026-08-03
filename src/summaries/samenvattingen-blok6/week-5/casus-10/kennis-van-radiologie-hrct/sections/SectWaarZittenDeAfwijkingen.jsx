import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Waar zitten de afwijkingen?`}</Inline></SubHeading>
      <PBody text={`Naast het patroon kijk je altijd naar de **verdeling** van de afwijkingen. Die verdeling kan op verschillende manieren worden beschreven:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Apicaal**: bovenin de longen`}</Inline></li>
        <li><Inline>{`**Mid**: in het midden`}</Inline></li>
        <li><Inline>{`**Basaal**: onderin de longen`}</Inline></li>
        <li><Inline>{`**Diffuus**: verspreid over de hele long`}</Inline></li>
        <li><Inline>{`**Centraal**: meer naar binnen toe`}</Inline></li>
        <li><Inline>{`**Perifeer**: meer naar de buitenkant toe`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Dit helpt om afwijkingen beter te beschrijven en te ordenen. Een patroon alleen is vaak niet genoeg; de plaats in de longen geeft extra informatie.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** waarom is de verdeling belangrijk?
**Kort antwoord:** omdat dezelfde soort afwijking op verschillende plaatsen in de longen een ander beeld kan geven.`} />
    </div>
  )
}
