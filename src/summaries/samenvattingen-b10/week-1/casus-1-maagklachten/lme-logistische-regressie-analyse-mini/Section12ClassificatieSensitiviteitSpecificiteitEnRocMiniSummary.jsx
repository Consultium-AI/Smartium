import { LineChart } from 'lucide-react';

export default function Section12ClassificatieSensitiviteitSpecificiteitEnRocMiniSummary() {
  return (
    <section id="sect-12" className="scroll-mt-24 rounded-2xl border border-teal-200 bg-teal-50/60 p-6 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="rounded-xl bg-teal-100 p-2 text-teal-700">
          <LineChart className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Classificatie, sensitiviteit, specificiteit en ROC</h2>
        </div>
      </div>

      <div className="mt-5 space-y-5 text-slate-700 leading-7">
        <div className="space-y-3">
          <p>Een predictiemodel kan ook als classificatiemodel worden gebruikt met een afkapwaarde \(c\):</p>
          <p>\(p \ge c\): positief</p>
          <p>\(p &lt; c\): negatief</p>
        </div>

        <div className="space-y-3">
          <p>Sensitiviteit:</p>
          <div className="rounded-xl bg-white p-4 font-mono text-sm text-slate-900 ring-1 ring-slate-200">{String.raw`\frac{TP}{TP+FN}`}</div>
          <p>Dit is het vermogen om echte zieken goed te herkennen. Specificiteit:</p>
          <div className="rounded-xl bg-white p-4 font-mono text-sm text-slate-900 ring-1 ring-slate-200">{String.raw`\frac{TN}{TN+FP}`}</div>
          <p>Dit is het vermogen om gezonde mensen goed als gezond aan te merken. Een hogere sensitiviteit betekent minder gemiste gevallen; een hogere specificiteit betekent minder vals-positieven. Bij aandoeningen waarbij een gemiste diagnose gevaarlijk is, is vaak een hogere sensitiviteit belangrijker.</p>
        </div>

        <div className="space-y-3">
          <p>De ROC-curve laat sensitiviteit zien tegenover 1-specificiteit bij verschillende afkapwaarden. De AUC geeft de discriminatie weer:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>AUC = 0,5: geen discriminatie</li>
            <li>AUC = 1: perfecte discriminatie</li>
          </ul>
          <p>De AUC is ook te zien als de kans dat het model een persoon met de uitkomst een hogere voorspelde kans geeft dan een persoon zonder de uitkomst.</p>
        </div>

        <div className="rounded-xl border border-violet-200 bg-violet-50 p-4 text-slate-700">
          <p>Logistische regressie is dus de standaardmethode voor binaire uitkomsten: het model voorspelt kansen tussen 0 en 1, coëfficiënten worden meestal geïnterpreteerd als odds ratio’s, en bij meerdere voorspellers kun je corrigeren voor confounding. Bij predictiemodellen zijn naast de schatting ook validatie, discriminatie en calibratie essentieel.</p>
        </div>
      </div>
    </section>
  );
}
