export default function Sect05Anamnese() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Anamnese: waar moet je op letten?</h2>
      <p>
        De anamnese is erop gericht om tekenen van eindorgaanschade op te sporen. Denk vooral aan klachten passend bij:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>hersenbloeding of herseninfarct;</li>
        <li>hypertensieve encefalopathie;</li>
        <li>acuut coronair syndroom;</li>
        <li>acute aortadissectie of -ruptuur;</li>
        <li>acute hypertensieve nefropathie;</li>
        <li>hypertensieve retinopathie;</li>
        <li>acuut hartfalen of longoedeem.</li>
      </ul>

      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 1. Belangrijkste vormen van orgaanschade en bijpassende klachten</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Type orgaanschade</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Typische klachten</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Hersenbloeding of -infarct</td>
                <td className="px-4 py-3 align-top">Focale neurologische klachten, uitval</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Hypertensieve encefalopathie</td>
                <td className="px-4 py-3 align-top">Veranderd bewustzijn, insulten</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Acuut coronair syndroom</td>
                <td className="px-4 py-3 align-top">Pijn op de borst</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Aortadissectie of -ruptuur</td>
                <td className="px-4 py-3 align-top">Scheurende pijn</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Acute hypertensieve nefropathie</td>
                <td className="px-4 py-3 align-top">Geen specifieke klachten; vaak wel malaise bij acute microvasculaire schade</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Hypertensieve retinopathie</td>
                <td className="px-4 py-3 align-top">Visusklachten, vooral wazig zien</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Acuut hartfalen / longoedeem</td>
                <td className="px-4 py-3 align-top">Dyspneu</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>
        Bij asymptomatische patiënten met ernstige hypertensie is de kans op acute eindorgaanschade erg klein. Het ontbreken van pijn op de borst, acute kortademigheid en neurologische verschijnselen, inclusief hoofdpijn en visusvermindering, sluit een hypertensief spoedgeval vrijwel uit. Alleen hoofdpijn is dus vaak niet genoeg om aan een hypertensief spoedgeval te denken.
      </p>
    </div>
  )
}
