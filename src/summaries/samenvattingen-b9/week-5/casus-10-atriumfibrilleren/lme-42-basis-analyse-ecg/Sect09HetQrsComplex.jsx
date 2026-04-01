export default function Sect09HetQrsComplex() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Het QRS-complex: massa en geleiding</h2>
      <p>
        De grootte van het QRS-complex hangt samen met de hoeveelheid spiermassa. Meer spiermassa betekent meestal een grotere amplitude.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Linkerventrikelhypertrofie</h3>
      <p>
        De linkerventrikel draagt normaal al het meest bij aan het QRS-complex. Bij hypertrofie wordt die invloed nog groter. De vector trekt dan sterker naar links en achteren.
      </p>
      <p>ECG-kenmerken:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>in V1/V2 diepere S-golven;</li>
        <li>in V5/V6 hogere R-toppen.</li>
      </ul>
      <p>De Sokolow-Lyon-formule is:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>S in V1 + R in V5 of V6,</li>
        <li>als die som {'>'} 35 mm is, denk je aan LVH.</li>
      </ul>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Rechterventrikelhypertrofie</h3>
      <p>
        De rechterventrikel stelt normaal elektrisch weinig voor, maar bij bijvoorbeeld pulmonale hypertensie of ernstige COPD kan hij groot worden.
      </p>
      <p>Dan zie je in V1:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>normaal: dominante S-golf;</li>
        <li>bij RVH: dominante R-top.</li>
      </ul>
      <p>Een belangrijke aanwijzing is:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>R {'>'} S in V1,</li>
        <li>vaak met een rechterasdeviatie.</li>
      </ul>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Bundeltakblok</h3>
      <p>
        Bij een bundeltakblok is de QRS-duur verbreed. In de module wordt dit vooral als belangrijke geleidingsstoornis genoemd.
      </p>
    </div>
  )
}
