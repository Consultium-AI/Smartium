import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Klinische relevantie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Hepatitis C is niet alleen een leverziekte. Onbehandelde infectie geeft ook een verhoogd risico op sterfte door andere oorzaken, vooral in de vroege fase. Later domineren de levercomplicaties. Daarom is vroege herkenning belangrijk, ook als iemand nog weinig klachten heeft.`}</Inline></p>
    </div>
  )
}
