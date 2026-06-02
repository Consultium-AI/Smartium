import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Smeer- en wasadvies`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`kort douchen, niet te vaak`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`lauwwarm water of parfumvrije olie`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`emolliens 2x per dag`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`minimaal 1 uur tussen hormoonzalf en vette zalf`}</Inline></p>
    </div>
  )
}
