import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Primaire hemostase: de trombocytenplug`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Primaire hemostase is het proces waarbij een trombocytenplug wordt gevormd. Trombocyten, ook wel bloedplaatjes genoemd, zijn celfragmenten die afkomstig zijn van megakaryocyten in het beenmerg. Hun normale aantal bij volwassenen is 150-350 x 10^9/L.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Na activatie verandert een trombocyt van vorm. Daardoor kan hij beter hechten en samenklonteren. Dit is belangrijk voor de vorming van de eerste, voorlopige afsluiting van het bloedvat.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De twee belangrijkste factoren voor primaire hemostase zijn de trombocyten en de von Willebrand factor.`}</Inline></p>
      <SubHeading><Inline>{`Adhesie, secretie en aggregatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij de vorming van de trombocytenplug zijn drie stappen belangrijk:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Adhesie**: bloedplaatjes hechten aan het beschadigde endotheel.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Hiervoor zijn von Willebrand factor en de GPIb-receptor op de trombocyt nodig.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Secretie**: de trombocyt geeft inhoud af uit zijn granulae.`}</Inline></li>
        <li><Inline>{`Alpha-granulae bevatten onder andere PF4 en fibrinogeen.`}</Inline></li>
        <li><Inline>{`Dense bodies bevatten ADP/ATP en calcium.`}</Inline></li>
        <li><Inline>{`**Aggregatie**: bloedplaatjes hechten aan elkaar.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Hiervoor zijn ADP, tromboxaan A2 en de GPIIb/IIIa-receptor nodig.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Von Willebrand factor werkt hier als een soort lijmstof: het verbindt bloedplaatjes aan het subendotheel en aan elkaar. Een tekort aan von Willebrand factor geeft bloedingsneiging, zoals bij de ziekte van von Willebrand.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** wat is het verschil tussen adhesie en aggregatie?
**Mini-antwoord:** adhesie is hechting van bloedplaatjes aan de vaatwand; aggregatie is hechting van bloedplaatjes aan elkaar.`} />
      <SubHeading><Inline>{`Tabel 2. Belangrijke onderdelen van de primaire hemostase`}</Inline></SubHeading>
      <DataTable rows={[["Onderdeel", "Functie"], ["Trombocyt", "Vormt de bloedplaatjesplug"], ["Von Willebrand factor", "Zorgt voor hechting aan subendotheel en aan elkaar"], ["GPIb-receptor", "Bindt von Willebrand factor"], ["GPIIb/IIIa-receptor", "Nodig voor aggregatie"], ["ADP en tromboxaan A2", "Bevorderen aggregatie"]]} />
    </div>
  )
}
