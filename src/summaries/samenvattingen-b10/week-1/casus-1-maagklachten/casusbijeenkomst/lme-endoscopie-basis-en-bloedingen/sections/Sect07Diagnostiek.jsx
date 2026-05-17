export default function Sect07Diagnostiek() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Diagnostiek</h2>
      <p>
        De diagnostiek hangt af van de vermoedelijke locatie van de bloeding en van de stabiliteit van de patiënt.
      </p>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Laboratoriumonderzoek</h3>
        <p className="mt-4">
          Bij een acute bloeding wordt standaard laboratoriumonderzoek verricht om de ernst van het bloedverlies en mogelijke
          onderliggende aandoeningen te beoordelen. Het minimaal aanbevolen onderzoek omvat:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>hemoglobine en hematocriet;</li>
          <li>trombocyten;</li>
          <li>bloedgroep en rhesusfactor;</li>
          <li>kruislood;</li>
          <li>INR bij gebruik van coumarines;</li>
          <li>leverenzymen;</li>
          <li>ureum en creatinine.</li>
        </ul>
        <p className="mt-4">
          Het bepalen van bloedgroep en het aanvragen van kruislood is belangrijk om snel transfusie mogelijk te maken.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Gastroscopie</h3>
        <p className="mt-4">
          Bij verdenking op een hoge tractus bloeding is{' '}
          <strong className="text-slate-900 dark:text-slate-100">oesofagogastroduodenoscopie</strong> de belangrijkste
          diagnostische methode. Daarmee kun je:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>de bron van de bloeding identificeren;</li>
          <li>het type laesie vaststellen;</li>
          <li>direct endoscopisch behandelen.</li>
        </ul>
        <p className="mt-4">
          Bij een <strong className="text-slate-900 dark:text-slate-100">klinisch relevante bloeding</strong> wordt
          gastroscopie idealiter <strong className="text-slate-900 dark:text-slate-100">binnen 24 uur</strong> uitgevoerd.
          Een vroege endoscopie <strong className="text-slate-900 dark:text-slate-100">binnen 12 uur</strong> kan worden
          overwogen bij:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>hemodynamische instabiliteit;</li>
          <li>massale bloeding;</li>
          <li>ernstige comorbiditeit.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Colonoscopie</h3>
        <p className="mt-4">
          Bij verdenking op een lage tractus bloeding is <strong className="text-slate-900 dark:text-slate-100">coloscopie</strong>{' '}
          de belangrijkste diagnostische procedure. Die maakt het mogelijk om:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>divertikelbloedingen te identificeren;</li>
          <li>angiodysplasieën te detecteren;</li>
          <li>tumoren of inflammatoire afwijkingen vast te stellen.</li>
        </ul>
        <p className="mt-4">
          Een belangrijke voorwaarde is een <strong className="text-slate-900 dark:text-slate-100">adequate darmvoorbereiding</strong>.
          Een acute colonoscopie zonder goede voorbereiding heeft weinig diagnostische waarde.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">CT-angiografie</h3>
        <p className="mt-4">
          Bij actieve bloeding waarbij endoscopie geen duidelijke bron heeft aangetoond, is{' '}
          <strong className="text-slate-900 dark:text-slate-100">CT-angiografie</strong> een belangrijke aanvullende techniek.
          Deze kan:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>actieve extravasatie van contrast aantonen;</li>
          <li>de locatie van de bloeding lokaliseren;</li>
          <li>verdere interventies plannen.</li>
        </ul>
        <p className="mt-4">
          Bij hemodynamische instabiliteit en verdenking op een lage tractus bloeding wordt CT-angiografie als
          voorkeursdiagnostiek genoemd. Als actieve bloeding wordt gezien, kan vervolgens een{' '}
          <strong className="text-slate-900 dark:text-slate-100">angiografische interventie</strong> volgen. Daarbij kan de
          interventieradioloog het bloedende vat identificeren en een embolisatie uitvoeren.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Kleine darm</h3>
        <p className="mt-4">
          Bloedingen in de dunne darm zijn zeldzaam. In zulke gevallen kan{' '}
          <strong className="text-slate-900 dark:text-slate-100">enteroscopie</strong> worden uitgevoerd, bijvoorbeeld met
          een endoscoop met overtube en ballonnen.
        </p>
      </div>
    </div>
  )
}
