import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`RCAD-syndroom`}</Inline></SubHeading>
      <PBody text={`In het beschreven voorbeeld blijkt uiteindelijk sprake van het **RCAD-syndroom**: **Renal Cysts and Diabetes syndrome**.`} />
      <PBody text={`Dit syndroom berust op een afwijking in het **HNF1B-gen**, door een mutatie of een microdeletie op chromosoom 17. Het is een **autosomaal dominant** beeld met **variabele expressie**. Dat betekent dat dezelfde genetische afwijking bij verschillende personen een heel verschillend klinisch beeld kan geven.`} />
      <SubHeading><Inline>{`Kenmerken van RCAD`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`Ongeveer 50% krijgt een verminderde nierfunctie.`}</Inline></li>
        <li><Inline>{`Ongeveer 10–12% ontwikkelt eindstadium nierfalen.`}</Inline></li>
        <li><Inline>{`Meer dan 50% ontwikkelt diabetes.`}</Inline></li>
        <li><Inline>{`Het gaat om **MODY**: maturity onset diabetes of the young.`}</Inline></li>
        <li><Inline>{`Diabetes kan al op kinderleeftijd beginnen, maar ook pas na het 40e jaar ontstaan.`}</Inline></li>
        <li><Inline>{`Er is een verhoogd risico op aanlegstoornissen van de genitalia bij beide geslachten.`}</Inline></li>
        <li><Inline>{`Er is géén verhoogd risico op ontwikkelingsachterstand, gedragsproblemen of psychiatrische problemen.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Waarom kan het beeld tussen vader en kind zo verschillen?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Omdat de expressie van de mutatie sterk varieert. De ene persoon heeft slechts milde nierfunctiestoornissen, terwijl een ander al bij de geboorte ernstig nierfalen heeft.`}</Inline></p>
    </div>
  )
}
