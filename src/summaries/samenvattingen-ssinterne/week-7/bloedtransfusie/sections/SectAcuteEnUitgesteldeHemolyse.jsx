import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Acute en uitgestelde hemolyse`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een acute hemolytische transfusiereactie ontstaat binnen 24 uur na toediening van een erytrocytenconcentraat. Een uitgestelde hemolytische transfusiereactie ontstaat pas na 24 uur.`}</Inline></p>
    </div>
  )
}
