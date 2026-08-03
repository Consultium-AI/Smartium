import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Preventie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Preventie is heel belangrijk, omdat beroepsgebonden ILD in principe vermijdbaar is. De beste strategie is het volledig wegnemen van de schadelijke stof. Als dat niet mogelijk is, wordt gewerkt volgens een stapsgewijze aanpak:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de stof vervangen door een minder gevaarlijke stof`}</Inline></li>
        <li><Inline>{`technische maatregelen nemen, zoals lokale afzuiging`}</Inline></li>
        <li><Inline>{`werkprocessen aanpassen`}</Inline></li>
        <li><Inline>{`pas als laatste redmiddel ademhalingsbescherming gebruiken`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Persoonlijke beschermingsmiddelen zijn dus niet de eerste en beste oplossing, maar eerder een laatste stap.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 3. Preventiestrategieën in volgorde van voorkeur`}</Inline></SubHeading>
      <DataTable rows={[["Maatregel", "Voorbeeld"], ["Bron wegnemen", "Gevaarlijke stof volledig verwijderen"], ["Substitutie", "Minder schadelijke stof gebruiken"], ["Technische maatregelen", "Lokale afzuiging, ventilatie"], ["Werkpraktijken aanpassen", "Andere werkwijze, minder stofvorming"], ["Persoonlijke bescherming", "Ademhalingsbescherming als laatste redmiddel"]]} />
      <p className="leading-relaxed"><Inline>{`Als er toch een rest-risico blijft bestaan, moeten werknemers worden opgenomen in een programma voor respiratoire gezondheidsbewaking. Dat is secundaire preventie: ziekte vroeg opsporen, vaak nog vóór er klachten zijn, zodat verdere schade kan worden beperkt.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Daarbij worden meestal spirometrie en een vragenlijst over luchtwegklachten gebruikt. Bij silicablootstelling en blootstelling aan steenkoolstof worden ook vaak thoraxfoto’s gebruikt. HRCT is gevoeliger, maar wordt niet zomaar standaard ingezet vanwege kosten, stralingsbelasting en de kans op toevallige bevindingen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij blootstelling aan beryllium hoort in sommige landen ook immunologisch onderzoek naar sensibilisatie bij de surveillance.`}</Inline></p>
      <PBody text={`**Aandacht-vraagje:** waarom is surveillance nuttig als iemand nog geen klachten heeft?
**Mini-antwoord:** omdat je ziekte vroeg kunt opsporen en verdere progressie kunt proberen te voorkomen.`} />
    </div>
  )
}
