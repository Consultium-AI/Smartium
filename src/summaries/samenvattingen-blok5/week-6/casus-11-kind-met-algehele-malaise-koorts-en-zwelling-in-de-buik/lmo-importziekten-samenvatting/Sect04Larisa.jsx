export default function Sect04Larisa() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">LARISA: het denkraam bij koorts na reizen</h2>
      <p>
        De module geeft hiervoor een praktisch ezelsbruggetje: <strong>LARISA</strong>.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 1. LARISA</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/80">
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100">
                <strong>Letter</strong>
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100">
                <strong>Betekenis</strong>
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100">
                <strong>Waar let je op?</strong>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-slate-100 dark:border-slate-700/80">
              <td className="px-4 py-3 align-top">L</td>
              <td className="px-4 py-3 align-top">Locatie</td>
              <td className="px-4 py-3 align-top">Welk land, welk continent, stad of platteland, malaria-endemisch gebied?</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-700/80">
              <td className="px-4 py-3 align-top">A</td>
              <td className="px-4 py-3 align-top">Activiteit</td>
              <td className="px-4 py-3 align-top">
                Zoetwatercontact, insectenbeten, dierencontact, safari, backpacken, grotten, seksueel contact
              </td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-700/80">
              <td className="px-4 py-3 align-top">R</td>
              <td className="px-4 py-3 align-top">Reiziger</td>
              <td className="px-4 py-3 align-top">Leeftijd, comorbiditeit, afweerstatus, vaccinaties, profylaxe, VFR of toerist</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-700/80">
              <td className="px-4 py-3 align-top">I</td>
              <td className="px-4 py-3 align-top">Incubatietijd</td>
              <td className="px-4 py-3 align-top">Wanneer ziek geworden ten opzichte van terugkomst en blootstelling?</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-700/80">
              <td className="px-4 py-3 align-top">S</td>
              <td className="px-4 py-3 align-top">Syndromen</td>
              <td className="px-4 py-3 align-top">
                Koorts met rash, koorts met diarree, koorts met icterus, koorts met neurologie, koorts met respiratoire
                klachten
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 align-top">A</td>
              <td className="px-4 py-3 align-top">Aanvullend onderzoek</td>
              <td className="px-4 py-3 align-top">Welke labtests, kweken, uitstrijkjes, beeldvorming en specialistische tests zijn nodig?</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Dit schema dwingt je om niet alleen naar “waar is iemand geweest?” te kijken. Ook <strong>wat iemand daar deed</strong>{' '}
        en <strong>wat voor soort patiënt het is</strong> maken enorm uit. De module laat zien dat risico ontstaat uit een
        combinatie van <strong>locatie, activiteit en reiziger</strong>. Dat is de driehoek van risico.
      </p>
      <p>
        Een vrijwilliger in Burkina Faso zonder malariaprofylaxe is een ander profiel dan een resorttoerist in Mexico of een
        safariganger in Tanzania. De ziektegeschiedenis moet dus altijd context krijgen.
      </p>
    </div>
  )
}
