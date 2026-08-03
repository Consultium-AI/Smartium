import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Waarom is dat belangrijk?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De vorm van de curve vertelt iets over wat het geneesmiddel in het lichaam doet. Een snelle eerste daling betekent verdeling naar weefsels. De latere, meer regelmatige daling laat de echte eliminatie zien.`}</Inline></p>
    </div>
  )
}
