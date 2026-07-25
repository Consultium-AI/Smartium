import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`E – Environment`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Let op tekenen van intoxicatie, zoals naaldsporen, strips of drugs in broekzakken. Zoek naar leverstigmata, zoals erythema palmaris, gynaecomastie, spider naevi en flapping tremor. Meet ook de temperatuur en doe een volledig assessment.`}</Inline></p>
    </div>
  )
}
