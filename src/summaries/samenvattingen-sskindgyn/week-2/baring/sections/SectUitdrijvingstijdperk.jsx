import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Uitdrijvingstijdperk`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`In het uitdrijvingstijdperk wordt het kind geboren. De meeste foetussen liggen in achterhoofdsligging. Dat betekent dat het achterhoofd van de foetus in de bekkenas ligt en als eerste geboren zal worden. Naast achterhoofdsligging bestaan ook kruinligging, voorhoofdsligging en aangezichtsligging.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij achterhoofdsligging staat het achterhoofd vóór. De stand van het hoofd in het bekken kan bijvoorbeeld achterhoofdsligging met achterhoofd links voor of rechts voor zijn. Het belangrijkste idee is dat het hoofd zich zo door het bekken beweegt dat het goed kan passeren.`}</Inline></p>
    </div>
  )
}
