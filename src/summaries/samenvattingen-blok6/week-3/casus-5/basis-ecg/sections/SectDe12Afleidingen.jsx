import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`De 12 afleidingen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een standaard ECG heeft 12 afleidingen. Om ECG’s onderling goed te kunnen vergelijken, moeten de elektroden steeds op vaste plaatsen worden aangebracht.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Er zijn vier elektroden op de ledematen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`rechterarm: rood`}</Inline></li>
        <li><Inline>{`rechterbeen: zwart`}</Inline></li>
        <li><Inline>{`linkerarm: geel`}</Inline></li>
        <li><Inline>{`linkerbeen: groen`}</Inline></li>
      </ul>
      <PBody text={`Een ezelsbruggetje is: **Rood Rechts en de Gele zon boven het Groene gras**.`} />
      <p className="leading-relaxed"><Inline>{`De zwarte elektrode is de neutrale referentie-elektrode en wordt niet gebruikt in de afleidingen.`}</Inline></p>
      <SubHeading><Inline>{`De zes extremiteitsafleidingen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De eerste drie afleidingen zijn de standaardafleidingen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`I = RA - LA`}</Inline></li>
        <li><Inline>{`II = RA - LB`}</Inline></li>
        <li><Inline>{`III = LA - LB`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Samen vormen deze de driehoek van Einthoven.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De volgende drie zijn de afgeleide afleidingen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`aVR = RA - (LA + LB)`}</Inline></li>
        <li><Inline>{`aVL = LA - (RA + LB)`}</Inline></li>
        <li><Inline>{`aVF = LB - (RA + LA)`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`De zes borstwandaftleidingen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De laatste zes afleidingen liggen in het horizontale vlak en heten V1 tot en met V6. Ze worden op vaste plaatsen op de borstkas geplaatst. Voor deze afleidingen vormt het gemiddelde van de andere elektroden een virtuele negatieve elektrode.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`V1: rechts naast het sternum in de vierde intercostaalruimte`}</Inline></li>
        <li><Inline>{`V2: links naast het sternum in de vierde intercostaalruimte`}</Inline></li>
        <li><Inline>{`V4: in de vijfde intercostaalruimte midclaviculair`}</Inline></li>
        <li><Inline>{`V6: op dezelfde hoogte als V4, maar midaxillair`}</Inline></li>
        <li><Inline>{`V3 en V5 liggen tussenliggende posities`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Soms zie je ook V4R; die ligt rechts op dezelfde hoogte als V4 en geeft informatie over de rechterkamer, maar wordt niet standaard gebruikt.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 2. Overzicht van de 12 afleidingen`}</Inline></SubHeading>
      <DataTable rows={[["Groep", "Afleidingen", "Vlak"], ["Extremiteiten", "I, II, III, aVR, aVL, aVF", "Frontaal vlak"], ["Borstwand", "V1 t/m V6", "Horizontaal vlak"]]} />
      <p className="leading-relaxed"><Inline>{`---`}</Inline></p>
    </div>
  )
}
