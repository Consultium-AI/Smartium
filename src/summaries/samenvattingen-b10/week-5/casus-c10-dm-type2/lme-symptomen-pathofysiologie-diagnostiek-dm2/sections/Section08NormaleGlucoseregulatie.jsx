import { Inline, PBody, DataTable } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Van normale glucoseregulatie naar DM2`}</Inline></h3>
      <p><Inline>{`Normaal werkt insuline als volgt:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`glucose komt de β-cel binnen via **GLUT2**;`}</Inline></li>
        <li><Inline>{`de β-cel geeft insuline en C-peptide af;`}</Inline></li>
        <li><Inline>{`insuline gaat naar lever en spieren en bindt aan de receptor;`}</Inline></li>
        <li><Inline>{`**GLUT4** komt naar het celmembraan;`}</Inline></li>
        <li><Inline>{`glucose kan de cel in;`}</Inline></li>
        <li><Inline>{`de bloedglucose daalt.`}</Inline></li>
      </ul>
      <p><Inline>{`Bij insulineresistentie reageren de insulinecellen in lever, spier en vetweefsel minder goed. De lever blijft glucose afgeven, ook wanneer dat eigenlijk afgeremd zou moeten worden. De pancreas probeert dit te compenseren door meer insuline af te geven, maar die voortdurende overbelasting leidt op termijn tot **β-celstress**, functieverlies en uiteindelijk **β-celatrofie**. Daardoor neemt ook de insulineproductie af.`}</Inline></p>
      <PBody text={`**Aandacht-vragetje:** *Waarom kan DM2 in de loop van de tijd erger worden?*  
**Kort antwoord:** Omdat insulineresistentie de β-cellen steeds harder laat werken, waardoor die op termijn uitgeput raken en beschadigd kunnen worden.`} />
    </div>
  )
}
