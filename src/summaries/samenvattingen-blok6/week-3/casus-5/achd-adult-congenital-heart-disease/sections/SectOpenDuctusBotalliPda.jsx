import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Open ductus Botalli / PDA`}</Inline></SubHeading>
      <PBody text={`De **ductus Botalli**, ook wel **ductus arteriosus**, is essentieel in de foetale circulatie. Na de geboorte hoort deze verbinding spontaan te sluiten, normaal binnen de eerste **72 uur**. Als dat niet gebeurt, ontstaat een **patente ductus arteriosus (PDA)**.`} />
      <PBody text={`Ook hier hangt het hemodynamische effect af van de **grootte van de shunt**. Een kleine shunt geeft meestal geen overbelasting, maar een grote shunt kan leiden tot hartfalen en pulmonale hypertensie. Een asymptomatische PDA kan ontdekt worden door een typisch **continu “machine”-geruis** hoog links parasternaal. Daarnaast kan de diastolische bloeddruk laag zijn en de polsdruk hoog.`} />
    </div>
  )
}
