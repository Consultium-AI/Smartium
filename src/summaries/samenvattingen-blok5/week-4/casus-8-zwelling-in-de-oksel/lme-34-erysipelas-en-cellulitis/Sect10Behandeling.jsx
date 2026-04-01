export default function Sect10Behandeling() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Behandeling: hoe pak je het aan?</h2>
      <p>
        Omdat erysipelas en cellulitis vaak moeilijk van elkaar te onderscheiden zijn en de behandeling hetzelfde is, worden ze in de praktijk samen behandeld. De keuze van antibiotica hangt af van de ernst van het ziektebeeld en van eventuele allergieën.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 5. Behandeling van erysipelas/cellulitis</h3>
      <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-100 dark:bg-slate-800/80">
            <tr>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100 w-2/5">Situatie</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Behandeling</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            <tr>
              <td className="p-3 align-top">Zieke patiënt met koorts, hypotensie en hoge ontstekingswaarden</td>
              <td className="p-3">
                Start <strong>flucloxacilline intraveneus 4 dd 1000 mg</strong> na afname van bloedkweken
              </td>
            </tr>
            <tr>
              <td className="p-3 align-top">Minder ziek of na klinische verbetering</td>
              <td className="p-3">
                Na <strong>48–72 uur</strong> kan worden overgegaan op orale therapie
              </td>
            </tr>
            <tr>
              <td className="p-3 align-top">Standaard orale behandeling</td>
              <td className="p-3">
                <strong>Flucloxacilline 4 dd 500 mg per os</strong> gedurende <strong>10–14 dagen</strong>
              </td>
            </tr>
            <tr>
              <td className="p-3 align-top">Alternatief intraveneus</td>
              <td className="p-3">
                <strong>Flucloxacilline 4 dd 1000 mg intraveneus</strong> gedurende <strong>10–14 dagen</strong>
              </td>
            </tr>
            <tr>
              <td className="p-3 align-top">Penicilline-allergie</td>
              <td className="p-3">
                <strong>Clindamycine</strong> 4 dd 300 mg of 3 dd 600 mg oraal, of clindamycine 3 dd 600 mg intraveneus gedurende{' '}
                <strong>10–14 dagen</strong>
              </td>
            </tr>
            <tr>
              <td className="p-3 align-top">Alternatief bij penicilline-allergie</td>
              <td className="p-3">
                <strong>Claritromycine 2 dd 500 mg per os</strong> gedurende <strong>10–14 dagen</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Bij een zieke patiënt is starten met intraveneuze therapie logisch. De biologische beschikbaarheid van flucloxacilline oraal is maar ongeveer 50–70% en wordt bovendien negatief beïnvloed door inname rond de maaltijd. Daarom is bij een zieke patiënt starten met intraveneuze therapie verstandiger.
      </p>
      <p>
        Aandachtsvraag: waarom begin je bij een zieke patiënt liever intraveneus?
        {'  '}
        Mini-antwoord: omdat de orale opname van flucloxacilline beperkt is en in de acute fase een betrouwbare behandeling nodig is.
      </p>
    </div>
  )
}
