export default function Sect03LokaleBloedstroom() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Hoofdstuk 1: regulatie van de bloedstroom en cardiac output</h2>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Lokale bloedstroom: afgestemd op de behoefte van het orgaan</h3>
      <p>
        De bloedstroom naar een orgaan wordt exact aangepast aan de behoefte van dat orgaan. Die behoefte hangt samen met de stofwisseling en de functie van het weefsel op dat moment. De regeling gebeurt vooral van <span className="font-semibold">arteriool- tot capillairniveau</span>. Ook binnen één orgaan kan de verdeling van bloed dus verschillen.
      </p>
      <p>De lokale bloedstroom kan op drie manieren gereguleerd worden:</p>
      <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100">Tabel 1. Manieren van lokale regulatie van de bloedstroom</h4>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Regeling</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Wat gebeurt er?</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Voorbeelden</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold">Metabool</td>
              <td className="px-4 py-3 align-top">Lokale stoffen uit actief weefsel zorgen voor verwijding van de vaten</td>
              <td className="px-4 py-3 align-top">Afbraakproducten van ATP, CO₂, lactaat, histamine</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold">Humoraal</td>
              <td className="px-4 py-3 align-top">Stoffen in het bloed werken op afstand in op de vaatwand</td>
              <td className="px-4 py-3 align-top">Adrenaline, histamine, angiotensine II</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold">Neuraal</td>
              <td className="px-4 py-3 align-top">Het autonome zenuwstelsel past hart en vaten aan</td>
              <td className="px-4 py-3 align-top">Sympathicus en parasympathicus</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Bij <span className="font-semibold">metabole regulatie</span> geldt: als een weefsel actiever wordt, ontstaan meer afbraakproducten. Die stoffen werken vaatverwijdend op capillair niveau. Ook bij een lage arteriële zuurstofconcentratie, dus <span className="font-semibold">hypoxemie</span>, reageren de vaten met meer doorstroming. De kleine arteriële sfincters ontspannen dan, waardoor de capillairdiameter toeneemt en er meer bloed door het gebied kan stromen.
      </p>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35 text-sm text-amber-900 dark:text-amber-100 space-y-2">
        <p className="m-0">
          <span className="font-semibold">Aandacht-vraag:</span>
          {' '}
          waarom neemt de lokale bloedstroom toe als een weefsel meer zuurstof verbruikt?
        </p>
        <p className="m-0">
          <span className="font-semibold">Mini-antwoord:</span>
          {' '}
          omdat er dan meer metabole afvalstoffen ontstaan die de vaten verwijden, zodat er meer bloed en dus meer zuurstof kan worden aangevoerd.
        </p>
      </div>
    </div>
  )
}
