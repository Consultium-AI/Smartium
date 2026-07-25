import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het bestuderen van deze stof kun je uitleggen wat diabetes mellitus is, hoe de normale glucoseregulatie werkt en wat er misgaat bij diabetes type 1 en type 2. Je kunt de belangrijkste klachten, diagnostische criteria en onderscheidende kenmerken van diabetes benoemen. Ook kun je de basis van de behandeling beschrijven, inclusief insuline, leefstijl, orale antidiabetica, glucosezelfcontrole en de rol van de diëtist en andere zorgverleners. Verder kun je acute ontregelingen zoals diabetische keto-acidose en hyperosmolair hyperglykemisch syndroom herkennen en de eerste behandeling globaal beschrijven. Tot slot ken je de belangrijkste langetermijncomplicaties en de kernpunten van diabetes gravidarum en diabeteszorg.`}</Inline></p>
    </div>
  )
}
