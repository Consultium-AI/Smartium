export default function Sect09SamenvattingVanDeAanpak() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Samenvatting van de aanpak</h3>
      <p>
        Bij volwassenen met buikpijn begin je met een gerichte anamnese en lichamelijk onderzoek. Je let op de
        kenmerken van de pijn, bijkomende klachten en de algemene toestand van de patiënt. Daarna maak je een
        systematische differentiaaldiagnose, waarbij je steeds eerst denkt aan urgente oorzaken. Vooral peritonitis,
        shock en sepsis zijn alarmsituaties die je snel moet herkennen.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 3. Kern van de beoordeling bij buikpijn</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
            <tr>
              <th className="px-4 py-3 font-semibold">Stap</th>
              <th className="px-4 py-3 font-semibold">Waar let je op?</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Anamnese</td>
              <td className="px-4 py-3 align-top">Locatie, begin, karakter, ernst, uitstraling, bijkomende klachten</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Lichamelijk onderzoek</td>
              <td className="px-4 py-3 align-top">Algemene indruk, vitale parameters, buikonderzoek</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Urgentie-inschatting</td>
              <td className="px-4 py-3 align-top">Zijn er alarmsymptomen zoals peritonitis, shock of sepsis?</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Differentiaaldiagnose</td>
              <td className="px-4 py-3 align-top">Systematisch mogelijke oorzaken ordenen</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
