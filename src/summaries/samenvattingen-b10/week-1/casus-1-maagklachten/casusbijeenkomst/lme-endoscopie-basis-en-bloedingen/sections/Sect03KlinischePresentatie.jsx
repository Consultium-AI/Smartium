export default function Sect03KlinischePresentatie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Klinische presentatie: hoe presenteert de patiënt?
      </h2>
      <p>De klachten en het aspect van het bloedverlies geven veel aanwijzingen over de oorsprong van de bloeding.</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Hematemesis</strong> is braken van vers bloed of
          koffiedikachtig materiaal. Dit wijst meestal op een bloeding in de{' '}
          <strong className="text-slate-900 dark:text-slate-100">hoge tractus digestivus</strong>.
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Melena</strong> is zwarte, teerachtige ontlasting. Dit
          ontstaat doordat bloed wordt verteerd tijdens de passage door maag en darm. Ook dit past meestal bij een{' '}
          <strong className="text-slate-900 dark:text-slate-100">hoge bloeding</strong>.
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Hematochezie</strong> is helder rood bloedverlies per
          anum. Dit past meestal bij een <strong className="text-slate-900 dark:text-slate-100">lage bloeding</strong>, maar
          kan bij een massale hoge bloeding ook voorkomen als het bloed snel door de darm passeert.
        </li>
      </ul>
      <p>
        Bij ernstig bloedverlies kunnen ook <strong className="text-slate-900 dark:text-slate-100">duizeligheid</strong>,{' '}
        <strong className="text-slate-900 dark:text-slate-100">syncope</strong> en tekenen van{' '}
        <strong className="text-slate-900 dark:text-slate-100">shock</strong> optreden.
      </p>
      <p>
        Soms worden ook andere ontlastingsafwijkingen genoemd.{' '}
        <strong className="text-slate-900 dark:text-slate-100">Steatorroe</strong> betekent vette ontlasting door een
        probleem met vetvertering of -opname; dit past dus niet bij bloeding, maar bij malabsorptie.
      </p>
      <p>
        <strong className="text-slate-900 dark:text-slate-100">Aandachtsvraag:</strong> Wat betekent melena voor je eerste
        inschatting?
        <br />
        <strong className="text-slate-900 dark:text-slate-100">Kort antwoord:</strong> Melena past meestal bij verteerd
        bloed uit een bloeding hoog in het maag-darmkanaal, bijvoorbeeld maag of duodenum.
      </p>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Klinische aanwijzingen in de anamnese</h3>
        <p className="mt-4">Een goede anamnese is belangrijk om oorzaak en ernst in te schatten. Let vooral op:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>
            <strong className="text-slate-900 dark:text-slate-100">karakter van het bloedverlies</strong>: kleur, hoeveelheid
            en duur;
          </li>
          <li>
            <strong className="text-slate-900 dark:text-slate-100">medicatiegebruik</strong>: NSAID&apos;s,
            acetylsalicylzuur, DOAC, coumarinederivaten, clopidogrel;
          </li>
          <li>
            <strong className="text-slate-900 dark:text-slate-100">voorgeschiedenis</strong>: eerdere bloedingen, bekende
            ulcera, leverziekte, eerdere gastro-intestinale interventies, alcoholgebruik.
          </li>
        </ul>
        <p className="mt-4">
          Ook klachten vóór de bloeding kunnen relevant zijn, zoals dyspepsie, refluxklachten, dysfagie en veranderd
          defecatiepatroon.
        </p>
        <p className="mt-4">Bij het lichamelijk onderzoek let je vooral op tekenen van hemodynamische instabiliteit:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>bloeddruk;</li>
          <li>hartfrequentie;</li>
          <li>bewustzijnsniveau;</li>
          <li>tekenen van shock, zoals bleekheid en klamheid.</li>
        </ul>
        <p className="mt-4">
          Verder kan onderzoek van mond-keelholte helpen om hematemesis van KNO-bloedingen te onderscheiden. Een rectaal
          toucher kan melena of vers bloed aantonen. Tekenen van leverziekte, zoals spider naevi, erythema palmare,
          hepatosplenomegalie en caput medusae, kunnen wijzen op een varicesbloeding.
        </p>
      </div>
    </div>
  )
}
