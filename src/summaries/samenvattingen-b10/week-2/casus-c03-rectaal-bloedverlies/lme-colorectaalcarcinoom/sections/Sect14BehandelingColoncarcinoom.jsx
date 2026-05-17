export default function Sect14BehandelingColoncarcinoom() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Behandeling van coloncarcinoom</h2>
      <p>De behandeling hangt af van het stadium.</p>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">T1-tumor</h3>
        <p className="mt-4">
          Bij voorkeur wordt een T1-tumor minimaal invasief, endoscopisch verwijderd. Aanvullende behandeling hangt af van
          de histologie.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">T2-3</h3>
        <p className="mt-4">Bij T2-3 volgt meestal primaire resectie met daarna adjuvante chemotherapie.</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">T4</h3>
        <p className="mt-4">
          Bij T4-tumoren wordt vaak eerst neoadjuvante systemische therapie gegeven, dus chemo of immunotherapie vóór de
          operatie. Het doel is:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>kans op een radicale resectie verhogen;</li>
          <li>kans op micrometastasen verlagen.</li>
        </ul>
        <p className="mt-4">
          Als de tumor daarna nog resectabel is, volgt alsnog adjuvante chemotherapie.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">M1</h3>
        <p className="mt-4">Bij M1-ziekte is de behandeling meestal:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>palliatieve systemische therapie;</li>
          <li>best supportive care;</li>
          <li>ingreep alleen ter decompressie bij obstructie;</li>
          <li>
            eventueel een colonstent, vooral linkszijdig, of een ontlastend ileo- of colostoma.
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Chirurgie bij coloncarcinoom</h3>
        <p className="mt-4">Bij coloncarcinoom hangt de uitgebreidheid van de resectie af van:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>de locatie;</li>
          <li>de betrokken lymfeklieren;</li>
          <li>eventuele doorgroei in omliggende organen.</li>
        </ul>
        <p className="mt-4">Mogelijke operaties zijn:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>hemicolectomie rechts of links;</li>
          <li>subtotal colectomie;</li>
          <li>totale colectomie.</li>
        </ul>
        <p className="mt-4">
          Bij acute obstructie kan een spoedoperatie nodig zijn met een ontlastend stoma. Directe oncologische resectie
          met primaire anastomose kan soms ook, maar een stent heeft in curatieve opzet niet de voorkeur vanwege risico op
          perforatie en seeding.
        </p>
        <p className="mt-4">
          De ingreep gebeurt bij voorkeur minimaal invasief, meestal via laparoscopie. Ondanks voorafgaande beeldvorming
          inspecteert de chirurg de buikholte altijd goed om te beoordelen of de operatie curatief is.
        </p>
        <p className="mt-4">Bij speciale risicogroepen gelden soms andere richtlijnen, bijvoorbeeld:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>colitis ulcerosa: subtotale colectomie;</li>
          <li>Lynch: (sub)totale colectomie.</li>
        </ul>
      </div>
    </div>
  )
}
