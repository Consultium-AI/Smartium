export default function Sect07BehandelingVanOpportunistischeInfecties() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Behandeling van opportunistische infecties</h2>
      <p>
        De behandeling volgt een aantal vaste principes. Bij verdenking op een bacteriële infectie bij een patiënt met een belangrijke afweerstoornis wordt niet afgewacht. De drempel om te starten met therapie ligt laag.
      </p>
      <p>
        Daarnaast wordt breder behandeld dan bij patiënten zonder afweerstoornis. Niet alleen gewone verwekkers, maar ook opportunistische of ongebruikelijke verwekkers moeten worden meegenomen. Het type afweerdefect helpt daarbij: een patiënt met een T-celdefect vraagt een andere benadering dan een patiënt met een granulocytendefect.
      </p>
      <p>
        Verder wordt er vaker intraveneus behandeld, vaak met hogere doseringen en gedurende langere tijd. Diagnostiek en behandeling lopen parallel. Er wordt dus niet eerst langdurig gewacht op alle uitslagen, maar al vroeg behandeld terwijl het onderzoek doorgaat.
      </p>

      <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 pt-2">Tabel 5. Behandeling in grote lijnen</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="w-full min-w-[36rem] border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100 dark:bg-slate-800/80">
              <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 text-left font-semibold text-slate-900 dark:text-slate-100">
                Situatie
              </th>
              <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 text-left font-semibold text-slate-900 dark:text-slate-100">
                Aanpak
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Verdenking op bacteriële infectie bij belangrijke afweerstoornis</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">niet afwachten, laagdrempelig starten met therapie</td>
            </tr>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Verwekker nog onbekend</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">brede antimicrobiële dekking, ook denken aan opportunisten</td>
            </tr>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Ernstig beloop</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">vaker intraveneus behandelen, vaak met hogere doseringen</td>
            </tr>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Onvoldoende respons</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">behandeling verlengen en opnieuw zoeken naar verwekker(s)</td>
            </tr>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Infectie ondanks profylaxe</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">extra dekking en herbeoordeling van de kwetsbaarheid</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
