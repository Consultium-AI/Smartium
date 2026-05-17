import { CheckCircle2 } from 'lucide-react';

export default function Section07KansBerekenenEnToetsingMiniSummary() {
  return (
    <section id="sect-07" className="scroll-mt-24 rounded-2xl border border-teal-200 bg-teal-50/60 p-6 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="rounded-xl bg-teal-100 p-2 text-teal-700">
          <CheckCircle2 className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Kans berekenen en toetsing</h2>
        </div>
      </div>

      <div className="mt-5 space-y-5 text-slate-700 leading-7">
        <div className="space-y-3">
          <p className="font-semibold text-slate-900">Kans berekenen</p>
          <p>Als het model bekend is, kun je de kans op de uitkomst uitrekenen door de voorspelde waarde in de logistische formule in te vullen. Zo kun je per persoon de kans op het eindpunt bepalen.</p>
        </div>

        <div className="space-y-3">
          <p className="font-semibold text-slate-900">Toetsing en betrouwbaarheidsinterval</p>
          <p>Om te beoordelen of een effect statistisch significant is, gebruik je de Wald-toets. Die toetst of een coëfficiënt verschilt van nul:</p>

          <div className="rounded-xl bg-white p-4 font-mono text-sm text-slate-900 ring-1 ring-slate-200">{String.raw`Z=\frac{\beta}{SE(\beta)}`}</div>

          <p>Voor de interpretatie is het 95%-betrouwbaarheidsinterval van de OR belangrijk. Als dit interval 1,0 niet bevat, is het effect statistisch significant. Een smal interval betekent meer precisie; een breed interval betekent meer onzekerheid. Een statistisch significant effect kan inhoudelijk toch klein zijn, dus kijk altijd ook naar de grootte van de OR en de klinische relevantie.</p>
        </div>
      </div>
    </section>
  );
}
