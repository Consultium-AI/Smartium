import { Scale } from 'lucide-react';

export default function Section05LmeRefluxBijKinderenMiniSummary() {
  return (
    <section id="sect-05" className="scroll-mt-24">
      <div className="overflow-hidden rounded-2xl border border-amber-200 bg-white shadow-sm">
        <div className="flex items-start gap-3 border-b border-amber-100 bg-amber-50 px-5 py-4">
          <div className="rounded-xl bg-amber-600 p-2 text-white">
            <Scale className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Eerste stappen: groei en voedingsinname</h2>
          </div>
        </div>
        <div className="space-y-4 px-5 py-5 leading-7 text-slate-700">
          <p>De eerste stap in de aanpak is altijd: goed uitvragen, lichamelijk bekijken en de groei beoordelen. De groeicurve is een belangrijke graadmeter: goede groei maakt een ernstige oorzaak minder waarschijnlijk, terwijl onvoldoende groei een belangrijk waarschuwingssignaal is. Ook de totale voedingsinname is van belang. Bij zuigelingen kan over- of ondervoeding de klachten verklaren. Als vuistregel wordt ongeveer 150 ml/kg/dag genoemd; een duidelijk lagere inname kan klachten en onvoldoende groei verklaren.</p>
        </div>
      </div>
    </section>
  );
}
