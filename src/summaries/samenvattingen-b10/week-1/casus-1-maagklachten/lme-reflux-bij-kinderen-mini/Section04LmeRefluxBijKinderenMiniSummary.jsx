import { AlertTriangle } from 'lucide-react';

export default function Section04LmeRefluxBijKinderenMiniSummary() {
  return (
    <section id="sect-04" className="scroll-mt-24">
      <div className="overflow-hidden rounded-2xl border border-rose-200 bg-white shadow-sm">
        <div className="flex items-start gap-3 border-b border-rose-100 bg-rose-50 px-5 py-4">
          <div className="rounded-xl bg-rose-600 p-2 text-white">
            <AlertTriangle className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Welke red flags zijn belangrijk?</h2>
          </div>
        </div>
        <div className="space-y-4 px-5 py-5 leading-7 text-slate-700">
          <p>Red flags bij braken of refluxklachten zijn belangrijk omdat dan direct beleid of spoedbeoordeling nodig kan zijn. Denk aan onvoldoende groei of gewichtsverlies, lethargie, koorts, ernstige prikkelbaarheid of pijn, dysurie, laat begin van klachten (na 6 maanden) of persisterende klachten na 12–18 maanden, neurologische signalen zoals een bombende fontanel, snel groeiende schedelomtrek, insulten of afwijkende hoofdomtrek, en gastro-intestinale alarmsymptomen zoals krachtig persisterend braken, nachtelijk braken, galbraken, hematemesis, chronische diarree, rectaal bloedverlies en abdominale distensie. Ook anemie, dystonische nek/Sandifer-syndroom, tanderosie, voedselweigering, apneus, ALTE’s, hoesten, heesheid, piepende ademhaling, recidiverende luchtweginfecties of otitiden, stridor, dysfagie, oesofagitis, strictuur en zuurbranden kunnen bij refluxziekte passen en vragen om zorgvuldige beoordeling.</p>
        </div>
      </div>
    </section>
  );
}
