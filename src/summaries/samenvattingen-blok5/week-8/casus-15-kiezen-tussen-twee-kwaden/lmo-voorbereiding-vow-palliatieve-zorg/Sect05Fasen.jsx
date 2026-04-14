export default function Sect05Fasen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">De fasen van palliatieve zorg</h2>
      <p>
        De e-learning laat zien dat palliatieve zorg niet uit één vaste periode bestaat, maar meebeweegt met het
        ziekteverloop. Je kunt het in grote lijnen zo zien:
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 1. Fasen van palliatieve zorg in grote lijnen</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600/80">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/70">
              <th className="px-3 py-2 text-left font-semibold text-slate-900 dark:text-slate-100">Fase</th>
              <th className="px-3 py-2 text-left font-semibold text-slate-900 dark:text-slate-100">Kenmerk</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600/80">
            <tr>
              <td className="px-3 py-2 align-top">Vroege palliatieve fase</td>
              <td className="px-3 py-2 align-top">Palliatieve zorg start terwijl ziektegerichte behandeling nog doorloopt</td>
            </tr>
            <tr>
              <td className="px-3 py-2 align-top">Voortschrijdende palliatieve fase</td>
              <td className="px-3 py-2 align-top">Symptoomgerichte zorg krijgt steeds meer gewicht</td>
            </tr>
            <tr>
              <td className="px-3 py-2 align-top">Palliatieve zorg in de stervensfase</td>
              <td className="px-3 py-2 align-top">De zorg richt zich vooral op comfort, rust en begeleiding in de laatste fase</td>
            </tr>
            <tr>
              <td className="px-3 py-2 align-top">Nazorg</td>
              <td className="px-3 py-2 align-top">Ook na het overlijden blijft er aandacht voor de naasten</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Belangrijk is dat deze fasen niet altijd scherp van elkaar gescheiden zijn. De focus van de zorg kan verschuiven, en
        ook de betrokken zorgverleners kunnen veranderen. Daarom is maatwerk essentieel.
      </p>
      <p>
        Het markeren van de palliatieve fase helpt om met patiënt en naasten te bespreken wat belangrijk is. Soms verandert
        er weinig in het concrete beleid, maar ontstaat er wel meer ruimte om na te denken over wensen, grenzen,
        behandeldoelen en kwaliteit van leven.
      </p>

      <div className="rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50/80 dark:bg-slate-800/50 p-4 space-y-3">
        <p>Aandacht-vraag:Moet je altijd letterlijk tegen een patiënt zeggen dat “de palliatieve fase” is begonnen?</p>
        <p>
          Mini-antwoord:Niet per se. Wel is het belangrijk dat jij als arts die fase herkent, zodat je de zorg goed kunt
          afstemmen op wat de patiënt nodig heeft en belangrijk vindt.
        </p>
      </div>
    </div>
  )
}
