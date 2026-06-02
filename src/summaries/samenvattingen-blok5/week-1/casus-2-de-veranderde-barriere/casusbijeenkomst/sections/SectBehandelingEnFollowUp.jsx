import { Inline, SubHeading } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Behandeling en follow-up`}</Inline></SubHeading>
      <p className="leading-relaxed">
        <Inline>{`De meeste patiënten hebben geen zware behandeling nodig. Vaak is de behandeling ondersteunend:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`rust`}</Inline></li>
        <li><Inline>{`paracetamol`}</Inline></li>
        <li><Inline>{`eventueel NSAID’s bij gewrichtsklachten`}</Inline></li>
      </ul>
      <p className="leading-relaxed">
        <Inline>{`Als er betrokkenheid is van extracutane organen, zoals nieren of maag-darmkanaal, kan immunosuppressie worden overwogen, bijvoorbeeld prednison.`}</Inline>
      </p>
      <p className="leading-relaxed">
        <Inline>{`Belangrijk is **controle van de nierfunctie**:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`creatinine`}</Inline></li>
        <li><Inline>{`urineonderzoek`}</Inline></li>
        <li><Inline>{`herhaald urinesediment`}</Inline></li>
      </ul>
      <p className="leading-relaxed">
        <Inline>{`Nierschade ontstaat vaak binnen de eerste maanden. Daarom moet je de urine in de eerste 3 maanden maandelijks controleren en daarna op 6 en 12 maanden.`}</Inline>
      </p>
    </div>
  )
}
