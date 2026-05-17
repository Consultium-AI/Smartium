import FormulaBlock from '../FormulaBlock'

export default function Sect03KansOddsRiskRatio() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Kans, odds, risk ratio en odds ratio
      </h2>
      <p>
        Om logistische regressie goed te begrijpen, moet je eerst weten wat{' '}
        <strong className="text-slate-900 dark:text-slate-100">kans</strong> en{' '}
        <strong className="text-slate-900 dark:text-slate-100">odds</strong> betekenen.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Kans</h3>
      <p>
        De <strong className="text-slate-900 dark:text-slate-100">kans</strong> is het aandeel mensen bij wie de
        gebeurtenis voorkomt.
      </p>
      <FormulaBlock>
        {String.raw`\[
P(\text{GORZ})=\frac{\text{aantal personen met GORZ}}{\text{totaal aantal personen}}
\]`}
      </FormulaBlock>
      <p>Als in een groep van 420 personen 138 GORZ hebben, dan is de kans:</p>
      <FormulaBlock>
        {String.raw`\[
\frac{138}{420}\approx 0{,}33
\]`}
      </FormulaBlock>
      <p>Dat betekent dat ongeveer een derde van de groep GORZ heeft.</p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Odds</h3>
      <p>
        De <strong className="text-slate-900 dark:text-slate-100">odds</strong> is de verhouding tussen de kans dat de
        gebeurtenis <strong className="text-slate-900 dark:text-slate-100">wel</strong> optreedt en de kans dat de
        gebeurtenis <strong className="text-slate-900 dark:text-slate-100">niet</strong> optreedt.
      </p>
      <FormulaBlock>
        {String.raw`\[
\text{odds}=\frac{p}{1-p}
\]`}
      </FormulaBlock>
      <p>Bij een kans van 0,33 zijn de odds:</p>
      <FormulaBlock>
        {String.raw`\[
\frac{0{,}33}{0{,}67}\approx 0{,}49
\]`}
      </FormulaBlock>
      <p>
        Dat kun je ook rechtstreeks uit de aantallen berekenen: 138 met GORZ en 282 zonder GORZ geeft{' '}
        <span className="font-mono text-[0.95em]">{'\\(138/282 \\approx 0{,}49\\).'}</span>
      </p>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35 space-y-3">
        <p className="text-slate-800 dark:text-amber-100 m-0">
          Aandachtsvraag: wanneer zijn odds en kans ongeveer gelijk?
          <br />
          <strong className="text-slate-900 dark:text-amber-50">Mini-antwoord:</strong> vooral bij kleine kansen; dan
          geldt ongeveer{' '}
          <span className="font-mono text-[0.95em]">{'\\( \\text{odds} \\approx \\text{kans}\\)'}</span>.
        </p>
      </div>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Overzicht van maten</h3>
      <div>
        <p className="font-semibold text-slate-900 dark:text-slate-100">
          <strong>Tabel 1. Belangrijke risicomaten</strong>
        </p>
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Maat
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Formule
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Betekenis
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top font-mono text-xs sm:text-sm">
                  Kans{' '}
                  {'\\(p\\)'}
                </td>
                <td className="px-4 py-3 align-top font-mono text-xs sm:text-sm">aantal gebeurtenissen / totaal</td>
                <td className="px-4 py-3 align-top">directe waarschijnlijkheid, tussen 0 en 1</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Odds</td>
                <td className="px-4 py-3 align-top font-mono text-xs sm:text-sm">{'\\(p/(1-p)\\)'}</td>
                <td className="px-4 py-3 align-top">verhouding wel versus niet</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Risk ratio (RR)</td>
                <td className="px-4 py-3 align-top font-mono text-xs sm:text-sm">{'\\((a/n_1)/(c/n_0)\\)'}</td>
                <td className="px-4 py-3 align-top">verhouding van kansen tussen twee groepen</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Odds ratio (OR)</td>
                <td className="px-4 py-3 align-top font-mono text-xs sm:text-sm">{'\\((a/b)/(c/d)=ad/bc\\)'}</td>
                <td className="px-4 py-3 align-top">verhouding van odds tussen twee groepen</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Risk ratio en odds ratio</h3>
      <p>
        Als je twee groepen vergelijkt, bijvoorbeeld rokers en niet-rokers, kun je zowel een{' '}
        <strong className="text-slate-900 dark:text-slate-100">risk ratio</strong> als een{' '}
        <strong className="text-slate-900 dark:text-slate-100">odds ratio</strong> berekenen.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          De <strong className="text-slate-900 dark:text-slate-100">risk ratio (RR)</strong> vergelijkt de kansen.
        </li>
        <li>
          De <strong className="text-slate-900 dark:text-slate-100">odds ratio (OR)</strong> vergelijkt de odds.
        </li>
      </ul>
      <p>In een voorbeeld met GORZ:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>rokers: 42 met GORZ en 42 zonder GORZ</li>
        <li>niet-rokers: 96 met GORZ en 240 zonder GORZ</li>
      </ul>
      <p>Dan is:</p>
      <FormulaBlock>
        {String.raw`\[
RR=\frac{0{,}50}{0{,}29}=1{,}72
\]`}
      </FormulaBlock>
      <p>en</p>
      <FormulaBlock>
        {String.raw`\[
OR=\frac{42/42}{96/240}=2{,}50
\]`}
      </FormulaBlock>
      <p>Dat betekent dat de odds op GORZ bij rokers 2,5 keer zo groot zijn als bij niet-rokers.</p>
      <p>
        <strong className="text-slate-900 dark:text-slate-100">Interpretatie van RR en OR</strong>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-mono text-[0.95em]">{'\\(RR\\)'}</span> of{' '}
          <span className="font-mono text-[0.95em]">{'\\(OR = 1\\)'}</span>: geen verband
        </li>
        <li>
          <span className="font-mono text-[0.95em]">{'\\(RR\\)'}</span> of{' '}
          <span className="font-mono text-[0.95em]">{'\\(OR > 1\\)'}</span>: hogere waarde in de blootgestelde groep
        </li>
        <li>
          <span className="font-mono text-[0.95em]">{'\\(RR\\)'}</span> of{' '}
          <span className="font-mono text-[0.95em]">{'\\(OR < 1\\)'}</span>: lagere waarde in de blootgestelde groep
        </li>
      </ul>
      <p>
        Belangrijk is dat <strong className="text-slate-900 dark:text-slate-100">RR intuïtiever is dan OR</strong>, omdat
        RR direct over kansen gaat. OR lijkt vaak sterker van effect, vooral wanneer de uitkomst vaker voorkomt.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Wanneer lijken RR en OR op elkaar?</h3>
      <p>
        Bij <strong className="text-slate-900 dark:text-slate-100">zeldzame uitkomsten</strong> liggen kans en odds dicht bij
        elkaar. Dan geldt ongeveer:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-mono text-[0.95em]">{'odds \\(\\approx\\) kans'}</span>
        </li>
        <li>
          <span className="font-mono text-[0.95em]">{'OR \\(\\approx\\) RR'}</span>
        </li>
      </ul>
      <p>
        Bij frequentere uitkomsten lopen RR en OR juist verder uit elkaar. Dan komt de OR vaak verder van 1 te liggen dan
        het relatieve risico.
      </p>
    </div>
  )
}
