export default function Sect07Hypokaliemie() {
  return (
    <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Hypokaliëmie</h2>
      <p>
        Bij milde hypokaliëmie zonder ernstige klachten is de eerste stap vaak orale suppletie met kaliumchloride en het wegnemen van de oorzaak (bijvoorbeeld diureticum aanpassen, braken behandelen, magnesium corrigeren als die laag is).
      </p>
      <p>
        Let op: ernstige of snel ontstane hypokaliëmie verhoogt het risico op hartritmestoornissen. Beoordeel het ECG en overweeg intraveneuze suppletie onder monitoring als de waarde zeer laag is of er klinische verschijnselen zijn.
      </p>
      <p>
        Geef bij IV-suppletie voorzichtig en niet te snel grote hoeveelheden; controleer regelmatig het serumkalium en het magnesium, omdat hypomagnesiëmie herstel van het kalium kan bemoeilijken.
      </p>

      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          Aandachtvraag: Waarom is magnesium vaak relevant bij hardnekkige hypokaliëmie?
        </p>
        <p className="mt-2">
          <span className="font-semibold">Mini-antwoord:</span>{' '}
          Omdat laag magnesium de tubulaire kaliumreabsorptie en -balans verstoort en suppletie minder effectief kan maken.
        </p>
      </div>
    </div>
  )
}
