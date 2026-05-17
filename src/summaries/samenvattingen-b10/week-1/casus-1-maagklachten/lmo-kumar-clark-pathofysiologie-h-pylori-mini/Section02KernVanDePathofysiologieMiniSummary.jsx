import { Activity } from 'lucide-react';

export default function Section02KernVanDePathofysiologieMiniSummary() {
  return (
    <section id="sect-02" className="scroll-mt-24">
      <div className="rounded-2xl border border-teal-200 bg-teal-50/70 p-6 shadow-sm">
        <div className="mb-4 flex items-center gap-3">
          <div className="rounded-full bg-teal-700 p-2 text-white">
            <Activity className="h-5 w-5" />
          </div>
          <h2 className="text-xl font-semibold tracking-tight text-slate-900">Kern van de pathofysiologie</h2>
        </div>
        <p className="leading-7 text-slate-700"><em>H. pylori</em> is niet alleen een bacterie die in de maag aanwezig is, maar een belangrijke veroorzaker van maagwandontsteking en daaruit voortkomende aandoeningen. De bacterie moet zich eerst kunnen vestigen in de maag en daar aanwezig blijven. Pas dan kan zij invloed uitoefenen op het maagslijmvlies en schade veroorzaken. Kolonisatie is daarom essentieel: zonder vestiging in de maagwand kan <em>H. pylori</em> geen blijvende schade geven.</p>
        <p className="mt-4 leading-7 text-slate-700">De pathofysiologie draait om twee hoofdprocessen:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700">
          <li>kolonisatie van de maagwand;</li>
          <li>beschadiging van het maagslijmvlies.</li>
        </ul>
        <p className="mt-4 leading-7 text-slate-700">Door deze processen ontstaat ontsteking van het slijmvlies en kunnen verdere afwijkingen optreden. De maagwand is normaal beschermd tegen het zure milieu van de maag. Als die bescherming verstoord raakt of het slijmvlies beschadigd wordt, kunnen klachten en ziektebeelden ontstaan.</p>
      </div>
    </section>
  );
}
