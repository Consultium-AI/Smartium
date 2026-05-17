import { Inline, PBody, DataTable } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Het Mediterrane dieet`}</Inline></h3>
      <p><Inline>{`Het Mediterrane dieet is een van de belangrijkste voedingspatronen in deze module. Het is gebaseerd op de traditionele keuken rond de Middellandse Zee en bevat vooral:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`veel groenten en fruit;`}</Inline></li>
        <li><Inline>{`volkoren granen;`}</Inline></li>
        <li><Inline>{`peulvruchten;`}</Inline></li>
        <li><Inline>{`noten en zaden;`}</Inline></li>
        <li><Inline>{`olijfolie als belangrijkste vetbron;`}</Inline></li>
        <li><Inline>{`vis en gevogelte;`}</Inline></li>
        <li><Inline>{`weinig rood vlees en bewerkte producten.`}</Inline></li>
      </ul>
      <p><Inline>{`Het Mediterrane dieet wordt beschreven als een gezond, meer plantaardig patroon dat het risico op welvaartsziekten kan verlagen.`}</Inline></p>
      <p><Inline>{`Tabel 3. Mediterrane dieet versus Richtlijnen Goede Voeding`}</Inline></p>
      <DataTable rows={[["Onderdeel", "Mediterrane voedingsstijl", "Richtlijnen Goede Voeding"], ["Groenten en fruit", "Veel", "Minimaal dagelijks voldoende"], ["Volkorenproducten", "Veel", "Voorkeur voor volkoren"], ["Peulvruchten en noten", "Belangrijk onderdeel", "Sterk aanbevolen"], ["Vetbron", "Olijfolie", "Plantaardige oliën/margarine boven harde vetten"], ["Vlees", "Weinig rood vlees", "Beperking van rood en bewerkt vlees"], ["Vis", "Regelmatig", "Aanbevolen"], ["Suikerhoudende dranken", "Weinig", "Zo min mogelijk"]]} />
      <p><Inline>{`De verschillen met de Nederlandse richtlijnen zijn eigenlijk klein. Beide leggen de nadruk op meer plantaardig eten, meer volkoren, peulvruchten, groente en fruit, en minder bewerkt vlees. Het Mediterrane dieet legt net wat meer nadruk op **olijfolie** als bron van onverzadigde vetten.`}</Inline></p>
    </div>
  )
}
