import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Beleid`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Omdat het risico op een ernstig beloop verhoogd is, wordt antibiotische behandeling overwogen. Het doel is niet alleen de huidige infectie behandelen, maar ook complicaties zoals fasciitis voorkomen.`}</Inline></p>
    </div>
  )
}
