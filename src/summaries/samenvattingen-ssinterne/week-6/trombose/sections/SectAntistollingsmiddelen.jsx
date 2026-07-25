import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Antistollingsmiddelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De belangrijkste middelen zijn heparine, LMWH, vitamine K-antagonisten en DOAC’s.`}</Inline></p>
    </div>
  )
}
