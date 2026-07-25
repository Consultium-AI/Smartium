import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Behandeling van de ziekte van Addison`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De behandeling bestaat uit vervanging van zowel cortisol als aldosteron:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**hydrocortison** als cortisolvervanging;`}</Inline></li>
        <li><Inline>{`**fludrocortison** als aldosteronvervanging.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De patiënte krijgt duidelijke instructies:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`hydrocortison altijd blijven innemen en nooit zomaar stoppen;`}</Inline></li>
        <li><Inline>{`bij stress, ziekte of medische ingrepen de dosis direct verhogen volgens een stressschema;`}</Inline></li>
        <li><Inline>{`als innemen niet lukt door braken of verminderd bewustzijn, direct medische hulp zoeken voor een intramusculaire hydrocortisoninjectie.`}</Inline></li>
      </ul>
      <PBody text={`Dit is belangrijk om een **Addisoncrisis** te voorkomen, een potentieel levensbedreigende situatie.`} />
    </div>
  )
}
