import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="leading-relaxed font-semibold text-slate-900 dark:text-slate-100">
        <Inline>{`Bij satellietlaesies:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`eerst: **pT2aN0Mx**, klinisch stadium **IB**;`}</Inline></li>
        <li><Inline>{`bij satellieten: **pT2aN1cMx**, klinisch stadium **IIIB**.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Dat betekent dat de prognose duidelijk slechter wordt. De 5-jaars overleving gaat grofweg van ongeveer 90% in stadium IB naar 30-50% in stadium IIIB.`}</Inline></p>
    </div>
  )
}
