import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Chronisch bloedverlies`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij chronische anemie hangt de transfusie-indicatie af van leeftijd, comorbiditeit en klachten. Een Hb-trigger kan worden gebruikt, maar klachten gaan voor.`}</Inline></p>
      <DataTable rows={[["Tabel 5. Veel gebruikte Hb-grenswaarden bij chronische anemie"], ["<25 jaar", "4,0 mmol/L"], ["25–50 jaar", "4,5 mmol/L"], ["50–70 jaar", "5,0 mmol/L"], [">70 jaar", "5,5 mmol/L"]]} />
      <p className="leading-relaxed"><Inline>{`Voor hemato-oncologische patiënten met chronische anemie hanteert de Nederlandse richtlijn een Hb-trigger van 4,3–5,0 mmol/L.`}</Inline></p>
    </div>
  )
}
