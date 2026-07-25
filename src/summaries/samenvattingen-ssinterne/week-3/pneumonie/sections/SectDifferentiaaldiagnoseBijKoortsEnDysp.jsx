import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Differentiaaldiagnose bij koorts en dyspnoe`}</Inline></SubHeading>
      <DataTable rows={[["Waarschijnlijkheid", "Diagnose", "Waarom wel of niet?"], ["1", "Bacteriële pneumonie", "Ernstig ziek, koorts, hypotensie, dyspnoe"], ["2", "Virale pneumonie", "Griepachtig begin en luchtwegklachten"], ["3", "Longembolie", "Kan ook dyspnoe en soms koorts geven"], ["4", "Auto-immuunziekte", "Meestal minder acuut beeld"], ["5", "Longcarcinoom", "Roken is een risicofactor, maar leeftijd past minder"], ["6", "Schimmelpneumonie", "Vooral bij immuungecompromitteerde patiënten"]]} />
    </div>
  )
}
