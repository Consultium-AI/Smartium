export default function Sect18DOACOfVKATabel4() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">DOAC of VKA?</h2>
      <p>
        Bij een patiënt met een trombosebeen kan behandeling plaatsvinden met een DOAC of met een VKA. De keuze wordt bepaald door de kenmerken van het middel en de patiënt.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 4. Kernverschillen tussen VKA en DOAC</h3>
      <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-100 dark:bg-slate-800/80">
            <tr>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100 w-1/2">VKA</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100 w-1/2">DOAC</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            <tr>
              <td className="p-3 align-top">Mate van antistolling meetbaar met INR</td>
              <td className="p-3 align-top">Voorspelbaar effect op stolling</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Variabel effect op stolling</td>
              <td className="p-3 align-top">Voorspelbaar effect op stolling</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Antidotum beschikbaar</td>
              <td className="p-3 align-top">Antidotum voor één middel uit deze groep beschikbaar</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Start altijd in combinatie met LMWH</td>
              <td className="p-3 align-top">Moet soms voorafgegaan worden door LMWH</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Veel interacties met andere geneesmiddelen</td>
              <td className="p-3 align-top">Minder interacties</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Halfwaardetijd ongeveer 10–13 uur voor DOAC’s, VKA’s verschillen sterk</td>
              <td className="p-3 align-top">Tabletvorm</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
