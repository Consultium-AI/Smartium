export default function Sect09InfectiesNaStamceltransplantatie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Infecties na stamceltransplantatie</h2>
      <p>
        Een allogene stamceltransplantatie is binnen de kinderoncologie een aparte risicofase. Door conditionering met chemotherapie of bestraling, mucositis, neutropenie, diepe T- en B-cellymfopenie en aanvullende immuunsuppressie ontstaat een sterk verhoogde gevoeligheid voor opportunistische infecties.
      </p>
      <p>
        Dat risico verandert in de tijd. Vóór neutrofielenherstel staan vooral bacteriële infecties en schimmels of gisten op de voorgrond. Na neutrofielenherstel, vooral in de eerste honderd dagen, worden ook PCP, gekapselde bacteriën en enterale of respiratoire virusinfecties belangrijker. In latere fasen blijven virale reactivaties en opportunistische infecties relevant, zeker wanneer er nog immuunsuppressie nodig is.
      </p>

      <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 pt-2">Tabel 6. Infectierisico na allogene stamceltransplantatie</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="w-full min-w-[32rem] border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100 dark:bg-slate-800/80">
              <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 text-left font-semibold text-slate-900 dark:text-slate-100">
                Fase
              </th>
              <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 text-left font-semibold text-slate-900 dark:text-slate-100">
                Relatief belangrijke infecties
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Voor neutrofielenherstel</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">bacteriële infecties, gisten en schimmels</td>
            </tr>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Na neutrofielenherstel, eerste {'<'}100 dagen</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                PCP, gekapselde bacteriën, enterale en respiratoire virusinfecties, virale reactivaties
              </td>
            </tr>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Latere fase {'>'}100 dagen</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                EBV, hCMV, adenovirus, HHV-6, HSV en VZV, afhankelijk van herstel en immuunsuppressie
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Daarom horen bij deze fase strikte profylaxe, pre-emptieve behandeling en wekelijkse monitoring. Er wordt bijvoorbeeld met PCR gecontroleerd op EBV, CMV, HHV-6 en adenovirus. Bij verdenking op <em>Aspergillus</em> kan galactomannan worden gevolgd. Een jongen die na stamceltransplantatie oplopende EBV-DNA-waarden krijgt en later EBV-geassocieerde post-transplant lymfoproliferatie ontwikkelt, laat zien hoe lang dit risico kan aanhouden.
      </p>
      <p>
        <strong>Aandacht-vraag:</strong>
        <br />
        Waarom verschuift het infectierisico na stamceltransplantatie in de tijd?
      </p>
      <p>
        <strong>Mini-antwoord:</strong>
        <br />
        Omdat verschillende onderdelen van het immuunsysteem op verschillende momenten herstellen en extra immuunsuppressie dat herstel opnieuw kan vertragen.
      </p>
    </div>
  )
}
