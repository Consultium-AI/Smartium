import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Waarom is dit klinisch relevant?`}</Inline></SubHeading>
      <PBody text={`Bij **primair hyperaldosteronisme**, bijvoorbeeld door een adenoom in de bijnier, is er te veel aldosteron. Dan kan er toch hypertensie ontstaan. Dat laat zien dat de werking van aldosteron in verschillende situaties anders uitpakt.`} />
    </div>
  )
}
