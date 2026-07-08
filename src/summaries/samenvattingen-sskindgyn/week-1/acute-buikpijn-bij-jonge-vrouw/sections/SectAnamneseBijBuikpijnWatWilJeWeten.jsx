import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Anamnese bij buikpijn: wat wil je weten?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij buikpijn bij een jonge vrouw moet je breed uitvragen. Je denkt niet alleen aan gynaecologische oorzaken, maar ook aan niet-gynaecologische oorzaken.`}</Inline></p>
      <SubHeading><Inline>{`Belangrijke onderdelen van de anamnese`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Je vraagt naar:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`voorgeschiedenis, operaties en eerdere zwangerschappen;`}</Inline></li>
        <li><Inline>{`eerdere EUG;`}</Inline></li>
        <li><Inline>{`doorgemaakte SOA’s;`}</Inline></li>
        <li><Inline>{`medicatiegebruik;`}</Inline></li>
        <li><Inline>{`koorts en malaise;`}</Inline></li>
        <li><Inline>{`misselijkheid, braken, diarree of obstipatie;`}</Inline></li>
        <li><Inline>{`mictieklachten, dysurie en hematurie;`}</Inline></li>
        <li><Inline>{`eerste dag van de laatste menstruatie;`}</Inline></li>
        <li><Inline>{`regelmaat en duur van de cyclus;`}</Inline></li>
        <li><Inline>{`seksuele anamnese;`}</Inline></li>
        <li><Inline>{`anticonceptie;`}</Inline></li>
        <li><Inline>{`fluorklachten.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Het is belangrijk om ook apart naar anticonceptie te vragen, omdat veel vrouwen dit niet spontaan als medicatie noemen. Als er begeleiders aanwezig zijn of er is een taalbarrière, kan het helpen om de patiënte alleen te spreken en zo nodig een tolk te regelen.`}</Inline></p>
    </div>
  )
}
