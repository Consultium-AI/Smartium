import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Transfusiereacties bij jonge kinderen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bloedproducten geven niet alleen een therapeutisch effect, maar ook risico’s. Het vakgebied hemovigilantie bewaakt de veiligheid van de hele transfusieketen, van donor tot patiënt. Daarbij worden transfusiereacties en andere ongewenste effecten systematisch gevolgd.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Voorbeelden van transfusiereacties zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`acute hemolytische transfusiereactie;`}</Inline></li>
        <li><Inline>{`febriele niet-hemolytische transfusiereactie;`}</Inline></li>
        <li><Inline>{`uitgestelde hemolytische transfusiereactie;`}</Inline></li>
        <li><Inline>{`allergische reacties en anafylactische shock;`}</Inline></li>
        <li><Inline>{`reacties door gecontamineerde bloedproducten;`}</Inline></li>
        <li><Inline>{`TRALI;`}</Inline></li>
        <li><Inline>{`bloedoverdraagbare virale en parasitaire infecties;`}</Inline></li>
        <li><Inline>{`volume overload, ook wel TACO genoemd.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij jonge kinderen zijn vooral de volgende transfusiereacties het meest voorkomend:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`febriele niet-hemolytische transfusiereactie;`}</Inline></li>
        <li><Inline>{`allergische reacties/anafylactische shock;`}</Inline></li>
        <li><Inline>{`volume overload.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Hemosiderose is geen transfusiereactie, maar kan wel een complicatie zijn bij een hoge transfusiefrequentie.`}</Inline></p>
    </div>
  )
}
