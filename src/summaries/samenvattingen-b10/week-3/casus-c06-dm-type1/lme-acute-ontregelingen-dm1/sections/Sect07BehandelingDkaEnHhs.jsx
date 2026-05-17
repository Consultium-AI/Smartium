export default function Sect07BehandelingDkaEnHhs () {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Behandeling van DKA en HHS</h2>
      <p>
        De behandeling bestaat in de kern uit twee dingen: <strong className="text-slate-900 dark:text-slate-100">vocht geven</strong> en{' '}
        <strong className="text-slate-900 dark:text-slate-100">de bloedglucose verlagen met insuline</strong>. Toch zit de volgorde en aandacht voor elektrolyten heel belangrijk.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">DKA behandelen</h3>
      <p>
        Bij DKA is <strong className="text-slate-900 dark:text-slate-100">vochttoediening</strong> het allerbelangrijkst, vooral als er duidelijke dehydratie is. Daarna volgt insulinebehandeling. Maar eerst moet je weten wat het{' '}
        <strong className="text-slate-900 dark:text-slate-100">kalium</strong> is, omdat insuline kalium intracellulair laat verschuiven en zo{' '}
        <strong className="text-slate-900 dark:text-slate-100">hypokaliëmie</strong> kan veroorzaken.
      </p>
      <p>Daarom geldt:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>eerst vocht;</li>
        <li>dan kalium beoordelen;</li>
        <li>daarna insuline starten;</li>
        <li>zo nodig kaliumsuppletie geven.</li>
      </ul>
      <p>
        Bicarbonaat heeft <strong className="text-slate-900 dark:text-slate-100">geen toegevoegde waarde</strong>. Alleen bij een extreem lage pH kan het ter overweging komen.
      </p>
      <p>
        Wanneer de glucose daalt tot onder ongeveer <strong className="text-slate-900 dark:text-slate-100">14 mmol/L</strong>, wordt naast insuline ook <strong className="text-slate-900 dark:text-slate-100">glucose-infuus</strong> toegevoegd. Dat voorkomt hypoglykemie terwijl de insulinebehandeling nog nodig blijft om de ketoacidose op te lossen.
      </p>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35 space-y-2">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          <strong className="font-semibold">Aandachtsvraag:</strong> waarom stop je insuline niet meteen als de glucose snel daalt?
        </p>
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0 mt-2">
          <strong className="font-semibold">Mini-antwoord:</strong> omdat de ketoacidose nog moet herstellen; daarom voeg je liever glucose toe en ga je door met insuline.
        </p>
      </div>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Wat deed je bij de combinatie van lage kaliumwaarden en insuline?
      </h3>
      <p>
        Insuline zorgt ervoor dat kalium de cel in gaat. Daardoor kan het serumkalium dalen. Dat is de reden om bij DKA kalium goed te volgen en vaak kaliumsuppletie toe te voegen aan de infuusvloeistof. Frequent controleren van glucose, kalium en bloedgas is belangrijk.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">HHS behandelen</h3>
      <p>
        Bij HHS is het doel om de{' '}
        <strong className="text-slate-900 dark:text-slate-100">osmolariteit geleidelijk te laten dalen</strong>. Te snelle daling is gevaarlijk, omdat dat kan leiden tot{' '}
        <strong className="text-slate-900 dark:text-slate-100">hersenoedeem</strong>. De osmolariteit moet dus rustig verbeteren, niet abrupt.
      </p>
      <p>De behandeling bestaat uit:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>rehydratie met infuusvloeistof;</li>
        <li>behandeling met insuline;</li>
        <li>monitoring van glucose, osmolaliteit en klinische toestand.</li>
      </ul>
      <p>
        Een belangrijk principe is dat je de osmolaliteit niet te snel laat dalen. De reden daarvoor is het risico op hersenoedeem. Het gaat dus niet alleen om het glucosegetal, maar om het herstel van de effectieve osmolaliteit.
      </p>
    </div>
  )
}
