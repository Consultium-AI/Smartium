export default function Sect02WatIsEenIntoxicatie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">1. Wat is een intoxicatie?</h2>
      <p>
        Een <span className="font-semibold">intoxicatie</span> is een situatie waarin in het lichaam problemen ontstaan door een <span className="font-semibold">te grote hoeveelheid van een bepaalde lichaamsvreemde stof</span>. Het gaat dus om een vergiftiging door een middel dat in een te hoge hoeveelheid aanwezig is. Daarbij kun je denken aan een overdosis geneesmiddelen, maar ook aan andere stoffen die klachten veroorzaken als er veel van wordt ingenomen.
      </p>
      <p>Het verschil tussen een intoxicatie en andere reacties is belangrijk:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          bij een <span className="font-semibold">intoxicatie</span> is er sprake van klachten door een hoeveelheid die <span className="font-semibold">hoger is dan de therapeutische concentratie</span>;
        </li>
        <li>
          bij een <span className="font-semibold">bijwerking</span> kunnen klachten optreden <span className="font-semibold">bij therapeutische concentraties</span>;
        </li>
        <li>
          bij een <span className="font-semibold">allergie</span> ontstaan de klachten doordat na gebruik van een middel onterecht het <span className="font-semibold">immuunsysteem wordt geactiveerd</span>.
        </li>
      </ul>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 1. Verschil tussen intoxicatie, bijwerking en allergie</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Begrip</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Kern</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Belangrijk kenmerk</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Intoxicatie</td>
              <td className="px-4 py-3 align-top">Problemen door te veel van een lichaamsvreemde stof</td>
              <td className="px-4 py-3 align-top">Concentratie hoger dan therapeutisch</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Bijwerking</td>
              <td className="px-4 py-3 align-top">Ongewenste reactie op een middel</td>
              <td className="px-4 py-3 align-top">Kan optreden bij therapeutische concentraties</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Allergie</td>
              <td className="px-4 py-3 align-top">Reactie door activatie van het immuunsysteem</td>
              <td className="px-4 py-3 align-top">Niet het gevolg van &ldquo;te veel&rdquo;, maar van een allergische reactie</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35 text-sm text-amber-900 dark:text-amber-100 space-y-2">
        <p className="m-0">
          <span className="font-semibold">Aandachtsvraag:</span>
          {' '}
          hoe onderscheid je een intoxicatie van een bijwerking?
        </p>
        <p className="m-0">
          <span className="font-semibold">Mini-antwoord:</span>
          {' '}
          een intoxicatie hoort bij een <span className="font-semibold">te hoge concentratie</span>, terwijl een bijwerking ook kan optreden als de dosering nog <span className="font-semibold">therapeutisch</span> is.
        </p>
      </div>
      <p>
        Bij intoxicaties kun je in de praktijk veel verschillende situaties zien. Denk bijvoorbeeld aan iemand die per ongeluk te veel van een middel inneemt, of aan iemand die bewust een grote hoeveelheid neemt. Ook iets simpels als veel koffie drinken kan klachten geven.
      </p>
    </div>
  )
}
