import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Duur bij een eerste event`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`Bij een **tijdelijke risicofactor**: 3 maanden behandelen.`}</Inline></li>
        <li><Inline>{`Bij een **idiopathische trombose**: in principe onbeperkt behandelen, tenzij het bloedingsrisico te hoog is. Dan jaarlijks herbeoordelen.`}</Inline></li>
        <li><Inline>{`Bij een **tweede trombose**: onbeperkte duur antistolling.`}</Inline></li>
      </ul>
    </div>
  )
}
