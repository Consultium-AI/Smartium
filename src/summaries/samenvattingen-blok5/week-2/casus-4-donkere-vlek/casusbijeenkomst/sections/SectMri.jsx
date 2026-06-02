import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`MRI`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`MRI kan ook een rol hebben als aanvullende beeldvorming, vooral wanneer mammografie onvoldoende informatie geeft door de densiteit van het borstweefsel.`}</Inline></p>
    </div>
  )
}
