import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Klinische kenmerken`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de arm is duidelijk dikker dan de andere arm;`}</Inline></li>
        <li><Inline>{`de huid is rood en warm;`}</Inline></li>
        <li><Inline>{`er kan een gevoelige okselklier zijn;`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`de voorgeschiedenis wijst op een kwetsbare arm.`}</Inline></p>
    </div>
  )
}
