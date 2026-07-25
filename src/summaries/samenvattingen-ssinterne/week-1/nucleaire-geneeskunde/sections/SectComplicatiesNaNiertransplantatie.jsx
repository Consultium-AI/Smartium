import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Complicaties na niertransplantatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De belangrijkste complicaties die je met een renogram kunt opsporen zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**acute tubulusnecrose (ATN)**`}</Inline></li>
        <li><Inline>{`**geneesmiddelentoxiciteit**`}</Inline></li>
        <li><Inline>{`**rejectie**`}</Inline></li>
        <li><Inline>{`**lekkage**`}</Inline></li>
      </ul>
      <PBody text={`Bij **lekkage** zie je activiteit in de buik die niet in de nier of blaas zit. Bij de andere drie zie je vooral **slechte extractie** en **geen of weinig excretie en afvloed**.`} />
      <SubHeading><Inline>{`Tabel 3. Complicaties na niertransplantatie`}</Inline></SubHeading>
      <DataTable rows={[["Complicatie", "Typisch beeld"], ["ATN", "Slechte extractie, weinig of geen excretie/afvloed"], ["Geneesmiddelentoxiciteit", "Slechte extractie, weinig of geen excretie/afvloed"], ["Rejectie", "Slechte extractie, weinig of geen excretie/afvloed"], ["Lekkage", "Activiteit buiten nier en blaas, in de buik"]]} />
      <PBody text={`Een transplantaat van een **living related donor** doet het vaak goed. Een transplantaat van een overleden donor doet het in de eerste dagen vaak minder goed en moet soms nog op gang komen. Dat past bij ATN, wat kan optreden als de nier langere tijd geen zuurstof heeft gehad. Dat kan later weer herstellen.`} />
      <p className="leading-relaxed"><Inline>{`---`}</Inline></p>
    </div>
  )
}
