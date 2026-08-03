import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Niet-spierinvasief en spierinvasief blaaskarcinoom`}</Inline></SubHeading>
      <PBody text={`Een heel belangrijk onderscheid is dat tussen **niet-spierinvasief** en **spierinvasief** blaaskarcinoom.`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Niet-spierinvasief blaaskarcinoom**: tumor tot en met stadium T1, dus niet doorgegroeid in de blaasspier.`}</Inline></li>
        <li><Inline>{`**Spierinvasief blaaskarcinoom**: tumor vanaf stadium T2, dus wel ingegroeid in de musculus detrusor.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Dit onderscheid is belangrijk omdat de prognose heel verschillend is. Niet-spierinvasieve tumoren hebben meestal een goede overleving, maar wel een grote kans op terugkeer in de blaas. Spierinvasieve tumoren hebben een veel slechtere prognose.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Tabel 3 zet dit overzichtelijk naast elkaar.`}</Inline></p>
      <PBody text={`**Tabel 3. Niet-spierinvasief versus spierinvasief blaaskarcinoom**`} />
      <DataTable rows={[["Kenmerk", "Niet-spierinvasief", "Spierinvasief"], ["Stadium", "≤ T1", "> T1"], ["Aandeel van nieuwe gevallen", "70-75%", "25-30%"], ["5-jaar kanker-specifieke overleving", "90-95%", "<50%"], ["Belangrijk probleem", "Recidief en progressie", "Slechtere prognose door spierinvasie"]]} />
      <PBody text={`**Aandacht-vraagje:** waarom is de detrusorspier zo belangrijk?
**Mini-antwoord:** omdat ingroei in deze spier het verschil maakt tussen niet-spierinvasief en spierinvasief blaaskanker.`} />
    </div>
  )
}
