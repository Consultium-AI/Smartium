import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Mogelijke tumoren zijn:`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`blaas`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`rectum`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`cervix`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`endometrium`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`ovarium`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Omdat er vaginaal bloedverlies is, staan **cervixcarcinoom** en **endometriumcarcinoom** hoog op de lijst.`}</Inline></p>
    </div>
  )
}
