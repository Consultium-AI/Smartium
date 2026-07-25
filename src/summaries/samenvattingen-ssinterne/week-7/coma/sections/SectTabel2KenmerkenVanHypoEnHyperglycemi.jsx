import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Tabel 2. Kenmerken van hypo- en hyperglycemie`}</Inline></SubHeading>
      <DataTable rows={[["Aandoening", "Kenmerken"], ["Hypoglycemie", "bewustzijnsdaling, zweten, palpitaties, mogelijk herstel na snelle correctie"], ["Hyperglycemie/HHS", "bewustzijnsdaling bij ernstige hyperosmolaliteit, dehydratie, nierinsufficiëntie, elektrolytstoornissen"], ["DKA", "neurologische symptomen vooral bij ernstige acidose"]]} />
      <PBody text={`**Aandachtsvraag:** welke laboratoriumafwijkingen passen bij hyperglycemie?
**Mini-antwoord:** hyperosmolaliteit, dehydratie/nierinsufficiëntie en elektrolytstoornissen zoals hyponatriëmie en acidose.`} />
    </div>
  )
}
