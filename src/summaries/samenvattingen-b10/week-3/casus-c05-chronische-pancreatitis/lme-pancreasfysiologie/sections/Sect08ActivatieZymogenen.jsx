export default function Sect08ActivatieZymogenen () {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Activering van zymogenen</h2>
      <p>Zodra zymogenen in de darm komen, moeten ze actief worden. Dat gebeurt in stappen:</p>
      <ol className="list-decimal pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Enteropeptidase</strong> in het darmepitheel activeert{' '}
          <strong className="text-slate-900 dark:text-slate-100">trypsinogeen</strong> tot{' '}
          <strong className="text-slate-900 dark:text-slate-100">trypsine</strong>.
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Trypsine</strong> activeert vervolgens meer
          trypsinogeen.
        </li>
        <li>
          Trypsine activeert ook andere zymogenen, zoals:
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>chymotrypsinogeen,</li>
            <li>pro-elastase,</li>
            <li>procarboxypeptidasen.</li>
          </ul>
        </li>
      </ol>
      <p>
        Dit is een belangrijk cascade-mechanisme: één activatie zet vervolgens meerdere andere activaties in gang.
      </p>
    </div>
  )
}
