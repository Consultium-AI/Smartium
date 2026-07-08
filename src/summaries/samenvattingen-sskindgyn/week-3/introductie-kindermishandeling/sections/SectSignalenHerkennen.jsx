import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Signalen herkennen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Signalen van kindermishandeling zijn niet altijd bewijs. Veel signalen kunnen ook door andere oorzaken komen. Toch zijn het belangrijke waarschuwingssignalen die je serieus moet nemen.`}</Inline></p>
      <SubHeading><Inline>{`Algemene signalen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Mogelijke signalen zijn onder andere:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`blauwe plekken op ongewone plaatsen;`}</Inline></li>
        <li><Inline>{`letsel met een bepaalde vorm of afdruk;`}</Inline></li>
        <li><Inline>{`brandwonden;`}</Inline></li>
        <li><Inline>{`botbreuken;`}</Inline></li>
        <li><Inline>{`hersenletsel;`}</Inline></li>
        <li><Inline>{`buiktrauma;`}</Inline></li>
        <li><Inline>{`slechte hygiëne;`}</Inline></li>
        <li><Inline>{`onverzorgd gebit;`}</Inline></li>
        <li><Inline>{`buikpijn;`}</Inline></li>
        <li><Inline>{`hoofdpijn;`}</Inline></li>
        <li><Inline>{`vaak blaasontsteking.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Signalen bij kinderen van 0-4 jaar`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij jonge kinderen let je extra op lichamelijke, gedragsmatige en relationele signalen.`}</Inline></p>
      <PBody text={`**Tabel 2. Signalen van mogelijke kindermishandeling bij 0-4 jaar**`} />
      <DataTable rows={[["Domein", "Signalen"], ["Lichamelijk", "Blauwe plekken, groeiproblemen, luieruitslag, cariës, vaak ziek, hongerig, gestoorde motoriek"], ["Gedrag", "Weinig spontaan, passief, apathisch, in een fantasiewereld, nerveus, hyperactief, agressief"], ["Tegenover andere kinderen", "Agressief, wantrouwend, niet geliefd"], ["Tegenover ouders", "Angstig, waakzaam, meegaand, ander gedrag met of zonder ouders"], ["Tegenover andere volwassenen", "Angst om uit te kleden, angst voor lichamelijk onderzoek, overdreven afhankelijk, oogcontact vermijdend"], ["Overig", "Plotse gedragsveranderingen, niet-leeftijdsadequaat gedrag, taal- en spraakproblemen"]]} />
      <PBody text={`**Aandachtsvraag:** Betekent een signaal meteen dat er mishandeling is?
**Mini-antwoord:** Nee. Het is geen bewijs, maar wel een reden om verder te kijken en zorgvuldig te handelen.`} />
    </div>
  )
}
