export default function Sect06Behandeling () {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Behandeling</h2>
      <p>
        Pancreascarcinoom moet je zien als een <strong className="text-slate-900 dark:text-slate-100">systemische ziekte</strong>. Zelfs bij een resectabele tumor is het niet genoeg om alleen te opereren. De behandeling richt zich daarom vooral op <strong className="text-slate-900 dark:text-slate-100">systemische therapie</strong>, waarbij chirurgie een belangrijke maar aanvullende rol heeft als dat mogelijk is.
      </p>
      <p>
        <strong className="text-slate-900 dark:text-slate-100">Neoadjuvant</strong> betekent: behandeling <strong className="text-slate-900 dark:text-slate-100">vóór</strong> de hoofdbehandeling, meestal om de tumor te verkleinen. <strong className="text-slate-900 dark:text-slate-100">Adjuvant</strong> betekent: behandeling <strong className="text-slate-900 dark:text-slate-100">na</strong> de hoofdbehandeling, om terugkeer van de tumor te voorkomen.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Behandeling per stadium</h3>
      <p>
        <strong className="text-slate-900 dark:text-slate-100">Tabel 3. Behandeling per stadium</strong>
      </p>
      <div className="overflow-x-auto rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-white/60 dark:bg-slate-900/40">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-600 text-left bg-slate-50/90 dark:bg-slate-800/60">
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Stadium</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Neoadjuvant</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Chirurgie</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Adjuvant</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Palliatief</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/80 dark:divide-slate-600/70">
            <tr>
              <td className="p-3 align-top">Resectabel</td>
              <td className="p-3 align-top">Soms, bij hoog-risicokenmerken of in studieverband</td>
              <td className="p-3 align-top">Ja, primaire resectie</td>
              <td className="p-3 align-top">Ja, standaard systemische chemotherapie</td>
              <td className="p-3 align-top">Niet primair</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Borderline resectabel</td>
              <td className="p-3 align-top">Ja, standaard</td>
              <td className="p-3 align-top">Ja, als na restaging resectabel</td>
              <td className="p-3 align-top">Soms, afhankelijk van type en duur neoadjuvante behandeling</td>
              <td className="p-3 align-top">Niet primair</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Locally advanced (LAPC)</td>
              <td className="p-3 align-top">Ja, inductiechemotherapie ± radiotherapie</td>
              <td className="p-3 align-top">{'Soms, alleen na succesvolle downs\u00ADtaging'}</td>
              <td className="p-3 align-top">Soms, zoals bij borderline</td>
              <td className="p-3 align-top">Ja, als de tumor niet resectabel blijft</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Gemetastaseerd</td>
              <td className="p-3 align-top">Nee</td>
              <td className="p-3 align-top">Nee</td>
              <td className="p-3 align-top">Nee</td>
              <td className="p-3 align-top">Ja, systemische chemotherapie + symptoomgerichte interventies</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Chemotherapie</h3>
      <p>
        Chemotherapie is in alle stadia een essentieel onderdeel van de behandeling. <strong className="text-slate-900 dark:text-slate-100">Combinatiechemotherapie</strong> geeft doorgaans een betere overleving dan monotherapie, maar gaat ook gepaard met meer toxiciteit, meer kans op behandeluitval en meer invloed op de kwaliteit van leven. Daarom is <strong className="text-slate-900 dark:text-slate-100">shared decision making</strong> belangrijk, waarbij je rekening houdt met conditie, leeftijd, comorbiditeit en voorkeuren van de patiënt.
      </p>
      <p>
        Bij een <strong className="text-slate-900 dark:text-slate-100">resectabele</strong> tumor wordt na de operatie standaard <strong className="text-slate-900 dark:text-slate-100">adjuvante chemotherapie</strong> gegeven. Het doel is de kans op <strong className="text-slate-900 dark:text-slate-100">lokaal recidief</strong> en <strong className="text-slate-900 dark:text-slate-100">metastasen</strong> verkleinen. De geadviseerde totale duur van systemische behandeling, dus neoadjuvant plus adjuvant samen, bedraagt in principe <strong className="text-slate-900 dark:text-slate-100">zes maanden</strong>.
      </p>
      <p>
        Bij <strong className="text-slate-900 dark:text-slate-100">borderline resectabele</strong> tumoren is neoadjuvante behandeling standaard, bijvoorbeeld <strong className="text-slate-900 dark:text-slate-100">FOLFIRINOX</strong> of <strong className="text-slate-900 dark:text-slate-100">gemcitabine-chemoradiotherapie</strong>. Daarna volgt opnieuw beoordeling of resectie mogelijk is.
      </p>
      <p>
        Bij <strong className="text-slate-900 dark:text-slate-100">locally advanced</strong> pancreascarcinoom wordt meestal begonnen met <strong className="text-slate-900 dark:text-slate-100">inductiechemotherapie</strong>, eventueel gecombineerd met radiotherapie. Alleen als de tumor na behandeling voldoende verkleint, komt chirurgie soms alsnog in beeld.
      </p>
      <p>
        Bij <strong className="text-slate-900 dark:text-slate-100">gemetastaseerde</strong> ziekte is de behandeling palliatief: <strong className="text-slate-900 dark:text-slate-100">systemische chemotherapie</strong> en klachtenverlichting.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Radiotherapie</h3>
      <p>
        Radiotherapie heeft geen grote rol in de adjuvante setting bij resectabel pancreascarcinoom; eerdere studies lieten daar geen verbetering in overleving zien. Bij <strong className="text-slate-900 dark:text-slate-100">gemetastaseerde</strong> ziekte heeft radiotherapie geen standaard rol, behalve eventueel <strong className="text-slate-900 dark:text-slate-100">palliatieve bestraling</strong> van botmetastasen bij pijn. Bij <strong className="text-slate-900 dark:text-slate-100">locally advanced</strong> ziekte kan radiotherapie soms aanvullend na chemotherapie worden ingezet, bijvoorbeeld als <strong className="text-slate-900 dark:text-slate-100">SBRT</strong>. Bij <strong className="text-slate-900 dark:text-slate-100">borderline resectabele</strong> tumoren kan in combinatie met chemo neoadjuvante chemoradiotherapie worden overwogen.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Chirurgie</h3>
      <p>Het type resectie hangt af van de lokalisatie van de tumor:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Whipple-operatie</strong>: bij tumor in de <strong className="text-slate-900 dark:text-slate-100">pancreaskop</strong> of{' '}
          <strong className="text-slate-900 dark:text-slate-100">processus uncinatus</strong>.
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Distale pancreatectomie</strong>: bij tumor in{' '}
          <strong className="text-slate-900 dark:text-slate-100">pancreascorpus/staart</strong>.
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Totale pancreatectomie</strong>: bij een multifocale tumor of als andere opties door ligging niet veilig zijn; dit is zeldzaam.
        </li>
      </ul>
      <p>
        Chirurgie brengt een hoog risico op complicaties en langdurige problemen met zich mee. Belangrijke complicaties zijn <strong className="text-slate-900 dark:text-slate-100">pancreasfistel</strong>, <strong className="text-slate-900 dark:text-slate-100">vertraagde maagontlediging</strong>, <strong className="text-slate-900 dark:text-slate-100">bloeding</strong> en <strong className="text-slate-900 dark:text-slate-100">infecties</strong>. Langetermijnproblemen zijn onder andere <strong className="text-slate-900 dark:text-slate-100">diabetes</strong>, <strong className="text-slate-900 dark:text-slate-100">vetmalabsorptie</strong>,{' '}
        <strong className="text-slate-900 dark:text-slate-100">gewichtsverlies</strong>, <strong className="text-slate-900 dark:text-slate-100">diarree</strong>, <strong className="text-slate-900 dark:text-slate-100">dumpingsyndroom</strong>, <strong className="text-slate-900 dark:text-slate-100">galwegstricturen</strong> en <strong className="text-slate-900 dark:text-slate-100">chronische pijn</strong>.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Symptoomgerichte zorg</h3>
      <p>Behandeling bestaat niet alleen uit chemo of operatie, maar ook uit klachtenverlichting:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Geelzucht</strong>: interne drainage met een <strong className="text-slate-900 dark:text-slate-100">stent</strong> in de galweg via <strong className="text-slate-900 dark:text-slate-100">ERCP</strong>; vaak gaat het om een metalen stent.
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Cholestatische jeuk</strong>: <strong className="text-slate-900 dark:text-slate-100">cholestyramine</strong>, <strong className="text-slate-900 dark:text-slate-100">rifampicine</strong> en goede huidverzorging, zoals vette crèmes of koele zalven.
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Pijn</strong>: pijnstilling; soms palliatieve bestraling bij botmetastasen.
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Malabsorptie</strong>: <strong className="text-slate-900 dark:text-slate-100">pancreasenzymen</strong> zoals <strong className="text-slate-900 dark:text-slate-100">Creon</strong>, om exocriene pancreasinsufficiëntie en vetmalabsorptie te verminderen.
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Cachexie</strong>: begeleiding door een diëtist, vaak extra voeding, en soms sondevoeding wanneer dit tijdelijk nodig is en bijvoorbeeld naar een operatie of chemotherapie wordt toegewerkt.
        </li>
      </ul>
      <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100">Behandeling van cholestase</h4>
      <p>
        De geelzucht ontstaat door druk van het pancreaskopcarcinoom op de galweg. Met <strong className="text-slate-900 dark:text-slate-100">ERCP</strong> kan een <strong className="text-slate-900 dark:text-slate-100">stent</strong> worden geplaatst om de galafvloed te herstellen en zo de cholestase te verminderen.
      </p>
    </div>
  )
}
