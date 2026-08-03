import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het doornemen van deze stof moet je weten dat interstitiële longaandoeningen ook beroepsmatig kunnen ontstaan door blootstelling aan ingeademde schadelijke stoffen. Je moet begrijpen dat er verschillende vormen van ILD kunnen optreden bij werkgebonden blootstelling. Daarnaast moet je een goede anamnese kunnen afnemen bij verdenking op een beroepsmatige ILD en weten welke onderzoeken nodig zijn om tot de diagnose te komen. Tot slot moet je de belangrijkste behandel- en preventiestrategieën kennen.`}</Inline></p>
    </div>
  )
}
