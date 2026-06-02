import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`De huidafwijkingen zijn beschreven als:`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`erythemateus`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`herpetiform`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`deels geconflueerd`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`met goudgele crustae`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`met uitgeponste ulcera en vesikels`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Op de pols is er een gelichenificeerde plaque met excoriaties en geringe desquamatie. Gelichenificeerd betekent dat de huid verdikt en grover is geworden door chronisch krabben.`}</Inline></p>
    </div>
  )
}
