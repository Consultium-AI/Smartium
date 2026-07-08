import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Retinopathie van de prematuur (ROP)`}</Inline></SubHeading>
      <PBody text={`**ROP** is in ontwikkelde landen de meest voorkomende oorzaak van vermijdbare blindheid op de kinderleeftijd. Het is een aandoening van de nog onvolgroeide bloedvaten van het netvlies. De bloedvaten groeien normaal van de oogzenuw naar de periferie van het oog. ROP ontstaat op de overgang tussen al gevasculariseerde en nog niet gevasculariseerde retina.`} />
      <PBody text={`De belangrijkste risicofactor is het **te vroeg geboren zijn** zelf, vooral in combinatie met instabiliteit in de eerste levensweken. Andere risicofactoren zijn onder meer:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`hypoxie en hyperoxerie`}</Inline></li>
        <li><Inline>{`fluctuaties in oxygenatie`}</Inline></li>
        <li><Inline>{`acidose`}</Inline></li>
        <li><Inline>{`langdurige beademing`}</Inline></li>
        <li><Inline>{`onrijpheid van de longen`}</Inline></li>
        <li><Inline>{`bloedtransfusies`}</Inline></li>
        <li><Inline>{`maternale factoren zoals roken en hoge bloeddruk`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De ernst wordt bepaald door:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**zones**: zone 1 is het minst ver uitgegroeid, zone 3 het meest`}</Inline></li>
        <li><Inline>{`**stadia**: van 1 tot en met 5`}</Inline></li>
        <li><Inline>{`**plus disease**: dikke, kronkelige vaten; dit is een ongunstig teken en vaak een reden om te behandelen`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Stadium 1 en 2 zijn de mildste vormen. In stadium 3 ontstaan vaatwoekeringen en neemt de kans op bloedingen toe. In stadium 4 is het netvlies gedeeltelijk losgelaten, in stadium 5 volledig.`}</Inline></p>
      <PBody text={`Bij ernstige ROP kan **lasertherapie** nodig zijn.`} />
    </div>
  )
}
