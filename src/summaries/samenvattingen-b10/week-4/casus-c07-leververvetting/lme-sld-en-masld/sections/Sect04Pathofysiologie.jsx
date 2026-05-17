export default function Sect04Pathofysiologie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Pathofysiologie en ziekteprogressie</h2>
      <p>
        De pathofysiologie van MASLD is <strong className="text-slate-900 dark:text-slate-100">complex en multifactorieel</strong>. Er is niet één enkele oorzaak;
        meerdere processen werken tegelijkertijd samen in het ontstaan en de progressie van de ziekte. Dit wordt beschreven met het{' '}
        <strong className="text-slate-900 dark:text-slate-100">multi-hit model</strong>.
      </p>
      <p>De belangrijkste factoren daarin zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">insulineresistentie</strong>;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">verhoogde aanvoer van vrije vetzuren naar de lever</strong>;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">oxidatieve stress</strong>;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">inflammatoire processen</strong>;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">genetische en epigenetische factoren</strong>.
        </li>
      </ul>
      <p>
        Insulineresistentie speelt een centrale rol. Hierdoor neemt de vetaanmaak in de lever toe en wordt vetstapeling bevorderd. Die leversteatose leidt vervolgens
        weer tot meer ontsteking en meer insulineresistentie. Zo ontstaat een <strong className="text-slate-900 dark:text-slate-100">vicieuze cirkel</strong>.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Van steatose naar fibrose</h3>
      <p>
        Aanhoudende vetstapeling en ontsteking beschadigen hepatocyten. Daardoor worden <strong className="text-slate-900 dark:text-slate-100">stellaatcellen</strong> in de
        lever geactiveerd. Deze cellen gaan collageen produceren, waardoor <strong className="text-slate-900 dark:text-slate-100">fibrose</strong> ontstaat. Fibrose is
        in het begin nog <strong className="text-slate-900 dark:text-slate-100">reversibel</strong>, maar kan bij aanhoudende schade progressief en uiteindelijk onomkeerbaar
        worden.
      </p>
      <div className="rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-slate-50/80 dark:bg-slate-800/50 p-4 space-y-3 border-l-4 border-indigo-400 dark:border-indigo-500/85">
        <p>
          <strong className="font-semibold text-slate-900 dark:text-slate-100">Aandacht-vraag:</strong> Wat betekent leverfibrose eigenlijk?
        </p>
        <p>
          <strong className="font-semibold text-slate-900 dark:text-slate-100">Mini-antwoord:</strong> Fibrose is littekenvorming in de lever door chronische
          beschadiging.
        </p>
      </div>
    </div>
  )
}
