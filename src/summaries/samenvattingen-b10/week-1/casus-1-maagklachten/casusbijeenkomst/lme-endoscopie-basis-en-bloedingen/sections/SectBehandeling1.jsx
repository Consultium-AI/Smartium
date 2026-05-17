export default function SectBehandeling1() {
  return (
    <div className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed">
      <div className="text-center lg:text-left">
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">BEHANDELING (1)</h2>
      </div>
      <div className="grid gap-10 lg:grid-cols-2">
        <section className="space-y-6">
          <div>
            <p className="font-semibold mb-4 text-slate-900 dark:text-slate-100">
              De behandeling van een tractus digestivusbloeding bestaat uit drie belangrijke stappen:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Hemodynamische stabilisatie van de patiënt (zie hoofdstuk opvang en stabilisatie);</li>
              <li>Diagnostiek om de bron van de bloeding te lokaliseren (zie hoofdstuk diagnostiek);</li>
              <li>Gerichte behandeling van de onderliggende oorzaak.</li>
            </ul>
            <p>
              Omdat patiënten zich vaak presenteren met acuut bloedverlies, staat in eerste instantie resuscitatie en stabilisatie van de circulatie centraal. Pas daarna kan diagnostiek, meestal in de vorm van endoscopie, veilig worden uitgevoerd.
            </p>
            <p className="font-semibold mt-6 mb-2 text-slate-900 dark:text-slate-100">Het klinisch beleid hangt sterk af van:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>de lokalisatie van de bloeding (hoog vs laag);</li>
              <li>de hemodynamische stabiliteit van de patiënt;</li>
              <li>de aanwezigheid van comorbiditeit en medicatiegebruik (bijvoorbeeld anticoagulantia).</li>
            </ul>
          </div>
        </section>
        <section className="space-y-4">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700 pb-1">
            Behandeling van hoge tractus bloedingen - medicatie
          </h3>
          <p>
            De behandeling van hoge tractus digestivusbloedingen hangt af van de oorzaak en er wordt onderscheid gemaakt tussen niet-variceale en variceal bloedingen.
          </p>
          <p>
            Medicatie speelt een belangrijke rol in de behandeling van hoge tractus digestivusbloedingen, zowel ter stabilisatie van de bloeding vóór endoscopie als ter preventie van recidiefbloeding na endoscopische behandeling. De keuze van medicamenteuze therapie hangt sterk af van de onderliggende oorzaak van de bloeding, waarbij een belangrijk onderscheid wordt gemaakt tussen{' '}
            <strong>niet-variceale bloedingen</strong> (bijvoorbeeld ulcusbloedingen) en <strong>variceale bloedingen</strong> bij portale hypertensie.
          </p>
        </section>
      </div>
    </div>
  )
}
