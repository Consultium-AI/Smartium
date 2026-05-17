export default function Sect13TotaleSamenvatting() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Samenvatting</h2>
      <p>
        Logistische regressie gebruik je voor een <strong className="text-slate-900 dark:text-slate-100">binaire uitkomst</strong>. Het model voorspelt een <strong className="text-slate-900 dark:text-slate-100">kans</strong> tussen 0 en 1 via de <strong className="text-slate-900 dark:text-slate-100">logit-transformatie</strong>. De coëfficiënten interpreteer je meestal als <strong className="text-slate-900 dark:text-slate-100">odds ratios</strong> door{' '}
        <span className="font-mono text-[0.95em]">{'\\(e^b\\)'}</span> te nemen. Bij <strong className="text-slate-900 dark:text-slate-100">meervoudige logistische regressie</strong> corrigeer je voor andere variabelen, bijvoorbeeld bij confounding. Statistische toetsing doe je met de <strong className="text-slate-900 dark:text-slate-100">Wald-toets</strong> en het <strong className="text-slate-900 dark:text-slate-100">95%-betrouwbaarheidsinterval</strong> van de OR. Voor predictiemodellen kijk je niet alleen naar de schatting, maar ook naar <strong className="text-slate-900 dark:text-slate-100">validatie</strong>, <strong className="text-slate-900 dark:text-slate-100">discriminatie</strong> en <strong className="text-slate-900 dark:text-slate-100">calibratie</strong>.
      </p>
    </div>
  )
}
