import { Inline } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="leading-relaxed">
        <Inline>{`Adjuvante therapie wordt besproken bij patiënten met een hoog risico op recidief, bijvoorbeeld vanaf stadium IIIB tot en met stadium IV na volledige resectie.`}</Inline>
      </p>
      <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-600">
        <p className="font-semibold text-slate-900 dark:text-slate-100 mb-3 m-0">
          <Inline>{`Belangrijke punten:`}</Inline>
        </p>
        <ul className="list-disc pl-6 space-y-2.5">
          <li><Inline>{`de beslissing is individueel;`}</Inline></li>
          <li><Inline>{`leeftijd en kwetsbaarheid spelen mee;`}</Inline></li>
          <li><Inline>{`de eigen keuze van de patiënt is belangrijk;`}</Inline></li>
          <li><Inline>{`immunotherapie kan ernstige bijwerkingen geven;`}</Inline></li>
          <li>
            <Inline>{`bij een bestaande auto-immuunziekte is extra voorzichtigheid nodig;`}</Inline>
          </li>
          <li>
            <Inline>{`het is niet gegarandeerd dat patiënten langer leven door adjuvante immunotherapie, ook al daalt het recidiefrisico wel.`}</Inline>
          </li>
        </ul>
      </div>
    </div>
  )
}
