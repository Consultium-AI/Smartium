import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Behandeling van shock`}</Inline></SubHeading>
      <PBody text={`De behandeling van shock is erop gericht de circulatie weer voldoende te maken voor de zuurstofbehoefte van de weefsels. Daarbij denk je aan **the pump, the pipes en the tank**:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**the tank**: het bloedvolume`}</Inline></li>
        <li><Inline>{`**the pump**: de pompfunctie van het hart`}</Inline></li>
        <li><Inline>{`**the pipes**: de vaattonus en weerstand`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Afhankelijk van het type shock behandel je één of meerdere van deze onderdelen.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 5. Behandelprincipes bij shock`}</Inline></SubHeading>
      <DataTable rows={[["Doel", "Middelen"], ["Vullen", "Cristalloïden, bloedproducten"], ["Knijpen", "α1-agonisten"], ["Pompen", "β1-agonisten, PDE-remmers"], ["Dilateren", "NO-donoren"], ["Onttrekken", "Diuretica, dialyse"]]} />
      <SubHeading><Inline>{`Vullen`}</Inline></SubHeading>
      <PBody text={`De eerste stap in hemodynamische optimalisatie is het bereiken van een adequate **preload**. Dat doe je door vocht toe te dienen. Bij voorkeur gebeurt dit met **Ringerlactaat**, omdat dit een fysiologische samenstelling heeft.`} />
      <PBody text={`Vocht geef je niet als een continu infuus per etmaal, maar in **bolussen**. Na elke bolus beoordeel je opnieuw het effect op de cardiac output. Zo voorkom je dat je onnodig te veel vocht geeft.`} />
      <PBody text={`**Aandacht-vraagje:** waarom niet gewoon standaard veel vocht geven?
**Mini-antwoord:** omdat je steeds moet nagaan of de patiënt nog fluid responsive is; anders geef je mogelijk te veel vocht zonder extra effect.`} />
      <SubHeading><Inline>{`Cristalloïden en colloïden`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Er bestaan verschillende soorten infuusvloeistoffen. De belangrijkste verschillen zitten in samenstelling, osmolaliteit en prijs. In de module worden onder andere NaCl 0,9%, Ringerlactaat, Sterofundin, Voluven, Gelofusine en albumine genoemd.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 6. Voorbeelden van infuusvloeistoffen`}</Inline></SubHeading>
      <DataTable rows={[["Vloeistof", "Kenmerk"], ["NaCl 0,9%", "Veel gebruikt kristalloïd"], ["Ringerlactaat", "Bij voorkeur gebruikt voor snelle vulling"], ["Sterofundin", "Kristalloïd met andere samenstelling"], ["Voluven", "Colloïd"], ["Gelofusine", "Colloïd"], ["Albumine 4% en 20%", "Colloïdale oplossingen"]]} />
      <SubHeading><Inline>{`Medicamenteuze ondersteuning`}</Inline></SubHeading>
      <PBody text={`Als vullen onvoldoende effect heeft, kan de bloeddruk medicamenteus ondersteund worden. Dan verhoog je óf de vaatweerstand door **knijpen**, óf de contractiekracht van het hart door **pompen**. Hiervoor gebruik je **vasopressoren** en **inotropica**.`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Vasopressoren** verhogen de vaatweerstand.`}</Inline></li>
        <li><Inline>{`**Inotropica** versterken de contractie van het hart.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij shock is het dus belangrijk om te bedenken welk onderdeel van de circulatie het probleem vormt. Soms is het vooral de tank, soms de pump, en soms de pipes.`}</Inline></p>
    </div>
  )
}
