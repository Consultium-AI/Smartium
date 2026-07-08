import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Parvovirus B19: belangrijk voorbeeld`}</Inline></SubHeading>
      <PBody text={`Bij parvovirus B19 zijn de eerste ziekteverschijnselen vaak ongeveer **2 weken na besmetting** zichtbaar. Specifieke **IgM-antistoffen** worden dan ongeveer 2 weken na besmetting aantoonbaar en blijven enkele maanden aanwezig; **IgG-antistoffen** verschijnen kort daarna. Een positieve IgM met negatieve IgG past dus bij een recente infectie.`} />
      <SubHeading><Inline>{`Tabel 6. Serologie bij parvovirus B19`}</Inline></SubHeading>
      <DataTable rows={[["Bevinding", "Betekenis"], ["IgM positief, IgG negatief", "Recente infectie"], ["IgM stijgend, IgG later positief", "Doorgemaakte of zich ontwikkelende infectie"]]} />
    </div>
  )
}
