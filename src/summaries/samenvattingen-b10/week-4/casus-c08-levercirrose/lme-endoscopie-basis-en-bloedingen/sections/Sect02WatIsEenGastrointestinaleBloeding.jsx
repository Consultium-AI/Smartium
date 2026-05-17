export default function Sect02WatIsEenGastrointestinaleBloeding() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Wat is een gastro-intestinale bloeding?</h2>
      <p>
        Een bloeding uit de tractus digestivus is een veelvoorkomende en potentieel levensbedreigende acute presentatie.
        De bloeding ontstaat wanneer er bloedverlies optreedt vanuit het lumen van het maag-darmkanaal. De presentatie
        hangt af van de plaats van de bloeding en van hoe snel het bloed door de darm passeert.
      </p>
      <p>Er wordt meestal onderscheid gemaakt tussen een hoge en een lage tractus digestivusbloeding:</p>
      <p>
        Hoge tractus digestivusbloeding: de bron ligt proximaal van het ligament van Treitz. Hierbij gaat het vooral om
        slokdarm, maag en duodenum.
      </p>
      <p>
        Lage tractus digestivusbloeding: de bron ligt distaal van het ligament van Treitz. Hierbij gaat het meestal om
        colon, rectum en terminale ileum.
      </p>
      <p>
        Bij bloedingen in de dunne darm wordt soms een enteroscopie gedaan. Daarbij kan een endoscoop met overtube
        worden gebruikt; op zowel endoscoop als overtube zit een ballon die kan worden opgeblazen. Dat helpt om dieper
        in de darm te komen.
      </p>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Tabel 1. Indeling van gastro-intestinale bloedingen
        </h3>
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Indeling
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Locatie bron
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Meest gebruikte diagnostiek
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Hoge tractus bloeding</td>
                <td className="px-4 py-3 align-top">Slokdarm, maag, duodenum</td>
                <td className="px-4 py-3 align-top">Gastroscopie</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Lage tractus bloeding</td>
                <td className="px-4 py-3 align-top">Colon, rectum, terminale ileum</td>
                <td className="px-4 py-3 align-top">Colonoscopie</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Dunne darmbloeding</td>
                <td className="px-4 py-3 align-top">Dunne darm</td>
                <td className="px-4 py-3 align-top">Enteroscopie</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>
        Aandacht-vraagje: Waarom kan hematochezie soms toch passen bij een hoge bloeding?&nbsp;&nbsp;Mini-antwoord: Omdat bij
        een massale hoge bloeding het bloed zo snel door de darm kan passeren dat het nog helder rood per anum
        verschijnt.
      </p>
    </div>
  )
}
