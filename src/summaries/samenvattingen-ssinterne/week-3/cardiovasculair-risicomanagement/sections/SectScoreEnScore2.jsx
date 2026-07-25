import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`SCORE en SCORE2`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Voor patiënten zonder de eerder genoemde zeer hoog-risico-aandoeningen wordt het risico geschat met risicotabellen op basis van vijf factoren:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`leeftijd;`}</Inline></li>
        <li><Inline>{`geslacht;`}</Inline></li>
        <li><Inline>{`roken;`}</Inline></li>
        <li><Inline>{`onbehandelde bloeddruk;`}</Inline></li>
        <li><Inline>{`onbehandeld cholesterol.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De SCORE2-tabel wordt gebruikt om het risico op sterfte door hart- en vaatziekten in te schatten. Daarbij moet je altijd bedenken dat zo’n tabel een schatting is. Iemand met extreme obesitas of een andere etnische achtergrond kan in werkelijkheid een ander risico hebben dan de tabel aangeeft.`}</Inline></p>
      <SubHeading><Inline>{`Aandacht-vraagje`}</Inline></SubHeading>
      <PBody text={`**Waarom is een risicotabel niet hetzelfde als de werkelijkheid?**
Omdat de tabel is gebaseerd op populatiegegevens en niet op de unieke situatie van één individuele patiënt.`} />
    </div>
  )
}
