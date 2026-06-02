import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Aanvullend onderzoek`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`epicutaan testen voor PPD, parfum en acrylaten`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`allergologisch onderzoek naar voedselallergieën`}</Inline></p>
    </div>
  )
}
