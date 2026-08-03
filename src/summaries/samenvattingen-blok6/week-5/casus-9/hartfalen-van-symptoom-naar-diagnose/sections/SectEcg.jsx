import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`ECG`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een ECG is laagdrempelig, goedkoop en snel. Het bevestigt hartfalen niet, maar kan wel aanwijzingen geven voor een onderliggende hartziekte of een alternatief probleem.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Op een ECG kun je bijvoorbeeld zien:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`atriumfibrilleren of flutter`}</Inline></li>
        <li><Inline>{`linkerventrikelhypertrofie`}</Inline></li>
        <li><Inline>{`geleidingsstoornissen zoals linkerbundeltakblok`}</Inline></li>
        <li><Inline>{`tekenen van ischemie of een doorgemaakt infarct`}</Inline></li>
        <li><Inline>{`pacemakeractiviteit`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Een normaal ECG sluit hartfalen niet volledig uit, maar maakt het wel minder waarschijnlijk, vooral bij systolisch hartfalen.`}</Inline></p>
    </div>
  )
}
