import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Belangrijke succesfactoren`}</Inline></SubHeading>
      <SubHeading><Inline>{`1. Startkapitaal`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Elke innovatie kost geld. Je hebt dus geld nodig om te beginnen. In dit geval werd gestart met een subsidie van €50.000, gevolgd door nog eens €50.000. Sinds begin 2023 geven zorgverzekeraars bovendien een vergoeding per patiënt.`}</Inline></p>
      <SubHeading><Inline>{`2. Klein beginnen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Begin met een klein kernteam, ook wel een “coalition of the willing” genoemd. Dat maakt het makkelijker om te starten en te leren.`}</Inline></p>
      <SubHeading><Inline>{`3. Veel zelf regelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`In de beginfase kan veel zelf worden gedaan, bijvoorbeeld boxen kopen, apparatuur verstrekken, de app maken en testen, en dagelijks alarmen controleren.`}</Inline></p>
      <SubHeading><Inline>{`4. Stapsgewijs professionaliseren`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Later kun je processen verder professionaliseren, zoals:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`inkoop en keuring van apparatuur;`}</Inline></li>
        <li><Inline>{`uitgifte, registratie en inname;`}</Inline></li>
        <li><Inline>{`uitbreiding van informatie in de app.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`5. Patiënten goed laten aansluiten`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Er wordt niet vooraf streng geselecteerd. Het uitgangspunt is: “ja, tenzij bewezen niet lukt”. Dat betekent dat je patiënten in principe laat meedoen, tenzij blijkt dat het echt niet werkt.`}</Inline></p>
      <SubHeading><Inline>{`6. Hulp bij installatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Verpleegkundigen op de afdeling kunnen helpen bij het gebruik van de app en apparatuur. Daarom moeten zij al vroeg betrokken worden bij de ontwikkeling.`}</Inline></p>
      <SubHeading><Inline>{`7. Ziekenhuisbrede samenwerking`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Ook samenwerking binnen het hele ziekenhuis moet vroeg op gang komen.`}</Inline></p>
      <SubHeading><Inline>{`8. Juridische kaders`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Overleg met een jurist is nodig om te weten aan welke wet- en regelgeving je moet voldoen. Ook bij zorg op afstand blijft de zorgverlener verantwoordelijk en tuchtrechtelijk vervolgbaar. Veiligheid van de patiënt en de plichten van de arts blijven dus centraal staan.`}</Inline></p>
    </div>
  )
}
