import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Aanvullend onderzoek:`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`lichamelijk onderzoek van **hart en longen**`}</Inline></p>
      <PBody text={`**ECG**`} />
      <PBody text={`**NT-proBNP**`} />
      <p className="leading-relaxed"><Inline>{`uiteindelijk vaak een **echocardiografie**`}</Inline></p>
    </div>
  )
}
