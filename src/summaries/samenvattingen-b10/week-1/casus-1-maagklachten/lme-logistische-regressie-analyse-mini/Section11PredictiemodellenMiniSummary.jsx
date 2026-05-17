import { BarChart3 } from 'lucide-react';

export default function Section11PredictiemodellenMiniSummary() {
  return (
    <section id="sect-11" className="scroll-mt-24 rounded-2xl border border-violet-200 bg-violet-50/60 p-6 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="rounded-xl bg-violet-100 p-2 text-violet-700">
          <BarChart3 className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Predictiemodellen</h2>
        </div>
      </div>

      <div className="mt-5 space-y-4 text-slate-700 leading-7">
        <p>Logistische regressie wordt vaak gebruikt voor predictiemodellen: modellen die per patiënt de kans op een bepaalde uitkomst schatten. Voorbeelden zijn risico op een hartinfarct, kans op herstel of kans op falen van behandeling. Zulke modellen geven een kans, geen zekerheid.</p>

        <p>Een goed predictiemodel moet gevalideerd worden:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>interne validatie: in de eigen dataset;</li>
          <li>externe validatie: bij nieuwe patiënten.</li>
        </ul>

        <p>Belangrijke eigenschappen zijn:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>discriminatie: kan het model patiënten mét en zonder uitkomst onderscheiden?</li>
          <li>calibratie: komen voorspelde kansen overeen met werkelijke kansen?</li>
        </ul>
      </div>
    </section>
  );
}
