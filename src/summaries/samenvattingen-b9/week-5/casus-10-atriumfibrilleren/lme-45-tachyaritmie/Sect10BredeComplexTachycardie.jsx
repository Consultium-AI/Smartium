export default function Sect10BredeComplexTachycardie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Brede complex tachycardie: VT of aberrantie?</h2>
      <p>
        Een regelmatige tachycardie met een <span className="font-semibold">breed QRS-complex</span> is een belangrijk dilemma. De eerste reflex moet zijn: <span className="font-semibold">denk aan VT</span>. Meer dan <span className="font-semibold">80%</span> van de breed-complex tachycardieën is een VT. Bij een voorgeschiedenis van een myocardinfarct is dat zelfs in meer dan <span className="font-semibold">95%</span> van de gevallen zo.
      </p>
      <p>
        Daarom geldt de praktische regel: <span className="font-semibold">breed en snel is VT totdat het tegendeel bewezen is</span>.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Tekenen die op VT wijzen</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-semibold">AV-dissociatie</span>
        </li>
        <li>
          <span className="font-semibold">capture beats</span>
        </li>
        <li>
          <span className="font-semibold">fusion beats</span>
        </li>
        <li>
          <span className="font-semibold">concordantie</span> in de borstwandafleidingen
        </li>
        <li>
          extreem breed QRS: {'>'}{' '}
          <span className="font-semibold">140 ms</span> bij RBTB-vorm of {'>'}{' '}
          <span className="font-semibold">160 ms</span> bij LBTB-vorm
        </li>
      </ul>
      <p>
        <span className="font-semibold">Aandacht-vraag:</span> wat doe je bij twijfel tussen VT en SVT met aberrantie?{' '}
        <br />
        <span className="font-semibold">Mini-antwoord:</span> behandel als VT; een VT onterecht als SVT behandelen kan gevaarlijk zijn.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Monomorfe VT</h3>
      <p>
        Bij monomorfe VT zien alle QRS-complexen er hetzelfde uit en is het ritme regelmatig. De oorzaak is meestal <span className="font-semibold">re-entry rondom een oud litteken</span>, bijvoorbeeld na een myocardinfarct.
      </p>
      <p>
        <span className="font-semibold">Behandeling:</span>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-semibold">instabiel:</span> gesynchroniseerde cardioversie
        </li>
        <li>
          <span className="font-semibold">stabiel:</span> <span className="font-semibold">amiodaron</span>
        </li>
        <li>
          <span className="font-semibold">lange termijn:</span> <span className="font-semibold">ICD</span> en/of ablatie van littekenweefsel
        </li>
      </ul>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Polymorfe VT en torsades de pointes</h3>
      <p>
        Polymorfe VT, met name <span className="font-semibold">torsades de pointes</span>, is onregelmatig en chaotisch. Dit past vaak bij een <span className="font-semibold">verlengd QT-interval</span> en wordt veroorzaakt door <span className="font-semibold">triggered activity</span>.
      </p>
      <p>Oorzaken zijn onder andere:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          medicatie zoals <span className="font-semibold">sotalol</span>, bepaalde antibiotica en antipsychotica
        </li>
        <li>
          elektrolytstoornissen, vooral laag <span className="font-semibold">kalium</span> of <span className="font-semibold">magnesium</span>
        </li>
        <li>
          aangeboren <span className="font-semibold">Lange QT-syndromen</span>
        </li>
      </ul>
      <p>Behandeling:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-semibold">magnesiumsulfaat i.v.</span> als eerste keus, ook bij normale magnesiumspiegels
        </li>
        <li>stoppen van QT-verlengende medicatie</li>
        <li>
          <span className="font-semibold">kalium corrigeren</span> naar hoog-normaal
        </li>
        <li>
          <span className="font-semibold">overdrive pacing</span> kan helpen door de hartslag te verhogen
        </li>
      </ul>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Ventrikelfibrilleren</h3>
      <p>
        <span className="font-semibold">Ventrikelfibrilleren</span> is een chaotisch ritme zonder herkenbare complexen en zonder effectieve output. Oorzaken zijn onder meer <span className="font-semibold">acute ischemie</span>, elektrolytstoornissen of degeneratie van een onbehandelde VT.
      </p>
      <p>Behandeling:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-semibold">defibrillatie</span> zonder synchronisatie
        </li>
        <li>
          <span className="font-semibold">reanimatie volgens ALS-protocol</span>
        </li>
      </ul>
    </div>
  )
}
