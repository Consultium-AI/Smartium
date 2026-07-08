import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hoe observeer je een kind goed?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een motorische observatie doe je gestructureerd. De observatie begint meteen. Het is belangrijk dat de omgeving rustig is en dat het kind wakker en alert is. Benader het kind zoveel mogelijk van voren en observeer het in verschillende houdingen volgens een vaste volgorde, bijvoorbeeld:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`rugligging;`}</Inline></li>
        <li><Inline>{`buikligging;`}</Inline></li>
        <li><Inline>{`zit;`}</Inline></li>
        <li><Inline>{`stand.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Je kijkt van boven naar beneden en van links naar rechts. Het is belangrijk dat je je niet alleen laat afleiden door één opvallende afwijking. Kies ook speelgoed dat past bij het ontwikkelingsniveau van het kind.`}</Inline></p>
    </div>
  )
}
