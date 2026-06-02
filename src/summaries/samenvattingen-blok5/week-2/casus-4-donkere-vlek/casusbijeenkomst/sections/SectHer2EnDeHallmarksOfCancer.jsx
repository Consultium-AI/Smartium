import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`HER2 en de hallmarks of cancer`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`HER2 is een transmembraanreceptor. Het kan met immunohistochemie worden aangetoond. Soms is aanvullend onderzoek nodig als de uitslag niet helemaal duidelijk is.`}</Inline></p>
    </div>
  )
}
