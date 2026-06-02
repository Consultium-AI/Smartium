import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Belangrijk is **controle van de nierfunctie**:`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`creatinine`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`urineonderzoek`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`herhaald urinesediment`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Nierschade ontstaat vaak binnen de eerste maanden. Daarom moet je de urine in de eerste 3 maanden maandelijks controleren en daarna op 6 en 12 maanden.`}</Inline></p>
    </div>
  )
}
