import { Layers3 } from 'lucide-react';

export default function Section08BeschadigingVanDeMaagwandMiniSummary() {
  return (
    <section id="sect-08" className="scroll-mt-24">
      <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-6 shadow-sm">
        <div className="mb-4 flex items-center gap-3">
          <div className="rounded-full bg-amber-600 p-2 text-white">
            <Layers3 className="h-5 w-5" />
          </div>
          <h2 className="text-xl font-semibold tracking-tight text-slate-900">Beschadiging van de maagwand</h2>
        </div>
        <p className="leading-7 text-slate-700">Naast kolonisatie is beschadiging van de maagwand een tweede kernonderdeel. De infectie leidt niet alleen tot aanwezigheid van de bacterie, maar ook tot aantasting van het omliggende weefsel. Daardoor ontstaat ontsteking en kunnen uiteindelijk ernstigere afwijkingen optreden. De beschadigde maagwand verliest een deel van zijn beschermende functie, wat de kans op klachten en ziekte vergroot.</p>
      </div>
    </section>
  );
}
