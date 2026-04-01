export default function Sect01Leerdoelen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Leerdoelen</h2>
      <p>Na het bestuderen van deze stof kun je:</p>
      <ol className="list-decimal pl-6 space-y-4">
        <li>
          <span>een normaal sinusritme beschrijven en de criteria benoemen voor:</span>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>normale frequentie (60–100/min),</li>
            <li>normaal PR/PQ-interval (120–200 ms),</li>
            <li>normale QRS-duur ({'<'} 120 ms);</li>
          </ul>
        </li>
        <li>
          <span>een systematische 5-stappenmethode toepassen op een ECG-strook:</span>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Ritme</li>
            <li>Frequentie</li>
            <li>As</li>
            <li>Intervallen</li>
            <li>Morfologie</li>
          </ul>
        </li>
        <li>
          <span>de vijf meest fundamentele ritmestoornissen van elkaar onderscheiden:</span>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>sinusbradycardie / sinustachycardie</li>
            <li>atriumfibrilleren</li>
            <li>atriumflutter</li>
            <li>ventrikeltachycardie (VT)</li>
            <li>ventrikelfibrilleren (VF)</li>
          </ul>
        </li>
        <li>
          <span>de twee belangrijkste geleidingsstoornissen herkennen:</span>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>bundeltakblok</li>
            <li>3e-graads AV-blok</li>
          </ul>
        </li>
        <li>
          <span>de drie belangrijkste ischemische morfologische kenmerken herkennen:</span>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>ST-elevatie</li>
            <li>ST-depressie</li>
            <li>T-top inversie</li>
          </ul>
        </li>
      </ol>
    </div>
  )
}
