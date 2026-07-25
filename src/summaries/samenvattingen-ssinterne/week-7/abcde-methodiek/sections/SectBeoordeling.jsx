import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Beoordeling`}</Inline></SubHeading>
      <SubHeading><Inline>{`Kijken`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Let op:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`huidafwijkingen zoals urticaria, erytheem, petechiën, blaren`}</Inline></li>
        <li><Inline>{`hematomen of bloedingen`}</Inline></li>
        <li><Inline>{`zwellingen en oedeem`}</Inline></li>
        <li><Inline>{`ontstekingen of infecties`}</Inline></li>
        <li><Inline>{`abnormale standen van ledematen`}</Inline></li>
        <li><Inline>{`insteekopeningen, bijvoorbeeld bij intraveneus drugsgebruik`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Voelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Voel naar:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`temperatuur`}</Inline></li>
        <li><Inline>{`vochtigheid van de huid`}</Inline></li>
        <li><Inline>{`mogelijke fracturen`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Monitoring`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De lichaamstemperatuur moet worden gemeten. Centrale metingen zijn het meest bruikbaar in acute situaties.`}</Inline></p>
    </div>
  )
}
