import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wat is galactosemie?`}</Inline></SubHeading>
      <PBody text={`Galactosemie is een aandoening waarbij galactose zich ophoopt door een **enzymdeficiëntie**. Het is een **autosomaal recessieve** aandoening met een incidentie van ongeveer **1 op 45.000 per jaar**.`} />
      <p className="leading-relaxed"><Inline>{`De klassieke route is:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`lactose wordt via **lactase** gesplitst in **galactose** en **glucose**;`}</Inline></li>
        <li><Inline>{`galactose wordt via **galactokinase** omgezet in **galactose-1-fosfaat**;`}</Inline></li>
        <li><Inline>{`de stap van **galactose-1-fosfaat naar glucose-1-fosfaat** is geblokkeerd bij **GALT-deficiëntie**;`}</Inline></li>
        <li><Inline>{`UDP-galactose en UDP-glucose staan via **epimerase** met elkaar in verband.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Tabel 2. Galactosemetabolisme in het kort`}</Inline></SubHeading>
      <DataTable rows={[["stap", "enzym", "product"], ["lactose → galactose + glucose", "lactase", "splitsing van lactose"], ["galactose → galactose-1-P", "galactokinase", "eerste omzetting"], ["galactose-1-P ↔ glucose-1-P", "GALT", "blokkade bij klassieke galactosemie"], ["UDP-galactose ↔ UDP-glucose", "epimerase", "omzetting tussen UDP-vormen"]]} />
    </div>
  )
}
