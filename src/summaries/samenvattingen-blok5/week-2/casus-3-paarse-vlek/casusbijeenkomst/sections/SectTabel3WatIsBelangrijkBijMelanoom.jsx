import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Tabel 3. Wat is belangrijk bij melanoom?`}</Inline></SubHeading>
      <DataTable rows={[["Onderdeel", "Betekenis"], ["---", "---"], ["Breslow-dikte", "belangrijkste prognostische factor"], ["Ulceratie", "beïnvloedt stadium en prognose"], ["Sentinel node", "laat zien of er lymfeklierbetrokkenheid is"], ["Satellietlaesies", "veranderen het stadium naar een hoger stadium"], ["Dermatoscopie", "helpt bij beoordeling van verdachte huidafwijkingen"]]} />
    </div>
  )
}
