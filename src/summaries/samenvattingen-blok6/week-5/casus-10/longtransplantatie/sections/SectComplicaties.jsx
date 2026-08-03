import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Complicaties`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Longtransplantatiezorg is zorgvuldig en geprotocolleerd, maar complicaties kunnen toch optreden. Die kunnen vroeg of laat ontstaan.`}</Inline></p>
    </div>
  )
}
