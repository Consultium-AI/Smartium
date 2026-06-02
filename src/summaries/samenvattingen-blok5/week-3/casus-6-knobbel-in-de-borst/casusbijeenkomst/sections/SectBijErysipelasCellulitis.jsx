import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Bij erysipelas/cellulitis:`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`is de huidinfectie vaak acuut`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`kan koorts aanwezig zijn`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`is het been pijnlijk en rood`}</Inline></p>
    </div>
  )
}
