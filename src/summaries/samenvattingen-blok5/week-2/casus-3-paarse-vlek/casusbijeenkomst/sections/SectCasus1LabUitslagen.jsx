import { Inline } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="leading-relaxed">
        <Inline>{`De huisarts laat aanvullend onderzoek doen. De eerste uitslagen zijn:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`CRP 40;`}</Inline></li>
        <li><Inline>{`creatinine normaal;`}</Inline></li>
        <li><Inline>{`urine met erytrocyten 4+.`}</Inline></li>
      </ul>
      <p className="leading-relaxed">
        <Inline>{`Dat ondersteunt dat er meer speelt dan alleen een huidafwijking. De aanwezigheid van erytrocyten in de urine maakt nierbetrokkenheid relevant. Daarom wordt gedacht aan een vasculitis.`}</Inline>
      </p>
    </div>
  )
}
