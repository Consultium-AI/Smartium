export default function Sect10Voeding() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Voeding</h2>
      <p>
        Voeding speelt een belangrijke rol bij het voorkomen van kanker. Een gezond en gevarieerd voedingspatroon kan het
        risico op bepaalde kankersoorten verminderen. Gezonde voeding betekent onder andere:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>veel groenten en fruit;</li>
        <li>volkorenproducten;</li>
        <li>noten en peulvruchten;</li>
        <li>zo min mogelijk rood en bewerkt vlees;</li>
        <li>zo min mogelijk suikerrijke dranken;</li>
        <li>zo min mogelijk sterk bewerkte producten.</li>
      </ul>
      <p>
        In een pooled analyse bleek een gezonder voedingspatroon samen te hangen met een 18% lagere sterfte aan kanker,
        met een hazard ratio van 0,82.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 2. Gezonde voeding en de belangrijkste aandachtspunten
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Advies
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Uitleg
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Eet vooral</td>
              <td className="px-4 py-3 align-top">Volkorenproducten, groenten, fruit en peulvruchten</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Beperk</td>
              <td className="px-4 py-3 align-top">Fastfood en ander (ultra)bewerkt voedsel</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Beperk ook</td>
              <td className="px-4 py-3 align-top">Rood en bewerkt vlees</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Drink liever niet</td>
              <td className="px-4 py-3 align-top">Dranken met toegevoegde suikers</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Suppletie</td>
              <td className="px-4 py-3 align-top">Niet gebruiken ter preventie van kanker</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Over vlees geldt dat je volgens het advies niet meer dan 500 gram vlees per week zou moeten eten, waarvan maximaal
        300 gram rood vlees. Vlees is niet noodzakelijk; het kan ook vervangen worden door andere producten.
      </p>
      <p>De Gezondheidsraad geeft aan dat:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          een hoge consumptie van rood vlees, ongeveer 100 tot 120 gram per dag, samenhangt met een 10% hoger risico op
          darmkanker en 20% hoger risico op longkanker;
        </li>
        <li>
          een hoge consumptie van bewerkt vlees, meer dan 50 gram per dag, samenhangt met een 15% hoger risico op
          darmkanker;
        </li>
        <li>
          bij minder dan 50 gram per dag onbewerkt rood vlees het onwaarschijnlijk is dat het risico op darmkanker verhoogd
          is.
        </li>
      </ul>
    </div>
  )
}
