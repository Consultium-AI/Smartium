export default function SectDiagnostiek() {
  return (
    <div className="space-y-10 text-slate-700 dark:text-slate-300 leading-relaxed">
      <div className="text-center mb-8">
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 tracking-wide">DIAGNOSTIEK</h2>
      </div>

      <section className="space-y-4">
        <h3 className="text-lg font-bold text-primary-900 dark:text-primary-200">Laboratoriumonderzoek</h3>
        <p>
          Bij een acute GI-bloeding wordt standaard laboratoriumonderzoek verricht om de ernst van het bloedverlies en mogelijke onderliggende aandoeningen te beoordelen.
        </p>
        <p>
          Het minimaal aanbevolen laboratoriumonderzoek omvat: hemoglobine en hematocriet, trombocyten, bloedgroep en rhesusfactor, kruisbloed, INR bij gebruik van coumarines, leverenzymen, ureum en creatinine.
        </p>
        <p>
          Het bepalen van de bloedgroep en het aanvragen van kruisbloed is belangrijk om snelle transfusie mogelijk te maken indien nodig.
        </p>
      </section>

      <section className="space-y-4 border-t border-slate-200 dark:border-slate-700 pt-8">
        <h3 className="text-lg font-bold text-primary-900 dark:text-primary-200">Gastroscopie</h3>
        <p>
          De belangrijkste diagnostische methode bij verdenking op een hoge tractus bloeding is een oesofagogastroduodenoscopie (vaak simpelweg: gastroscopie).
        </p>
        <p>Deze procedure maakt het mogelijk om:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>de bron van de bloeding te identificeren;</li>
          <li>het type laesie vast te stellen;</li>
          <li>direct endoscopische behandeling uit te voeren.</li>
        </ul>
        <p>
          Volgens de richtlijn dient een gastroscopie bij een klinisch relevante bloeding binnen 24 uur te worden verricht.
        </p>
        <p>Een vroege endoscopie binnen 12 uur kan worden overwogen bij patiënten met:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>hemodynamische instabiliteit;</li>
          <li>massale bloeding;</li>
          <li>ernstige comorbiditeit.</li>
        </ul>
      </section>

      <section className="space-y-4 border-t border-slate-200 dark:border-slate-700 pt-8">
        <h3 className="text-lg font-bold text-primary-900 dark:text-primary-200">Colonoscopie</h3>
        <p>
          Bij verdenking op een lage tractus bloeding is een colonoscopie de belangrijkste diagnostische procedure. De colonoscopie maakt het mogelijk om:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>divertikelbloedingen te identificeren;</li>
          <li>angiodysplasieën te detecteren;</li>
          <li>tumoren of inflammatoire afwijkingen vast te stellen.</li>
        </ul>
        <p>
          Een belangrijke voorwaarde voor een succesvolle colonoscopie is een adequate darmvoorbereiding. Volgens de richtlijn heeft een acute colonoscopie zonder adequate voorbereiding weinig diagnostische waarde.
        </p>
      </section>

      <section className="space-y-4 border-t border-slate-200 dark:border-slate-700 pt-8">
        <h3 className="text-lg font-bold text-primary-900 dark:text-primary-200">CT-angiografie</h3>
        <p>
          CT-angiografie is een belangrijke aanvullende diagnostische techniek bij patiënten met een actieve bloeding waarbij endoscopie geen duidelijke bron heeft aangetoond.
        </p>
        <p>Deze methode kan:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>actieve extravasatie van contrast aantonen;</li>
          <li>de locatie van de bloeding lokaliseren;</li>
          <li>verdere interventies plannen.</li>
        </ul>
        <p>
          Bij patiënten met hemodynamische instabiliteit en verdenking op een lage tractus bloeding wordt CT-angiografie in de richtlijn als voorkeursdiagnostiek genoemd. Wanneer een actieve bloeding wordt vastgesteld, kan een{' '}
          <strong>angiografische interventie</strong> worden uitgevoerd. Tijdens angiografie kan de interventieradioloog: het bloedende vat identificeren en een embolisatie uitvoeren.
        </p>
        <p>
          Embolisatie wordt uitgevoerd door het plaatsen van: coils, of embolisatiepartikels. Deze techniek kan vooral effectief zijn wanneer endoscopische behandeling niet mogelijk of niet succesvol is gebleken
        </p>
      </section>
    </div>
  )
}
