import { ClipboardList } from 'lucide-react';

export default function Section03LmeRefluxBijKinderenMiniSummary() {
  return (
    <section id="sect-03" className="scroll-mt-24">
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex items-start gap-3 border-b border-slate-100 bg-slate-50 px-5 py-4">
          <div className="rounded-xl bg-slate-600 p-2 text-white">
            <ClipboardList className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Hoe stel je de diagnose?</h2>
          </div>
        </div>
        <div className="space-y-4 px-5 py-5 leading-7 text-slate-700">
          <p>Niet elke baby die spuugt heeft refluxziekte. De kernvraag is of de klachten hinderlijk zijn en/of tot complicaties leiden. De diagnose GORZ wordt gesteld op basis van anamnese en het uitsluiten van alarmsymptomen. Bij de beoordeling van reflux- of braakklachten moet altijd gericht gevraagd worden naar alarmsymptomen, voeding en voedingshoeveelheid, buikpijn, ontlasting, koorts, groei, het aspect van het braaksel, voorgeschiedenis zoals buikoperaties, en familieanamnese, bijvoorbeeld coeliakie, IBD of migraine. Refluxklachten kunnen namelijk ook passen bij andere aandoeningen, zoals voedselallergie of een obstructie.</p>
        </div>
      </div>
    </section>
  );
}
