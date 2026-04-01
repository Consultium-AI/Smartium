export default function Sect06Dermatoscopie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Dermatoscopie: kijken naar kleur en structuur</h2>
      <p>
        Dermatoscopie helpt om huidafwijkingen beter te beoordelen. Het is een hulpmiddel bij het stellen van een
        diagnose. Ook zonder dermatoscoop kun je al veel leren door laesies goed te observeren.
      </p>
      <p>
        Een belangrijk inzicht is dat de diepte van het melanine in de huid bepaalt welke kleur een naevus aan het
        oppervlak heeft. De kleur die je ziet, hangt dus samen met de plek waar het pigment zich bevindt. Daarnaast
        kunnen veranderingen in de structuur van de epidermis een andere kleur geven. Verdikking van het stratum corneum
        en/of verbreding van de epidermis kan bijvoorbeeld een gelig aspect geven.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 3. Kleur en mogelijke associaties bij dermatoscopie</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kleur
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Betekenis
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">A: huidskleurig</td>
              <td className="px-4 py-3 align-top">Vaak passend bij bepaalde huidafwijkingen</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">B: rood</td>
              <td className="px-4 py-3 align-top">Kan passen bij vaatafwijkingen</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">C: geel</td>
              <td className="px-4 py-3 align-top">Kan passen bij geel gekleurde huidafwijkingen</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">D: bruin</td>
              <td className="px-4 py-3 align-top">Vaak passend bij gepigmenteerde laesies</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">E: grijs</td>
              <td className="px-4 py-3 align-top">Kan ook bij bepaalde gepigmenteerde afwijkingen voorkomen</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 4. Voorbeelden van dermatoscopische kleuren bij huidafwijkingen</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Huidafwijking
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Vaak passende kleur(en)
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Epidermale cyste</td>
              <td className="px-4 py-3 align-top">A</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Angioma senilis</td>
              <td className="px-4 py-3 align-top">B</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Naevus naevocellularis</td>
              <td className="px-4 py-3 align-top">A en D</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Granuloma teleangiectaticum</td>
              <td className="px-4 py-3 align-top">B</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Xanthelasma palpebrarum</td>
              <td className="px-4 py-3 align-top">C</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Lipoom</td>
              <td className="px-4 py-3 align-top">A</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Verruca seborrhoica</td>
              <td className="px-4 py-3 align-top">A, D en E</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Keloïd</td>
              <td className="px-4 py-3 align-top">A en B</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Belangrijk is dat kleur slechts een hulpmiddel is. Ook maligne huidafwijkingen kunnen deze kleuren hebben.
        Daarom moet je altijd ook naar andere kenmerken kijken.
      </p>
    </div>
  )
}
