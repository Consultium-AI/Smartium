export default function Sect03SterfteEnLevensverwachting() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Sterfte en levensverwachting</h2>
      <p>
        Sterfte is een belangrijke maat voor volksgezondheid. Het gaat om het aantal sterfgevallen in een populatie,
        soms uitgesplitst naar doodsoorzaak. In de volksgezondheid wordt sterfte vaak samengevat in de
        levensverwachting.
      </p>
      <p>
        Levensverwachting bij geboorte betekent: het aantal jaren dat pasgeborenen gemiddeld kunnen verwachten te leven,
        als de sterftecijfers van dat jaar constant zouden blijven. Dat is dus een modelmatige schatting en geen
        letterlijk voorspelde leeftijd waarop ieder kind zal overlijden.
      </p>
      <p>
        Om levensverwachting te berekenen, wordt gebruikgemaakt van een overlevingstafel. Daarin staan per
        leeftijdsinterval verschillende grootheden.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 2. Begrippen uit de overlevingstafel</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Symbool
              </th>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Betekenis
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top font-mono font-semibold text-slate-900 dark:text-slate-100">q(x)</td>
              <td className="px-3 py-3 align-top">
                De kans om te overlijden in het leeftijdsinterval dat begint bij leeftijd x
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top font-mono font-semibold text-slate-900 dark:text-slate-100">l(x)</td>
              <td className="px-3 py-3 align-top">Het aantal personen dat aan het begin van dat leeftijdsinterval nog in leven is</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top font-mono font-semibold text-slate-900 dark:text-slate-100">d(x)</td>
              <td className="px-3 py-3 align-top">Het aantal personen dat in dat leeftijdsinterval overlijdt</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top font-mono font-semibold text-slate-900 dark:text-slate-100">e(x)</td>
              <td className="px-3 py-3 align-top">De levensverwachting op leeftijd x</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        De tabel laat zien dat het aantal personen dat nog leeft, van boven naar beneden daalt. Dat komt door sterfte.
        De berekening van het aantal geleefde jaren per interval gebeurt met de gedachte dat mensen gemiddeld halverwege
        het interval overlijden. Daarom wordt per leeftijdsinterval gerekend met:
      </p>
      <p className="pl-4 border-l-2 border-cyan-500/60 dark:border-cyan-400/50">
        duur van het interval × gemiddeld aantal personen dat leeft in dat interval
      </p>
      <p>
        Aandachtspunt:  Wat betekent q(x)?  Dat is de kans dat iemand binnen het betreffende leeftijdsinterval overlijdt.
      </p>
      <p>
        Een voorbeeld maakt dit duidelijk. In de tabel voor Nederlandse mannen uit 2012 is de levensverwachting bij
        geboorte ongeveer 79,14 jaar. Voor een man van 65 jaar is de levensverwachting nog 18,27 jaar. Dat betekent dus
        niet dat een pasgeboren jongen en een 65-jarige man met dezelfde levensverwachting te maken hebben; het gaat om
        verschillende startleeftijden en verschillende resterende jaren.
      </p>
      <p>
        Aandachtspunt:  Hoe kan het dat een 80-jarige nog een levensverwachting van 7,95 jaar heeft, terwijl de
        levensverwachting bij geboorte 79,14 jaar is?  Omdat levensverwachting bij geboorte gebaseerd is op de
        sterftekansen van dat ene jaar, terwijl een 80-jarige al een heel leven aan eerdere sterftekansen achter de rug
        heeft.
      </p>
      <p>
        Belangrijk is dus dat levensverwachting bij geboorte een periode-indicator is. Als sterftekansen in de toekomst
        veranderen, kan de werkelijke levensduur van een geboortecohort hoger of lager uitvallen.
      </p>
    </div>
  )
}
