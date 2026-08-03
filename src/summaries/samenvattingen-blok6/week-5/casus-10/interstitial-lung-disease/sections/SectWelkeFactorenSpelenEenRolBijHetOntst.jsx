import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Welke factoren spelen een rol bij het ontstaan van ILD?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij het ontstaan van ILD spelen zowel interne als externe factoren een rol.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 4. Factoren die bijdragen aan het ontstaan van ILD`}</Inline></SubHeading>
      <DataTable rows={[["Interne factoren", "Externe factoren"], ["Genetische aanleg", "Blootstelling aan toxische stoffen"], ["Onderliggende auto-immuunziekte", "Werkgerelateerde blootstelling zoals silica of mijnstof"], ["Veroudering", "Thuisblootstelling zoals vogels, duiven of schimmel"], ["", "Roken"], ["", "Medicatie"], ["", "Bestraling"]]} />
    </div>
  )
}
