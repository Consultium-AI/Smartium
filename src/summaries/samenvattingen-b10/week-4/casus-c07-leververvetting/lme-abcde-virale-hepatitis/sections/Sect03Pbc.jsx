export default function Sect03Pbc() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Primaire biliaire cholangitis (PBC)</h2>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Wat is PBC?</h3>
      <p>
        PBC is een chronische auto-immuunziekte van de lever waarbij vooral de <strong className="text-slate-900 dark:text-slate-100">kleine galwegen binnen de lever</strong>{' '}
        worden aangetast. De ziekte komt vooral voor bij <strong className="text-slate-900 dark:text-slate-100">vrouwen</strong>: ongeveer <strong className="text-slate-900 dark:text-slate-100">80%</strong> van de patiënten is vrouw. Wereldwijd wordt geschat dat ongeveer <strong className="text-slate-900 dark:text-slate-100">1 op de 1000 vrouwen boven de 40 jaar</strong> PBC heeft. In Nederland is het exacte aantal onbekend, maar er wordt gedacht aan ongeveer <strong className="text-slate-900 dark:text-slate-100">4000 patiënten</strong>.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Ontstaan en pathofysiologie</h3>
      <p>Bij PBC is er schade aan de galwegen door een interactie tussen:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          het <strong className="text-slate-900 dark:text-slate-100">immuunsysteem</strong>;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">toxische galcomponenten</strong>;
        </li>
        <li>
          het <strong className="text-slate-900 dark:text-slate-100">galwegepitheel</strong>.
        </li>
      </ul>
      <p>
        Een belangrijke gedachte is dat een verzwakte epitheelbescherming tegen toxische galzuren, onder andere door verstoorde <strong className="text-slate-900 dark:text-slate-100">bicarbonaatafscheiding</strong>, samen met een continue immuunreactie van cytotoxische T-cellen leidt tot schade aan de galwegcellen. Dit veroorzaakt:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">progressieve cholestase</strong>;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">ductopenie</strong>: afname van het aantal galwegen;
        </li>
        <li>
          uiteindelijk <strong className="text-slate-900 dark:text-slate-100">fibrose</strong>.
        </li>
      </ul>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Klinische presentatie en laboratorium</h3>
      <p>
        PBC presenteert zich vaak als een <strong className="text-slate-900 dark:text-slate-100">cholestatisch</strong> leverbeeld. Dat betekent dat de galafvloed verstoord is. Je denkt dan vooral aan:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          verhoogde <strong className="text-slate-900 dark:text-slate-100">alkalische fosfatase (AF/ALP)</strong>;
        </li>
        <li>
          verhoogde <strong className="text-slate-900 dark:text-slate-100">gamma-GT</strong>;
        </li>
        <li>
          vaak ook <strong className="text-slate-900 dark:text-slate-100">jeuk</strong> en <strong className="text-slate-900 dark:text-slate-100">vermoeidheid</strong>.
        </li>
      </ul>
      <p>
        Soms is er pas later sprake van <strong className="text-slate-900 dark:text-slate-100">icterus</strong> door hyperbilirubinemie.
      </p>

      <div className="rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-slate-50/80 dark:bg-slate-800/50 p-4 space-y-3 border-l-4 border-indigo-400 dark:border-indigo-500/85">
        <p>
          <strong className="font-semibold text-slate-900 dark:text-slate-100">Aandachtsvraag:</strong>{' '}
          <em className="text-slate-800 dark:text-slate-200">Welk labpatroon past het best bij PBC?</em>
        </p>
        <p>
          <strong className="font-semibold text-slate-900 dark:text-slate-100">Mini-antwoord:</strong> vooral een <strong className="text-slate-900 dark:text-slate-100">cholestatisch patroon</strong> met hoge <strong className="text-slate-900 dark:text-slate-100">ALP</strong> en <strong className="text-slate-900 dark:text-slate-100">GGT</strong>, plus vaak <strong className="text-slate-900 dark:text-slate-100">AMA-positiviteit</strong>.
        </p>
      </div>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Diagnostiek</h3>
      <p>De diagnose PBC wordt gesteld op basis van een combinatie van:</p>
      <ol className="list-decimal pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Geen andere leverziekte</strong>;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Geen aanwijzingen voor extra-hepatische galwegobstructie</strong> op beeldvorming;
        </li>
        <li>
          Minstens <strong className="text-slate-900 dark:text-slate-100">2 van de volgende 3</strong> punten:
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>
              <strong className="text-slate-900 dark:text-slate-100">AMA-positief</strong> met titer <strong className="text-slate-900 dark:text-slate-100">≥ 1:40</strong> of PBC-specifieke ANA;
            </li>
            <li>
              <strong className="text-slate-900 dark:text-slate-100">verhoogde alkalische fosfatase</strong>;
            </li>
            <li>
              <strong className="text-slate-900 dark:text-slate-100">histologie passend bij PBC</strong> als AMA en PBC-specifieke ANA negatief zijn, bijvoorbeeld granulomateuze cholangitis, florid duct lesions of ductopenie met vooral lymfatische infiltratie.
            </li>
          </ul>
        </li>
      </ol>
      <p>
        Het belangrijkste antistofprofiel is dus <strong className="text-slate-900 dark:text-slate-100">AMA</strong>, gericht tegen onder andere <strong className="text-slate-900 dark:text-slate-100">PDC-E2</strong>. Andere auto-antistoffen kunnen ook positief zijn, maar de diagnose rust vooral op het totaalplaatje.
      </p>
      <p>
        Een <strong className="text-slate-900 dark:text-slate-100">leverbiopsie</strong> wordt niet routinematig aangeraden, maar kan wel nuttig zijn voor het bepalen van het <strong className="text-slate-900 dark:text-slate-100">stadium</strong>. Dat stadium kan ook met <strong className="text-slate-900 dark:text-slate-100">niet-invasieve methoden</strong> worden ingeschat, zoals een <strong className="text-slate-900 dark:text-slate-100">leverstijfheidsmeting</strong>.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Behandeling</h3>
      <p>
        De eerste keuze behandeling is <strong className="text-slate-900 dark:text-slate-100">ursodeoxycholzuur (UDCA)</strong> in een dosering van <strong className="text-slate-900 dark:text-slate-100">13–15 mg/kg/dag</strong>. Het doel van behandeling is niet genezing, maar het <strong className="text-slate-900 dark:text-slate-100">vertragen of voorkomen van ziekteprogressie</strong> en daarmee het verbeteren van de levensverwachting.
      </p>
      <p>
        Als het effect van UDCA onvoldoende is, kan <strong className="text-slate-900 dark:text-slate-100">bezafibraat</strong> worden overwogen als aanvullende therapie. Ook <strong className="text-slate-900 dark:text-slate-100">FXR-agonisten</strong> en <strong className="text-slate-900 dark:text-slate-100">PPAR-agonisten</strong> worden genoemd als mogelijkheden bij onvoldoende respons.
      </p>
      <p>
        Een <strong className="text-slate-900 dark:text-slate-100">levertransplantatie</strong> is de enige behandeling die PBC kan genezen, maar dit is zeldzaam. Indicaties zijn onder andere:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Child-Pugh score ≥ 8</strong>;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">MELD score &gt; 15</strong>;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">therapieresistente ernstige jeuk</strong>;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">hepatocellulair carcinoom</strong>.
        </li>
      </ul>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Prognose en follow-up</h3>
      <p>
        Het beloop van PBC is variabel. Na behandeling met UDCA wordt een <strong className="text-slate-900 dark:text-slate-100">10-jaars-overleving van 80%</strong> genoemd. Voor de follow-up worden gebruikt:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">biochemie</strong>;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">leverstijfheidsmetingen</strong>.
        </li>
      </ul>
      <p>Bij de beoordeling van risico en prognose wordt vooral gekeken naar:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>leeftijd bij diagnose;</li>
        <li>ziektestadium;</li>
        <li>
          hoogte van <strong className="text-slate-900 dark:text-slate-100">ALP</strong>, <strong className="text-slate-900 dark:text-slate-100">ASAT</strong> en <strong className="text-slate-900 dark:text-slate-100">bilirubine</strong>.
        </li>
      </ul>
    </div>
  )
}
