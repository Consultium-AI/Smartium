import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Voorbeeld van diagnostiek: WHO3 en POI`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een patiënte met hypo-oestrogene klachten, een kleine uterus, atrofische vaginawanden en laboratoriumafwijkingen denk je aan een WHO3-cyclusstoornis. Dat betekent dat de oorzaak op ovarieel niveau ligt.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De uitslagen kunnen dan bijvoorbeeld laten zien:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`sterk verhoogd FSH;`}</Inline></li>
        <li><Inline>{`verhoogd LH;`}</Inline></li>
        <li><Inline>{`laag oestradiol;`}</Inline></li>
        <li><Inline>{`zeer laag AMH;`}</Inline></li>
        <li><Inline>{`normale TSH;`}</Inline></li>
        <li><Inline>{`normale prolactine;`}</Inline></li>
        <li><Inline>{`geen duidelijke hyperandrogene afwijkingen.`}</Inline></li>
      </ul>
      <PBody text={`Dit past bij **hypergonadotroop-hypogonadisme** en dus bij een **WHO3-cyclusstoornis**. Hypergonadotroop betekent dat FSH en LH hoog zijn; hypogonadotroop betekent juist dat deze laag zijn. In dit geval zijn FSH en LH hoog, terwijl oestradiol laag is.`} />
      <SubHeading><Inline>{`Premature ovariële insufficiëntie`}</Inline></SubHeading>
      <PBody text={`Als de ovariële functie uitvalt vóór het 40e levensjaar, spreek je van **premature ovariële insufficiëntie (POI)**, ook wel “vervroegde overgang” genoemd.`} />
      <p className="leading-relaxed"><Inline>{`POI komt voor:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`bij 1 op 1000 vrouwen onder de 30 jaar;`}</Inline></li>
        <li><Inline>{`bij 1 op 100 vrouwen onder de 40 jaar.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij 5-10% van de vrouwen met secundaire amenorroe is POI de oorzaak.`}</Inline></p>
      <SubHeading><Inline>{`Mogelijke oorzaken van POI`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De oorzaken van WHO3/POI kunnen zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`iatrogeen: bijvoorbeeld na radiotherapie van het kleine bekken, chemotherapie met gonadotoxische schade of bilaterale ovariectomie;`}</Inline></li>
        <li><Inline>{`erfelijk: bijvoorbeeld Turner-syndroom of een premutatie van het FMR1-gen;`}</Inline></li>
        <li><Inline>{`enzymatisch: bijvoorbeeld galactosemie;`}</Inline></li>
        <li><Inline>{`auto-immuun: bijvoorbeeld autoantistoffen tegen schildklier, bijnierschors of ovarium.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij ruim 70% van de vrouwen met POI wordt geen duidelijke oorzaak gevonden.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Karyotypering kan duidelijkheid geven over de oorzaak. Bij 2,5-13% van de POI-patiënten is er sprake van een chromosomale afwijking. Bij 45XO- en mozaïekvormen is het waarschijnlijk dat de eicelvoorraad voortijdig uitgeput raakt.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een premutatie van het FMR1-gen is ook relevant, omdat een kind dan later een volledige mutatie en dus het fragiele-X-syndroom kan hebben. Galactosemie is een erfelijke stofwisselingsziekte die al vroeg wordt opgespoord via de hielprik. Autoantistoffen kunnen wijzen op een verhoogde kans op disfunctie van andere organen, zoals schildklier of bijnier.`}</Inline></p>
    </div>
  )
}
