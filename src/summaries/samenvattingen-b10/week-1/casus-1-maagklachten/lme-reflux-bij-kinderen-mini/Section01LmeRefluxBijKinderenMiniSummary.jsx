import { BookOpen } from 'lucide-react';

export default function Section01LmeRefluxBijKinderenMiniSummary() {
  return (
    <section id="sect-01" className="scroll-mt-24">
      <div className="overflow-hidden rounded-2xl border border-primary-200 bg-white shadow-sm">
        <div className="flex items-start gap-3 border-b border-primary-100 bg-primary-50 px-5 py-4">
          <div className="rounded-xl bg-primary-600 p-2 text-white">
            <BookOpen className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Wat is reflux bij kinderen?</h2>
          </div>
        </div>
        <div className="space-y-4 px-5 py-5 leading-7 text-slate-700">
          <p>Reflux bij kinderen is het terugvloeien van maaginhoud naar de slokdarm en soms tot in de mond. Bij zuigelingen is dit vaak fysiologisch en dus normaal: kleine hoeveelheden voeding “teruggeven” komt in de eerste levensmaanden veel voor. Daarom is het belangrijk onderscheid te maken tussen normale reflux (GOR), refluxziekte (GORZ), regurgitatie, braken en ruminatie.</p>
          <p>GOR betekent terugvloed van maaginhoud in de slokdarm, vaak met regurgitatie, en kan meerdere keren per dag optreden bij gezonde kinderen, meestal na de maaltijd. GORZ is reflux die hinderlijke klachten geeft of complicaties veroorzaakt, zoals veel huilen, prikkelbaarheid, voedselweigering en groeivertraging. Regurgitatie is het spontaan, onvrijwillig terugvloeien van voeding uit de maag tot in de mond, vooral binnen het eerste uur na de voeding en zonder moeite. Braken is krachtig uitspugen na activatie van het braakcentrum, vaak voorafgegaan door misselijkheid, bleekheid, zweten en kokhalzen. Ruminatie is het vrijwillig of soms onbewust omhoogwerken van voeding vanuit de maag tot in de mond, waarna deze opnieuw gekauwd en doorgeslikt of uitgespuugd kan worden.</p>
        </div>
      </div>
    </section>
  );
}
