import { ShieldAlert } from 'lucide-react';

export default function Section09PraktischeBeperkingenMiniSummary() {
  return (
    <section id="sect-09" className="scroll-mt-24 rounded-2xl border border-rose-200 bg-rose-50/60 p-6 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="rounded-xl bg-rose-100 p-2 text-rose-700">
          <ShieldAlert className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Praktische beperkingen</h2>
        </div>
      </div>

      <div className="mt-5 space-y-5 text-slate-700 leading-7">
        <div className="space-y-3">
          <p className="font-semibold text-slate-900">Multicollineariteit</p>
          <p>Multicollineariteit ontstaat wanneer voorspellers sterk samenhangen. Dan worden standaardfouten groot en wordt het lastig te zien welke variabele echt effect heeft. Dit kan worden gecontroleerd met de VIF.</p>
        </div>

        <div className="space-y-3">
          <p className="font-semibold text-slate-900">Complete separatie</p>
          <p>Complete separatie betekent dat een voorspeller de uitkomst perfect splitst. Dan worden coëfficiënten extreem groot, standaardfouten zeer groot en kan software waarschuwen dat convergentie niet is bereikt. Mogelijke oplossingen zijn categorieën samenvoegen, een variabele verwijderen of een penalized methode gebruiken, zoals Firth’s penalized likelihood.</p>
        </div>
      </div>
    </section>
  );
}
