export default function Sect04AdequatePerfusieEnLactaat() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Adequate perfusie en lactaat</h2>
      <p>
        Wanneer weefselperfusie goed is, krijgen cellen voldoende zuurstof en voedingsstoffen en kunnen afvalproducten goed worden afgevoerd. Als dat niet lukt, raken cellen in de problemen.
      </p>
      <p>
        Een belangrijk begrip hierbij is <span className="font-semibold">lactaat</span>. Lactaat ontstaat wanneer glucose via <span className="font-semibold">anaërobe glycolyse</span> wordt afgebroken, dus wanneer er <span className="font-semibold">onvoldoende zuurstof</span> is. Bij voldoende zuurstof verloopt de verbranding aerobe en kan de energieproductie verder gaan via de mitochondriën, de Krebs-cyclus en de elektronentransportketen. Bij zuurstoftekort verschuift het metabolisme naar lactaatvorming.
      </p>
      <p>
        Dus: <span className="font-semibold">een verhoogd lactaat past bij hypoperfusie</span>.
      </p>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35 text-sm text-amber-900 dark:text-amber-100 space-y-2">
        <p className="m-0">
          <span className="font-semibold">Aandacht-vraag:</span>
          {' '}
          Waarom is lactaat belangrijk bij shock?
        </p>
        <p className="m-0">
          <span className="font-semibold">Mini-antwoord:</span>
          {' '}
          Omdat een stijging van lactaat laat zien dat cellen onvoldoende zuurstof krijgen en op een anaërobe manier gaan werken.
        </p>
      </div>
    </div>
  )
}
