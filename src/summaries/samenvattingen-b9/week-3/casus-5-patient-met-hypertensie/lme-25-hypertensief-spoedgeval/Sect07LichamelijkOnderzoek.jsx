export default function Sect07LichamelijkOnderzoek() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Lichamelijk onderzoek en aanvullend onderzoek</h2>
      <p>
        Het lichamelijk onderzoek levert vaak niet veel meer op dan de anamnese, maar kan wel belangrijke aanwijzingen geven. Als je een links-rechtsverschil vindt, is dat belangrijk, maar vaak vind je het niet en sluit dat een dissectie niet uit.
      </p>
      <p>Je let op:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>tekenen van drugsgebruik of feochromocytoom: gejaagd, geagiteerd, zweten;</li>
        <li>focale neurologische verschijnselen: compleet neurologisch onderzoek, inclusief hersenzenuwen;</li>
        <li>auscultatie van hart, longen en vaatboom: tekenen van pre-existent vaatlijden of atherosclerose, crepitaties bij longoedeem;</li>
        <li>bloeddrukmeting aan beide armen: een verschil van &gt;20 mmHg kan passen bij een aortadissectie.</li>
      </ul>

      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 2. Aanvullend onderzoek per type orgaanschade</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Type orgaanschade</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Aanvullend onderzoek</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Hersenbloeding of -infarct</td>
                <td className="px-4 py-3 align-top">CT om bloeding uit te sluiten</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Hypertensieve encefalopathie</td>
                <td className="px-4 py-3 align-top">Alleen MRI kan dit zeker vaststellen; dat lukt vaak niet tijdens het SEH-bezoek</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Acuut coronair syndroom</td>
                <td className="px-4 py-3 align-top">ECG, troponines</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Aortadissectie of -ruptuur</td>
                <td className="px-4 py-3 align-top">CT-angiogram</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Acute hypertensieve nefropathie</td>
                <td className="px-4 py-3 align-top">Bloedonderzoek creatinine, urineonderzoek</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Hypertensieve retinopathie</td>
                <td className="px-4 py-3 align-top">Fundoscopie: cotton wool spots, papiloedeem</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Acuut hartfalen / longoedeem</td>
                <td className="px-4 py-3 align-top">X-thorax, ECG, bloedonderzoek met pro-BNP</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>
        Een oogarts wordt alleen in consult gevraagd bij twijfel tussen hypertensie met klachten zoals hoofdpijn of wazig zien en een echt hypertensief spoedgeval, wanneer andere tekenen van eindorgaanschade ontbreken en de bloeddruk &gt;200/120 mmHg is. Routinematige fundoscopie om bij chronische hypertensie beleid vast te stellen heeft geen meerwaarde.
      </p>
    </div>
  )
}
