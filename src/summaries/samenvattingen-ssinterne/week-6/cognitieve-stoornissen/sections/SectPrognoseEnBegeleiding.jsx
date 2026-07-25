import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Prognose en begeleiding`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een zuivere alcoholgerelateerde dementie zijn de klachten na stoppen met alcohol meestal weinig progressief, maar bestaande klachten verdwijnen zelden volledig. Er is geen gerichte medicamenteuze behandeling. De zorg bestaat vooral uit begeleiding, terugvalpreventie en het goed organiseren van de ondersteuning.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Daarom is het belangrijk om samen met patiënt en naasten te bespreken welke hulp nodig is, bijvoorbeeld thuiszorg, diëtetiek, toezicht door familie en verdere begeleiding in de thuissituatie.`}</Inline></p>
    </div>
  )
}
