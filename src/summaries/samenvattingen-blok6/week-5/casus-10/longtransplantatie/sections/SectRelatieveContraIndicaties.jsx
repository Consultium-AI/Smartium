import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Relatieve contra-indicaties`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Voorbeelden van relatieve contra-indicaties zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`gastro-oesofageale refluxziekte`}</Inline></li>
        <li><Inline>{`eerdere thoraxchirurgie`}</Inline></li>
        <li><Inline>{`nierfunctie met klaring tussen 50 en 90 ml/min`}</Inline></li>
        <li><Inline>{`status na cerebrovasculair incident`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Tabel 3. Absolute en relatieve contra-indicaties`}</Inline></SubHeading>
      <DataTable rows={[["Type", "Voorbeelden"], ["Absoluut", "actief roken, harddrugs, therapieontrouw, onbehandelbaar vaatlijden, links hartfalen, nierfalen < 50 ml/min"], ["Relatief", "refluxziekte, eerdere thoraxchirurgie, klaring 50-90 ml/min, status na CVA"]]} />
      <PBody text={`**Aandacht-vraagje:** Waarom zijn contra-indicaties zo belangrijk?
**Mini-antwoord:** Omdat ze de kans op slechte overleving na transplantatie vergroten.`} />
    </div>
  )
}
