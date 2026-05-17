import { FlaskConical } from 'lucide-react';

export default function Section04GastritisMiniSummary() {
  return (
    <section id="sect-04" className="scroll-mt-24">
      <div className="rounded-2xl border border-rose-200 bg-rose-50/70 p-6 shadow-sm">
        <div className="mb-4 flex items-center gap-3">
          <div className="rounded-full bg-rose-600 p-2 text-white">
            <FlaskConical className="h-5 w-5" />
          </div>
          <h2 className="text-xl font-semibold tracking-tight text-slate-900">Gastritis</h2>
        </div>
        <p className="leading-7 text-slate-700">Gastritis is de ontsteking van het maagslijmvlies. Binnen deze stof is gastritis een belangrijk gevolg van <em>H. pylori</em>-infectie. De bacterie beïnvloedt het slijmvlies en veroorzaakt daardoor een ontstekingsreactie. Dit is een centraal voorbeeld van hoe een infectie leidt tot pathologische veranderingen in de maagwand.</p>
      </div>
    </section>
  );
}
