import { Workflow } from 'lucide-react';

export default function Section08MeervoudigeLogistischeRegressieMiniSummary() {
  return (
    <section id="sect-08" className="scroll-mt-24 rounded-2xl border border-amber-200 bg-amber-50/60 p-6 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="rounded-xl bg-amber-100 p-2 text-amber-700">
          <Workflow className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Meervoudige logistische regressie</h2>
        </div>
      </div>

      <div className="mt-5 space-y-4 text-slate-700 leading-7">
        <p>In de praktijk spelen vaak meerdere factoren tegelijk een rol. Dan gebruik je meervoudige logistische regressie:</p>

        <div className="rounded-xl bg-white p-4 font-mono text-sm text-slate-900 ring-1 ring-slate-200">{String.raw`\ln\left(\frac{p}{1-p}\right)=b_0+b_1X_1+b_2X_2+\dots+b_kX_k`}</div>

        <p>De coëfficiënt van elke variabele geeft het effect, terwijl de andere variabelen constant blijven. Dit is belangrijk bij confounding: een derde variabele kan het verband tussen twee andere variabelen vertekenen. Door meerdere variabelen tegelijk op te nemen, corrigeer je daarvoor.</p>

        <p>De keuze van variabelen hangt af van de onderzoeksvraag:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>beschrijvend: patronen en verbanden samenvatten;</li>
          <li>etiologisch: een mogelijk causaal verband onderzoeken en corrigeren voor confounders;</li>
          <li>predictief: meerdere variabelen opnemen om risico’s te voorspellen.</li>
        </ul>
      </div>
    </section>
  );
}
