import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Klinische presentatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een patiënt met Crohn kan zich presenteren met buikpijn, diarree en gewichtsverlies, zoals in de casus. De klachten kunnen al maanden bestaan. Vermoeidheid is vaak een belangrijke klacht. De ontlasting kan frequent zijn, soms met aandrang en krampen. Koorts hoeft niet aanwezig te zijn.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij lichamelijk onderzoek kunnen de bevindingen beperkt zijn. Soms is er alleen drukpijn, bijvoorbeeld in de rechteronderbuik. Perianale inspectie en rectaal toucher kunnen normaal zijn, ook als er toch sprake is van Crohn.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij de anamnese is het belangrijk om goed te vragen naar:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`duur en frequentie van de klachten;`}</Inline></li>
        <li><Inline>{`relatie met eten of inspanning;`}</Inline></li>
        <li><Inline>{`gewichtsverlies;`}</Inline></li>
        <li><Inline>{`familiegeschiedenis;`}</Inline></li>
        <li><Inline>{`reizen, intoxicaties en medicijngebruik;`}</Inline></li>
        <li><Inline>{`groei bij jongeren;`}</Inline></li>
        <li><Inline>{`klachten buiten de darm, zoals gewrichten, huid en ogen.`}</Inline></li>
      </ul>
    </div>
  )
}
