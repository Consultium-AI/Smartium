import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Dementie versus delier`}</Inline></SubHeading>
      <DataTable rows={[["Kenmerk", "Dementie", "Delier"], ["Begin", "Sluimerend, meestal maanden tot jaren", "Meestal snel ontstaan"], ["Beloop", "Progressief verval", "Fluctuerend"], ["Bewustzijn", "Vaak helder", "Gestoord"], ["Waarneming", "Niet typisch op de voorgrond", "Vaak stoornissen in waarneming aanwezig"], ["Herstel", "Niet direct na behandeling oorzaak", "Herstel mogelijk na behandelen oorzaak"]]} />
    </div>
  )
}
