import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="leading-relaxed m-0">
        <Inline>{`Bij de eerste casus wordt gevraagd naar de PA-bevindingen. De notities noemen:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`fibrinoïde afwijkingen;`}</Inline></li>
        <li><Inline>{`leukocytoclasie;`}</Inline></li>
        <li><Inline>{`extravasatie van erytrocyten;`}</Inline></li>
        <li><Inline>{`immuuncomplexen.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Dit past bij een vasculitis van kleine vaten. Leukocytoclasie betekent dat er veel afbraak van neutrofielen zichtbaar is. Fibrinoïde verandering wijst op beschadiging van de vaatwand. Extravasatie van erytrocyten betekent dat rode bloedcellen uit het vat zijn gelekt in het weefsel.`}</Inline></p>
      <PBody text={`**Aandacht-vraag:** wat betekent immuuncomplexvorming hier?
**Mini-antwoord:** dat afweercomplexen in de vaatwand neerslaan en daar ontsteking uitlokken.`} />
      <p className="leading-relaxed"><Inline>{`Bij de tweede casus wordt juist gekeken of er aanwijzingen zijn voor vasculitis in het huidbiopt. De vraag is dus of het beeld past bij vaatontsteking of eerder bij een andere oorzaak van de verkleuring.`}</Inline></p>
    </div>
  )
}
