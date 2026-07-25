import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het doornemen van deze stof kun je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`informatiebronnen raadplegen die helpen bepalen of en in welke mate geneesmiddeldoseringen moeten worden aangepast bij nierfunctiestoornissen;`}</Inline></li>
        <li><Inline>{`uitleggen waarom een geneesmiddel soms vermeden moet worden bij nierfunctiestoornissen.`}</Inline></li>
      </ul>
    </div>
  )
}
