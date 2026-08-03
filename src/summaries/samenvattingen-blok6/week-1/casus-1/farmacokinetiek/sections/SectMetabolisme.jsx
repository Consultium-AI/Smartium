import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Metabolisme`}</Inline></SubHeading>
      <PBody text={`Zodra de distributie begint, start ook het metabolisme. Het grootste deel daarvan vindt plaats in de **lever**. De lever ligt aan de **poortader** en krijgt daardoor veel bloed aangevoerd. Je kunt de lever zien als een grote chemische fabriek die met behulp van enzymen farmaca verwerkt.`} />
      <SubHeading><Inline>{`Enzymen en metabolieten`}</Inline></SubHeading>
      <PBody text={`Enzymen zijn grote eiwitten die specifieke chemische reacties mogelijk maken. Ze binden vaak aan een bepaalde stof, het **substraat**, en veranderen die chemisch. Na zo’n verandering heet de stof een **metaboliet**.`} />
      <p className="leading-relaxed"><Inline>{`Door deze chemische veranderingen kan een farmacon:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`onwerkzaam worden gemaakt;`}</Inline></li>
        <li><Inline>{`worden voorbereid op uitscheiding.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`CYP-enzymen`}</Inline></SubHeading>
      <PBody text={`Belangrijke leverenzymen zijn de **CYP-enzymen**. Deze spelen een grote rol bij de afbraak van veel geneesmiddelen.`} />
      <SubHeading><Inline>{`First-pass effect`}</Inline></SubHeading>
      <PBody text={`Wanneer een oraal ingenomen farmacon vanuit de darm voor het eerst de lever bereikt, heet dat het **first-pass effect**. Daarbij wordt een deel van het farmacon al in de lever afgebroken voordat het de rest van de bloedbaan bereikt. Het first-pass effect wordt uitgedrukt als het percentage farmacon dat onveranderd de bloedbaan bereikt.`} />
      <p className="leading-relaxed"><Inline>{`Bij orale toediening kan dus minder van het geneesmiddel beschikbaar komen dan bij intraveneuze toediening.`}</Inline></p>
      <SubHeading><Inline>{`Hydrofiliteit en uitscheiding`}</Inline></SubHeading>
      <PBody text={`Sommige farmaca worden door de lever voorzien van **hydrofiele molecuulgroepen**. Daardoor worden ze wateroplosbaarder en kunnen ze makkelijker via de nieren met de urine worden uitgescheiden.`} />
      <SubHeading><Inline>{`Prodrugs`}</Inline></SubHeading>
      <PBody text={`Sommige geneesmiddelen zijn juist zo ontworpen dat ze pas actief worden na omzetting in de lever. Zo’n geneesmiddel heet een **prodrug**.`} />
      <SubHeading><Inline>{`Farmacogenetica`}</Inline></SubHeading>
      <PBody text={`Het metabolisme verschilt tussen mensen. Sommige mensen hebben meer CYP-enzymen dan anderen en breken een farmacon sneller af. Anderen hebben juist weinig of geen CYP-enzymen en breken het middel veel trager af. Dit vakgebied heet **farmacogenetica**.`} />
      <PBody text={`**Aandachtsvraag:** waarom werkt een prodrug soms minder goed als de leverfunctie verminderd is?
**Mini-antwoord:** omdat de prodrug dan minder goed wordt omgezet in de actieve vorm.`} />
    </div>
  )
}
