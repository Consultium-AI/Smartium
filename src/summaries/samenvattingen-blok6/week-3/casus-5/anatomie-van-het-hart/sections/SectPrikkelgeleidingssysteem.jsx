import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Prikkelgeleidingssysteem`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het hart trekt niet zomaar willekeurig samen. Daarvoor is er een prikkelgeleidingssysteem, dat bestaat uit gespecialiseerde spiercellen. Dit systeem zorgt ervoor dat de verschillende delen van het hart op het juiste moment samentrekken.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De primaire pacemaker is de nodus sinu-atrialis, de SA-knoop. Deze ligt aan de buitenzijde van het rechter atrium, op de grens van de vena cava superior en het rechter hartoor. Vanuit daar verspreidt de prikkel zich over de atria. Daarna bereikt de prikkel de nodus atrioventricularis, de AV-knoop. Deze ligt aan de binnenzijde van het rechter atrium, nabij de fossa ovalis en de uitmonding van de sinus coronarius.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Vanuit de AV-knoop loopt de prikkel via de bundel van His naar de ventrikels. Deze bundel splitst zich in een rechter en linker tak: het crus dextrum en het crus sinistrum.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 2. Onderdelen van het prikkelgeleidingssysteem`}</Inline></SubHeading>
      <DataTable rows={[["Onderdeel", "Ligging / functie"], ["SA-knoop", "primaire pacemaker; buitenzijde rechter atrium bij vena cava superior"], ["AV-knoop", "binnenzijde rechter atrium bij fossa ovalis en sinus coronarius"], ["bundel van His", "geleidt prikkel van atria naar ventrikels"], ["crus dextrum", "rechter bundeltak"], ["crus sinistrum", "linker bundeltak"]]} />
    </div>
  )
}
