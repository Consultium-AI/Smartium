export default function Sect03Symptomen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Symptomen en alarmsignalen</h2>
      <p>
        CRC kan zich presenteren met verschillende klachten. De klachten zijn niet altijd specifiek, want ze kunnen ook
        voorkomen bij goedaardige maag-darmaandoeningen. Juist daarom is het belangrijk om naar het totaalplaatje te kijken:
        combinatie van klachten, leeftijd en risicofactoren.
      </p>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Tabel 2. Symptomen van CRC en hoe vaak ze voorkomen bij diagnose
        </h3>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left border-collapse">
            <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
              <tr>
                <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-semibold">Symptoom</th>
                <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-semibold">
                  % van patiënten bij diagnose
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-slate-900/40">
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Rectaal bloedverlies</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">45% (range 38%–57%)</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Buikpijn</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">40% (range 33%–63%)</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                  Veranderd ontlastingpatroon (obstipatie, diarree, wisseling)
                </td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">27% (range 20%–54%)</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                  Onverklaarde ferriprieve anemie
                </td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">10–20%</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Onbedoeld gewichtsverlies</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">20–35%</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                  Obstructie-achtige klachten (misselijkheid en braken)
                </td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">16–24%</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Moeheid</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">10–20%</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                  Meerdere symptomen (≥2)
                </td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">85%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>
        Belangrijk is dus dat CRC zich vaak niet met één enkel symptoom presenteert, maar met een combinatie van klachten.
        Rectaal bloedverlies kan bijvoorbeeld ook passen bij aambeien, anale fissuren of een ernstige darmontsteking.
        Toch kan juist de combinatie van bloedverlies, verandering in ontlasting en buikpijn aanleiding zijn om verder te
        zoeken.
      </p>
      <p>
        Aandachtsvraag: Wanneer moet je extra aan CRC denken?{'  '}Mini-antwoord: Zeker bij oudere patiënten, bij meerdere
        klachten samen en bij risicofactoren zoals familiaire belasting of IBD.
      </p>
    </div>
  )
}
