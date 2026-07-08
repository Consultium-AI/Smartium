import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Opvliegers en nachtelijk zweten`}</Inline></SubHeading>
      <PBody text={`Een van de bekendste klachten in de overgang zijn **opvliegers** en **nachtelijke transpiratieaanvallen**. Deze klachten kunnen erg hinderlijk zijn en hebben vaak invloed op slaap en dagelijks functioneren.`} />
      <p className="leading-relaxed"><Inline>{`Nachtelijk zweten heeft overigens meerdere mogelijke oorzaken. In de differentiaaldiagnose passen onder andere:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`hyperthyreoïdie;`}</Inline></li>
        <li><Inline>{`feochromocytoom of carcinoïd;`}</Inline></li>
        <li><Inline>{`medicamenteuze oorzaken, zoals antidepressiva en antihypertensiva;`}</Inline></li>
        <li><Inline>{`hypoglykemie;`}</Inline></li>
        <li><Inline>{`maligniteit, bijvoorbeeld lymfoom;`}</Inline></li>
        <li><Inline>{`leefstijlfactoren zoals overmatig alcoholgebruik en stress;`}</Inline></li>
        <li><Inline>{`infecties, zoals tuberculose.`}</Inline></li>
      </ul>
      <PBody text={`De duur van opvliegers verschilt per vrouw, maar gemiddeld houden ze ongeveer **5 jaar** aan. Er zijn wel vuistregels:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`bij 8 op de 10 vrouwen duren ze langer dan 1 jaar;`}</Inline></li>
        <li><Inline>{`bij 1 op de 4 vrouwen langer dan 5 jaar;`}</Inline></li>
        <li><Inline>{`bij 1 op de 10 vrouwen langer dan 10 jaar.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Opvliegers kunnen al vroeg optreden, zelfs als de menstruatie nog regelmatig is. De piek in frequentie en intensiteit ligt vaak bij vrouwen met een amenorroe van 6 tot 12 maanden, dus nog vóórdat de menopauze definitief vaststaat. Ook na de menopauze kunnen opvliegers blijven bestaan.`}</Inline></p>
      <SubHeading><Inline>{`Pathofysiologie van de opvlieger`}</Inline></SubHeading>
      <PBody text={`Het precieze mechanisme is niet volledig opgehelderd, maar een belangrijke verklaring is ontregeling van het **hypothalamische warmteregulatiecentrum**. Dit centrum houdt normaal de lichaamstemperatuur rond 36,4 °C en heeft een soort tolerantiezone: binnen die zone zijn kleine temperatuurschommelingen geen probleem.`} />
      <PBody text={`Bij vrouwen met opvliegers wordt gedacht dat deze tolerantiezone **versmalt**. Daardoor reageert het lichaam sneller op kleine temperatuurveranderingen. Daling van oestrogeen leidt tot een stijging van de cerebrale noradrenalinespiegels. Daardoor raakt de thermoregulatie ontregeld en kunnen opvliegers makkelijker ontstaan.`} />
      <p className="leading-relaxed"><Inline>{`Als de temperatuur boven de tolerantiezone komt, wordt het afkoelingsmechanisme geactiveerd: perifere vaatverwijding en transpiratie. Dat verklaart het warme gevoel en het zweten.`}</Inline></p>
      <SubHeading><Inline>{`Aandachtsvraag`}</Inline></SubHeading>
      <PBody text={`**Wat gebeurt er met de tolerantiezone bij opvliegers?**
Die versmalt, waardoor het lichaam sneller reageert met vaatverwijding en zweten.`} />
    </div>
  )
}
