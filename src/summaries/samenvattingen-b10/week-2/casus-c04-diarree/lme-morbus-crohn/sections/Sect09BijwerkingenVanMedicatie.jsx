export default function Sect09BijwerkingenVanMedicatie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Bijwerkingen van medicatie</h2>
      <p>
        Medicatie tegen Crohn kan duidelijke bijwerkingen geven. In de casus ontwikkelt de patiënte klachten na start van budesonide: gewichtstoename, vocht vasthouden, emotionele labiliteit
        en huilbuien. Dat past bij corticosteroïd-bijwerkingen, waarna budesonide wordt gestopt.
      </p>
      <p>Belangrijke bijwerkingen om te onthouden:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>corticosteroïden kunnen leiden tot gewichtstoename, vochtretentie, stemmingsveranderingen en osteoporose;</li>
        <li>azathioprine geeft een verhoogd risico op een lymfoom.</li>
      </ul>
      <div className="p-5 bg-violet-50 dark:bg-violet-950/40 rounded-xl border border-violet-200 dark:border-violet-600/40 space-y-2">
        <p>
          <strong className="text-violet-900 dark:text-violet-200">
            Aandacht: waarom is azathioprine een middel waar je bijwerkingen serieus van moet onthouden?
          </strong>
        </p>
        <p>Kort antwoord: het kan als onderhoudsmedicatie werken, maar geeft ook een verhoogd risico op lymfoom.</p>
      </div>
    </div>
  )
}
