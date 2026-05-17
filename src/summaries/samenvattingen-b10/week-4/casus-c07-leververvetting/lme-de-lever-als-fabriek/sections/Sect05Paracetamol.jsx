export default function Sect05Paracetamol() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Paracetamol: normaal gebruik en overdosering</h2>
      <p>
        Paracetamol is een veelgebruikte pijnstiller. Bij normale dosering wordt het in de lever verwerkt via fase 1 en fase 2. Een klein deel, ongeveer{' '}
        <strong className="text-slate-900 dark:text-slate-100">5–15%</strong>, ondergaat een fase 1-reactie via CYP-enzymen. Daarbij ontstaat het reactieve en toxische metaboliet{' '}
        <strong className="text-slate-900 dark:text-slate-100">NAPQI</strong>.
      </p>
      <p>
        Onder normale omstandigheden wordt NAPQI snel geneutraliseerd door{' '}
        <strong className="text-slate-900 dark:text-slate-100">glutathion</strong> in de lever. Tot ongeveer{' '}
        <strong className="text-slate-900 dark:text-slate-100">4 gram paracetamol per dag</strong> wordt daarom vaak als veilig beschouwd bij gezonde volwassenen.
      </p>
      <p>
        Bij <strong className="text-slate-900 dark:text-slate-100">overdosering</strong> raakt de capaciteit om NAPQI te neutraliseren overschreden. Dan kan glutathion uitgeput raken en hoopt NAPQI zich op. Dat kan levercelschade geven, met soms ernstige leverschade en zelfs leverfalen. Een dagelijkse dosis van{' '}
        <strong className="text-slate-900 dark:text-slate-100">8 gram paracetamol</strong> kan dus wel degelijk risico geven voor de lever.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 3. Paracetamolmetabolisme in het kort</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-white/60 dark:bg-slate-900/40">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-600 text-left bg-slate-50/90 dark:bg-slate-800/60">
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Proces</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Uitkomst</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/80 dark:divide-slate-600/70">
            <tr>
              <td className="p-3 align-top">Fase 1 via CYP450</td>
              <td className="p-3 align-top">Vorming van NAPQI</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Glutathion in gezonde lever</td>
              <td className="p-3 align-top">Neutraliseert kleine hoeveelheden NAPQI</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Overdosering</td>
              <td className="p-3 align-top">Glutathion raakt uitgeput, NAPQI hoopt op</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Gevolg</td>
              <td className="p-3 align-top">Levercelbeschadiging, mogelijk leverfalen</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-slate-50/80 dark:bg-slate-800/50 p-4 space-y-3 border-l-4 border-indigo-400 dark:border-indigo-500/85">
        <p>
          <strong className="font-semibold text-slate-900 dark:text-slate-100">Aandachtsvraag:</strong> Waarom helpt acetylcysteïne bij paracetamolintoxicatie?
        </p>
        <p>
          <strong className="font-semibold text-slate-900 dark:text-slate-100">Mini-antwoord:</strong> Omdat het een precursor is van glutathion en zo het tekort kan aanvullen.
        </p>
      </div>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Behandeling van paracetamolintoxicatie</h3>
      <p>
        Het antidotum bij paracetamolintoxicatie is <strong className="text-slate-900 dark:text-slate-100">acetylcysteïne</strong>. Dit middel kan worden gegeven als{' '}
        <strong className="text-slate-900 dark:text-slate-100">GSH</strong>-voorloper en helpt het tekort aan glutathion op te vangen. Het kan de al ontstane oxidatieve schade aan levercellen helpen herstellen.
      </p>
      <p>
        Het grootste effect wordt bereikt als de behandeling binnen <strong className="text-slate-900 dark:text-slate-100">8–10 uur</strong> na inname start. De beslissing om te behandelen wordt gebaseerd op de paracetamolconcentratie en het risico op hepatotoxiciteit, met behulp van de{' '}
        <strong className="text-slate-900 dark:text-slate-100">Rumack-Matthew-nomogram</strong>.
      </p>
    </div>
  )
}
