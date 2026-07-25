import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`De 12 afleidingen van het ECG`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een standaard ECG heeft 12 afleidingen. Deze worden op vaste plaatsen gemeten, zodat ECG’s onderling vergelijkbaar zijn.`}</Inline></p>
      <SubHeading><Inline>{`Extremiteitsafleidingen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De eerste zes afleidingen liggen in het frontale vlak.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Afleiding I** = RA - LA`}</Inline></li>
        <li><Inline>{`**Afleiding II** = RA - LB`}</Inline></li>
        <li><Inline>{`**Afleiding III** = LA - LB`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Daarnaast zijn er de afgeleide afleidingen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**aVR** = RA - gemiddelde van LA en LB`}</Inline></li>
        <li><Inline>{`**aVL** = LA - gemiddelde van RA en LB`}</Inline></li>
        <li><Inline>{`**aVF** = LB - gemiddelde van RA en LA`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De zwarte elektrode is de neutrale referentie-elektrode en doet niet mee in de afleidingen.`}</Inline></p>
      <SubHeading><Inline>{`Borstwandafleidingen`}</Inline></SubHeading>
      <PBody text={`De laatste zes afleidingen liggen in het horizontale vlak en heten **V1 tot en met V6**. Ze worden op vaste plaatsen op de borstkas gezet. De virtuele negatieve elektrode is hierbij het gemiddelde van de extremiteitsafleidingen.`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`V1: rechts naast het sternum in de 4e intercostaalruimte`}</Inline></li>
        <li><Inline>{`V2: links naast het sternum in de 4e intercostaalruimte`}</Inline></li>
        <li><Inline>{`V4: 5e intercostaalruimte midclaviculair`}</Inline></li>
        <li><Inline>{`V6: op dezelfde hoogte als V4, midaxillair`}</Inline></li>
        <li><Inline>{`V3 en V5 liggen tussen deze posities in`}</Inline></li>
      </ul>
      <PBody text={`Soms wordt ook **V4R** gebruikt: dat is V4 aan de rechterkant en geeft extra informatie over de rechterkamer.`} />
      <SubHeading><Inline>{`Tabel 2. Overzicht van de 12 afleidingen`}</Inline></SubHeading>
      <DataTable rows={[["Vlak", "Afleidingen"], ["Frontaal vlak", "I, II, III, aVR, aVL, aVF"], ["Horizontaal vlak", "V1, V2, V3, V4, V5, V6"]]} />
      <PBody text={`De onderste regel van een standaard ECG is meestal een doorlopende registratie van afleiding II. Dat heet een **ritmestrook** en helpt om het ritme goed te beoordelen.`} />
    </div>
  )
}
