import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hoe beoordeel je een CTG?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een CTG beoordeel je systematisch op vijf punten:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`basishartfrequentie;`}</Inline></li>
        <li><Inline>{`variabiliteit;`}</Inline></li>
        <li><Inline>{`acceleraties;`}</Inline></li>
        <li><Inline>{`deceleraties;`}</Inline></li>
        <li><Inline>{`uterusactiviteit.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Pas als je al deze onderdelen hebt bekeken, krijg je een volledig beeld van de foetale conditie.`}</Inline></p>
      <SubHeading><Inline>{`Basishartfrequentie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De basishartfrequentie is de gemiddelde hartfrequentie over ten minste 10 minuten, in een periode waarin de frequentie stabiel is en er weinig of geen acceleraties of deceleraties zijn.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Normaal ligt de basishartfrequentie tussen 110 en 160 slagen per minuut.`}</Inline></p>
      <DataTable rows={[["Tabel 2. Basishartfrequentie"], ["Normocardie", "110-160 bpm"], ["Bradycardie", "<110 bpm"], ["Tachycardie", ">160 bpm"]]} />
      <SubHeading><Inline>{`Variabiliteit`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Variabiliteit zijn kleine fluctuaties in de basishartfrequentie, meestal 3 tot 10 keer per minuut. Je schat dit door het verschil te bepalen tussen de hoogste en laagste frequentie rondom de basishartfrequentie gedurende 1 minuut, liefst op meerdere momenten van de registratie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Variabiliteit wordt bepaald door het autonome zenuwstelsel en weerspiegelt het evenwicht tussen sympathische en parasympathische invloed.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Normale variabiliteit ligt tussen 5 en 10 slagen per minuut. Een saltatoir patroon betekent juist een verhoogde variabiliteit.`}</Inline></p>
      <SubHeading><Inline>{`Aandachtsvraag`}</Inline></SubHeading>
      <PBody text={`**Wat zegt variabiliteit over de foetus?**
Het is een weerspiegeling van de autonome regulatie en dus van de schommelingen in de foetale conditie.`} />
      <SubHeading><Inline>{`Acceleraties`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Acceleraties zijn abrupte versnellingen van de foetale hartfrequentie. Ze moeten:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`minimaal 15 bpm stijgen;`}</Inline></li>
        <li><Inline>{`langer dan 15 seconden duren;`}</Inline></li>
        <li><Inline>{`korter dan 10 minuten duren.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Acceleraties zijn een teken van foetaal welzijn en treden vaak op in samenhang met foetale bewegingen. Meestal zie je er in 30 minuten minstens twee, door het wisselen van foetale gedragstoestanden. Als acceleraties langer dan 40 minuten afwezig zijn, is aanvullende diagnostiek of het opheffen van de oorzaak nodig.`}</Inline></p>
      <SubHeading><Inline>{`Deceleraties`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Deceleraties zijn vertragingen van de foetale hartfrequentie. Ze betekenen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`een daling van meer dan 15 bpm;`}</Inline></li>
        <li><Inline>{`gedurende meer dan 15 seconden.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Ze kunnen snel of langzaam verlopen en kunnen optreden met of zonder contracties.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een afname van de variatiebreedte tot minder dan 5 bpm tijdens een deceleratie die langer dan 3 minuten duurt, is ongunstig en kan wijzen op foetale nood.`}</Inline></p>
    </div>
  )
}
