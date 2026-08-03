import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Werknemersverzekeringen bij ziekte en arbeidsongeschiktheid`}</Inline></SubHeading>
      <PBody text={`Bij arbeidsongeschiktheid spelen vooral de **Ziektewet** en de **WIA** een grote rol.`} />
      <PBody text={`De **Ziektewet (ZW)** is een vangnetvoorziening. Die zorgt ervoor dat zieke werknemers zonder werkgever toch inkomen hebben. Dat kan bijvoorbeeld bij:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`een tijdelijk contract dat afloopt tijdens ziekte;`}</Inline></li>
        <li><Inline>{`een oproepkracht of uitzendkracht zonder recht op loondoorbetaling;`}</Inline></li>
        <li><Inline>{`iemand met een WW-uitkering die door ziekte niet kan solliciteren of werken.`}</Inline></li>
      </ul>
      <PBody text={`Heeft iemand wél een werkgever, dan geldt eerst de **loondoorbetalingsverplichting**:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`bij een contract voor bepaalde tijd tot het einde van het contract;`}</Inline></li>
        <li><Inline>{`bij een vast contract maximaal **2 jaar**.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Tijdens die 2 jaar moeten werkgever en werknemer samen hun uiterste best doen om terugkeer naar werk mogelijk te maken. Na die periode kan iemand mogelijk in aanmerking komen voor een WIA-uitkering.`}</Inline></p>
      <SubHeading><Inline>{`WIA: IVA en WGA`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De WIA kent twee soorten uitkeringen:`}</Inline></p>
      <DataTable rows={[["Tabel 2. WIA-uitkeringen"], ["**IVA**", "Voor volledig en duurzaam arbeidsongeschikten"], ["**WGA**", "Voor gedeeltelijk arbeidsgeschikten of volledig arbeidsongeschikten met kans op herstel"]]} />
      <PBody text={`De **IVA-uitkering** geldt als iemand:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`niet meer dan 20% van het laatstverdiende loon kan verdienen;`}</Inline></li>
        <li><Inline>{`weinig kans heeft om beter te worden.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Dan is iemand volledig en duurzaam arbeidsongeschikt. De uitkering bedraagt 75% van het WIA-maandloon en loopt door zolang die situatie bestaat, tot uiterlijk de AOW-leeftijd.`}</Inline></p>
      <PBody text={`De **WGA-uitkering** geldt als iemand:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`volledig arbeidsongeschikt is, maar nog kans op herstel heeft; of`}</Inline></li>
        <li><Inline>{`gedeeltelijk arbeidsongeschikt is en nog tussen 20% en 65% van het oude loon kan verdienen.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Er zijn drie vormen van WGA-uitkering:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`loongerelateerde uitkering`}</Inline></li>
        <li><Inline>{`loonaanvullingsuitkering`}</Inline></li>
        <li><Inline>{`vervolguitkering`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Welke uitkering iemand krijgt, hangt af van de mate van arbeidsongeschiktheid, het vroegere loon, het arbeidsverleden en het huidige loon. Komt iemand onder het sociaal minimum, dan kan een toeslag worden aangevraagd bij het UWV.`}</Inline></p>
      <SubHeading><Inline>{`Geen recht op WIA`}</Inline></SubHeading>
      <PBody text={`Als iemand nog minstens **65% van het oude loon** kan verdienen, is er geen recht op een WIA-uitkering. Dan kan de werkgever bekijken of de werknemer in eigen werk of ander passend werk binnen of buiten de organisatie aan het werk kan blijven.`} />
    </div>
  )
}
