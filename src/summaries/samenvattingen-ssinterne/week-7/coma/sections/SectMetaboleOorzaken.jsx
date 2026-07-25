import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Metabole oorzaken`}</Inline></SubHeading>
      <PBody text={`Het centraal zenuwstelsel is afgeschermd door de bloed-hersenbarrière, maar toch kunnen veranderingen in het interne milieu leiden tot functiestoornissen van de hersenen. Dit heet vaak een **metabole encefalopathie**. De klachten beginnen vaak subtiel. Focale uitval komt daarbij weinig voor. Als de metabole stoornis niet te lang duurt, kan volledig herstel mogelijk zijn.`} />
      <p className="leading-relaxed"><Inline>{`De hersenen hebben per gewichtseenheid een zeer grote energiebehoefte. Ze zijn vrijwel volledig afhankelijk van glucose en zuurstof. Daarom kunnen stoornissen in glucose, zuurstofvoorziening of andere metabole processen snel leiden tot bewustzijnsdaling.`}</Inline></p>
    </div>
  )
}
