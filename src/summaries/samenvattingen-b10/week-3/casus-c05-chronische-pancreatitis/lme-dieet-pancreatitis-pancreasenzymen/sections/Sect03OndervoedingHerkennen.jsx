export default function Sect03OndervoedingHerkennen () {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Ondervoeding herkennen en beoordelen</h2>
      <p>
        Ondervoeding is een acute of chronische toestand waarbij een tekort of disbalans van energie, eiwit en andere
        voedingsstoffen leidt tot meetbare nadelige effecten op lichaamssamenstelling, functioneren en klinische resultaten.
        Daarom moet ondervoeding actief worden gescreend en behandeld.
      </p>
      <p>
        Bij pancreatitis is ondervoeding vaak <strong className="text-slate-900 dark:text-slate-100">multifactorieel</strong>.
        Dat betekent dat er niet één oorzaak is, maar meerdere tegelijk: minder intake, verhoogde behoefte, verstoorde
        vertering en soms ook verminderde opname.
      </p>
      <p>
        Een belangrijk screeningsinstrument is de <strong className="text-slate-900 dark:text-slate-100">PG-SGA Short Form</strong>.
        Dit instrument kijkt naar vier onderdelen:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">gewicht</strong>: recent gewichtsverlies;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">voedingsinname</strong>: hoeveel iemand nog eet;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">symptomen</strong>: bijvoorbeeld geen eetlust, snel vol
          zitten, buikpijn, misselijkheid, diarree of steatorroe;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">activiteit en functioneren</strong>: hoeveel iemand nog
          kan doen in het dagelijks leven.
        </li>
      </ul>
      <p>
        De score helpt om de ernst van het voedingsprobleem in te schatten en om te bepalen hoe snel en hoe intensief een
        voedingsinterventie nodig is. Hoe hoger de score, hoe urgenter de voedingszorg.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 2. Waar let de PG-SGA op?</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-white/60 dark:bg-slate-900/40">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-600 text-left bg-slate-50/90 dark:bg-slate-800/60">
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Onderdeel</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Voorbeelden</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/80 dark:divide-slate-600/70">
            <tr>
              <td className="p-3 align-top">Gewicht</td>
              <td className="p-3 align-top">Recent gewichtsverlies, laag gewicht</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Voedingsinname</td>
              <td className="p-3 align-top">Minder dan normaal eten, kleine porties, weinig eten</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Symptomen</td>
              <td className="p-3 align-top">
                Geen eetlust, snel vol, misselijkheid, buikpijn, diarree, steatorroe, slikproblemen
              </td>
            </tr>
            <tr>
              <td className="p-3 align-top">Activiteit/functioneren</td>
              <td className="p-3 align-top">Minder actief, vaker in bed of op de bank, verminderd dagelijks functioneren</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Een hoge PG-SGA-score past bij een duidelijke indicatie voor voedingsinterventie. Dat kan variëren van voorlichting
        en herbeoordeling tot een multidisciplinaire voedingsaanpak met snelle inzet van een diëtist en optimale
        symptoombestrijding.
      </p>
    </div>
  )
}
