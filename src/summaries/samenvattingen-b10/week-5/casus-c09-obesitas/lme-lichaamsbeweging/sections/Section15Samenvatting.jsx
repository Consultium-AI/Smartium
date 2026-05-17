import { Inline, PBody, DataTable } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Samenvatting`}</Inline></h3>
      <p><Inline>{`Bariatrische chirurgie is een behandeling voor obesitas als chronische, progressieve ziekte. De belangrijkste ingrepen zijn de gastric sleeve en de Roux-en-Y gastric bypass. Na de operatie is er niet alleen gewichtsverlies, maar ook een brede verbetering van onder meer diabetes, cardiovasculaire risicofactoren, slaapapneu, fertiliteit en kwaliteit van leven. Daartegenover staan duidelijke leefregels, risico’s, mogelijke acute complicaties en langdurige gevolgen zoals dumping, deficiënties en inwendige herniatie. De keuze voor bariatrie wordt gemaakt op basis van de GGR-tabel, eerdere behandelingen en de vraag of een patiënt de leefregels na de ingreep kan volhouden.`}</Inline></p>
    </div>
  )
}
