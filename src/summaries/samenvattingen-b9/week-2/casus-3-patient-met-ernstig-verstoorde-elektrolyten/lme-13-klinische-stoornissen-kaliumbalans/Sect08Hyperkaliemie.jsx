export default function Sect08Hyperkaliemie() {
  return (
    <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Hyperkaliëmie</h2>
      <p>Bij milde hyperkaliëmie en geen ernstige klachten kun je denken aan:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>dieetaanpassing naar normale hoeveelheden;</li>
        <li>ionenwisselaars;</li>
        <li>aanpassing van de medicatie.</li>
      </ul>
      <p>Bij ernstige hyperkaliëmie is het eerste doel het voorkomen van ritmestoornissen:</p>
      <p>Geef 1 ampul calciumgluconaat 10%. Dit werkt binnen ongeveer 30 minuten en verlaagt het risico op ritmestoornissen.</p>
      <p>Start hartritmebewaking.</p>
      <p>Geef de combinatie insuline en glucose: 10 EH kortwerkende insuline in ongeveer 50 ml 50% glucose in 30 minuten.</p>
      <p>
        Probeer bij oligurie of anurie de diurese te herstellen; anders is dialyse nodig en overleg je met een internist-nefroloog.
      </p>

      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          Aandachtvraag: Waarom geef je bij ernstige hyperkaliëmie eerst calciumgluconaat?</p>
      <p className="mt-2">
        <span className="font-semibold">Mini-antwoord:</span>{' '}Om het myocard snel te stabiliseren en het risico op ritmestoornissen te verminderen.
        </p>
      </div>
    </div>
  )
}
