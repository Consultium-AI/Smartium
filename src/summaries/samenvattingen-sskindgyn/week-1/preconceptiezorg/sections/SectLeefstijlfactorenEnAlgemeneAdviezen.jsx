import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leefstijlfactoren en algemene adviezen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een belangrijk onderdeel van preconceptiezorg is leefstijl. Roken is een duidelijke risicofactor, zowel bij de vrouw als bij de partner. Ook het ontbreken van foliumzuurgebruik is relevant wanneer er een actieve kinderwens is. Daarnaast spelen overgewicht, voeding en soms alcohol of drugs een rol.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 2. Veelvoorkomende leefstijladviezen`}</Inline></SubHeading>
      <DataTable rows={[["Risicofactor", "Advies"], ["Roken", "Stoppen, ook de partner"], ["Geen foliumzuur", "Starten met foliumzuur vóór conceptie"], ["Overgewicht", "Afvallen"], ["Ongezonde voeding", "Voedingspatroon verbeteren"], ["Andere intoxicaties", "Bespreken en zo nodig stoppen"]]} />
      <p className="leading-relaxed"><Inline>{`Bij stoppen met roken is begeleiding belangrijk. Daarvoor bestaat de Taskforce Rookvrije Start. Het idee is dat stoppen voor de één makkelijker is dan voor de ander, en dat goede begeleiding de kans op succes vergroot.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij overgewicht is afvallen belangrijk. Bij een BMI boven 40 is zelfs preconceptionele bariatrische chirurgie een mogelijkheid. Overgewicht geeft onder andere meer kans op groeiproblemen van het kind, complicaties bij de bevalling, problemen rond een sectio, anesthesierisico’s en een verhoogde kans op trombose of longembolie.`}</Inline></p>
      <PBody text={`**Aandacht-vraagje:** waarom is foliumzuur zo belangrijk?
Omdat het wordt besproken ter preventie van neuralebuisdefecten, en het moet al vóór de conceptie gestart worden.`} />
    </div>
  )
}
