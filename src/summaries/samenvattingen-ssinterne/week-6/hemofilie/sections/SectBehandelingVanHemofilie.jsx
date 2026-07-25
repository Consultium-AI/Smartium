import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Behandeling van hemofilie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De behandeling van hemofilie heeft twee hoofddoelen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`bloedingen voorkomen;`}</Inline></li>
        <li><Inline>{`bloedingen snel stoppen.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Voorkomen betekent vooral profylaxe: het voorkomen van spontane bloedingen en bloedingen rond ingrepen. Snel behandelen is belangrijk zodra een bloeding optreedt.`}</Inline></p>
      <SubHeading><Inline>{`Welke middelen gebruik je?`}</Inline></SubHeading>
      <PBody text={`**Tabel 4. Medicamenteuze behandeling van hemofilie**`} />
      <DataTable rows={[["Middel", "Werking", "Indicatie"], ["FVIII-concentraat", "Verhoogt factor VIII", "Hemofilie A"], ["FIX-concentraat", "Verhoogt factor IX", "Hemofilie B"], ["Desmopressine (DDAVP)", "Laat eigen FVIII en VWF vrijkomen uit endotheel", "Milde hemofilie A"], ["Tranexaminezuur", "Remt fibrinolyse", "Vooral bij slijmvliesbloedingen of ingrepen"]]} />
      <p className="leading-relaxed"><Inline>{`FVIII- en FIX-concentraten kunnen alleen intraveneus worden gegeven. DDAVP is vooral een optie bij milde hemofilie A.`}</Inline></p>
      <SubHeading><Inline>{`DDAVP`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`DDAVP zorgt voor stijging van het eigen factor VIII en VWF doordat deze uit het endotheel vrijkomen. Het wordt gebruikt bij milde hemofilie A, bijvoorbeeld bij ingrepen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De respons op DDAVP verschilt per patiënt. Daarom wordt vaak eerst een testdosering gegeven voordat het middel bij een procedure wordt gebruikt.`}</Inline></p>
      <PBody text={`**Aandachtspunt:**
Waarom is een testdosering handig?
**Kort antwoord:** omdat niet elke patiënt even goed reageert op DDAVP.`} />
      <p className="leading-relaxed"><Inline>{`Belangrijke bijwerkingen van DDAVP zijn vooral het antidiuretisch effect en daardoor hyponatriëmie bij te veel vochtinname. Daarom geldt vochtbeperking. Andere klachten kunnen zijn flushes, hoofdpijn, duizeligheid, bloeddrukdaling en tachycardie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Belangrijke contra-indicaties zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`hart- en vaatziekten;`}</Inline></li>
        <li><Inline>{`zwangerschap;`}</Inline></li>
        <li><Inline>{`jonge leeftijd, vooral onder de 4 jaar.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Factorconcentraten en complicaties`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Factorconcentraten kunnen complicaties geven, zoals:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`overgevoeligheidsreacties, vooral bij plasmaderivaten;`}</Inline></li>
        <li><Inline>{`virusinfecties in het verleden bij plasmaderivaten, zoals hepatitis B, hepatitis C en HIV;`}</Inline></li>
        <li><Inline>{`remmerontwikkeling.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Remmerontwikkeling betekent dat het lichaam antistoffen maakt tegen de toegediende stollingsfactor. Dat gebeurt vooral bij ernstige hemofilie en vaker bij hemofilie A dan bij hemofilie B.`}</Inline></p>
      <PBody text={`**Tabel 5. Remmerontwikkeling**`} />
      <DataTable rows={[["Kenmerk", "Hemofilie A", "Hemofilie B"], ["Kans op remmers", "30%", "4%"], ["Komt vooral voor bij", "Kinderen, ernstige hemofilie", "Minder vaak"], ["Type antistof", "Allo-antistof, meestal IgG", "Allo-antistof, meestal IgG"]]} />
      <p className="leading-relaxed"><Inline>{`Factoren die een rol kunnen spelen zijn genetische achtergrond, immuunstatus en mogelijk ook productkenmerken.`}</Inline></p>
    </div>
  )
}
