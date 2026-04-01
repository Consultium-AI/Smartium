export default function Sect13WelkeRegressieWanneer() {
  return (
    <div className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Welke regressie gebruik je wanneer?</h2>
      <p>
        Welke onafhankelijke variabelen je opneemt in een regressiemodel hangt af van je onderzoeksvraag. In de medische context kun je grofweg drie soorten onderzoek onderscheiden:
      </p>

      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 3. Onderzoeksvraag en gebruik van lineaire regressie</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Type onderzoek</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Doel</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Kenmerk van de regressie</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Beschrijvend onderzoek</td>
                <td className="px-4 py-3 align-top">Patronen en verbanden samenvatten</td>
                <td className="px-4 py-3 align-top">Vaak met een of meerdere variabelen om verschillen zichtbaar te maken</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Etiologisch onderzoek</td>
                <td className="px-4 py-3 align-top">Onderzoeken of er een causaal verband is</td>
                <td className="px-4 py-3 align-top">Confounders corrigeren door relevante variabelen in het model op te nemen</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Predictief onderzoek</td>
                <td className="px-4 py-3 align-top">Uitkomst zo nauwkeurig mogelijk voorspellen</td>
                <td className="px-4 py-3 align-top">Predictoren kiezen op basis van voorspellende waarde; confounding is hierbij niet het hoofddoel</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Beschrijvend onderzoek</h3>
        <p>
          Hier ligt de nadruk op het samenvatten van patronen en verbanden in de data, zonder expliciete causale of voorspellende ambitie. Je kunt bijvoorbeeld onderzoeken hoe bloeddruk gemiddeld verschilt met leeftijd en eventueel geslacht toevoegen om verschillen tussen mannen en vrouwen zichtbaar te maken.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Etiologisch onderzoek</h3>
        <p>
          Bij etiologisch onderzoek staat de vraag centraal of er een causaal verband is tussen een specifieke variabele en de uitkomst. Een voorbeeld is de vraag of een hogere BMI een hogere bloeddruk veroorzaakt.
        </p>
        <p>
          Hier is confounding heel belangrijk. Daarom neem je vaak meerdere relevante variabelen op, zodat je het effect van de variabele van interesse kunt schatten gecorrigeerd voor andere factoren. Mogelijke confounders baseer je op inhoudelijke en klinische kennis.
        </p>
        <p>Voorbeelden van mogelijke confounders zijn:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>geslacht;</li>
          <li>roken;</li>
          <li>cholesterol;</li>
          <li>leeftijd.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Predictief onderzoek</h3>
        <p>
          Bij predictief onderzoek wil je de uitkomst niet causaal verklaren, maar zo goed mogelijk voorspellen. Dan kies je voorspellers op basis van hun bijdrage aan de voorspelprestaties van het model. Het aantal variabelen kan klein of juist groot zijn, afhankelijk van de beschikbare data en het risico op overfitting.
        </p>
        <p>Bij predictie is het tegengaan van confounding geen hoofddoel.</p>
      </section>
    </div>
  )
}
