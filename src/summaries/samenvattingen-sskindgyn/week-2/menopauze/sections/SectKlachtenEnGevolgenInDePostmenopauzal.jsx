import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Klachten en gevolgen in de postmenopauzale fase`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De meest opvallende klacht in deze levensfase is vaak nog steeds de opvlieger, maar er zijn ook andere klachten en gezondheidsproblemen die vooral in de postmenopauze optreden.`}</Inline></p>
      <SubHeading><Inline>{`Osteoporose`}</Inline></SubHeading>
      <PBody text={`Een belangrijk gevolg van de lage oestrogeenspiegels is **osteoporose**. Dat is een aandoening van het skelet waarbij het mineraalgehalte en de botstructuur afnemen, waardoor botten makkelijker breken. De botmassa is de optelsom van de piekbotmassa die in puberteit en adolescentie wordt opgebouwd en het verlies dat daarna optreedt. Vrouwen verliezen in hun leven ongeveer **40–50% van hun botmassa**.`} />
      <PBody text={`Na de menopauze treedt door de lage oestrogeenspiegels een versterkte botafbraak op. Osteoporose is dus een bekend gevolg van de postmenopauzale status en leidt tot meer fracturen. In Nederland heeft ongeveer **1 op de 4 vrouwen ouder dan 50 jaar** osteoporose.`} />
      <SubHeading><Inline>{`Urogenitale atrofie`}</Inline></SubHeading>
      <PBody text={`Een ander belangrijk probleem is **urogenitale atrofie**. Oestrogenen beïnvloeden rechtstreeks de vaginawand en de distale urinewegen. Door het oestrogeentekort wordt het vaginale epitheel dun en kwetsbaar. Ook nemen het collageengehalte, de elasticiteit en de bloedvoorziening af. Daardoor ontstaan klachten zoals:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`afscheiding;`}</Inline></li>
        <li><Inline>{`jeuk;`}</Inline></li>
        <li><Inline>{`droogheid;`}</Inline></li>
        <li><Inline>{`dyspareunie;`}</Inline></li>
        <li><Inline>{`bloedverlies.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Deze klachten kunnen de coïtus negatief beïnvloeden en leiden tot libidoverlies. De veranderingen in het bindweefsel kunnen ook bijdragen aan verzakkingsklachten na de menopauze.`}</Inline></p>
      <SubHeading><Inline>{`Andere postmenopauzale veranderingen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Naast bot- en urogenitale klachten kunnen ook andere veranderingen optreden, zoals:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`gewichtstoename, vooral rond de taille;`}</Inline></li>
        <li><Inline>{`huid die minder soepel en vochtarm wordt;`}</Inline></li>
        <li><Inline>{`toename van beharing op gezicht, armen en benen;`}</Inline></li>
        <li><Inline>{`dunner worden van hoofdhaar;`}</Inline></li>
        <li><Inline>{`hartkloppingen;`}</Inline></li>
        <li><Inline>{`pijnlijke en stijve gewrichten;`}</Inline></li>
        <li><Inline>{`slijmvliesveranderingen van neus, ogen en mond;`}</Inline></li>
        <li><Inline>{`opvliegers;`}</Inline></li>
        <li><Inline>{`slapeloosheid;`}</Inline></li>
        <li><Inline>{`stemmingsverandering;`}</Inline></li>
        <li><Inline>{`geïrriteerdheid;`}</Inline></li>
        <li><Inline>{`minder zin in vrijen;`}</Inline></li>
        <li><Inline>{`hoofdpijn;`}</Inline></li>
        <li><Inline>{`depressieve klachten.`}</Inline></li>
      </ul>
    </div>
  )
}
