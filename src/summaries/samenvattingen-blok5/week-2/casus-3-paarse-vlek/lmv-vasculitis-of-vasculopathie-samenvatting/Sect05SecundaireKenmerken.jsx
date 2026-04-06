export default function Sect05SecundaireKenmerken() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Secundaire kenmerken</h2>
      <p>
        Naast de primaire kenmerken noemt de module twee secundaire kenmerken. Deze kunnen heel goed aanwezig zijn, maar
        ze zijn minder specifiek. Ze kunnen dus ook optreden in een andere setting.
      </p>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">1. Leukocytoclasie</h3>
        <p>
          Dit is het uiteenvallen van leukocyten, meestal neutrofielen. Histologisch zie je dan kleine donkere kernresten,
          ook wel “nuclear dust” genoemd.
        </p>
        <p>
          Dit is een bekend kenmerk bij leukocytoclastische vasculitis, maar de module maakt duidelijk dat het als
          secundair kenmerk moet worden beschouwd. Je moet dus oppassen dat je hier niet te snel te veel waarde aan geeft
          zonder de primaire vaatschade goed te beoordelen.
        </p>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">2. Erytrocytenextravasatie</h3>
        <p>
          Dit betekent dat rode bloedcellen buiten het bloedvat terecht zijn gekomen. Dat zie je als kleine
          bloeduitstortingen in het weefsel.
        </p>
        <p>Ook dit kan passen bij vaatschade, maar is op zichzelf niet genoeg om primaire vasculitis vast te stellen.</p>
      </div>

      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <caption className="px-4 py-3 text-left font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
            Tabel 2. Secundaire kenmerken
          </caption>
          <thead className="bg-slate-100 dark:bg-slate-800/80">
            <tr>
              <th className="px-4 py-2 font-semibold text-slate-900 dark:text-slate-100">Secundair kenmerk</th>
              <th className="px-4 py-2 font-semibold text-slate-900 dark:text-slate-100">Betekenis</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr>
              <td className="px-4 py-2 align-top">Leukocytoclasie</td>
              <td className="px-4 py-2">Afbraak van leukocyten, vooral neutrofielen</td>
            </tr>
            <tr>
              <td className="px-4 py-2 align-top">Erytrocytenextravasatie</td>
              <td className="px-4 py-2">Rode bloedcellen liggen buiten het vat</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Waarom zijn secundaire kenmerken alleen niet genoeg?</h3>
      <p>Dit is een van de belangrijkste punten van de module. Secundaire kenmerken zijn ondersteunend, maar niet beslissend.</p>
      <p>
        Met andere woorden: als je alleen leukocytoclasie en erytrocytenextravasatie ziet, weet je nog niet zeker of het
        om een primaire vasculitis gaat. Je moet altijd zoeken naar de sterkere, primaire tekenen van echte schade aan de
        vaatwand.
      </p>
    </div>
  )
}
