export default function Sect05LichamelijkOnderzoekEnTabel1() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Lichamelijk onderzoek en aanvullend onderzoek</h2>
      <p>Bij het lichamelijk onderzoek richt je je in elk geval op:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>lengte en gewicht, om de BMI te berekenen;</li>
        <li>middelomtrek;</li>
        <li>bloeddruk;</li>
        <li>tekenen van erfelijke dyslipidemie, zoals peesxanthomen, arcus lipoides en xanthelasmata;</li>
        <li>algemeen lichamelijk onderzoek wanneer daar aanleiding toe is, bijvoorbeeld bij hypothyreoïdie, Cushing of cardiale souffles.</li>
      </ul>
      <p>Aanvullend onderzoek is belangrijk om het risico beter in te schatten.</p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Tabel 1. Minimaal onderzoek bij CVRM</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Onderdeel</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Wat je minimaal nodig hebt</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Anamnese</td>
              <td className="px-4 py-3 align-top">Leeftijd, geslacht, roken, alcohol/drugs, familie-anamnese, voeding, lichamelijke activiteit</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Lichamelijk onderzoek</td>
              <td className="px-4 py-3 align-top">BMI, middelomtrek, bloeddruk, tekenen van erfelijke dyslipidemie</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Labonderzoek</td>
              <td className="px-4 py-3 align-top">Nierfunctie (eGFR) en eiwit in urine, glucose en HbA1c bij diabetes mellitus, lipidenprofiel</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Extra onderzoek</td>
              <td className="px-4 py-3 align-top">Alleen op indicatie, bijvoorbeeld ASAT, ALAT, TSH</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">ECG</td>
              <td className="px-4 py-3 align-top">Niet standaard nodig, alleen bij twijfel over de voorgeschiedenis, bijvoorbeeld een eerder myocardinfarct</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Een ECG hoort dus niet standaard bij iedere risicobepaling. Het wordt alleen gedaan als er een goede reden voor is.</p>
    </div>
  )
}
