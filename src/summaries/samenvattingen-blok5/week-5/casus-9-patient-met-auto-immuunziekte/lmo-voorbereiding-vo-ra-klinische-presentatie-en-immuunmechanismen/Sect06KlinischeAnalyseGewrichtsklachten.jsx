export default function Sect06KlinischeAnalyseGewrichtsklachten() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Klinische analyse van gewrichtsklachten</h2>
      <p>Voor het VOW moet je gewrichtsklachten systematisch kunnen indelen.</p>
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">1. Inflammatoir of niet-inflammatoir?</h3>
          <p className="font-medium text-slate-900 dark:text-slate-100">Bij inflammatoire gewrichtsklachten denk je aan:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>ochtendstijfheid</li>
            <li>pijn in rust of na rust</li>
            <li>warmte en zwelling</li>
            <li>verbetering bij bewegen</li>
            <li>soms algemene ziekteverschijnselen</li>
          </ul>
          <p className="mt-3 font-medium text-slate-900 dark:text-slate-100">
            Bij niet-inflammatoire klachten, zoals artrose, zie je eerder:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>pijn bij belasting</li>
            <li>kortdurende stijfheid</li>
            <li>minder uitgesproken warmte of zwelling</li>
            <li>mechanisch karakter</li>
          </ul>
          <p className="mt-3">RA past typisch bij een inflammatoir patroon.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">2. Mono-, oligo- of polyarticulair?</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Monoarticulair: 1 gewricht</li>
            <li>Oligoarticulair: enkele gewrichten</li>
            <li>Polyarticulair: meerdere gewrichten</li>
          </ul>
          <p className="mt-3">RA presenteert zich vaak polyarticulair.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">3. Perifeer of axiaal?</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Perifeer: handen, polsen, voeten, knieën enzovoort</li>
            <li>Axiaal: wervelkolom en sacro-iliacale regio</li>
          </ul>
          <p className="mt-3">RA is klassiek vooral een perifere artritis.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">4. Acuut of chronisch?</h3>
          <p>
            RA heeft meestal een chronisch beloop, met geleidelijke ontwikkeling van klachten, al kunnen opvlammingen
            voorkomen.
          </p>
        </div>
      </div>
    </div>
  )
}
