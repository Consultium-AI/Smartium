export default function Sect13PresymptomatischOnderzoek() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Presymptomatisch onderzoek bij familieleden</h2>
      <p>
        Als in een familie een erfelijke aanleg bekend is, kunnen familieleden zich laten testen voordat zij klachten
        hebben. Dat heet presymptomatisch onderzoek. De uitslag zegt dus iets over de kans op ziekte in de toekomst.
      </p>
      <p>Dit onderzoek is een persoonlijke afweging. Er zijn voordelen en nadelen.</p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 5. Voor- en nadelen van presymptomatisch onderzoek</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Voordelen
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Nadelen
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Zekerheid over het wel of niet hebben van de aanleg</td>
              <td className="px-4 py-3 align-top">Angst om ziek te worden</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Gezondheidswinst door screening en preventie</td>
              <td className="px-4 py-3 align-top">Risico op sociale gevolgen of stigmatisering</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Belang voor (toekomstige) kinderen of andere familieleden</td>
              <td className="px-4 py-3 align-top">Schuldgevoel</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Mogelijkheid om met een kinderwens rekening te houden</td>
              <td className="px-4 py-3 align-top">Onzekerheid en zorgen over de toekomst</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Mensen kunnen bijvoorbeeld willen weten of ze drager zijn om preventieve maatregelen te kunnen nemen, of omdat ze
        een kinderwens hebben. Sommigen doen het juist om onduidelijkheid weg te nemen.
      </p>
      <p>
        Presymptomatisch onderzoek wordt niet bij kinderen gedaan als de uitslag geen directe gevolgen heeft op
        kinderleeftijd. Kinderen hebben een soort recht op een open toekomst: zij mogen later zelf kiezen of zij getest
        willen worden. Daarom wordt een dochter van een ouder met BRCA2-aanleg meestal geadviseerd om rond het moment dat
        borstcontroles zouden starten, dus ongeveer rond 25 jaar, zelf naar de klinische genetica te gaan voor informatie
        en afweging.
      </p>
      <p>
        Er zijn uitzonderingen bij andere tumorsyndromen waarbij al op kinderleeftijd controle nodig is. Een voorbeeld is
        FAP, waarbij colonoscopie al vanaf 10-12 jaar wordt geadviseerd.
      </p>
    </div>
  )
}
