import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Van definitie naar pathofysiologie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`COPD is niet één enkel proces, maar een combinatie van veranderingen in de luchtwegen en in het longweefsel. Daardoor ontstaat een chronische obstructie van de luchtstroom.`}</Inline></p>
      <SubHeading><Inline>{`Luchtwegobstructie`}</Inline></SubHeading>
      <PBody text={`De diagnose luchtwegobstructie wordt bevestigd met **spirometrie**. Daarbij meet je:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**FVC**: de geforceerde vitale capaciteit, dus hoeveel lucht iemand maximaal kan uitblazen;`}</Inline></li>
        <li><Inline>{`**FEV1**: de hoeveelheid lucht die in de eerste seconde wordt uitgeblazen.`}</Inline></li>
      </ul>
      <PBody text={`De verhouding **FEV1/FVC** geeft aan hoe goed de luchtstroom is. Een waarde van **< 0,70 na luchtwegverwijding** past bij COPD. Bij COPD is er dus geen of slechts een beperkte reversibiliteit.`} />
      <PBody text={`Als de luchtwegverwijding wel duidelijk effect heeft, met een toename van **meer dan 200 ml en 12%**, past dat eerder bij **astma bronchiale**.`} />
      <SubHeading><Inline>{`Ontsteking en schade in de long`}</Inline></SubHeading>
      <PBody text={`Door blootstelling aan schadelijke stoffen, vooral sigarettenrook, ontstaat een **ontstekingsreactie** in de long. Daarbij neemt de productie van **elastase** toe. Elastase breekt elastische vezels af. Daardoor:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`verdwijnen elastische vezels in de long;`}</Inline></li>
        <li><Inline>{`nemen neutrofiele granulocyten toe;`}</Inline></li>
        <li><Inline>{`ontstaat chronische ontsteking;`}</Inline></li>
        <li><Inline>{`vernauwen de luchtwegen;`}</Inline></li>
        <li><Inline>{`ontstaat fibrose, dus verlittekening;`}</Inline></li>
        <li><Inline>{`raken alveolaire structuren en septa beschadigd;`}</Inline></li>
        <li><Inline>{`kunnen uiteindelijk bullae ontstaan, dat zijn grote luchtblazen.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Dit proces zorgt voor:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`meer luchtwegobstructie;`}</Inline></li>
        <li><Inline>{`verlies van alveolair oppervlak;`}</Inline></li>
        <li><Inline>{`verminderde gaswisseling;`}</Inline></li>
        <li><Inline>{`uiteindelijk een diffusiestoornis en zuurstofgebrek.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Rol van alfa-1-antitrypsine`}</Inline></SubHeading>
      <PBody text={`**Alfa-1-antitrypsine** remt normaal de werking van elastase. Bij een tekort aan dit enzym ontstaat sneller en uitgebreider longschade. Ongeveer 1% van de bevolking heeft een alfa-1-antitrypsinedeficiëntie.`} />
      <SubHeading><Inline>{`Glad spierweefsel en receptoren`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`In de terminale bronchiolen zitten gladde spiercellen. Daarop bevinden zich:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**B2-receptoren**, die bij stimulatie zorgen voor relaxatie;`}</Inline></li>
        <li><Inline>{`**muscarinereceptoren**, die zorgen voor contractie.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Deze receptoren zijn belangrijk voor de behandeling, omdat je ze farmacologisch kunt beïnvloeden.`}</Inline></p>
      <SubHeading><Inline>{`Reversibele en irreversibele onderdelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Niet alles in COPD is even goed omkeerbaar. Een deel van de klachten komt door processen die nog reversibel zijn, een ander deel niet.`}</Inline></p>
      <PBody text={`**Tabel 2. Reversibiliteit van onderdelen van COPD**`} />
      <DataTable rows={[["Onderdeel", "Reversibel?"], ["Chronische ontsteking", "Ja"], ["Contractie van gladde spiercellen", "Ja"], ["Vernauwing en fibrose van luchtwegen", "Nee"], ["Destructie van alveolaire structuren en septa", "Nee"]]} />
    </div>
  )
}
