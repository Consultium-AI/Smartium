export default function Sect02Presentatie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Presentatie van het oesofagus(cardia)carcinoom
      </h2>
      <p>
        Het oesofaguscarcinoom is een maligniteit van de slokdarm. Een belangrijke klinische gedachte is dat klachten
        vaak pas laat ontstaan. Dat gebeurt meestal wanneer de tumor zo groot is dat er passageklachten ontstaan of
        wanneer de tumor druk geeft op de omgeving. De plaats van de tumor is daarbij heel bepalend: een tumor hoog in
        de slokdarm geeft vaak andere klachten dan een tumor laag bij de maagovergang.
      </p>
      <p>
        Een belangrijke klacht is dus <strong className="text-slate-900 dark:text-slate-100">passageklachten</strong>,
        wat betekent dat voedsel moeilijk door de slokdarm passeert. In een later stadium kunnen ook andere klachten
        ontstaan, zoals regurgitatie, hoest na eten, heesheid, pijn, benauwdheid of een gevoel van een massa in de keel.
      </p>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35 space-y-2">
        <p className="text-slate-800 dark:text-amber-100 m-0">
          <strong className="text-slate-900 dark:text-amber-50">Aandachtsvraag:</strong> Wanneer treden de meeste
          klachten op?
          <br />
          <strong className="text-slate-900 dark:text-amber-50">Mini-antwoord:</strong> Meestal pas wanneer de tumor
          groter wordt en passageproblemen of druk op de omgeving veroorzaakt.
        </p>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Tabel 1. Klachten en wat ze betekenen
        </h3>
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Klacht of verschijnsel
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Betekenis
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Passageklachten</td>
                <td className="px-4 py-3 align-top">Voedsel gaat moeilijk door de slokdarm</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Klachten bij late fase</td>
                <td className="px-4 py-3 align-top">Ontstaan vaak bij grotere tumoren</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Afhankelijk van tumorlocatie</td>
                <td className="px-4 py-3 align-top">
                  Hoog of laag in de slokdarm geeft een ander klachtenpatroon
                </td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Druk op de omgeving</td>
                <td className="px-4 py-3 align-top">De tumor kan omliggende structuren beïnvloeden</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
