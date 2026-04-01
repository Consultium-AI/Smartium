export default function Sect15Kantelproef() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">De kantelproef (tilt test)</h2>
      <p>
        De kantelproef wordt ingezet bij een sterke verdenking op een neurocardiogene (vasovagale) syncope, wanneer de diagnose na de basisanamnese nog onzeker is.
      </p>
      <p>De procedure verloopt zo:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>de patiënt wordt vastgemaakt op een speciale tafel;</li>
        <li>ECG en bloeddruk worden continu bewaakt;</li>
        <li>de tafel wordt passief gekanteld tot ongeveer +60 graden met het hoofd omhoog;</li>
        <li>deze houding wordt 45 minuten of langer aangehouden;</li>
        <li>
          als er niets gebeurt, kan de test worden herhaald na toediening van een provocatiemedicijn, zoals isoprenaline of glyceryltrinitraat.
        </li>
      </ul>
      <p>Een test is positief als de patiënt (pre-)syncope ontwikkelt, tegelijk met hypotensie en/of bradycardie.</p>
      <p>Belangrijk is dat de test niet perfect is:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>de sensitiviteit is laag;</li>
        <li>de specificiteit is laag;</li>
        <li>de reproduceerbaarheid is laag.</li>
      </ul>
      <p>Een negatieve test sluit vasovagale syncope dus niet uit.</p>
    </div>
  )
}
