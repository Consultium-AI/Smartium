export default function Sect05KlinischeSymptomen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Klinische symptomen van longkanker</h2>
      <p>
        Longkanker is in het begin vaak symptoomloos. Het wordt regelmatig toevallig ontdekt, bijvoorbeeld op een thoraxfoto of CT-scan die om een andere reden is gemaakt. Klachten kunnen afkomstig zijn van:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>de primaire tumor in de long;</li>
        <li>metastasen;</li>
        <li>paraneoplastische syndromen.</li>
      </ul>
      <p>De meest voorkomende klachten bij presentatie zijn hoesten, gewichtsverlies, dyspneu, pijn op de borst, hemoptoë, botpijn en heesheid.</p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Tabel 2. Veelvoorkomende klachten bij longkanker</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Klacht</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Frequentie (%)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Hoesten</td>
              <td className="px-4 py-3 align-top">45–74</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Gewichtsverlies</td>
              <td className="px-4 py-3 align-top">46–68</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Dyspneu</td>
              <td className="px-4 py-3 align-top">37–58</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Pijn op de borst</td>
              <td className="px-4 py-3 align-top">27–49</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Bloed ophoesten (hemoptoë)</td>
              <td className="px-4 py-3 align-top">27–29</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Botpijn</td>
              <td className="px-4 py-3 align-top">20–21</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Heesheid</td>
              <td className="px-4 py-3 align-top">8–18</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Sommige klachten passen goed bij de plaats van de tumor:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-semibold">Hoesten en hemoptoë</span> kunnen ontstaan door compressie of ingroei in de luchtwegen, bijvoorbeeld de trachea.
        </li>
        <li>
          <span className="font-semibold">Pijn op de borst</span> kan ontstaan door ingroei in de pleura of thoraxwand.
        </li>
        <li>
          <span className="font-semibold">Dyspneu</span> kan ontstaan door obstructie van een grote luchtweg of door atelectase.
        </li>
        <li>
          <span className="font-semibold">Heesheid</span> kan ontstaan door betrokkenheid van de nervus recurrens.
        </li>
      </ul>
      <p>Metastasen geven vaak andere klachten:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-semibold">Botmetastasen</span> kunnen pijn in de rug geven.
        </li>
        <li>
          <span className="font-semibold">Hersenmetastasen</span> kunnen epileptische insulten geven, maar ook hoofdpijn, duizeligheid en verwardheid.
        </li>
        <li>
          <span className="font-semibold">Long- of pleurametastasen</span> kunnen dyspneu veroorzaken, bijvoorbeeld door pleuravocht of afsluiting van een luchtweg.
        </li>
        <li>
          <span className="font-semibold">Levermetastasen</span> kunnen pijn in de buik geven, met name rechts, door rek op het leverkapsel. Levermetastasen kunnen ook leiden tot afwijkingen in de leverchemie.
        </li>
      </ul>
    </div>
  )
}
