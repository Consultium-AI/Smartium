import { Inline, PBody, DataTable } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Leerdoelen`}</Inline></h3>
      <p><Inline>{`Na het bestuderen van deze stof kun je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de verschillende vormen van bariatrische chirurgie beschrijven en uitleggen wat de gevolgen van deze ingrepen zijn voor lichaamsgewicht, metabolisme, voedingsstatus en maag-darmfunctie;`}</Inline></li>
        <li><Inline>{`beargumenteren of een patiënt in aanmerking komt voor bariatrische chirurgie op basis van de GGR-tabel en mogelijke contra-indicaties.`}</Inline></li>
      </ul>
    </div>
  )
}
