import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Plasma`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Voor plasma geldt dat ABO-compatibiliteit belangrijk is. In plasma zitten immers anti-A en/of anti-B antistoffen. Als incompatibel plasma wordt gegeven, kunnen deze antistoffen hemolyse veroorzaken.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`AB-plasma is veilig wanneer de bloedgroep van de patiënt nog niet bekend is. Donoren met bloedgroep AB hebben namelijk geen anti-A of anti-B in hun plasma. Als de bloedgroep van de patiënt wel bekend is, heeft ABO-identiek plasma de voorkeur.`}</Inline></p>
    </div>
  )
}
