export default function Sect05DiagnostiekEcg() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Diagnostiek: denken in het ECG</h2>
      <p>Bij de diagnostiek kijk je eerst naar het ritme en daarna naar de geleiding. Het ECG is daarbij heel belangrijk.</p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">De graden van AV-blok</h3>
      <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200">Tabel 3. Overzicht van AV-blokken</h4>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Type</th>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">ECG-kenmerk</th>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Relatie P-top en QRS</th>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Kliniek / beleid</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top">1e graads AV-blok</td>
              <td className="px-3 py-3 align-top">Verlengd PR-interval {'>'} 0,20 sec</td>
              <td className="px-3 py-3 align-top">Elke P-top wordt gevolgd door een QRS</td>
              <td className="px-3 py-3 align-top">Meestal asymptomatisch, geen behandeling nodig</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top">2e graads AV-blok type 1 (Wenckebach / Mobitz I)</td>
              <td className="px-3 py-3 align-top">Progressieve verlenging van PR tot een slag uitvalt</td>
              <td className="px-3 py-3 align-top">Daarna valt een QRS uit</td>
              <td className="px-3 py-3 align-top">Vaak in de AV-knoop, meestal reversibel</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top">2e graads AV-blok type 2 (Mobitz II)</td>
              <td className="px-3 py-3 align-top">Plots uitvallen van een QRS zonder verlenging van PR</td>
              <td className="px-3 py-3 align-top">Minder voorspelbare geleiding</td>
              <td className="px-3 py-3 align-top">Vaak distaal in His-Purkinje, hoog risico op totaalblok, pacemaker-indicatie</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top">2:1 blok</td>
              <td className="px-3 py-3 align-top">Om en om wel/niet geleiding</td>
              <td className="px-3 py-3 align-top">Niet elke P-top leidt tot QRS</td>
              <td className="px-3 py-3 align-top">Verdachte vorm van 2e graads blok</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top">3e graads AV-blok / totaalblok</td>
              <td className="px-3 py-3 align-top">Volledige AV-dissociatie</td>
              <td className="px-3 py-3 align-top">Geen relatie tussen P-toppen en QRS-complexen</td>
              <td className="px-3 py-3 align-top">Escape ritme, vaak pacemaker nodig</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Bij een <span className="font-semibold">totaalblok</span> worden de kamers in stand gehouden door een <span className="font-semibold">escape ritme</span> vanuit lagere centra. Een smal QRS wijst op een hoger escape ritme uit de AV-knoop en is sneller, ongeveer{' '}
        <span className="font-semibold">40-60 bpm</span>. Een breed QRS wijst op een laag escape ritme uit de Purkinje- of ventrikelregio en is trager, ongeveer{' '}
        <span className="font-semibold">15-40 bpm</span>, en onbetrouwbaar. Dat geeft meer kans op asystolie.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Bundeltakblok</h3>
      <p>
        Een <span className="font-semibold">linkerbundeltakblok (LBTB)</span> herken je aan een breed QRS van meer dan 120 ms. In V1 zie je een diepe, brede S-golf en in V6 een brede, soms gehakkelde R-golf. Door de blokkade moet de prikkel om de linkerbundel heen lopen, waardoor de activatie van de kamers niet synchroon gaat. Dit heet{' '}
        <span className="font-semibold">mechanische dyssynchronie</span>.
      </p>
      <p>
        <span className="font-semibold">Aandacht-vraag:</span> Waarom is een LBTB belangrijk?{' '}
        <br />
        <span className="font-semibold">Mini-antwoord:</span> Omdat het wijst op dyssynchronie, en dat is een aanwijzing voor CRT.
      </p>
    </div>
  )
}
