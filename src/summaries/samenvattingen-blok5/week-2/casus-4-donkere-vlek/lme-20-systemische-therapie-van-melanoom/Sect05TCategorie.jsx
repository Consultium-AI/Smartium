export default function Sect05TCategorie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">T-categorie</h2>
      <p>
        De T-categorie hangt af van de Breslowdikte en van ulceratie. Breslowdikte is de dikte van de tumor in millimeters.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>T1: ≤ 1 mm</li>
        <li>T1a: &lt; 0,8 mm zonder ulceratie</li>
        <li>T1b: &lt; 0,8 mm mét ulceratie, of 0,8–1,0 mm met of zonder ulceratie</li>
        <li>T2: &gt; 1,0–2,0 mm</li>
        <li>T2a: zonder ulceratie</li>
        <li>T2b: met ulceratie</li>
        <li>T3: &gt; 2,0–4,0 mm</li>
        <li>T3a: zonder ulceratie</li>
        <li>T3b: met ulceratie</li>
        <li>T4: &gt; 4,0 mm</li>
        <li>T4a: zonder ulceratie</li>
        <li>T4b: met ulceratie</li>
      </ul>
    </div>
  )
}
