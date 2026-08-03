import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het bestuderen van deze stof kun je de macroscopische anatomie van de trachea en de longen beschrijven, inclusief hun ligging in de thorax en hun relatie met omliggende structuren zoals het hart, de grote vaten, de thoraxwand, het diafragma en grote zenuwen. Ook kun je deze anatomische kennis toepassen bij het bekijken van X-thoraxopnames en CT-scans van de thorax, en bij het begrijpen van longpathologie in een klinische context.`}</Inline></p>
    </div>
  )
}
