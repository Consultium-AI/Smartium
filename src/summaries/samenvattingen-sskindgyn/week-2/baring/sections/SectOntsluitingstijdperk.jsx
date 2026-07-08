import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Ontsluitingstijdperk`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`In het ontsluitingstijdperk verandert de baarmoederhals stap voor stap. De portio wordt korter en verdwijnt uiteindelijk bijna helemaal, waarna de ontsluiting toeneemt. Verstrijken betekent dus dat de portio verkort door vorming van het onderste uterussegment. Daarna volgt verdere ontsluiting.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een vrouw is in partu zodra er subjectieve contracties zijn en objectief blijkt dat het echte weeën zijn. Een contractie is simpel gezegd een samentrekking van de spierwand van de uterus. Weeën zijn regelmatige, meestal pijnlijke uteruscontracties, vaak om de 3 tot 5 minuten, met een progressief effect op het baringsproces. Goede weeën zijn weeën die daadwerkelijk zorgen voor voortgang, dus voor verstrijking, ontsluiting en indaling.`}</Inline></p>
    </div>
  )
}
