import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Indicaties van een renogram`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een renogram wordt onder andere gebruikt bij:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`meting en follow-up van de **gescheiden nierfunctie** bij unilaterale nierafwijkingen;`}</Inline></li>
        <li><Inline>{`verdenking op **obstructie**;`}</Inline></li>
        <li><Inline>{`analyse van een **plotseling verslechterde nierfunctie** zonder duidelijke oorzaak;`}</Inline></li>
        <li><Inline>{`evaluatie van complicaties na een **niertransplantatie**.`}</Inline></li>
      </ul>
    </div>
  )
}
