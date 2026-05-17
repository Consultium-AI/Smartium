export default function Sect08Behandeling() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Behandeling</h2>
      <p>De behandeling bestaat uit drie grote stappen:</p>
      <ol className="list-decimal pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">hemodynamische stabilisatie</strong>;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">diagnostiek</strong> om de bron te lokaliseren;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">gerichte behandeling</strong> van de oorzaak.
        </li>
      </ol>
      <p>Het klinisch beleid hangt sterk af van:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>de lokalisatie van de bloeding;</li>
        <li>de hemodynamische stabiliteit;</li>
        <li>comorbiditeit en medicatiegebruik.</li>
      </ul>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Niet-variceale hoge bloedingen</h3>
        <p className="mt-4">
          Bij een niet-variceale hoge bloeding, vooral bij een peptisch ulcus, vormen{' '}
          <strong className="text-slate-900 dark:text-slate-100">protonpompremmers (PPI&apos;s)</strong> de belangrijkste
          medicamenteuze behandeling. PPI&apos;s remmen de maagzuursecretie, waardoor:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>de intragastrische pH stijgt;</li>
          <li>het stolsel stabieler blijft;</li>
          <li>recidiefbloeding minder waarschijnlijk wordt;</li>
          <li>mucosaherstel wordt bevorderd.</li>
        </ul>
        <p className="mt-4">
          In de acute fase worden PPI&apos;s meestal <strong className="text-slate-900 dark:text-slate-100">intraveneus</strong>{' '}
          gegeven, vaak al vóór endoscopie. Na stabilisatie kan worden overgegaan op orale PPI-therapie.
        </p>
        <p className="mt-4">
          <strong className="text-slate-900 dark:text-slate-100">Aandachtsvraag:</strong> Waarom zijn PPI&apos;s nuttig bij
          een ulcusbloeding?
          <br />
          <strong className="text-slate-900 dark:text-slate-100">Kort antwoord:</strong> Door de pH te verhogen blijft het
          stolsel stabieler en neemt de kans op hernieuwde bloeding af.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Variceale bloedingen</h3>
        <p className="mt-4">
          Bij variceale bloedingen, die optreden bij portale hypertensie, is de pathofysiologie anders. Hier ontstaat de
          bloeding door ruptuur van gedilateerde veneuze collateralen, meestal slokdarm- of maagvarices.
        </p>
        <p className="mt-4">De behandeling bestaat uit:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>
            <strong className="text-slate-900 dark:text-slate-100">vasoactieve medicatie</strong> zoals octreotide;
          </li>
          <li>
            <strong className="text-slate-900 dark:text-slate-100">antibiotica</strong>;
          </li>
          <li>
            <strong className="text-slate-900 dark:text-slate-100">spoedendoscopie</strong>;
          </li>
          <li>
            endoscopische behandeling zoals <strong className="text-slate-900 dark:text-slate-100">rubberbandligatie</strong>{' '}
            bij oesofagusvarices;
          </li>
          <li>
            <strong className="text-slate-900 dark:text-slate-100">injectie met cyanoacrylaat</strong> bij maagvarices.
          </li>
        </ul>
        <p className="mt-4">
          Vasoactieve medicatie vermindert de splanchnische doorbloeding en verlaagt de portale druk. Deze behandeling wordt
          direct gestart bij verdenking op een varicesbloeding, nog vóór de endoscopie. Meestal wordt dit meerdere dagen
          voortgezet om het risico op vroege recidiefbloeding te beperken.
        </p>
        <p className="mt-4">
          Als overbrugging naar definitieve behandeling kan een tijdelijke{' '}
          <strong className="text-slate-900 dark:text-slate-100">ballon- of stenttamponade</strong> worden gebruikt, zoals
          de <strong className="text-slate-900 dark:text-slate-100">Ella-Danis-stent</strong>.
        </p>
        <p className="mt-4">
          Bij uitblijven van effect kan ook een <strong className="text-slate-900 dark:text-slate-100">TIPS</strong> worden
          geplaatst: een transjugulaire intrahepatische portosystemische shunt. Daarmee wordt de druk in de vena porta
          verlaagd via een verbinding tussen de vena porta en een levervene.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Endoscopische technieken</h3>
        <p className="mt-4">Bij niet-variceale bloedingen kunnen verschillende endoscopische technieken worden gebruikt:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>
            <strong className="text-slate-900 dark:text-slate-100">injectietherapie</strong>, bijvoorbeeld met adrenaline,
            voor vasoconstrictie en lokale tamponade;
          </li>
          <li>
            <strong className="text-slate-900 dark:text-slate-100">thermische coagulatie</strong>, waarbij warmte wordt
            gebruikt om het bloedvat te sluiten;
          </li>
          <li>
            <strong className="text-slate-900 dark:text-slate-100">mechanische hemostase</strong>, bijvoorbeeld met
            hemoclips.
          </li>
        </ul>
        <p className="mt-4">Bij varices zijn de specifieke technieken anders:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>
            <strong className="text-slate-900 dark:text-slate-100">rubberbandligatie</strong> bij oesofagusvarices;
          </li>
          <li>
            <strong className="text-slate-900 dark:text-slate-100">cyanoacrylaat</strong> bij maagvarices.
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Alternatieven als endoscopie niet voldoende is
        </h3>
        <p className="mt-4">
          Wanneer endoscopische behandeling geen hemostase bereikt, kunnen aanvullende interventies nodig zijn:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>
            <strong className="text-slate-900 dark:text-slate-100">angiografie met embolisatie</strong>: de bloedende
            vaatplek wordt opgespoord en dichtgemaakt;
          </li>
          <li>
            <strong className="text-slate-900 dark:text-slate-100">TIPS</strong> bij varicesbloeding;
          </li>
          <li>
            <strong className="text-slate-900 dark:text-slate-100">tijdelijke ballon- of stenttamponade</strong> als brug;
          </li>
          <li>
            <strong className="text-slate-900 dark:text-slate-100">chirurgie</strong> als laatste redmiddel.
          </li>
        </ul>
        <p className="mt-4">Chirurgie is vooral nodig bij:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>aanhoudende bloeding ondanks meerdere endoscopische interventies;</li>
          <li>hemodynamische instabiliteit met blijvende transfusiebehoefte;</li>
          <li>duidelijk gelokaliseerde bloeding die niet anders behandeld kan worden.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Lage tractus bloedingen</h3>
        <p className="mt-4">
          Bij lage tractusbloedingen speelt de colonoscopie een centrale rol in zowel diagnostiek als behandeling. Tijdens de
          colonoscopie kan de bron worden gelokaliseerd en kunnen technieken worden gebruikt zoals:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>
            <strong className="text-slate-900 dark:text-slate-100">hemoclips</strong>;
          </li>
          <li>
            <strong className="text-slate-900 dark:text-slate-100">thermische coagulatie</strong>;
          </li>
          <li>
            <strong className="text-slate-900 dark:text-slate-100">injectietherapie</strong>.
          </li>
        </ul>
        <p className="mt-4">
          Dit wordt bijvoorbeeld toegepast bij bloedingen door divertikels, angiodysplasieën of post-polypectomie-bloedingen.
        </p>
        <p className="mt-4">
          Als endoscopie de bloeding niet kan lokaliseren of behandelen, is radiologische interventie een volgende stap.
          Vaak wordt eerst een <strong className="text-slate-900 dark:text-slate-100">CT-angiografie</strong> gedaan. Bij
          actieve bloeding kan daarna een selectieve angiografie met embolisatie volgen.
        </p>
        <p className="mt-4">
          Chirurgie is tegenwoordig meestal het <strong className="text-slate-900 dark:text-slate-100">laatste redmiddel</strong>{' '}
          wanneer endoscopische en radiologische behandeling onvoldoende effectief zijn gebleken.
        </p>
      </div>
    </div>
  )
}
