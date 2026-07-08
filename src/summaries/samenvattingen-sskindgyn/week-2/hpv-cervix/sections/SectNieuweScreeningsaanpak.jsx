import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Nieuwe screeningsaanpak`}</Inline></SubHeading>
      <PBody text={`Bij de nieuwe aanpak wordt eerst gekeken of er **high risk HPV** aanwezig is. Als dat zo is, wordt daarna de **cytologie** beoordeeld. Als iemand niet op de oproep reageert, krijgt zij automatisch een **zelfafnameset** thuisgestuurd. Daarmee kan thuis HPV-materiaal worden afgenomen en teruggestuurd. Als er HPV wordt gevonden, volgt advies om bij de huisarts een uitstrijkje te laten maken.`} />
    </div>
  )
}
