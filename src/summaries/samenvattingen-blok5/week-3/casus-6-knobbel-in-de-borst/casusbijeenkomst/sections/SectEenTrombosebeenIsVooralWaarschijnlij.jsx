import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Een trombosebeen is vooral waarschijnlijk bij:`}</Inline></SubHeading>
      <PBody text={`**unilaterale** zwelling`} />
      <p className="leading-relaxed"><Inline>{`pijn en gespannen gevoel`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`eventueel roodheid`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`risicofactoren zoals **immobilisatie**, **orale anticonceptie**, recente reis of operatie`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een trombosebeen kan soms rood zijn, maar het erytheem staat meestal minder op de voorgrond dan bij erysipelas.`}</Inline></p>
    </div>
  )
}
