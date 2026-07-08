import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Harttonen: de basis`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij auscultatie is het belangrijk te onthouden dat iedere harttoon en ieder geruis met de bloedstroom wordt voortgeleid. Als er tijdens het ontstaan van een toon geen bloed stroomt, hoor je die toon het best op de plek waar hij ontstaat. Dat helpt bij het lokaliseren van afwijkingen.`}</Inline></p>
      <SubHeading><Inline>{`De 1e harttoon`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De 1e harttoon ontstaat door het sluiten van de mitralis- en tricuspidalisklep. Dit gebeurt tijdens de isovolumetrische contractie van het hart, dus op het moment dat de kamers samentrekken maar er nog geen bloed wordt uitgepompt. Omdat er dan geen bloedstroom is, hoor je de 1e harttoon het luidst ter hoogte van de klepvlakte. In situs solitus met concordante verbindingen is dat in de 4e intercostaalruimte links parasternaal.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een heel luide 1e harttoon past bij mitralisklepstenose. Een zachte 1e harttoon kan voorkomen bij dikke patiënten, pericardeffusie en tamponade. Bij tamponade zijn er altijd ook andere symptomen, zoals tachydyspnoe.`}</Inline></p>
      <SubHeading><Inline>{`De 2e harttoon`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De 2e harttoon ontstaat door het sluiten van de aortaklep en pulmonalisklep, dus van de semilunaire kleppen. Tijdens het sluiten stroomt er nog bloed, het zogenaamde windketel effect. Daarom hoor je de 2e harttoon het best hoog sternal.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De semilunaire kleppen sluiten niet altijd precies tegelijk. Daardoor kan de 2e harttoon gespleten zijn. Een fysiologische splitting hoor je in inspiratie: er wordt dan meer veneus bloed de thorax ingezogen, de rechterkamer moet meer volume verwerken en de pulmonalisklep sluit iets later dan de aortaklep. In expiratie hoor je die splitting niet.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Als de 2e harttoon permanent gespleten is, dus zowel in- als expiratie, wijst dat op permanente volumebelasting van de rechterkamer. Dat past bij een atriumseptumdefect (ASD). Belangrijk is dat er dan niet altijd een geruis hoeft te zijn.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een heel luide 2e harttoon kan voorkomen bij hypertensie in een aangesloten bloedvat. Omdat de pulmonalisklep de meest anterieure klep van het hart is, wijst een luide 2e harttoon bij kinderen vooral op verhoogde druk in de longslagaders. Een zachte 2e harttoon kan voorkomen bij dikke patiënten, pericardeffusie en tamponade, opnieuw met de kanttekening dat tamponade altijd ook andere symptomen geeft.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** Wat betekent een gefixeerd gespleten 2e harttoon?
**Mini-antwoord:** Denk aan een ASD door permanente volumebelasting van de rechterkamer.`} />
    </div>
  )
}
