export default function SectKlinischePresentatie3() {
  return (
    <div className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">KLINISCHE PRESENTATIE (3)</h2>
      <div className="grid gap-8 lg:grid-cols-2">
        <section className="space-y-4">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-lg">Lichamelijk onderzoek</h3>
          <p>Bij lichamelijk onderzoek moet vooral worden gelet op tekenen van hemodynamische instabiliteit.</p>
          <p>
            Belangrijke parameters zijn: bloeddruk, hartfrequentie, bewustzijn, tekenen van shock (bleekheid, klamheid).
          </p>
          <p>Daarnaast moet worden gekeken naar:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Mond-keelholte onderscheid tussen hematemesis en KNO-bloeding;</li>
            <li>Rectaal toucher aanwezigheid van melena of vers bloed;</li>
            <li>Tekenen van leverziekte spider naevi, erythema palmare, hepatosplenomegalie, caput medusae.</li>
          </ul>
          <p>Deze bevindingen, indien aanwezig, kunnen wijzen op een onderliggende varicesbloeding.</p>
        </section>
        <section className="space-y-4">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-lg">Definitie van een klinisch relevante bloeding</h3>
          <p>
            Een gastro-intestinale bloeding wordt als klinisch relevant beschouwd wanneer er sprake is van hemodynamische instabiliteit.
          </p>
          <p>Dit kan worden gedefinieerd als:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>systolische bloeddruk &lt; 100 mmHg</li>
            <li>hartfrequentie &gt; 100/min</li>
          </ul>
          <p>
            Hierbij moet rekening worden gehouden met medicatiegebruik zoals β-blokkers, die de hartfrequentie kunnen verlagen. Patiënten met een klinisch relevante bloeding hebben een verhoogd risico op complicaties en moeten snel worden gestabiliseerd en onderzocht.
          </p>
        </section>
      </div>
    </div>
  )
}
