export default function Sect11Risicostratificatie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Risicostratificatie: waarom en hoe?</h2>
      <p>
        Niet elke patiënt met AF heeft hetzelfde risico op een beroerte, en antistolling geeft altijd ook bloedingsrisico. Daarom moet je een balans zoeken.
      </p>
      <p>
        Het risico op trombo-embolie wordt ingeschat met de{' '}
        <span className="font-semibold">CHA2DS2-VASc-score</span>. Dit is de gouden standaard in de richtlijnen.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Tabel 5. CHA2DS2-VASc-score</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Onderdeel</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Punten</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Congestive heart failure / linkerventrikeldysfunctie</td>
              <td className="px-4 py-3 align-top">1</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Hypertension</td>
              <td className="px-4 py-3 align-top">1</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Age ≥ 75 jaar</td>
              <td className="px-4 py-3 align-top">2</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Diabetes mellitus</td>
              <td className="px-4 py-3 align-top">1</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Stroke/TIA/thrombo-embolie in voorgeschiedenis</td>
              <td className="px-4 py-3 align-top">2</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Vascular disease</td>
              <td className="px-4 py-3 align-top">1</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Age 65–74 jaar</td>
              <td className="px-4 py-3 align-top">1</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Sex category vrouw</td>
              <td className="px-4 py-3 align-top">1, maar minder prominent meegewogen</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Belangrijk is dat het vrouwelijk geslacht vooral het risico versterkt{' '}
        <span className="font-semibold">als er ook andere risicofactoren zijn</span>. De behandelgrens verschuift dus met de totale score. In de praktijk geldt:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-semibold">score 0</span>: zeer laag risico, geen antistolling;
        </li>
        <li>
          <span className="font-semibold">score 1</span>: overweeg orale antistolling;
        </li>
        <li>
          <span className="font-semibold">score {'>'} 2</span>: antistolling is geïndiceerd.
        </li>
      </ul>
      <p>
        Voor het bloedingsrisico gebruik je de{' '}
        <span className="font-semibold">HAS-BLED-score</span>. Een hoge score van{' '}
        <span className="font-semibold">≥3</span> betekent niet dat je geen behandeling geeft, maar wel dat je voorzichtig moet zijn en{' '}
        <span className="font-semibold">reversibele factoren</span> moet corrigeren.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Tabel 6. HAS-BLED: aandachtspunten</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Factor</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Betekenis</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Hypertension</td>
              <td className="px-4 py-3 align-top">Vooral ongecontroleerde bloeddruk {'>'}160 mmHg</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Abnormal renal/liver function</td>
              <td className="px-4 py-3 align-top">Nier- of leverfunctiestoornis</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Stroke history</td>
              <td className="px-4 py-3 align-top">Eerdere beroerte</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Bleeding history</td>
              <td className="px-4 py-3 align-top">Eerdere bloedingsproblemen</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Labile INR</td>
              <td className="px-4 py-3 align-top">Instabiele INR bij vitamine-K-antagonisten</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Elderly</td>
              <td className="px-4 py-3 align-top">Leeftijd {'>'}65 jaar</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Drugs/alcohol</td>
              <td className="px-4 py-3 align-top">NSAID\u2019s of overmatig alcoholgebruik</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Modificeerbare factoren zijn vooral:{' '}
        <span className="font-semibold">bloeddruk goed instellen</span>,{' '}
        <span className="font-semibold">alcohol beperken/stoppen</span>, en voorzichtig zijn met{' '}
        <span className="font-semibold">NSAID\u2019s</span>.
      </p>
    </div>
  )
}
