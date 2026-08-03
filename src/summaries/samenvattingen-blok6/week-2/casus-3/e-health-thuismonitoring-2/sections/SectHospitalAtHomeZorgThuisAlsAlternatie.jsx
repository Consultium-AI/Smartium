import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hospital at Home: zorg thuis als alternatief voor opname`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Hospital at Home is iets anders dan gewone thuismonitoring. Thuismonitoring is vooral bedoeld voor patiënten met een chronische aandoening. Hospital at Home gaat een stap verder: patiënten die eigenlijk een indicatie hebben voor ziekenhuisopname, krijgen thuis ziekenhuiszorg en worden nauwkeurig gemonitord.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De verschillen tussen thuismonitoring en Hospital at Home zijn duidelijk:`}</Inline></p>
      <SubHeading><Inline>{`Tabel 2. Verschil tussen thuismonitoring en Hospital at Home`}</Inline></SubHeading>
      <DataTable rows={[["Kenmerk", "Thuismonitoring", "Hospital at Home"], ["Locatie", "Thuis", "Thuis"], ["Contact met zorgverlener", "Reactief", "Proactief"], ["Interventies", "Metingen", "Infuus en andere ziekenhuiszorg"], ["Patiëntenpopulatie", "Chronisch", "Post-acuut"]]} />
      <p className="leading-relaxed"><Inline>{`Bij Hospital at Home is het idee aantrekkelijk: de patiënt hoeft niet in het ziekenhuis te blijven, terwijl de zorg toch goed doorgaat. In de praktijk blijkt het echter lastig. In een voorbeeld uit het Verenigd Koninkrijk werd gekeken naar kosten, ligdagen, heropnames en overleving. De kosten bleken hoger dan verwacht: een dag in een algemeen ziekenhuisbed kost £536, terwijl een uitgespaarde ziekenhuisdag door een virtual ward £935 kost. Dat betekent dus dat de kosten bijna verdubbelen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Hospital at Home kan dus wel zorg op niveau houden, maar is niet vanzelfsprekend goedkoper.`}</Inline></p>
    </div>
  )
}
