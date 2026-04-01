export default function Sect05MetaboleAcidoseAnionGap() {
  return (
    <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Metabole acidose</h2>
      <p>Bij een metabole acidose is er een tekort aan HCO3-. Dat tekort kan op verschillende manieren ontstaan:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>er komt te veel niet-vluchtig zuur bij;</li>
        <li>er is verlies van HCO3-;</li>
        <li>de uitscheiding van H+ of de terugresorptie van HCO3- door de nier schiet tekort.</li>
      </ul>
      <p>
        Een metabole acidose kan daarom verschillende oorzaken hebben. Een belangrijk hulpmiddel bij het zoeken naar de oorzaak is het anion-gap.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Het anion-gap</h3>
      <p>Het anion-gap wordt berekend als:</p>
      <p className="font-mono text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/50 px-3 py-2 rounded-lg">
        [Na+] - ([HCO3-] + [Cl-])
      </p>
      <p>Het anion-gap helpt om te bepalen of de metabole acidose wordt veroorzaakt door:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>een overschot aan zuur: dan is er een hoog anion-gap;</li>
        <li>of een tekort aan bicarbonaat: dan is er vaak een normaal anion-gap.</li>
      </ul>
      <p>
        Het anion-gap moet worden aangepast als het albumine sterk afwijkend is. Albumine is namelijk negatief geladen. Als albumine sterk verlaagd is, is het anion-gap ook normaal al lager.
      </p>

      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          Aandachtvraag: wat zegt een hoog anion-gap?
        </p>
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0 mt-2">
          Mini-antwoord: Dan is er meestal extra zuur aanwezig dat het bicarbonaat heeft verbruikt.
        </p>
      </div>
    </div>
  )
}
