import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Screening op ondervoeding`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Iedereen die in het ziekenhuis wordt opgenomen moet gescreend worden op risico op ondervoeding. Dat is een kwaliteitsindicator. Hiervoor kunnen verschillende instrumenten worden gebruikt, zoals de MUST en de SNAQ.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Deze instrumenten zijn snel toepasbaar en kunnen door verschillende zorgverleners worden gebruikt. Nadeel is dat ze een beperkte sensitiviteit en positief voorspellende waarde hebben. Ook is gewichtsverloop niet altijd bekend, en het inschatten van ziekte en verwachte voedselinname kan lastig zijn.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 2. MUST en SNAQ in het kort`}</Inline></SubHeading>
      <DataTable rows={[["Instrument", "Opbouw", "Voordeel", "Nadeel"], ["MUST", "3 stappen: BMI, gewichtsverloop, effect van acuut ziek zijn", "snel toepasbaar", "gewichtsverloop en ziekte-inschatting kunnen lastig zijn"], ["SNAQ", "3 vragen over gewichtsverlies, eetlust en gebruik van drink-/sondevoeding", "snel en eenvoudig", "beperkte sensitiviteit/voorspellende waarde"]]} />
      <p className="leading-relaxed"><Inline>{`De MUST-score van mevrouw De Vries is 2. Dat betekent een hoog risico op ondervoeding.`}</Inline></p>
      <SubHeading><Inline>{`Aandacht-vraag`}</Inline></SubHeading>
      <PBody text={`**Wat is een valkuil bij het gebruik van BMI voor screening?**
Gewicht kan beïnvloed zijn door oedeem of ascites, en lengte of gewicht meten is niet altijd mogelijk.`} />
    </div>
  )
}
