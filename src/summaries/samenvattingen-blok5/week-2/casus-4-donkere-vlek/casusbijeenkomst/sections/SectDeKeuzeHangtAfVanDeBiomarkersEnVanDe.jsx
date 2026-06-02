import { Inline } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="leading-relaxed m-0">
        <Inline>{`De keuze hangt af van de biomarkers en van de vraag of de behandeling:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**neoadjuvant** is: vóór de operatie;`}</Inline></li>
        <li><Inline>{`**adjuvant** is: na de operatie;`}</Inline></li>
        <li><Inline>{`of in een andere setting wordt gegeven.`}</Inline></li>
      </ul>
      <p className="leading-relaxed">
        <Inline>{`Bij deze casus zijn ER en PR negatief en HER2 positief. Dat maakt HER2-gerichte behandeling relevant. Antihormonale therapie ligt minder voor de hand als ER en PR negatief zijn.`}</Inline>
      </p>
    </div>
  )
}
