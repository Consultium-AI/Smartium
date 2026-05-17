import { BookOpen } from 'lucide-react';

export default function Section01IntroMiniSummary() {
  return (
    <section id="sect-01" className="scroll-mt-24">
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
        <div className="mb-4 flex items-center gap-3">
          <div className="rounded-full bg-slate-900 p-2 text-white">
            <BookOpen className="h-5 w-5" />
          </div>
          <h2 className="text-xl font-semibold tracking-tight text-slate-900">LME 6 – LMO Kumar & Clark Pathofysiologie H.pylori</h2>
        </div>
        <p className="leading-7 text-slate-700">Deze leerstof gaat over <em>Helicobacter pylori</em> en de gevolgen van infectie in de maag. De kern is dat deze bacterie zich in de maag kan handhaven, de maagwand kan beschadigen en zo kan leiden tot ontsteking, ulcuslijden en op langere termijn een verhoogd risico op maligniteit. Het onderwerp draait dus vooral om de relatie tussen kolonisatie van het maagslijmvlies, slijmvliesbeschadiging en klinische ziektebeelden.</p>
      </div>
    </section>
  );
}
