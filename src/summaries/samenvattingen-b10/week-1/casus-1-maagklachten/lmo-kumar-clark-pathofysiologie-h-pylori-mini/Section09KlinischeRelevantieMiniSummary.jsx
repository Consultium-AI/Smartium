import { HeartPulse } from 'lucide-react';

export default function Section09KlinischeRelevantieMiniSummary() {
  return (
    <section id="sect-09" className="scroll-mt-24">
      <div className="rounded-2xl border border-rose-200 bg-rose-50/70 p-6 shadow-sm">
        <div className="mb-4 flex items-center gap-3">
          <div className="rounded-full bg-rose-600 p-2 text-white">
            <HeartPulse className="h-5 w-5" />
          </div>
          <h2 className="text-xl font-semibold tracking-tight text-slate-900">Klinische relevantie</h2>
        </div>
        <p className="leading-7 text-slate-700">De klinische relevantie van <em>H. pylori</em> is groot. Een ogenschijnlijk eenvoudige infectie kan leiden tot belangrijke maagproblemen. Voor de geneeskunde is het daarom essentieel om te begrijpen hoe de bacterie het slijmvlies beïnvloedt en welke gevolgen dat heeft voor de patiënt. Het gaat niet alleen om de bacterie zelf, maar vooral om de manier waarop die bacterie ziekte veroorzaakt.</p>
      </div>
    </section>
  );
}
