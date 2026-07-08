import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`3 tot 6 maanden: meer controle en meer beweging`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`In het tweede kwartaal wordt de motoriek duidelijk actiever. Het steunvlak wordt kleiner en het zwaartepunt verschuift verder naar beneden. Het kind kan verstoringen in de balans beter corrigeren.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`In buikligging wordt de houding opener en actiever. Het kind kan zich meer oprichten en krijgt meer controle over de romp. In rugligging kunnen de benen volledig omhoog geheven worden. Het kind ligt dan op hoofd, rug en bekken. Er ontstaat hand-kniecontact en later ook hand-voetcontact.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Omrollen begint in deze periode vaak als een beweging naar de zij. Dat gebeurt soms nog per ongeluk, bijvoorbeeld doordat de omhoog geheven benen opzij vallen. Het kind kan dan door verplaatsing van het gewicht naar de zij rollen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`In zit kan het kind even zitten en daarbij steun nemen op de armen. Het kan rondkijken, maar nog niet veilig alleen blijven zitten. In stand is het hoofd al in lijn met de romp en draagt het kind gewicht op de voeten.`}</Inline></p>
      <SubHeading><Inline>{`Handfunctie in deze fase`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De handfunctie ontwikkelt verder. Het kind grijpt met een ulnaire palmargreep: het pakt een voorwerp met de handpalm, vooral aan de pinkzijde. Ook kan het een voorwerp van de ene hand in de andere hand overpakken, maar bewust loslaten is er nog niet.`}</Inline></p>
    </div>
  )
}
