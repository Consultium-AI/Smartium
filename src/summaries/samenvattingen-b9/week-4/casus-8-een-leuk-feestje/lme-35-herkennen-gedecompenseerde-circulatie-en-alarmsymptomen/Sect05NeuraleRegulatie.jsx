export default function Sect05NeuraleRegulatie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Neurale regulatie: sympathicus en parasympathicus</h2>
      <p>
        Het centrale zenuwstelsel bepaalt mede de metabole toestand van het lichaam en van afzonderlijke organen. Daarbij spelen sympathicus en parasympathicus tegengestelde rollen.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 2. Effecten van sympathische en parasympathische activatie</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Sympathicus</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Parasympathicus</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Tachycardie</td>
              <td className="px-4 py-3 align-top">Bradycardie</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Toename cardiale contractiliteit</td>
              <td className="px-4 py-3 align-top">Afname cardiale contractiliteit</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Arteriële en veneuze vasoconstrictie</td>
              <td className="px-4 py-3 align-top">Langzame ademhaling</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Snelle ademhaling</td>
              <td className="px-4 py-3 align-top">Opslag van glucose in glycogeen</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Glycolyse en vrijmaken van glucose</td>
              <td className="px-4 py-3 align-top">Opbouw en opslag van voedingsstoffen</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">{'"Fight or flight"'}</td>
              <td className="px-4 py-3 align-top">{'"Rest and digest"'}</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Verhoogde alertheid</td>
              <td className="px-4 py-3 align-top">Slaperigheid en ontspanning</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Sympathische activatie verloopt via zenuwbanen naast de thoracale wervelkolom. Het systeem bereidt het lichaam voor op lichamelijke inspanning: meer alertheid, meer spiercontractie, meer doorbloeding van de juiste organen en een hogere cardiac output.
      </p>
      <p>
        Parasympathische activatie verloopt via de <span className="font-semibold">nervus vagus</span>. Dit past bij rust, herstel en vertering. Daarbij neemt de hartfrequentie af, is de ademhaling rustiger en worden voedingsstoffen opgeslagen.
      </p>
    </div>
  )
}
