import { FileText } from 'lucide-react';

export default function Section03KlinischeGevolgenVanHPyloriInfectieMiniSummary() {
  return (
    <section id="sect-03" className="scroll-mt-24">
      <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-6 shadow-sm">
        <div className="mb-4 flex items-center gap-3">
          <div className="rounded-full bg-amber-600 p-2 text-white">
            <FileText className="h-5 w-5" />
          </div>
          <h2 className="text-xl font-semibold tracking-tight text-slate-900">Klinische gevolgen van <em>H. pylori</em>-infectie</h2>
        </div>
        <p className="leading-7 text-slate-700">Een infectie met <em>H. pylori</em> kan verschillende klinische beelden veroorzaken. De belangrijkste zijn:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700">
          <li>gastritis;</li>
          <li>ulcuslijden;</li>
          <li>verhoogd risico op maligniteit.</li>
        </ul>
        <p className="mt-4 leading-7 text-slate-700">Deze uitkomsten hangen met elkaar samen. Ze kunnen allemaal voortkomen uit een aanhoudende infectie en beschadiging van het maagslijmvlies. Gastritis is de ontstekingsreactie van het maagslijmvlies. Ulcuslijden betekent dat er een zweer ontstaat. Het verhoogde risico op maligniteit laat zien dat langdurige infectie en chronische beschadiging van de maagwand ook op langere termijn gevolgen kunnen hebben.</p>
        <p className="mt-4 leading-7 text-slate-700">De rode draad is dus: een infectie blijft niet beperkt tot de aanwezigheid van een bacterie, maar kan uitmonden in ontsteking, weefselschade en ernstigere ziektebeelden.</p>
      </div>
    </section>
  );
}
