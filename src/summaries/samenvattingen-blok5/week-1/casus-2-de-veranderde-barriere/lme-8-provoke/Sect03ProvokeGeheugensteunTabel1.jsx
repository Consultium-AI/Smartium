export default function Sect03ProvokeGeheugensteunTabel1() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">PROVOKE als geheugensteun</h2>
      <p>PROVOKE is een hulpmiddel om huidafwijkingen stap voor stap te beschrijven. De letters staan voor:</p>
      <p>Plaats – Rangschikking – Omvang – Vorm – Omtrek – Kleur – Efflorescentie</p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 1. PROVOKE in het kort</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Letter
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Betekenis
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Waar let je op?
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">P</td>
              <td className="px-4 py-3 align-top">Plaats</td>
              <td className="px-4 py-3 align-top">
                Waar zit de afwijking? Zijn er voorkeursplaatsen? Is het symmetrisch of asymmetrisch?
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">R</td>
              <td className="px-4 py-3 align-top">Rangschikking</td>
              <td className="px-4 py-3 align-top">
                Hoe liggen de afwijkingen ten opzichte van elkaar en hoe verspreiden ze zich over het lichaam?
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">O</td>
              <td className="px-4 py-3 align-top">Omvang</td>
              <td className="px-4 py-3 align-top">Hoe groot zijn de afwijkingen en hoeveel zijn het er?</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">V</td>
              <td className="px-4 py-3 align-top">Vorm</td>
              <td className="px-4 py-3 align-top">Welke vorm hebben de afwijkingen van boven en van opzij?</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">O</td>
              <td className="px-4 py-3 align-top">Omtrek</td>
              <td className="px-4 py-3 align-top">Is de begrenzing scherp, matig scherp of onscherp?</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">K</td>
              <td className="px-4 py-3 align-top">Kleur</td>
              <td className="px-4 py-3 align-top">Welke kleur hebben de afwijkingen?</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">E</td>
              <td className="px-4 py-3 align-top">Efflorescentie</td>
              <td className="px-4 py-3 align-top">Welk soort huidafwijking is het precies?</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        PROVOKE helpt je om een huidafwijking niet alleen te benoemen, maar ook volledig te beschrijven. In de
        spreekkamer gebruik je PROVOKE dus niet als los rijtje woordjes, maar als denkkader voor een volledige
        beschrijving.
      </p>
      <p>
        Een voorbeeld van een complete beschrijving kan zijn: “Op de linker neusvleugel een solitaire lenticulaire
        scherp begrensde ronde glanzende erythemateuze papel met opgeworpen rand.”
      </p>
    </div>
  )
}
