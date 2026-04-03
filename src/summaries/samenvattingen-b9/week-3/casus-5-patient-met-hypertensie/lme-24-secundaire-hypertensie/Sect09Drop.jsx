export default function Sect09Drop() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Diët en genotsmiddelen: drop</h2>
      <p>
        Drop kan hypertensie veroorzaken door het stofje glycyrrhizinezuur. In gewone drop is dit ongeveer 3% aanwezig. Ook andere producten met een drop- of zoethoutachtige smaak kunnen dit bevatten.
      </p>
      <p>
        {'Bij een inname van meer dan 400 mg glycyrrhizinezuur per dag \u2014 ongeveer 10\u201315 gram drop \u2014 kunnen binnen enkele weken klinische effecten optreden. Vrouwen zijn hier doorgaans gevoeliger voor dan mannen, al verschilt dat per persoon.'}
      </p>
      <p>De klachten kunnen variëren van:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>een hypertensief beeld;</li>
        <li>ernstige hypokaliëmie;</li>
        <li>spierzwakte;</li>
        <li>parese;</li>
        <li>zelfs rhabdomyolyse.</li>
      </ul>
      <p>
        Het mechanisme is dat glycyrrhizinezuur het nierenzym 11β-HSD2 remt. Normaal zet dit enzym cortisol om in cortison. Als dit niet goed gebeurt, blijft er meer cortisol over dat aan de mineralocorticoïdreceptor kan binden. Cortison zelf heeft daar juist een veel lagere affiniteit voor.
      </p>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          Aandachtspunt: waarom kan drop de bloeddruk verhogen?</p>
        <p className="mt-2">
          <span className="font-semibold">Kort antwoord:</span>{' '}door remming van 11β-HSD2 kan cortisol de mineralocorticoïdreceptor activeren, alsof er te veel aldosteron is.
        </p>
      </div>
    </div>
  )
}
