import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hilum van de long`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het hilum van de long is het gebied waar de bronchiën, de arteria pulmonales en de vena pulmonales de longen binnenkomen of verlaten. De arteria pulmonales lopen daarbij mee met de bronchiaalboom. In de anatomische afbeelding wordt het hilum van dorsale zijde bekeken.`}</Inline></p>
    </div>
  )
}
