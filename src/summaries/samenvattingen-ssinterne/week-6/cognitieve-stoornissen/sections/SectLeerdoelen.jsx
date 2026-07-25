import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het doornemen van deze stof heb je inzicht in:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de verschillende oorzaken van cognitieve stoornissen bij ouderen;`}</Inline></li>
        <li><Inline>{`de belangrijkste differentiaaldiagnostische overwegingen;`}</Inline></li>
        <li><Inline>{`de diagnostische mogelijkheden om cognitieve stoornissen bij ouderen te analyseren.`}</Inline></li>
      </ul>
    </div>
  )
}
