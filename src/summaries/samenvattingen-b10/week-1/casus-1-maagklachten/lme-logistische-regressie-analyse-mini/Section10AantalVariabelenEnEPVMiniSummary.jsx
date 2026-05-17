import { ListChecks } from 'lucide-react';

export default function Section10AantalVariabelenEnEPVMiniSummary() {
  return (
    <section id="sect-10" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-slate-50/80 p-6 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="rounded-xl bg-slate-200 p-2 text-slate-700">
          <ListChecks className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Aantal variabelen en EPV</h2>
        </div>
      </div>

      <div className="mt-5 space-y-4 text-slate-700 leading-7">
        <p>Logistische regressie werkt het best met voldoende observaties. Een vuistregel is 10 events per variabele (EPV). Een event is de kleinste van de twee uitkomstcategorieën. Bij te weinig events ontstaan instabiele schattingen.</p>
      </div>
    </section>
  );
}
