import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Bij psoriasis horen in deze casus vooral:`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`uitgebreide erythemateuze, erythematosquameuze plaques`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`nagelafwijkingen zoals:`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`olievlekfenomeen`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`subunguale hyperkeratose`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`distale onycholyse`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`klachten die kunnen passen bij gewrichtsbetrokkenheid`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Daarnaast is er een pijnlijk rood onderbeen. Dat wordt in de casus uiteindelijk als **cellulitis** gezien: een warme, rode, gezwollen huidinfectie.`}</Inline></p>
    </div>
  )
}
