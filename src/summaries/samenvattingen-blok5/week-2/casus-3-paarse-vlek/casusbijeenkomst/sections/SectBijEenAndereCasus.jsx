import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Bij een andere casus:`}</Inline></SubHeading>
      <PBody text={`**pT3bN1aM0**;`} />
      <p className="leading-relaxed"><Inline>{`stadium **IIIC**.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Zonder adjuvante behandeling is de recidiefkans ongeveer 60% in 5 jaar. Met adjuvante behandeling kan dit dalen naar ongeveer 30%.`}</Inline></p>
    </div>
  )
}
