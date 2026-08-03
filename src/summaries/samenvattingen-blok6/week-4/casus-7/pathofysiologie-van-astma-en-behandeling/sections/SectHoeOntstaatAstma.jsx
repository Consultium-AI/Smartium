import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hoe ontstaat astma?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Astma ontstaat niet door één enkele oorzaak. Het is een heterogeen proces waarbij meerdere factoren en mechanismen samen kunnen leiden tot het ziektebeeld. Je kunt astma zien als een soort gemeenschappelijk eindpunt van verschillende onderliggende pathofysiologische routes. Bij de ene patiënt spelen vooral allergische mechanismen een rol, bij een andere patiënt bijvoorbeeld roken, infecties, obesitas of andere factoren.`}</Inline></p>
      <SubHeading><Inline>{`Factoren die bijdragen aan astma`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij het ontstaan van astma kunnen meerdere factoren een rol spelen, zoals erfelijke aanleg, dieet, luchtverontreiniging, geslacht, overgewicht, infecties, beroepsmatige blootstelling, roken en allergenen. Niet van al deze factoren is de relatie even duidelijk, maar ze worden wel allemaal genoemd als mogelijke bijdragen aan het ontstaan van astma.`}</Inline></p>
      <SubHeading><Inline>{`Epigenetica, roken en leefomgeving`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Epigenetica betekent dat delen van het genoom aan of uit gezet kunnen worden, waardoor genexpressie verandert. Deze veranderingen kunnen tijdelijk of permanent zijn. Blootstelling van de moeder aan luchtverontreiniging, allergenen en tabaksrook tijdens de zwangerschap kan de aanleg voor atopie en astma bij de foetus vergroten. Ook geldt dat kinderen van moeders met astma en allergieën zelf een grotere kans hebben op astma en allergieën.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Roken is een belangrijke risicofactor. Niet alleen roken tijdens de zwangerschap speelt een rol, maar ook blootstelling van kinderen aan rook. Passief meeroken verhoogt de incidentie van wheezing en astma bij kinderen met zeker 20%.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Ook de leefomgeving lijkt van belang. Sinds de twintigste eeuw is de prevalentie van astma toegenomen, tegelijk met een sterke urbanisatie. Wonen in een landelijke omgeving lijkt beschermend te werken. Dit past bij de hygiënehypothese: minder blootstelling aan allergenen en micro-organismen op jonge leeftijd zou kunnen leiden tot een immuunsysteem dat zich minder goed ontwikkelt.`}</Inline></p>
      <PBody text={`> Aandachtsvraag: waarom wordt een landelijke omgeving soms als beschermend gezien?
>
> Kort antwoord: omdat daar op jonge leeftijd meer blootstelling is aan micro-organismen en allergenen, wat volgens de hygiënehypothese een gunstig effect kan hebben op de immuunontwikkeling.`} />
    </div>
  )
}
