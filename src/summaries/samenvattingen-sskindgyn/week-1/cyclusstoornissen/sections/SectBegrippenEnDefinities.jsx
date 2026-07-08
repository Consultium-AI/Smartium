import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Begrippen en definities`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij cyclusstoornissen is het belangrijk om de begrippen goed uit elkaar te houden.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 1. Definities van cyclusstoornissen`}</Inline></SubHeading>
      <DataTable rows={[["Begrip", "Definitie"], ["Amenorroe", "Geen menstruatie gedurende zes maanden (183 dagen)"], ["Oligomenorroe", "Onregelmatige menstruatie, met een cyclus langer dan 35 dagen en korter dan 183 dagen"], ["Primaire amenorroe", "Uitblijvende menstruatie bij iemand die nog nooit heeft gemenstrueerd"], ["Secundaire amenorroe", "Lang uitblijvende menstruatie (>183 dagen) bij iemand die eerder wel heeft gemenstrueerd"], ["Anovulatie", "Het niet optreden van een eisprong"]]} />
      <p className="leading-relaxed"><Inline>{`Een cyclusstoornis beschrijf je dus niet alleen op basis van “onregelmatig”, maar vooral op basis van het patroon en de voorgeschiedenis. Als iemand eerder wel menstruaties heeft gehad en die blijven nu langdurig uit, dan spreek je van secundaire amenorroe.`}</Inline></p>
    </div>
  )
}
