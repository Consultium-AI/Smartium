import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het doornemen van deze stof kun je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de indicaties voor bloedtransfusie benoemen;`}</Inline></li>
        <li><Inline>{`de indicatie voor de verschillende bloedproductsoorten benoemen;`}</Inline></li>
        <li><Inline>{`een aanvraag voor laboratoriumbepalingen ten behoeve van bloedtransfusie opstellen;`}</Inline></li>
        <li><Inline>{`de geldigheid van laboratoriumbepalingen voor transfusie benoemen;`}</Inline></li>
        <li><Inline>{`de risico’s van antistoffen tegen verschillende bloedgroepsystemen benoemen;`}</Inline></li>
        <li><Inline>{`het Type & Screen-beleid beschrijven;`}</Inline></li>
        <li><Inline>{`de rol van transfusies bij massaal en chronisch bloedverlies beschrijven;`}</Inline></li>
        <li><Inline>{`de risico’s van bloedtransfusies benoemen, inclusief hemovigilantie.`}</Inline></li>
      </ul>
    </div>
  )
}
