import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Directe type I allergie`}</Inline></SubHeading>
      <PBody text={`Deze module gaat over allergische aandoeningen, met de nadruk op **type I IgE-gemedieerde allergie**. Dit is de klassieke directe allergische reactie. Het klachtenpatroon van de patiënt moet je leren herkennen, net als de waarde van de verschillende diagnostische hulpmiddelen.`} />
      <p className="leading-relaxed"><Inline>{`Belangrijke allergenen die hier steeds terugkomen zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`inhalatieallergenen;`}</Inline></li>
        <li><Inline>{`voeding;`}</Inline></li>
        <li><Inline>{`insecten;`}</Inline></li>
        <li><Inline>{`geneesmiddelen;`}</Inline></li>
        <li><Inline>{`beroepsmatige allergenen.`}</Inline></li>
      </ul>
    </div>
  )
}
