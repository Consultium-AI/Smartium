import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Behandeling`}</Inline></SubHeading>
      <PBody text={`De behandeling kan bestaan uit **opname**, **intraveneus vocht** en **anti-emetica**. Het meest gebruikte middel is een combinatie van **meclozine en pyridoxine**; dit kan tijdens de zwangerschap veilig gebruikt worden. Verder is begeleiding door een **diëtist** zinvol. Praktische adviezen zijn **frequent kleine maaltijden** en bijvoorbeeld **ontbijt op bed** en nog even blijven liggen.`} />
      <PBody text={`Soms is zelfs **sondevoeding** nodig. Bij langdurig en ernstig braken moet je ook denken aan **vitaminetekorten** en **elektrolytstoornissen**. Genoemd worden onder andere hypokaliëmie, vitamine C-, foliumzuur- en vitamine B1-deficiëntie. Een vitamine B1-tekort kan leiden tot **Wernicke-encefalopathie** en later tot het **syndroom van Korsakov**. Bij een ernstig en langdurig beloop kan ook ondersteuning door een maatschappelijk werker of psycholoog nodig zijn.`} />
      <SubHeading><Inline>{`Aandacht-vraagje`}</Inline></SubHeading>
      <PBody text={`**Waarom is vitamine B1 belangrijk bij hyperemesis?**
Omdat langdurig braken tot een tekort kan leiden, en dat kan Wernicke-encefalopathie veroorzaken.`} />
    </div>
  )
}
