export default function Sect07Watertransport() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Ziekten van het watertransport en cysteuze nierziekten</h2>
      <p>
        Normaal wordt water in de verzamelbuis teruggeresorbeerd onder invloed van ADH. ADH heet ook arginine vasopressine (AVP). Als ADH de V2-receptor stimuleert, stijgt de cAMP-productie en worden nieuwe waterkanalen, vooral aquaporine-2, aangemaakt. Daardoor kan de nier meer water terugresorberen. De oude term diabetes insipidus is verwarrend, omdat 'insipidus' smaakloos betekent en het woord lijkt op diabetes mellitus. Daarom wordt tegenwoordig liever gesproken van AVP-deficiëntie en AVP-resistentie. In de erfelijke nierziekten hier gaat het om AVP-resistentie.
      </p>
      <p className="font-medium text-slate-800 dark:text-slate-200">Tabel 4. Watertransport en cysteuze nierziekten</p>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Groep</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Mechanisme</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Kliniek en behandeling</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-medium">AVP-resistentie</td>
              <td className="px-4 py-3 align-top">Mutatie in de V2-receptor of in aquaporine-2; waterreabsorptie lukt niet goed</td>
              <td className="px-4 py-3 align-top">Polydipsie en polyurie, soms tot 10 liter per dag; problemen als iemand niet goed kan drinken door ziekte, zwakte, operatie of narcose. Behandeling: veel drinken, zout- en eiwitbeperking, soms thiazide en amiloride</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-medium">Cysteuze nierziekten, vooral ADPKD</td>
              <td className="px-4 py-3 align-top">PKD1 / PKD2 coderen voor polycystine in de cilia; cAMP en ADH stimuleren cystegroei</td>
              <td className="px-4 py-3 align-top">Veel cysten in beide nieren, vaak ook levercysten; goed zichtbaar op echografie. Behandeling: veel drinken om ADH laag te houden, tolvaptan bij snelle progressie, voorbereiding op transplantatie</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Bij erfelijke AVP-resistentie ontstaat enorme polyurie en polydipsie. De meeste patiënten houden hun volumehuishouding nog goed op peil, maar als dat niet meer lukt door bijvoorbeeld ziekte, zwakte, een operatie of narcose, kunnen er problemen ontstaan. De behandeling is complex, maar het doel is om de polyurie te beperken. Dat kan met een strikte zout- en eiwitbeperking. Soms is een diureticum nodig, vooral een thiazide. Daardoor ontstaat een lichte hypovolemie, waardoor de proximale tubulus meer water en natrium opneemt en de polyurie ongeveer gehalveerd kan worden. Amiloride kan dat effect versterken en helpt bovendien tegen de vaak aanwezige hypokaliëmie.
      </p>
    </div>
  )
}
