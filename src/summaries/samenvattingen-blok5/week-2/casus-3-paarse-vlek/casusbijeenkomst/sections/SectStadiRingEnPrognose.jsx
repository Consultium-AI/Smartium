import { Inline } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="leading-relaxed">
        <Inline>{`De notities laten zien dat het stadium sterk kan veranderen door nieuwe bevindingen.`}</Inline>
      </p>
      <p className="leading-relaxed font-semibold text-slate-900 dark:text-slate-100 m-0">
        <Inline>{`Bij satellietlaesies:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`eerst: **pT2aN0Mx**, klinisch stadium **IB**;`}</Inline></li>
        <li><Inline>{`bij satellieten: **pT2aN1cMx**, klinisch stadium **IIIB**.`}</Inline></li>
      </ul>
      <p className="leading-relaxed">
        <Inline>{`Dat betekent dat de prognose duidelijk slechter wordt. De 5-jaars overleving gaat grofweg van ongeveer 90% in stadium IB naar 30-50% in stadium IIIB.`}</Inline>
      </p>
      <p className="leading-relaxed font-semibold text-slate-900 dark:text-slate-100 m-0">
        <Inline>{`Bij een andere casus:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**pT3bN1aM0**;`}</Inline></li>
        <li><Inline>{`stadium **IIIC**.`}</Inline></li>
      </ul>
      <p className="leading-relaxed">
        <Inline>{`Zonder adjuvante behandeling is de recidiefkans ongeveer 60% in 5 jaar. Met adjuvante behandeling kan dit dalen naar ongeveer 30%.`}</Inline>
      </p>
    </div>
  )
}
