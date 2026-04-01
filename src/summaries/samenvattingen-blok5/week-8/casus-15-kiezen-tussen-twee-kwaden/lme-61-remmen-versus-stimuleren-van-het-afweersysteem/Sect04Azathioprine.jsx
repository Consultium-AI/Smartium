export default function Sect04Azathioprine() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Azathioprine</h2>
      <p>
        Azathioprine is een purinederivaat en een belangrijk immunosuppressivum uit de groep van de cytostatica. Het
        middel is inactief totdat het door de lever wordt gemetaboliseerd; het duurt daarom een paar weken voordat het
        effect optreedt. De metabolieten werken vooral op delende cellen en remmen zo de DNA-replicatie. Daardoor wordt
        de proliferatie van CD4+- en CD8+-T-lymfocyten, inclusief alloreactieve T-cellen, geremd.
      </p>
      <p>Azathioprine wordt gebruikt bij:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>preventie van afstoting na orgaantransplantatie;</li>
        <li>behandeling van systemische auto-immuunziekten.</li>
      </ul>
      <p>
        De nadelen komen voort uit het effect op snel delende cellen. Een belangrijke bijwerking is beenmergsuppressie;
        daarom moeten leukocyten- en trombocytentellingen gecontroleerd worden. Ook het darmepitheel kan getroffen worden.
      </p>
      <div className="rounded-xl border-l-4 border-primary-400 bg-primary-50 dark:bg-primary-500/10 p-4 space-y-2">
        <p>
          <strong className="text-primary-900 dark:text-primary-200">
            Aandachtspunt: waarom is azathioprine niet geschikt bij leverfalen?
          </strong>{' '}
          <strong className="text-primary-900 dark:text-primary-200">Antwoord:</strong> omdat het middel door de lever moet
          worden omgezet in de werkzame vorm en dan minder effectief is.
        </p>
      </div>
    </div>
  )
}
