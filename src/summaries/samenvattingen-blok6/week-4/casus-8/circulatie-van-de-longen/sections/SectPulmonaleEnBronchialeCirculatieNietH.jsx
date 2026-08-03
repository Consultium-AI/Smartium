import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Pulmonale en bronchiale circulatie: niet hetzelfde`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het is belangrijk om deze twee circulaties niet door elkaar te halen.`}</Inline></p>
      <PBody text={`De **pulmonale circulatie** is bedoeld voor de **gasuitwisseling**. Het bloed gaat naar de alveoli om zuurstof op te nemen en koolstofdioxide af te geven.`} />
      <PBody text={`De **bronchiale circulatie** is bedoeld voor het **longweefsel zelf**. Die zorgt ervoor dat de bronchi, bronchiolen en andere structuren van de long genoeg zuurstof en voeding krijgen.`} />
      <p className="leading-relaxed"><Inline>{`Dus heel simpel gezegd:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**pulmonale circulatie = luchtwissel in de longen**`}</Inline></li>
        <li><Inline>{`**bronchiale circulatie = voeding van de longen zelf**`}</Inline></li>
      </ul>
    </div>
  )
}
