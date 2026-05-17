export default function SectBehandeling3() {
  return (
    <div className="space-y-10 text-slate-700 dark:text-slate-300 leading-relaxed">
      <div className="text-center lg:text-left">
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">BEHANDELING (3)</h2>
      </div>
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="space-y-8">
          <section className="space-y-3">
            <h3 className="font-bold text-slate-900 dark:text-slate-100">Behandeling van hoge tractus bloedingen - endoscopie</h3>
            <p>
              Bij patiënten met een vermoeden van een hoge tractus digestivusbloeding is oesofagogastroduodenoscopie (gastroscopie) het diagnostische en therapeutische onderzoek van eerste keuze. Deze procedure wordt bij voorkeur binnen 24 uur na presentatie uitgevoerd, of eerder bij patiënten met een ernstige bloeding of hemodynamische instabiliteit. Tijdens de endoscopie kan de bron van de bloeding worden gelokaliseerd en zo nodig direct worden behandeld met verschillende technieken om hemostase te bereiken.
            </p>
          </section>
          <section className="space-y-3">
            <h4 className="font-bold text-primary-900 dark:text-primary-200">Endoscopische behandeling bij niet-variceale bloedingen</h4>
            <p>Bij bloedingen door bijvoorbeeld een peptisch ulcus kunnen verschillende endoscopische technieken worden toegepast:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Injectietherapie</strong>, bijvoorbeeld met adrenaline, om vasoconstrictie en lokale tamponade te veroorzaken
              </li>
              <li>
                <strong>Thermische coagulatie</strong>, waarbij warmte wordt gebruikt om het bloedvat te sluiten
              </li>
              <li>
                <strong>Mechanische hemostase</strong>, zoals het plaatsen van hemoclips.
              </li>
            </ul>
            <p>
              Deze technieken kunnen afzonderlijk of in combinatie worden gebruikt om de bloeding te stoppen en het risico op recidiefbloeding te verminderen.
            </p>
          </section>
          <section className="space-y-3">
            <h4 className="font-bold text-primary-900 dark:text-primary-200">Endoscopische behandeling bij varicesbloedingen</h4>
            <p>Bij bloedingen uit oesofagus- of maagvarices worden specifieke endoscopische technieken toegepast:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Rubberbandligatie</strong> bij oesofagusvarices;
              </li>
              <li>
                <strong>Injectie met cyanoacrylaat</strong> bij maagvarices.
              </li>
            </ul>
          </section>
        </div>
        <aside className="space-y-6 rounded-xl border border-slate-200/90 dark:border-slate-700/90 bg-slate-50 dark:bg-slate-900/50 p-4 text-sm">
          <section>
            <h3 className="font-bold mb-2 text-slate-900 dark:text-slate-100">Therapie varices bloeding</h3>
            <p>Rubberen bandjes (Rubber band ligation)</p>
            <p>Lijm (histoacryl)</p>
            <ul className="list-disc pl-5 mt-3 space-y-1 text-sm">
              <li>Audible venous Doppler signal absent or greatly diminished</li>
              <li>Consistency: Soft</li>
              <li>Bloodflow: +/-</li>
            </ul>
          </section>
          <section>
            <h3 className="font-bold mb-2 text-slate-900 dark:text-slate-100">Voorbeelden</h3>
            <p>Behandeling varicesbloeding</p>
            <p>Behandeling ulcusbloeding</p>
          </section>
        </aside>
      </div>
    </div>
  )
}
