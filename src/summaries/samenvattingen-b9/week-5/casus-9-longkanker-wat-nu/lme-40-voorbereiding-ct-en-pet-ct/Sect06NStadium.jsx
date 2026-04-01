export default function Sect06NStadium() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Het N-stadium: regionale lymfekliermetastasen</h2>
      <p>
        Het <span className="font-semibold">N-stadium</span> beschrijft de betrokkenheid van <span className="font-semibold">regionale lymfeklieren</span>. Hier is vooral het onderscheid tussen <span className="font-semibold">ipsilateraal</span> en <span className="font-semibold">contralateraal</span> belangrijk, en ook de locatie: <span className="font-semibold">hilaire</span> versus <span className="font-semibold">mediastinale</span> klieren.
      </p>
      <p>Een lymfeklier wordt verdacht als:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          de <span className="font-semibold">kortste as</span> op CT <span className="font-semibold">{'>'} 10 mm</span> is;
        </li>
        <li>
          en/of er sprake is van <span className="font-semibold">verhoogde FDG-opname</span> op PET/CT.
        </li>
      </ul>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Tabel 3. N-stadium bij longkanker</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">N-stadium</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Locatie</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">N0</td>
              <td className="px-4 py-3 align-top">Geen regionale lymfekliermetastasen</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">N1</td>
              <td className="px-4 py-3 align-top">Ipsilaterale peribronchiale en/of hilaire lymfeklieren</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">N2</td>
              <td className="px-4 py-3 align-top">Ipsilaterale mediastinale en/of subcarinale lymfeklieren</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">N3</td>
              <td className="px-4 py-3 align-top">Contralaterale mediastinale, contralaterale hilaire, scalene en/of supraclaviculaire lymfeklieren</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">N0</h3>
      <p>
        Bij <span className="font-semibold">N0</span> zijn er <span className="font-semibold">geen regionale lymfekliermetastasen</span>.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">N1</h3>
      <p>
        Bij <span className="font-semibold">N1</span> zijn de klieren aangedaan aan <span className="font-semibold">dezelfde kant als de tumor</span>. Het gaat dan om:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-semibold">peribronchiale</span> klieren;
        </li>
        <li>
          <span className="font-semibold">hilaire</span> klieren;
        </li>
        <li>
          klieren langs de <span className="font-semibold">ipsilaterale hoofdbronchus</span>.
        </li>
      </ul>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">N2</h3>
      <p>
        Bij <span className="font-semibold">N2</span> zijn de klieren nog steeds aan dezelfde kant van de tumor, maar nu gaat het om:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-semibold">mediastinale</span> klieren;
        </li>
        <li>
          <span className="font-semibold">subcarinale</span> klieren, dus onder de carina.
        </li>
      </ul>
      <p>Dit is ernstiger dan N1.</p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">N3</h3>
      <p>
        Bij <span className="font-semibold">N3</span> zijn de klieren aan de <span className="font-semibold">andere kant</span> betrokken of op meer perifere lokale plekken:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-semibold">contralaterale mediastinale</span> klieren;
        </li>
        <li>
          <span className="font-semibold">contralaterale hilaire</span> klieren;
        </li>
        <li>
          <span className="font-semibold">scalene</span> klieren;
        </li>
        <li>
          <span className="font-semibold">supraclaviculaire</span> klieren.
        </li>
      </ul>
      <p>Dit is het meest uitgebreide lokale lymfeklierstadium.</p>
      <p>
        <span className="font-semibold">Aandachtsvraag:</span> Wanneer denk je aan N1?{' '}
        <br />
        <span className="font-semibold">Mini-antwoord:</span> Bij ipsilaterale peribronchiale of hilaire lymfeklieren.
      </p>
    </div>
  )
}
