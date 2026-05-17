export default function Sect11InstandhoudendeFactorenOpSporen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Instandhoudende factoren opsporen</h2>
      <p>
        Naast nieuwsgierigheid heb je in deze fase nog een tweede taak: actief zoeken naar factoren die de klachten in stand houden. Dat is extra belangrijk bij ALK, omdat juist daar de
        sleutel vaak ligt tot vermindering van klachten en gevolgen.
      </p>
      <p>Je onderzoekt bijvoorbeeld of iemand:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>veel bezig is met de klachten;</li>
        <li>bang is voor ernstige ziekte;</li>
        <li>daardoor minder actief wordt;</li>
        <li>sociale contacten vermijdt;</li>
        <li>zich schuldig of bezwaard voelt;</li>
        <li>het gevoel heeft geen controle meer te hebben.</li>
      </ul>
      <p>
        Deze patronen kunnen elkaar versterken: aandacht voor de buikpijn, meer onrust, meer beperking, minder plezier in het leven en uiteindelijk meer klachtenbeleving.
      </p>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 3. Voorbeeld van een vicieuze cirkel bij ALK</h3>
        <div className="overflow-x-auto mt-4 rounded-xl border border-emerald-200/80 dark:border-emerald-600/40">
          <table className="w-full text-sm border-collapse bg-white dark:bg-slate-900/50">
            <thead>
              <tr className="bg-emerald-100 dark:bg-emerald-900/40">
                <th className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 text-left font-semibold text-emerald-900 dark:text-emerald-100">
                  Onderdeel
                </th>
                <th className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 text-left font-semibold text-emerald-900 dark:text-emerald-100">
                  Voorbeeld
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">
                  Somatische klacht
                </td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Buikpijn, opgeblazen gevoel</td>
              </tr>
              <tr className="bg-emerald-50/70 dark:bg-emerald-950/30">
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">
                  Cognities
                </td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">
                  “Het gaat nooit meer over”, “Misschien is het kanker”
                </td>
              </tr>
              <tr>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">
                  Emoties
                </td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Angst, radeloosheid</td>
              </tr>
              <tr className="bg-emerald-50/70 dark:bg-emerald-950/30">
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">
                  Gedrag
                </td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">In bed blijven, activiteiten vermijden</td>
              </tr>
              <tr>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">
                  Sociale context
                </td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Partner of familie maakt zich zorgen</td>
              </tr>
              <tr className="bg-emerald-50/70 dark:bg-emerald-950/30">
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">
                  Gevolg
                </td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">
                  Meer aandacht voor klachten, meer beperking, meer onrust
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
