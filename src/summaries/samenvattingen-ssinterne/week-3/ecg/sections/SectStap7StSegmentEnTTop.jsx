import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Stap 7: ST-segment en T-top`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het ST-segment loopt van het J-punt tot het begin van de T-top en is normaal iso-elektrisch. Afwijkingen zijn vooral ST-elevatie en ST-depressie.`}</Inline></p>
      <SubHeading><Inline>{`ST-elevatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`ST-elevatie meet je kort na het J-punt. Een duidelijke elevatie kan wijzen op acute ischemie, vaak in het kader van een myocardinfarct. Andere oorzaken zijn onder meer geleidingsstoornissen, linkerventrikelhypertrofie en pericarditis.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De plaats van de ST-elevatie helpt bij de lokalisatie van het infarct:`}</Inline></p>
      <SubHeading><Inline>{`Tabel 4. Afleidingen en bijbehorende locatie`}</Inline></SubHeading>
      <DataTable rows={[["Afleidingen", "Locatie"], ["I, aVL", "Hoog lateraal"], ["II, III, aVF", "Onderwand"], ["V1, V2", "Septum"], ["V3, V4", "Voorwand"], ["V5, V6", "Laterale wand"], ["aVR", "Niet specifiek, kan wijzen op hoofdstamafwijkingen"]]} />
      <p className="leading-relaxed"><Inline>{`Reciproque depressies zijn ST-depressies in tegenoverliggende afleidingen.`}</Inline></p>
      <PBody text={`Een belangrijke onschuldige oorzaak van ST-elevatie is **vroege repolarisatie**. Daarbij zie je vaak een concaaf ST-segment, een duidelijk J-punt, symmetrische T-toppen, geen reciproque depressies en afwijkingen in meer dan één stroomgebied.`} />
      <SubHeading><Inline>{`ST-depressie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`ST-depressie is een verlaging van het ST-segment ten opzichte van de basislijn. Dit past vaak bij subendocardiale ischemie. Andere oorzaken zijn reciproque veranderingen, linkerventrikelhypertrofie, digitalisgebruik, elektrolytstoornissen en een hoge hartfrequentie.`}</Inline></p>
      <SubHeading><Inline>{`T-topveranderingen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De T-top weerspiegelt de repolarisatie. Als vuistregel geldt: repolarisatie heeft dezelfde richting als depolarisatie. Daarom is de T-top meestal positief als het QRS-complex in die afleiding positief is.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Belangrijke afwijkingen zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`spitse T-toppen bij hyperkaliëmie`}</Inline></li>
        <li><Inline>{`negatieve T-toppen na een infarct`}</Inline></li>
        <li><Inline>{`strain-patroon bij linkerventrikelhypertrofie`}</Inline></li>
        <li><Inline>{`vlakke T-toppen`}</Inline></li>
        <li><Inline>{`biphasische of andere afwijkende vormen`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Vergelijk afwijkende T-toppen altijd met een ouder ECG als dat beschikbaar is.`}</Inline></p>
    </div>
  )
}
