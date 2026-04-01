export default function Sect09DiagnostiekNefritisch() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Diagnostiek bij het nefritisch syndroom</h2>
      <p>
        De diagnostiek begint met een laagdrempelige verdenking op een nefritisch syndroom. De urine speelt daarbij een centrale rol.
      </p>
      <p className="font-medium text-slate-800 dark:text-slate-200">Tabel 3. Diagnostiek bij een vermoeden van nefritisch syndroom</p>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Onderdeel</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Wat zoek je?</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-medium">Anamnese en lichamelijk onderzoek</td>
              <td className="px-4 py-3">Hematurie, malaise, koorts, gewrichts- en spierklachten, gewichtsverlies, hemoptoë; let op huid, gewrichten, KNO en soms zenuwen</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-medium">Urineonderzoek</td>
              <td className="px-4 py-3">Hematurie, dysmorfe erytrocyten, erytrocytencilinders; microscopie is belangrijk</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-medium">Bloedonderzoek</td>
              <td className="px-4 py-3">Nierfunctie, elektrolyten, leverwaarden, CRP</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-medium">Serologie en complement</td>
              <td className="px-4 py-3">Anti-GBM, ANCA (PR3/MPO), ANA, anti-dsDNA, C3/C4</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-medium">Verder</td>
              <td className="px-4 py-3">Soms nierbiopt voor diagnose en/of prognose</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Een goede interpretatie van urine vraagt ervaring. Erytrocyten kunnen ook dysmorf worden door andere factoren, zoals een hoge of lage osmolaliteit van de urine. Dysmorfe erytrocyten zijn dus een aanwijzing voor een glomerulaire oorsprong, maar erytrocytencilinders zijn bewijzend voor glomerulaire hematurie.
      </p>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          Aandachtsvraag: Wat zegt een erytrocytencilinder?  Kort antwoord: Dat er bloed uit de glomerulus komt; het is bewijzend voor glomerulaire hematurie.
        </p>
      </div>
      <p>
        Naast urineonderzoek kijk je in het bloed naar nierfunctie, elektrolyten, leverwaarden en ontstekingswaarden, meestal CRP. Daarna volg je gerichte serologische testen: anti-GBM-antistoffen, ANCA (antineutrofiele cytoplasmatische antistoffen), ANA (antinucleaire antistoffen) en anti-dsDNA (antistoffen tegen dubbelstrengs DNA). Het complementsysteem is vaak geactiveerd, waardoor C3 en C4 laag kunnen zijn.
      </p>
      <p>
        Deze testen kunnen soms binnen enkele uren uitslag geven. Juist bij ernstig gestoorde nierfunctie is het cruciaal om de diagnose zo snel mogelijk te kennen. Met de combinatie van anamnese, lichamelijk onderzoek, urineonderzoek en bloedonderzoek kun je vaak al snel een werkdiagnose van glomerulonefritis of nefritisch syndroom stellen. Ook andere artsen, zoals een SEH-arts of longarts, kunnen de verdenking oppikken en al de eerste behandeling starten.
      </p>
      <p>
        Soms is nog een nierbiopt nodig. Dat kan nodig zijn voor de diagnose, maar ook voor de prognose, bijvoorbeeld om te beoordelen hoeveel chronische schade er al aanwezig is.
      </p>
    </div>
  )
}
