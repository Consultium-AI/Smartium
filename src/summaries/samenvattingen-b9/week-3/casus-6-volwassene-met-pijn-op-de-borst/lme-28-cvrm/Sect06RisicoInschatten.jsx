export default function Sect06RisicoInschatten() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Risico inschatten: hoe doe je dat?</h2>
      <p>
        Na anamnese, lichamelijk onderzoek en aanvullend onderzoek wordt het risico op hart- en vaatziekten bepaald. Daarbij wordt gebruikgemaakt van de CVRM-risicotabel en van SCORE2.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Tabel 2. Risicocategorieën en globale aanpak</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Risicogroep</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Voorbeelden</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Beleid</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Zeer hoog risico</td>
              <td className="px-4 py-3 align-top">
                Eerder doorgemaakte hart- en vaatziekte, diabetes met ernstige eindorgaanschade, ernstige chronische nierschade, bewezen familiaire hypercholesterolemie met sterk verhoogd risico
              </td>
              <td className="px-4 py-3 align-top">Medicamenteuze behandeling is geïndiceerd</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Hoog risico</td>
              <td className="px-4 py-3 align-top">
                Diabetes mellitus zonder ernstige eindorgaanschade maar met extra risicofactoren, matige chronische nierschade, sterk verhoogde bloeddruk, familiaire hypercholesterolemie, hoog SCORE2-risico
              </td>
              <td className="px-4 py-3 align-top">Leefstijl + vaak medicatie</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Matig verhoogd risico</td>
              <td className="px-4 py-3 align-top">Bijvoorbeeld diabetes zonder extra risicofactoren of een matig verhoogd SCORE2-risico</td>
              <td className="px-4 py-3 align-top">Leefstijl, medicatie afwegen</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Laag risico</td>
              <td className="px-4 py-3 align-top">Lage SCORE2-uitslag</td>
              <td className="px-4 py-3 align-top">Leefstijladvies</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Bij mensen zonder de eerder genoemde hoog-risicodiagnosen wordt het risico geschat met <span className="font-semibold">SCORE2</span>. Daarbij kijk je naar vijf factoren:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>leeftijd;</li>
        <li>geslacht;</li>
        <li>roken;</li>
        <li>onbehandelde bloeddruk;</li>
        <li>onbehandeld cholesterol.</li>
      </ul>
      <p>De risicotabel is leeftijdsafhankelijk. Grofweg geldt:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          onder 50 jaar: laag &lt;2,5%, matig verhoogd 2,5–&lt;7,5%, hoog &gt;7,5%;
        </li>
        <li>
          50–69 jaar: laag &lt;5%, matig verhoogd 5–&lt;10%, hoog &gt;10%;
        </li>
        <li>70 jaar en ouder: laag niet van toepassing, matig verhoogd &lt;15%, hoog ≥15%.</li>
      </ul>
      <p>
        {'>'}{' '}
        <span className="font-semibold">Aandachtsvraag:</span> Waarom is een 10-jaarsrisico zo belangrijk?{' '}
        <br />
        {'>'}{' '}
        <span className="font-semibold">Mini-antwoord:</span> Omdat het helpt bepalen of leefstijl alleen genoeg is of dat medicamenteuze preventie nodig is.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Wanneer is de risicotabel niet van toepassing?</h3>
      <p>De tabel gebruik je niet voor alle patiënten. Uitzonderingen zijn onder andere:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>mensen ouder dan 80 jaar;</li>
        <li>mensen jonger dan 40 jaar;</li>
        <li>mensen met een extreem hoge bloeddruk;</li>
        <li>mensen met extreem hoog cholesterol;</li>
        <li>mensen met extreme obesitas.</li>
      </ul>
      <p>Bij deze groepen moet je dus extra klinisch nadenken en de situatie individueel beoordelen.</p>
    </div>
  )
}
