export default function Sect04RisicofactorenDegeneratiefAAA() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Risicofactoren voor een degeneratief AAA</h2>
      <p>
        Het degeneratieve aneurysma is het meest voorkomende aneurysma van de aorta abdominalis. Hierbij spelen chronische inflammatie, atherosclerose, roken en veroudering een belangrijke rol. Deze factoren zorgen voor afbraak van elastine en collageen in de media, waardoor de aortawand zijn elasticiteit en mechanische sterkte verliest.
      </p>

      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 2. Risicofactoren en niet-risicofactoren</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Factor</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Oordeel</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Toelichting</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">Roken</td>
                <td className="px-4 py-3">Risicofactor</td>
                <td className="px-4 py-3">Belangrijkste risicofactor. Zowel huidige als voormalige rokers hebben een sterk verhoogd risico. Er is een duidelijke dosis-responsrelatie.</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">Hypertensie</td>
                <td className="px-4 py-3">Risicofactor</td>
                <td className="px-4 py-3">Draagt bij aan progressie en ruptuurrisico, al is de rol in initiatie minder sterk dan bij roken.</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">Hyperlipidemie</td>
                <td className="px-4 py-3">Risicofactor</td>
                <td className="px-4 py-3">Geassocieerd via atherosclerotische processen.</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">Mannelijk geslacht</td>
                <td className="px-4 py-3">Risicofactor</td>
                <td className="px-4 py-3">Mannen hebben een 4–6x hogere prevalentie dan vrouwen.</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">Leeftijd</td>
                <td className="px-4 py-3">Risicofactor</td>
                <td className="px-4 py-3">Het risico neemt significant toe vanaf ≥ 65 jaar door cumulatieve degeneratie van de aortawand.</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">Positieve familieanamnese</td>
                <td className="px-4 py-3">Risicofactor</td>
                <td className="px-4 py-3">Eerstegraadsverwanten met AAA verhogen het risico 2–4x; dit wijst op genetische predispositie.</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">Diabetes mellitus</td>
                <td className="px-4 py-3">Geen risicofactor</td>
                <td className="px-4 py-3">Diabetes Mellitus is GEEN risicofactor voor het ontstaan van een aneurysma. Bij diabetes wordt zelfs gezien dat AAA minder vaak ontstaat en langzamer groeit.</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">Alcohol</td>
                <td className="px-4 py-3">Geen risicofactor</td>
                <td className="px-4 py-3">Alcohol is GEEN risicofactor voor het ontstaan van een aneurysma.</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">Vrouwelijk geslacht</td>
                <td className="px-4 py-3">Geen risicofactor voor ontstaan</td>
                <td className="px-4 py-3">Het vrouwelijke geslacht is GEEN risicofactor voor het ontstaan van een aneurysma. Wel hebben vrouwen bij aanwezigheid een hoger ruptuurrisico.</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">De dokter / iatrogeen</td>
                <td className="px-4 py-3">Geen risicofactor voor ontstaan van een aneurysma</td>
                <td className="px-4 py-3">Iatrogeen is GEEN risicofactor voor het ontstaan van een aneurysma. Het kan wel een vals aneurysma veroorzaken.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          Aandachtsvraag: Welke risicofactor springt er het meest uit?  Mini-antwoord: Roken. Dat is de belangrijkste modificeerbare risicofactor voor AAA.
        </p>
      </div>
    </div>
  )
}
