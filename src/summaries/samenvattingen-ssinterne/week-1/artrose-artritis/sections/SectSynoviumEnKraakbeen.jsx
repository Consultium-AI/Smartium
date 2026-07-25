import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Synovium en kraakbeen`}</Inline></SubHeading>
      <PBody text={`Het membraan dat de binnenkant van het gewrichtskapsel bekleedt heet het **synovium**.`} />
      <PBody text={`Bij **artrose** is primair het **kraakbeen** aangedaan.`} />
      <PBody text={`Bij **RA** is primair het **synovium** aangedaan; dit heet **synovitis**.`} />
    </div>
  )
}
