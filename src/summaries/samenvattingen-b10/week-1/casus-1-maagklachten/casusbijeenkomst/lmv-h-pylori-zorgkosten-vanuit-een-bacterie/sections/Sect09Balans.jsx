export default function Sect09Balans() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Hoe schat je die balans?</h2>
      <p>Twee begrippen zijn hierbij belangrijk:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">NNS/NNT</strong>: number needed to screen/treat. Dit is het
          aantal mensen dat je moet testen of behandelen om één ziektegeval te voorkomen.
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Kosten-effectiviteitsanalyse</strong>: hiermee kijk je naar
          de kosten per (quality-adjusted) levensjaar en of die kosten acceptabel zijn.
        </li>
      </ul>
      <p>Met andere woorden: je wilt weten hoeveel inspanning en geld nodig zijn om gezondheid te winnen.</p>
    </div>
  )
}
