export default function Sect15BehandelingCAP() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Behandeling van community-acquired pneumonie</h2>
      <p>
        De behandeling van CAP is meestal empirisch. Dat betekent dat je antibiotica geeft zonder dat de verwekker al bekend is. De keuze hangt af van:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>de ernst van de pneumonie;</li>
        <li>comorbiditeit;</li>
        <li>eerder antibioticagebruik;</li>
        <li>risico op specifieke verwekkers zoals legionella.</li>
      </ul>
      <p>
        Breder is niet altijd beter. Een breder antibioticum kan een groter spectrum dekken, maar geeft ook meer kans op bijwerkingen en resistentieontwikkeling.
      </p>

      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 5. Behandeling van CAP per ernst</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Ernst</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Kenmerken</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Behandeling</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top font-semibold">Milde CAP</td>
                <td className="px-4 py-3 align-top">CURB-65 0–1 of PSI 1–2, ambulant</td>
                <td className="px-4 py-3 align-top">1e keus: amoxicilline 3dd 500 mg, 5–7 dagen. 2e keus: doxycycline 1dd 100 mg (eerste dosis 200 mg), 7 dagen</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top font-semibold">Matig-ernstige CAP</td>
                <td className="px-4 py-3 align-top">CURB-65 2 of PSI 3–4, opname op afdeling</td>
                <td className="px-4 py-3 align-top">Amoxicilline intraveneus 4dd 1000 mg of penicilline intraveneus 4dd 1 miljoen IE</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top font-semibold">Ernstige CAP</td>
                <td className="px-4 py-3 align-top">CURB-65 3–5 of PSI 5, opname op afdeling</td>
                <td className="px-4 py-3 align-top">2e of 3e generatie cefalosporine</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top font-semibold">Ernstige CAP op ICU</td>
                <td className="px-4 py-3 align-top">Zeer ernstig, opname intensive care</td>
                <td className="px-4 py-3 align-top">2e of 3e generatie cefalosporine met ciprofloxacine</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>
        Amoxicilline is een betalactamantibioticum en werkt goed tegen <em>S. pneumoniae</em> en een groot deel van de <em>H. influenzae</em>-stammen, maar niet tegen atypische verwekkers.
      </p>
      <p>
        Doxycycline behoort tot de tetracyclines. Deze remmen de eiwitsynthese via het ribosoom en werken tegen <em>S. pneumoniae</em>, <em>H. influenzae</em> en atypische verwekkers. De resistentie van <em>S. pneumoniae</em> tegen doxycycline is ongeveer 10%.
      </p>
      <p>
        Bij ernstige CAP is een 2e of 3e generatie cefalosporine passend. Cefalosporines zijn ook betalactamantibiotica en werken breder, vooral ook tegen gramnegatieve bacteriën zoals enterobacterales. Ze werken niet tegen atypische verwekkers, daarom wordt bij ICU-behandeling vaak ciprofloxacine toegevoegd. Ciprofloxacine is een fluoroquinolon en remt de DNA-synthese van bacteriën.
      </p>
      <p>Bij legionellarisico’s, zoals:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>recent reizen;</li>
        <li>een legionella-uitbraak;</li>
        <li>falen van een eerdere beta-lactambehandeling,</li>
      </ul>
      <p>
        wordt een urine-legionellatest ingezet. Als die positief is, past behandeling met een fluoroquinolon zoals levofloxacine of moxifloxacine.
      </p>
    </div>
  )
}
