export default function Sect07AlarmsymptomenDieJeNietMagMissen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Alarmsymptomen die je niet mag missen</h2>
      <p>
        Bij de evaluatie van buikpijn moet je actief zoeken naar alarmsymptomen. Deze wijzen op een mogelijke ernstige
        aandoening en maken dat je sneller moet handelen.
      </p>
      <p>Belangrijke alarmsymptomen zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Peritonitis</strong>
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Shock</strong>
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Sepsis</strong>
        </li>
        <li>een duidelijk <strong className="text-slate-900 dark:text-slate-100">zieke indruk</strong></li>
        <li>hevige, snel toenemende of plots ontstane pijn</li>
        <li>tekenen van instabiliteit bij het lichamelijk onderzoek</li>
      </ul>
      <p>
        Als deze signalen aanwezig zijn, is de buikpijn niet meer alleen een klacht, maar een mogelijk teken van een
        acute bedreiging van de gezondheid.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 2. Alarmsymptomen bij buikpijn</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
            <tr>
              <th className="px-4 py-3 font-semibold">Alarmsymptoom</th>
              <th className="px-4 py-3 font-semibold">Betekenis</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Peritonitis</td>
              <td className="px-4 py-3 align-top">Irritatie/ontsteking van het buikvlies</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Shock</td>
              <td className="px-4 py-3 align-top">Ernstige circulatoire instabiliteit</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Sepsis</td>
              <td className="px-4 py-3 align-top">Ernstige systemische reactie op infectie</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Deze alarmsymptomen vormen de belangrijkste reden om buikpijn altijd serieus en gestructureerd te beoordelen.
      </p>
    </div>
  )
}
