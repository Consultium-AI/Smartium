import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hemofilie: wat is het en hoe presenteert het zich?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Hemofilie is een erfelijke bloedingsstoornis waarbij de secundaire hemostase verstoord is. Dat betekent dat de vorming van een stabiele fibrinestolsel minder goed verloopt. Het gevolg is dat patiënten gemakkelijker en langer bloeden, vooral op typische plekken.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een patiënt met een bloedingsneiging kan zich presenteren met:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`grote of spontane blauwe plekken;`}</Inline></li>
        <li><Inline>{`gewrichtsbloedingen;`}</Inline></li>
        <li><Inline>{`spierbloedingen;`}</Inline></li>
        <li><Inline>{`nabloedingen na operaties of kiesextracties;`}</Inline></li>
        <li><Inline>{`slijmvliesbloedingen, zoals menorragie, neusbloedingen en tandvleesbloedingen;`}</Inline></li>
        <li><Inline>{`wondjes die langer dan 10–15 minuten blijven bloeden.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Menorragie als belangrijk signaal`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Menorragie betekent hevig menstrueel bloedverlies. Dat is soms lastig uit te vragen, omdat sommige vrouwen veel bloedverlies als normaal ervaren. Daarom helpt het om gerichter door te vragen.`}</Inline></p>
      <PBody text={`**Aandachtspunt:**
Wat vraag je dan extra uit?
**Kort antwoord:** naar de duur van de menstruatie, ijzergebreksanemie of bloedtransfusies, gebruik van orale anticonceptie vanwege hevig vloeien, en of het bloedverlies school of werk beïnvloedt.`} />
      <p className="leading-relaxed"><Inline>{`Menorragie komt vaak voor bij vrouwen met een bloedingsziekte, ongeveer bij 80%. Vooral bij de ziekte van Von Willebrand en bij trombocytopathieën zie je dit veel.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Omgekeerd geldt ook dat bij vrouwen met menorragie soms een stollingsstoornis wordt gevonden. Dat is ongeveer bij 10%, meestal bij mildere bloedingsziekten.`}</Inline></p>
      <PBody text={`**Tabel 1. Menorragie en bloedingsstoornissen**`} />
      <DataTable rows={[["Situatie", "Belangrijk gegeven"], ["Vrouwen met een bloedingsziekte", "Vaak menorragie, ongeveer 80%"], ["Vrouwen met menorragie", "Bij een deel is een bloedingsstoornis aantoonbaar, schatting ongeveer 10%"]]} />
    </div>
  )
}
