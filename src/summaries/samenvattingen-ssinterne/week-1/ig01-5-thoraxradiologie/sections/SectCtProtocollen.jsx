import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`CT-protocollen`}</Inline></SubHeading>
      <PBody text={`Een CT-scan kan op verschillende manieren worden uitgevoerd. Een **blanco CT** gebeurt zonder contrastmiddel. Als er **intraveneus contrast** wordt toegediend, spreek je van een **CT met contrast**.`} />
      <p className="leading-relaxed"><Inline>{`Het moment van scannen na contrasttoediening bepaalt welk type contrastfase je krijgt:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Vroege scan**: contrast zit vooral nog in de arteriën → **CTA** of **CT-angiogram**`}</Inline></li>
        <li><Inline>{`**Latere scan**: contrast is verder verspreid en bereikt de weefsels → **veneuze fase**`}</Inline></li>
      </ul>
      <PBody text={`In de **veneuze fase** zijn organen beter van elkaar te onderscheiden en zijn afwijkingen in organen vaak beter zichtbaar.`} />
      <SubHeading><Inline>{`Tabel 4. CT-protocollen in het kort`}</Inline></SubHeading>
      <DataTable rows={[["Protocol", "Kenmerk"], ["Blanco CT", "Zonder contrast"], ["CTA / arteriële fase", "Vroeg na contrast, contrast vooral in arteriën"], ["Veneuze fase", "Later na contrast, organen beter zichtbaar"]]} />
    </div>
  )
}
