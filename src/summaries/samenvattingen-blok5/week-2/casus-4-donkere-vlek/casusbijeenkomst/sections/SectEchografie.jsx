import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Echografie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Echografie speelt een belangrijke rol, zowel van de borst zelf als van de oksel. Zeker bij dicht borstweefsel kan echografie aanvullend helpen.`}</Inline></p>
    </div>
  )
}
