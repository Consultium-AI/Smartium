import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Immuunsuppressie na transplantatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na een niertransplantatie is in principe levenslang een combinatie van immuunsuppressieve medicatie nodig om rejectie te voorkomen. Het risico op rejectie is vooral in de eerste maanden na transplantatie het hoogst. Daarom zijn de dosis en het aantal middelen direct na de transplantatie het grootst. In de eerste 3–6 maanden wordt dit afgebouwd naar een onderhoudsregime.`}</Inline></p>
      <SubHeading><Inline>{`Belangrijkste complicaties van immuunsuppressie`}</Inline></SubHeading>
      <DataTable rows={[["Tabel 4. Belangrijkste complicaties van immuunsuppressieve medicatie"], ["Infecties", "Bacterieel, viraal en opportunistisch; vaak vroeg na transplantatie"], ["Cardiovasculaire ziekte", "Hypertensie, diabetes mellitus en hypercholesterolaemie kunnen ontstaan of verergeren"], ["Maligniteiten", "Bijvoorbeeld post-transplantation lymphoproliferative disorders en huidmaligniteiten"]]} />
    </div>
  )
}
