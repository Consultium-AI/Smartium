import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Hartfalen is extra waarschijnlijk bij:`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`een voorgeschiedenis van **myocardinfarct**`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`bilaterale beenzwelling`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`kortademigheid bij inspanning`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`’s nachts rechtop moeten slapen`}</Inline></p>
    </div>
  )
}
