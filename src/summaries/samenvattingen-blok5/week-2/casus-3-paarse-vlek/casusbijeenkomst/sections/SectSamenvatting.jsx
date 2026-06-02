import { Inline } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <div className="p-5 bg-emerald-50/90 dark:bg-emerald-500/10 rounded-xl border-l-4 border-emerald-400 space-y-4">
        <p className="leading-relaxed text-emerald-900 dark:text-emerald-100 m-0">
          <Inline>{`Deze casusbijeenkomst laat twee belangrijke denksporen zien. Bij een kind of jongere met paarse huidafwijkingen moet je altijd denken aan vasculitis, maar ook aan een bloedingsprobleem. De combinatie van purpura, buikpijn, gewrichtsklachten en urineafwijkingen past sterk bij vasculitis met mogelijke nierbetrokkenheid. Bij een andere patiënt met blauwe plekken en nabloedingen moet je juist stollingsonderzoek en von Willebrand-diagnostiek overwegen.`}</Inline>
        </p>
        <p className="leading-relaxed text-emerald-900 dark:text-emerald-100 m-0">
          <Inline>{`Daarnaast maakt de melanoomcasuïstiek duidelijk hoe belangrijk stadiëring is. Breslow-dikte, ulceratie, sentinel node en satellietlaesies bepalen samen het stadium, de prognose en de behandeling. Bij stadium III is chirurgie vaak belangrijk, maar systemische therapie en follow-up spelen ook een grote rol.`}</Inline>
        </p>
      </div>
    </div>
  )
}
