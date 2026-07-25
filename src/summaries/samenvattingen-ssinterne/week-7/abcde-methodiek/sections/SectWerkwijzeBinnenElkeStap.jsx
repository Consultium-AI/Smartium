import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Werkwijze binnen elke stap`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij elke letter van de ABCDE volg je steeds dezelfde logische volgorde:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Kijken**`}</Inline></li>
        <li><Inline>{`**Luisteren**`}</Inline></li>
        <li><Inline>{`**Voelen**`}</Inline></li>
        <li><Inline>{`**Monitoring**`}</Inline></li>
        <li><Inline>{`**Interventies**`}</Inline></li>
        <li><Inline>{`**Re-assessment**`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Daarbij hoort ook dat je de patiënt bewaakt met bijvoorbeeld saturatie, ECG en bloeddruk, afhankelijk van de stap.`}</Inline></p>
      <SubHeading><Inline>{`Aandacht-vraag`}</Inline></SubHeading>
      <PBody text={`**Waarom is deze vaste volgorde handig?**
Omdat je zo snel en gestructureerd werkt, en minder snel vitale problemen mist.`} />
      <p className="leading-relaxed"><Inline>{`---`}</Inline></p>
    </div>
  )
}
