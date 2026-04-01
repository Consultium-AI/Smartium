export default function Sect11Stap3UitslagPreventie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Stap 3 van de genetische counseling: uitslag en adviezen
      </h2>
      <p>
        Wanneer de uitslag van het DNA-onderzoek bekend is, bespreek je die met de patiënt. Als er een pathogene variant
        in een BRCA-gen wordt gevonden, betekent dat dat er sprake is van een erfelijke aanleg voor borst- en
        eierstokkanker.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Autosomaal dominante overerving</h3>
      <p>BRCA2-varianten erven autosomaal dominant over. Dat betekent:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>voor elk kind, ongeacht het geslacht, is er 50% kans om de aanleg te erven;</li>
        <li>er is ook steeds 50% kans om de aanleg niet te erven;</li>
        <li>wie de aanleg niet erft, heeft ook geen verhoogd risico op kanker door die aanleg.</li>
      </ul>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 4. Preventieve controle bij BRCA2-dragers</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Leeftijd/aanbeveling
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Controle
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Vanaf 25 jaar</td>
              <td className="px-4 py-3 align-top">Jaarlijkse controle op de mammapoli + jaarlijkse MRI van de borsten</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Vanaf 30 jaar</td>
              <td className="px-4 py-3 align-top">Ook jaarlijkse mammografie</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Vrouwen van 60-75 jaar</td>
              <td className="px-4 py-3 align-top">
                Jaarlijkse controle op de mammapoli en jaarlijkse mammografie, eventueel afgewisseld met MRI bij hogere
                densiteit van het borstklierweefsel
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Mannen van 45-70 jaar</td>
              <td className="px-4 py-3 align-top">1 keer per 2 jaar PSA-bepaling via de huisarts</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Bij vrouwen met een BRCA2-aanleg is het risico op eierstokkanker sterk verhoogd. Omdat eierstokkanker moeilijk op
        te sporen is met beeldvorming of bloedonderzoek, is er een indicatie voor een preventieve risicoreducerende
        salpingo-oöforectomie (RRSO) rond de leeftijd van 40-45 jaar.
      </p>
      <p>
        Als een BRCA2-draagster zowel een bilaterale mastectomie als een RRSO heeft ondergaan, is het risico op borst- en
        eierstokkanker gereduceerd tot &lt;5% en zijn aanvullende controles niet meer geïndiceerd.
      </p>
      <p>
        Aandacht: waarom is de uitslag belangrijk vóór de operatie?{'  '}
        Mini-antwoord: omdat de uitslag invloed kan hebben op de keuze tussen borstsparend opereren of preventief ruimer
        opereren.
      </p>
      <p>
        Bij een hoge kans op een tweede borstkanker kan bijvoorbeeld gekozen worden voor een (preventieve) borstamputatie,
        eventueel met reconstructie, in plaats van een borstsparende operatie.
      </p>
    </div>
  )
}
