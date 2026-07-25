import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Tabel 2. Internationale Prognostische Index`}</Inline></SubHeading>
      <DataTable rows={[["Risicogroep", "Aantal kenmerken", "3-jaar PFS", "3-jaar OS"], ["Laag", "0-1", "87%", "91%"], ["Laag-intermediair", "2", "75%", "81%"], ["Hoog-intermediair", "3", "59%", "65%"], ["Hoog", "4-5", "56%", "59%"]]} />
      <p className="leading-relaxed"><Inline>{`PFS betekent progressievrije overleving: de tijd waarin de ziekte niet verder groeit of terugkomt. OS betekent overall survival: de totale overleving.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De patiënte in de casus heeft meerdere ongunstige factoren: stadium III, verhoogd LDH en een performance status van 2. Daarmee valt zij in de risicogroep hoog-intermediair.`}</Inline></p>
    </div>
  )
}
