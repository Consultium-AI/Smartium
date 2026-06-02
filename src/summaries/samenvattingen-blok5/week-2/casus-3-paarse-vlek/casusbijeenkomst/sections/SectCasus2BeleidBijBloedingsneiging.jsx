import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Casus 2: beleid bij bloedingsneiging`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij de tweede casus hangt de behandeling af van de uiteindelijke diagnose. De kern is dat je eerst moet weten of er sprake is van:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`een stollingsstoornis;`}</Inline></li>
        <li><Inline>{`een trombocytenprobleem;`}</Inline></li>
        <li><Inline>{`of toch een vasculitis.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Daarna volgt gerichte behandeling op basis van de oorzaak.`}</Inline></p>
    </div>
  )
}
