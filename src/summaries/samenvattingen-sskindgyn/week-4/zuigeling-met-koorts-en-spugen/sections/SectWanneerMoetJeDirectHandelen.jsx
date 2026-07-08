import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wanneer moet je direct handelen?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een kind jonger dan 3 maanden met koorts zonder duidelijke focus moet direct worden verwezen naar de kinderarts. Daarnaast geldt dat bij verdenking op een urineweginfectie spoedbeoordeling nodig is bij kinderen jonger dan 6 maanden, bij kinderen die braken en daardoor geen orale antibiotica kunnen innemen of onvoldoende drinken, en bij kinderen met een groot risico op ernstige ziekte.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij een zuigeling met koorts en spugen moet je dus laagdrempelig denken aan een ernstige infectie en niet afwachten.`}</Inline></p>
    </div>
  )
}
