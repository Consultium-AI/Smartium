import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Betrouwbaarheid van spirometrie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een spirometrie is alleen bruikbaar als de meting technisch goed is uitgevoerd. Dat hangt sterk af van de medewerking van de patiënt en van de beoordeling door degene die de test uitvoert. Je moet dus altijd eerst kijken of de meting aan de criteria voor aanvaardbaarheid en herhaalbaarheid voldoet.`}</Inline></p>
      <SubHeading><Inline>{`Aanvaardbaarheid`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een goede flow-volumecurve heeft:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`een snelle, explosieve start zonder aarzeling;`}</Inline></li>
        <li><Inline>{`een scherpe piek;`}</Inline></li>
        <li><Inline>{`een gelijkmatige daling naar de x-as;`}</Inline></li>
        <li><Inline>{`geen artefacten zoals hoesten in de eerste seconde, glottissluiting, voortijdig stoppen of lekkage.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De uitademing moet ook echt volledig zijn. Dat zie je aan een duidelijk plateau in de volume-tijdcurve, of aan voldoende lange uitademing.`}</Inline></p>
      <SubHeading><Inline>{`Herhaalbaarheid`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Van de technisch goede manoeuvres moeten de beste waarden dicht bij elkaar liggen. Minimaal drie aanvaardbare manoeuvres zijn nodig. De twee hoogste waarden mogen slechts beperkt verschillen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`FVC: maximaal 0,15 L verschil;`}</Inline></li>
        <li><Inline>{`FEV1: maximaal 0,15 L verschil;`}</Inline></li>
        <li><Inline>{`PEF: maximaal 0,67 L/s verschil.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Als dat niet lukt, mogen er tot maximaal acht manoeuvres worden uitgevoerd. Lukt het dan nog niet, dan wordt dat genoteerd in het longfunctierapport.`}</Inline></p>
      <SubHeading><Inline>{`Veelvoorkomende fouten in de curve`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Sommige fouten zijn goed herkenbaar in de curve:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`hoesten in de eerste seconde onderschat FEV1 en FEV1/FVC;`}</Inline></li>
        <li><Inline>{`aarzeling bij de start onderschat PEF, FEV1 en FEV1/FVC;`}</Inline></li>
        <li><Inline>{`te vroeg stoppen onderschat FVC en overschat daardoor vaak de FEV1/FVC-ratio;`}</Inline></li>
        <li><Inline>{`te langzaam uitblazen geeft geen scherpe piek en maakt de meting onbetrouwbaar.`}</Inline></li>
      </ul>
    </div>
  )
}
