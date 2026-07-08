import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`6 tot 9 maanden: meer variatie en meer complexiteit`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`In deze fase zie je een duidelijke toename in motorische kwaliteit. Het kind kan meer verschillende houdingen aannemen en beter schakelen tussen houdingen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`In buikligging zie je bijvoorbeeld:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`pivoteren;`}</Inline></li>
        <li><Inline>{`tijgeren;`}</Inline></li>
        <li><Inline>{`gestrekte armsteun;`}</Inline></li>
        <li><Inline>{`handen-knieënstand;`}</Inline></li>
        <li><Inline>{`driepuntssteun;`}</Inline></li>
        <li><Inline>{`kruipstand;`}</Inline></li>
        <li><Inline>{`berenstand.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij omrollen zie je een complexe beweging: het kind gebruikt het bekken, de wervelkolom en het hoofd samen. Ook de armen spelen mee, bijvoorbeeld door reiken naar speelgoed. Dat laat complexiteit en vloeiendheid zien.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`In zit zie je dat het kind los kan zitten en soms met romp of armen buiten het steunpunt beweegt. Om niet om te vallen, compenseert het met:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`vooroverbuigen;`}</Inline></li>
        <li><Inline>{`gespreide benen;`}</Inline></li>
        <li><Inline>{`steunname van een hand op been of onderlaag.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Daardoor blijft het zwaartepunt binnen het steunvlak of wordt het steunvlak groter.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`In stand zie je dat het kind steun kan nemen op de voeten, het hoofd goed in balans houdt en de romp al redelijk opricht. Toch is de rompbalance nog niet volledig aanwezig; steun aan de onderzijde van de romp kan nog nodig zijn.`}</Inline></p>
      <SubHeading><Inline>{`Handfunctie in deze fase`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De handgrepen ontwikkelen verder van:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`palmairgreep,`}</Inline></li>
        <li><Inline>{`naar radiale palmargreep,`}</Inline></li>
        <li><Inline>{`naar schaargreep.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Dat laat zien dat de handfunctie verfijnder wordt.`}</Inline></p>
    </div>
  )
}
