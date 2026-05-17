export default function Sect09Behandeling() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Behandeling</h2>
      <p>De behandeling bestaat uit drie hoofdprincipes:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Hemodynamische stabilisatie van de patiënt.</li>
        <li>Diagnostiek om de bron van de bloeding te lokaliseren.</li>
        <li>Gerichte behandeling van de onderliggende oorzaak.</li>
      </ul>
      <p>
        Omdat patiënten zich vaak acuut presenteren met bloedverlies, gaat stabilisatie altijd vóór definitieve diagnostiek.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Niet-variceale hoge tractus bloedingen</h3>
      <p>
        Bij niet-variceale bloedingen, bijvoorbeeld door een peptisch ulcus, spelen protonpompremmers (PPI’s) een centrale
        rol. PPI’s remmen de maagzuursecretie door irreversibele inhibitie van de H+/K+-ATPase in de pariëtale cel.
        Daardoor stijgt de intragastrische pH, wat de hemostase bevordert. Het stolsel blijft stabieler, de fibrinolyse
        wordt minder bevorderd en de mucosa kan beter herstellen.
      </p>
      <p>
        In de acute fase worden PPI’s meestal intraveneus gegeven, vaak voorafgaand aan endoscopie. Na stabilisatie kan de
        behandeling worden voortgezet met orale PPI-therapie.
      </p>
      <p>Endoscopische technieken bij niet-variceale bloedingen zijn onder andere:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>injectietherapie, bijvoorbeeld met adrenaline;</li>
        <li>thermische coagulatie;</li>
        <li>mechanische hemostase, zoals hemoclips.</li>
      </ul>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Variceale bloedingen</h3>
      <p>
        Bij variceale bloedingen is de pathofysiologie anders. De bloeding ontstaat door ruptuur van gedilateerde veneuze
        collateralen, meestal als gevolg van portale hypertensie bij levercirrose.
      </p>
      <p>
        Hier zijn vasoactieve medicatie en endoscopische behandeling essentieel. Een belangrijk middel is octreotide, een
        somatostatine-analoog dat de splanchnische bloedstroom vermindert en daarmee de portale druk verlaagt. Bij
        verdenking op een varicesbloeding wordt deze medicatie direct gestart, al vóór endoscopie. De behandeling wordt
        meestal enkele dagen voortgezet om vroege recidiefbloeding te beperken.
      </p>
      <p>Daarnaast worden ook antibiotica gegeven en volgt spoedendoscopie.</p>
      <p>Endoscopische behandeling van varices bestaat uit:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>rubberbandligatie bij oesofagusvarices;</li>
        <li>injectie met cyanoacrylaat bij maagvarices.</li>
      </ul>
      <p>Bij falen of onvoldoende effect kunnen aanvullende interventies nodig zijn, zoals:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>angiografie met embolisatie;</li>
        <li>plaatsing van een TIPS;</li>
        <li>
          tijdelijke ballon- of stenttamponade als overbrugging, bijvoorbeeld met een Ella-Danis stent;
        </li>
        <li>chirurgie als laatste redmiddel.</li>
      </ul>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Lage tractus bloedingen</h3>
      <p>
        Bij lage tractus bloedingen speelt colonoscopie een centrale rol in diagnostiek en behandeling, meestal nadat de
        darm goed is voorbereid. Tijdens de colonoscopie kan de bron worden gelokaliseerd en kunnen verschillende
        technieken worden gebruikt, zoals:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>hemoclips;</li>
        <li>thermische coagulatie;</li>
        <li>injectietherapie.</li>
      </ul>
      <p>
        Deze technieken worden bijvoorbeeld toegepast bij divertikelbloedingen, angiodysplasieën of
        post-polypectomie-bloedingen.
      </p>
      <p>
        Als endoscopie de bloeding niet kan lokaliseren of behandelen, kan radiologische interventie worden overwogen.
        Vaak volgt dan eerst CT-angiografie om de exacte locatie vast te stellen. Bij actieve bloeding kan vervolgens een
        selectieve angiografie met embolisatie worden uitgevoerd.
      </p>
      <p>Chirurgie is tegenwoordig vooral een laatste behandeloptie, bijvoorbeeld bij:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>aanhoudende bloeding ondanks meerdere endoscopische interventies;</li>
        <li>hemodynamische instabiliteit met blijvende transfusiebehoefte;</li>
        <li>duidelijk gelokaliseerde bloeding die niet anders behandeld kan worden.</li>
      </ul>
    </div>
  )
}
