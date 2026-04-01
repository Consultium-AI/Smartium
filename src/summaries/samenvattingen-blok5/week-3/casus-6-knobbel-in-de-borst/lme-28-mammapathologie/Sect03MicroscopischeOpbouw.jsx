export default function Sect03MicroscopischeOpbouw() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Microscopische opbouw van de mamma</h2>
      <p>
        Microscopisch bestaat de mamma in wisselende verhouding uit vetweefsel, bindweefsel en klierweefsel. Die
        verhouding kan sterk variëren. Bij jonge vrouwen is er vaak relatief veel bindweefsel en klierweefsel, terwijl
        oudere vrouwen vaker meer vetweefsel en minder klierweefsel hebben.
      </p>
      <p>
        Bij vrouwen bestaat het klierweefsel uit lobuli en ducti. De lobuli vormen het secretoire deel van de borst;
        daar wordt borstvoeding gemaakt. De ducti zijn de afvoergangen. Tijdens lactatieveranderingen neemt de
        hoeveelheid klierweefsel toe.
      </p>
      <p>De borstklier is opgebouwd uit acinus-structuren. Een belangrijk kenmerk van benigne epitheel in zowel lobuli als ducti is dat er sprake is van twee cellagen:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Luminale cellen aan de binnenkant</li>
        <li>Myoepitheelcellen aan de buitenkant</li>
      </ul>
      <p>
        De luminale cellen in de lobuli hebben secretoire eigenschappen en produceren dus borstvoeding tijdens de
        lactatieperiode. De myoepitheelcellen hebben contractiele eigenschappen.
      </p>
      <p>
        Bij goedaardige afwijkingen in de mamma, maar ook bij carcinoma in situ, zijn myoepitheelcellen nog aanwezig. Bij
        mammacarcinoom zijn deze myoepitheelcellen niet aanwezig.
      </p>
      <p>
        Aandachtsvraag: Wat betekent het verschil tussen hyperplasie en hypertrofie?{'  '}
        Mini-antwoord: Bij hyperplasie neemt het aantal cellen toe; bij hypertrofie neemt de omvang van de cellen toe.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 2. Microscopen opbouw van normale mamma</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Structuur
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Beschrijving
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Lobuli</td>
              <td className="px-4 py-3 align-top">Secretoir deel van de borst</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Ducti</td>
              <td className="px-4 py-3 align-top">Afvoergangen</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Acini</td>
              <td className="px-4 py-3 align-top">Kleine klierunit binnen de lobuli</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Luminale cellen</td>
              <td className="px-4 py-3 align-top">Binnenlaag, secretie</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Myoepitheelcellen</td>
              <td className="px-4 py-3 align-top">Buitenlaag, contractiel</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Benigne / in situ</td>
              <td className="px-4 py-3 align-top">Myoepitheel aanwezig</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Invasief carcinoom</td>
              <td className="px-4 py-3 align-top">Myoepitheel afwezig</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Aan de ventrale zijde van de mamma zitten huid en de tepel. Direct achter de tepel zijn spiervezels aanwezig; de
        tepel is dus contractiel. Ook liggen daar grotere ducti.
      </p>
    </div>
  )
}
