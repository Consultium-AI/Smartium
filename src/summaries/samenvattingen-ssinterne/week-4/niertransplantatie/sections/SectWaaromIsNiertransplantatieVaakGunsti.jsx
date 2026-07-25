import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Waarom is niertransplantatie vaak gunstig?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Mensen met ernstige nierinsufficiëntie die geen nierfunctievervangende therapie krijgen, hebben een korte levensverwachting. Dialyse en transplantatie kunnen dat verbeteren, maar transplantatie geeft doorgaans de beste nierfunctie. Een transplantaat haalt gemiddeld een nierfunctie van ongeveer 40–50 ml/min/1,73 m², terwijl hemo- of peritoneale dialyse gemiddeld rond 10 ml/min/1,73 m² uitkomt. Daardoor is de levensverwachting na transplantatie meestal beter dan bij dialyse.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De levensverwachting wordt natuurlijk ook beïnvloed door leeftijd en co-morbiditeit, maar de kwaliteit van de nierfunctie zelf speelt een grote rol.`}</Inline></p>
    </div>
  )
}
