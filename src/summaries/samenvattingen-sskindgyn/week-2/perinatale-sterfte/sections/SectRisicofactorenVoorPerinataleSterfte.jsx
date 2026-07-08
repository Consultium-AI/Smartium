import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Risicofactoren voor perinatale sterfte`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Er zijn meerdere risicofactoren die de kans op perinatale sterfte verhogen. Belangrijke voorbeelden zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`meerlingzwangerschap;`}</Inline></li>
        <li><Inline>{`hogere maternale leeftijd;`}</Inline></li>
        <li><Inline>{`tienerzwangerschap;`}</Inline></li>
        <li><Inline>{`eerste kind of vanaf het vierde kind;`}</Inline></li>
        <li><Inline>{`niet-westerse afkomst;`}</Inline></li>
        <li><Inline>{`roken;`}</Inline></li>
        <li><Inline>{`ernstig overgewicht;`}</Inline></li>
        <li><Inline>{`vruchtbaarheidsbehandeling;`}</Inline></li>
        <li><Inline>{`gestoorde obstetrische voorgeschiedenis;`}</Inline></li>
        <li><Inline>{`onderliggende ziekten zoals hypertensie, diabetes of psychopathologie;`}</Inline></li>
        <li><Inline>{`erfelijke aanleg.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Tabel 3. Voorbeelden van risicofactoren`}</Inline></SubHeading>
      <DataTable rows={[["Risicofactor", "Toelichting"], ["Meerlingzwangerschap", "duidelijk hogere perinatale sterfte dan bij eenlingen"], ["Hoge maternale leeftijd", "risico neemt toe boven 35 jaar"], ["Tienerzwangerschap", "ook verhoogd risico"], ["Roken", "verhoogt risico op ongunstige uitkomsten"], ["Ernstig overgewicht", "belangrijke risicofactor"], ["Chronische ziekte", "bijvoorbeeld hypertensie of diabetes"], ["Gestoorde voorgeschiedenis", "eerdere complicaties verhogen het risico"]]} />
      <PBody text={`**Aandacht-vraagje:** waarom zijn meerlingzwangerschappen zo belangrijk?
**Mini-antwoord:** omdat ze vaker samengaan met vroeggeboorte en andere complicaties.`} />
    </div>
  )
}
