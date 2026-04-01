export default function Sect06DePwaarde() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">De p-waarde</h2>
      <p>Uit een statistische toets krijg je een p-waarde. Die gebruik je om te beslissen of je de nulhypothese verwerpt of niet.</p>
      <p>De interpretatie is:</p>
      <p className="border-l-4 border-slate-300 dark:border-slate-600 pl-4 italic">
        &gt; Als de nulhypothese waar is, wat is dan de kans dat we dit resultaat of iets extremers vinden?
      </p>
      <p>Is die kans klein, dan concludeer je dat de nulhypothese waarschijnlijk niet waar is en verwerp je die.</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>p &lt; 0.05: verwerp H0;</li>
        <li>p &gt; 0.05: verwerp H0 niet.</li>
      </ul>
    </div>
  )
}
