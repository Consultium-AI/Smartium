export default function Sect04ChirurgischeStressresponsEnTabel2() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">De chirurgische stressrespons</h2>
      <p>
        Bij een operatie ontstaan <strong>pijnsignalen</strong> en <strong>inflammatie</strong>. Deze prikkels leiden tot de chirurgische stressrespons. Daarbij worden verschillende reacties in het lichaam geactiveerd.
      </p>
      <p>Belangrijke onderdelen zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>activatie van het sympathisch zenuwstelsel</strong> met afgifte van <strong>adrenaline</strong>;
        </li>
        <li>
          afgifte van <strong>cortisol</strong>, <strong>groeihormoon</strong> en <strong>vasopressine</strong>;
        </li>
        <li>
          <strong>immuunactivatie</strong>.
        </li>
      </ul>
      <p>
        Deze reacties hebben vervolgens meerdere gevolgen in het lichaam. Het is handig om dit als volgt te onthouden: de operatie zet het lichaam in een soort noodstand.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 2. Gevolgen van de chirurgische stressrespons</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
            <tr>
              <th className="px-4 py-3 font-semibold">Stressreactie</th>
              <th className="px-4 py-3 font-semibold">Gevolg</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Activatie sympathisch zenuwstelsel, adrenaline</td>
              <td className="px-4 py-3 align-top">Zout- en waterretentie</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Afgifte van cortisol, groeihormoon en vasopressine</td>
              <td className="px-4 py-3 align-top">Verhoogde stofwisseling</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Immuunactivatie</td>
              <td className="px-4 py-3 align-top">Veranderde immuunmodulatie</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Verhoogde stofwisseling</td>
              <td className="px-4 py-3 align-top">Verhoogde cardiorespiratoire belasting</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Veranderde energiehuishouding</td>
              <td className="px-4 py-3 align-top">Verandering in energieverbruik</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Stressrespons in het algemeen</td>
              <td className="px-4 py-3 align-top">Eiwit- en spierafbraak</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        De kern is dus dat de operatie niet alleen lokaal weefselschade geeft, maar ook een brede lichamelijke reactie veroorzaakt. Daardoor kunnen onder andere vochtretentie, verhoogde belasting van hart en longen, en afbraak van spier- en eiwitmassa optreden.
      </p>
    </div>
  )
}
