import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Klinische presentatie: waarom is sarcoïdose zo veelzijdig?`}</Inline></SubHeading>
      <PBody text={`Sarcoïdose kan in veel organen klachten geven. Ongeveer **90 tot 95%** van de patiënten heeft betrokkenheid van de longen of thoracale lymfeklieren. Toch kan de ziekte ook buiten de thorax optreden.`} />
      <p className="leading-relaxed"><Inline>{`De klachten hangen af van het betrokken orgaan. De meest voorkomende uitingen zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**bilaterale hiluslymfadenopathie**`}</Inline></li>
        <li><Inline>{`**intrapulmonale noduli**`}</Inline></li>
        <li><Inline>{`**uveïtis**`}</Inline></li>
        <li><Inline>{`**huidafwijkingen**`}</Inline></li>
        <li><Inline>{`**arthralgie**`}</Inline></li>
        <li><Inline>{`**hypercalciëmie**`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Minder vaak zie je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`gewrichtsafwijkingen`}</Inline></li>
        <li><Inline>{`cardiale betrokkenheid`}</Inline></li>
        <li><Inline>{`neurologische betrokkenheid`}</Inline></li>
      </ul>
      <PBody text={`Veel patiënten hebben daarnaast **vermoeidheid**. Soms is die heel uitgesproken. Ook **small fiber neuropathy** kan een symptoom zijn.`} />
      <PBody text={`**Vraagje:** wat is een belangrijk algemeen symptoom dat vaak voorkomt?
**Kort antwoord:** vermoeidheid, soms zeer ernstig.`} />
    </div>
  )
}
