import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Ontsluitingstijdperk`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het ontsluitingstijdperk begint met het op gang komen van de baring en eindigt wanneer de baarmoedermond volledig ontsloten is. In deze fase veranderen de portio en de cervix geleidelijk door de weeën.`}</Inline></p>
      <SubHeading><Inline>{`Wat gebeurt er in deze fase?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De baarmoeder trekt samen in contracties. Een contractie is een samentrekking van de spierwand van de uterus. Een wee is een regelmatige, meestal pijnlijke uteruscontractie die om de 3 tot 5 minuten optreedt en een progressief effect heeft op het baringsproces. De enige echt goede weeën zijn weeën die leiden tot voortgang, dus tot verstrijken, ontsluiting en indaling.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Verstrijken betekent dat de portio korter wordt. Dit gebeurt doordat het onderste uterussegment zich vormt. Daarna volgt ontsluiting van de baarmoedermond.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** Hoe weet je of een vrouw in partu is?
**Mini-antwoord:** Als er subjectieve contracties zijn die objectief echte weeën blijken te zijn.`} />
      <SubHeading><Inline>{`Beoordeling van de baring`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Om te beoordelen of iemand in partu is, neem je anamnese af en verricht je lichamelijk onderzoek. Je vraagt naar de contracties: zijn ze pijnlijk, hoe vaak komen ze, en zitten er pauzes tussen? Ook vraag je naar bloedverlies en vruchtwaterverlies. Slijmerig bloedverlies kan normaal zijn. Vruchtwater hoort helder of kleurloos te zijn, vaak met witte vlokjes.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij onderzoek van de buik voel je of de uterus aanspant. Tijdens een wee kun je meestal geen kindsdelen meer door de buikwand voelen. Met vaginaal toucher beoordeel je de baarmoedermond volgens POVIAS.`}</Inline></p>
      <SubHeading><Inline>{`POVIAS bij vaginaal toucher`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`POVIAS is een handig schema om de bevindingen bij het toucher systematisch te beschrijven:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**P = Portio**: richting, verstrekkking en consistentie`}</Inline></li>
        <li><Inline>{`**O = Ontsluiting**`}</Inline></li>
        <li><Inline>{`**V = Vliezen**`}</Inline></li>
        <li><Inline>{`**I = Indaling**`}</Inline></li>
        <li><Inline>{`**A = Aard van het voorliggend deel**`}</Inline></li>
        <li><Inline>{`**S = Stand**`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij de portio let je op de richting van de baarmoedermond, de mate van verstrekkking en de consistentie. De portio kan nog staand zijn, half verstreken zijn, volledig verstreken zijn met 1 cm ontsluiting, of volledig ontsloten zijn.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij de indaling gebruik je de vlakken van Hodge. Hodge 4 loopt door het puntje van het os coccygis, dus op de bekkenbodem.`}</Inline></p>
      <PBody text={`Bij de **aard** kijk je of het voorliggende deel een hoofd of een stuit is. Bij de **stand** beschrijf je bijvoorbeeld achterhoofdsligging, kruinligging, voorhoofdsligging, aangezichtsligging, onvolkomen stuitligging, volkomen stuitligging of een dwarsligging.`} />
      <SubHeading><Inline>{`Tabel 2. POVIAS in het kort`}</Inline></SubHeading>
      <DataTable rows={[["Letter", "Betekenis", "Waar let je op?"], ["P", "Portio", "Richting, verstrekkking, consistentie"], ["O", "Ontsluiting", "Hoeveel cm ontsluiting"], ["V", "Vliezen", "Nog intact of gebroken"], ["I", "Indaling", "Vlakken van Hodge, caput succedaneum, moulage"], ["A", "Aard", "Hoofd of stuit"], ["S", "Stand", "Bijvoorbeeld achterhoofdsligging of stuitligging"]]} />
      <p className="leading-relaxed"><Inline>{`Caput succedaneum is zwelling van het foetale of neonatale hoofdje door huidoedeem, ontstaan tijdens de bevalling. Moulage betekent dat de schedelnaden door druk op het hoofd in het baringskanaal over elkaar heen zijn gegaan.`}</Inline></p>
      <SubHeading><Inline>{`Voortgang van de baring`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De voortgang van de baring bewaak je door de ontsluiting en de indaling te volgen. Dat kan met een partogram, een grafische weergave waarmee je overzicht krijgt over het verloop van de partus. Zo zie je of de ontsluiting voldoende vordert of dat er sprake is van een trage progressie.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** Wat is een belangrijk hulpmiddel om de voortgang te volgen?
**Mini-antwoord:** Het partogram.`} />
      <SubHeading><Inline>{`Trage vordering`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Als de baring traag vordert, denk je aan verschillende oorzaken:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`onvoldoende krachtige weeën`}</Inline></li>
        <li><Inline>{`een afwijkende stand van het voorliggende foetale deel, meestal het hoofd`}</Inline></li>
        <li><Inline>{`afwijkingen in het maternale bekken`}</Inline></li>
        <li><Inline>{`afwijkingen in de uterus, bijvoorbeeld een myoom dat de uitgang belemmert`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij onvoldoende krachtige weeën kan oxytocine helpen. Als de oorzaak ligt in het bekken of in een afwijking van de uterus, kan een sectio caesarea nodig zijn.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 3. Oorzaken van niet-vorderende baring en passende interventie`}</Inline></SubHeading>
      <DataTable rows={[["Oorzaak", "Meest aangewezen interventie"], ["Onvoldoende krachtige weeën", "Oxytocine i.v."], ["Afwijkende stand van het foetale hoofd", "Oxytocine i.v."], ["Afwijkingen in het maternale bekken", "Sectio caesarea"], ["Afwijkingen in de uterus", "Sectio caesarea"]]} />
    </div>
  )
}
