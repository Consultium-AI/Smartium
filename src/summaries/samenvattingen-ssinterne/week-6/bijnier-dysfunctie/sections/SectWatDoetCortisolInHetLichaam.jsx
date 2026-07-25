import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wat doet cortisol in het lichaam?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Cortisol is essentieel voor het menselijk lichaam. Het werkt via de glucocorticoïdreceptor, die in veel weefsels aanwezig is. Daardoor heeft cortisol effecten op vrijwel alle orgaansystemen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Het hormoon speelt een rol bij:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`het cardiovasculaire systeem, onder andere bij bloeddruk en vaattonus;`}</Inline></li>
        <li><Inline>{`het zenuwstelsel, onder andere bij stressreacties en fysiologische homeostase;`}</Inline></li>
        <li><Inline>{`het immuunsysteem, waar het ontstekingsremmend werkt;`}</Inline></li>
        <li><Inline>{`de stofwisseling van glucose en vetten;`}</Inline></li>
        <li><Inline>{`spieren en botten;`}</Inline></li>
        <li><Inline>{`de longen;`}</Inline></li>
        <li><Inline>{`de ogen;`}</Inline></li>
        <li><Inline>{`de huid;`}</Inline></li>
        <li><Inline>{`de voortplanting.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Cortisol heeft dus een breed werkingsgebied. Juist daarom kunnen zowel een tekort als een overschot uitgebreide klachten geven.`}</Inline></p>
    </div>
  )
}
