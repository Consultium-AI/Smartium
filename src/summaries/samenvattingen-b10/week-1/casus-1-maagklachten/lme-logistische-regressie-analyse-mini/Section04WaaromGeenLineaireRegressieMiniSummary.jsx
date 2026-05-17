import { Ban } from 'lucide-react';

export default function Section04WaaromGeenLineaireRegressieMiniSummary() {
  return (
    <section id="sect-04" className="scroll-mt-24 rounded-2xl border border-rose-200 bg-rose-50/60 p-6 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="rounded-xl bg-rose-100 p-2 text-rose-700">
          <Ban className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Waarom geen lineaire regressie?</h2>
        </div>
      </div>

      <div className="mt-5 space-y-4 text-slate-700 leading-7">
        <p>Lineaire regressie is ongeschikt voor binaire uitkomsten, omdat:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>voorspellingen buiten 0 en 1 kunnen vallen;</li>
          <li>de spreiding niet overal gelijk is;</li>
          <li>de aanname van normaal verdeelde fouten niet goed past bij een 0/1-uitkomst.</li>
        </ul>
        <p>Logistische regressie voorkomt dit doordat de uiteindelijke voorspelde kans altijd tussen 0 en 1 blijft.</p>
      </div>
    </section>
  );
}
