import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Relaxatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Voor ontspanning moet calcium weer uit het cytosol verdwijnen. Dat gebeurt via:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**SERCA-pomp**: pompt calcium terug het SR in`}</Inline></li>
        <li><Inline>{`**Na+/Ca2+-exchanger**`}</Inline></li>
        <li><Inline>{`**sarcolemmale Ca2+-ATPase**`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Als de calciumconcentratie daalt, laat calcium los van troponine C, en ontspant de spier.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`---`}</Inline></p>
    </div>
  )
}
