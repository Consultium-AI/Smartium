import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`HRCT: High Resolution Computed Tomography`}</Inline></SubHeading>
      <PBody text={`**HRCT** staat voor **High Resolution Computed Tomography**. Deze techniek maakt het mogelijk om subtiele afwijkingen in het **longparenchym** te zien. Het longparenchym is het functionele longweefsel waar de gaswisseling plaatsvindt. HRCT geeft een gedetailleerd beeld, onder andere van de **secundaire lobulus**.`} />
      <p className="leading-relaxed"><Inline>{`De secundaire lobulus is een klein anatomisch longgebied waarin onder meer een terminale bronchiole, een longslagadertje, een longvenetje en de interlobulaire septa te herkennen zijn. Juist doordat HRCT zo gedetailleerd is, kun je kleine afwijkingen in dit gebied beter opsporen.`}</Inline></p>
    </div>
  )
}
