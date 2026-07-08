import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Inleiding: wat zijn cyclusstoornissen?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Cyclusstoornissen komen vaak voor, zowel in de algemene populatie als bij paren met een kinderwens. Soms past een onregelmatige cyclus bij een normale levensfase, bijvoorbeeld in de eerste jaren na de menarche of juist in de periode richting de menopauze. Toch is een cyclusstoornis vaak een teken van onderliggende pathofysiologie. Daarom is het belangrijk om cyclusstoornissen tijdig te herkennen, te onderzoeken en te behandelen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een cyclusstoornis kan zich uiten als:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`primaire amenorroe;`}</Inline></li>
        <li><Inline>{`secundaire amenorroe;`}</Inline></li>
        <li><Inline>{`oligomenorroe.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De incidentie van cyclusstoornissen in de algemene populatie is ongeveer 10%.`}</Inline></p>
      <SubHeading><Inline>{`Normale menstruële cyclus`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Vanaf enkele jaren na de menarche tot enkele jaren vóór de menopauze hoort er een regelmatige menstruële cyclus aanwezig te zijn. De cyclus bestaat uit twee fasen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de folliculaire fase: van het begin van de cyclus tot aan de ovulatie;`}</Inline></li>
        <li><Inline>{`de luteale fase: van de ovulatie tot aan de menstruatie.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De normale cyclusduur varieert van 25 tot 35 dagen. Variatie binnen deze range kan fysiologisch zijn. Die variatie ontstaat vooral door verschillen in de duur van de folliculaire fase. De luteale fase is per cyclus vrij constant en duurt gemiddeld 14 dagen.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** Wanneer begint de cyclus eigenlijk?
**Mini-antwoord:** Op de eerste dag dat het bloedverlies wordt bemerkt.`} />
    </div>
  )
}
