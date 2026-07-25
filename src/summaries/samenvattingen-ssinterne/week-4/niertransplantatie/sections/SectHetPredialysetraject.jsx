import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Het predialysetraject`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`In de pre-dialyse poli krijgt de patiënt uitleg over alle mogelijkheden. Daarna wordt samen een keuze gemaakt en worden de voorbereidingen gestart voor de gekozen behandeling.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`In principe krijgen alle patiënten voorlichting over alle opties. Toch moet je extra letten op:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`co-morbiditeit;`}</Inline></li>
        <li><Inline>{`kwetsbaarheid;`}</Inline></li>
        <li><Inline>{`beperkingen in mentaal of somatisch functioneren.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Vooral bij ouderen en patiënten met ernstige co-morbiditeit moet je afwegen wat het effect van de behandeling is op mortaliteit, functioneren en kwaliteit van leven. Ook familie en naasten worden bij de voorlichting betrokken.`}</Inline></p>
      <SubHeading><Inline>{`Behandelopties bij nierfalen`}</Inline></SubHeading>
      <DataTable rows={[["Tabel 1. Behandelopties bij pre-terminale nierinsufficiëntie"], ["Niertransplantatie", "Donornier van een levende of overleden donor"], ["Dialyse", "Hemodialyse of peritoneale dialyse"], ["Afzien van nierfunctievervangende behandeling", "Conservatief beleid"]]} />
      <p className="leading-relaxed"><Inline>{`Een niertransplantatie kan pre-emptief plaatsvinden, dus vóór de start van dialyse, maar ook nadat dialyse al begonnen is. Een patiënt kan in zijn leven zelfs meerdere niertransplantaties krijgen.`}</Inline></p>
    </div>
  )
}
