export default function Sect10Hashimoto() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Hashimoto: destructie van de schildklier</h2>
      <p>
        Hashimoto kan leiden tot hypothyreoïdie. Het mechanisme is vooral destructie van schildkliercellen.
        Dat mechanisme lijkt op de destructie van bètacellen bij T1DM: geactiveerde effector-T-cellen
        veroorzaken een chronische ontstekingsreactie die de schildklierepitheelcellen beschadigt.
        Auto-antistoffen, zoals anti-TPO en anti-TG, worden wel gevonden, maar lijken niet de hoofdrol te
        spelen in het ontstaan van de hypothyreoïdie.
      </p>
      <p>
        In de histologie zie je bij Hashimoto vooral lymfoïde follikels met een kiemcentrum. Dat past bij een
        actieve immuunreactie in het weefsel.
      </p>
      <div className="rounded-xl border border-amber-200 dark:border-amber-600/40 bg-amber-50 dark:bg-amber-950/65 p-4">
        <p className="text-amber-950 dark:text-amber-100">
          <strong className="text-amber-950 dark:text-amber-50">Aandachtspunt:</strong> Waarom zijn anti-TPO
          en anti-TG niet direct pathogeen?</p>
        <p className="mt-2">
          <span className="font-semibold">Kort antwoord:</span>{' '}omdat deze antigeenstructuren vooral
          intracellulair of in de follikels zitten, waardoor de antistoffen er niet goed aan kunnen binden.
        </p>
      </div>
    </div>
  )
}
