import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Fysiologie van de menopauze`}</Inline></SubHeading>
      <PBody text={`De overgang hangt samen met het afnemen van het aantal en de kwaliteit van de **primordiale follikels** in het ovarium. Deze follikels zijn nodig om voldoende ovariële hormonen te blijven produceren. Als de follikelvoorraad afneemt, verandert de hormonale balans in het lichaam.`} />
      <p className="leading-relaxed"><Inline>{`De gevolgen daarvan zijn breed. Ovariële hormonen werken niet alleen op de geslachtsorganen, maar ook op andere systemen, zoals:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`het warmteregulatiecentrum in de hypothalamus;`}</Inline></li>
        <li><Inline>{`de stemming;`}</Inline></li>
        <li><Inline>{`de vet- en glucosestofwisseling;`}</Inline></li>
        <li><Inline>{`het botmetabolisme;`}</Inline></li>
        <li><Inline>{`vaatwandprocessen;`}</Inline></li>
        <li><Inline>{`de huid;`}</Inline></li>
        <li><Inline>{`de stolling.`}</Inline></li>
      </ul>
      <PBody text={`Na de menopauze is er sprake van **hypergonadotrope hypo-oestrogene amenorroe**. Dat betekent: weinig oestrogeen, terwijl de hypofyse juist sterk gestimuleerd is. Door de hoge LH-spiegels blijft het stroma in het ovarium nog androgenen produceren. Een deel daarvan kan in vetweefsel worden omgezet in oestrogenen via perifere aromatisering, waardoor er nog een kleine hoeveelheid oestrogeenproductie overblijft.`} />
      <SubHeading><Inline>{`Aandachtsvraag`}</Inline></SubHeading>
      <PBody text={`**Waarom kunnen klachten al beginnen terwijl de menstruatie nog niet helemaal gestopt is?**
Omdat de ovariële functie al aan het veranderen is vóór de laatste menstruatie. De hormoonproductie schommelt dan al, waardoor klachten kunnen ontstaan terwijl de cyclus nog niet volledig verdwenen is.`} />
    </div>
  )
}
