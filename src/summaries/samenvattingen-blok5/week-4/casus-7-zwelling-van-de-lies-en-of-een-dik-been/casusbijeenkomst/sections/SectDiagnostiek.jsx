import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Diagnostiek`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Erysipelas is vooral een klinische diagnose. Aanvullend onderzoek is meestal niet nodig om de diagnose te stellen. Wel kunnen CRP en leukocyten verhoogd zijn.`}</Inline></p>
    </div>
  )
}
