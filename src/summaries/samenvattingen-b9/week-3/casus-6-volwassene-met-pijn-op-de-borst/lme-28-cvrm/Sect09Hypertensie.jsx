export default function Sect09Hypertensie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Hypertensie</h2>
      <p>
        Hypertensie is een belangrijke risicofactor voor hart- en vaatziekten en is sterker geassocieerd met beroerte dan met coronaire hartziekte. Het komt veel voor in de bevolking en wordt meestal door de huisarts, vaak samen met de praktijkondersteuner, behandeld.
      </p>
      <p>
        Meer dan 90% van de gevallen betreft{' '}
        <span className="font-semibold">primaire, ook wel essentiële hypertensie</span>. Daarbij is geen duidelijke onderliggende oorzaak aan te wijzen. Leeftijd speelt een rol en leefstijl is belangrijk. Kenmerkende leefstijlfactoren zijn:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>hoge zout- en calorie-inname;</li>
        <li>beperkte kaliuminname;</li>
        <li>veel bewerkt voedsel;</li>
        <li>weinig beweging;</li>
        <li>overgewicht;</li>
        <li>stress;</li>
        <li>regelmatig alcoholgebruik.</li>
      </ul>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Behandeldoelen</h3>
      <p>
        Over het algemeen wordt gestreefd naar een bloeddruk lager dan{' '}
        <span className="font-semibold">140/90 mmHg</span>. Bij mensen met een verhoogd cardiovasculair risico, bijvoorbeeld door bestaande hart- en vaatziekten, diabetes mellitus of chronische nierschade, wordt vaak een lagere streefwaarde nagestreefd, meestal rond{' '}
        <span className="font-semibold">130/80 mmHg</span>, als dit goed wordt verdragen.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Medicamenteuze behandeling</h3>
      <p>Gangbare bloeddrukverlagers zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-semibold">ACE-remmers</span>
        </li>
        <li>
          <span className="font-semibold">angiotensine-II-receptorblokkers (ARB’s)</span>
        </li>
        <li>
          <span className="font-semibold">calciumantagonisten</span>
        </li>
        <li>
          <span className="font-semibold">diuretica</span>
        </li>
      </ul>
      <p>
        Deze middelen verlagen de bloeddruk vergelijkbaar. In de praktijk worden vaak combinaties gebruikt, omdat therapietrouw beter is als het aantal pillen en innamemomenten kleiner is.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Tabel 4. Voorbeelden van bloeddrukverlagers</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Groep</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Voorbeelden</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Diuretica</td>
              <td className="px-4 py-3 align-top">Hydrochloorthiazide, indapamide</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Angiotensine-II-receptorblokkers</td>
              <td className="px-4 py-3 align-top">Losartan, valsartan</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Calciumantagonisten</td>
              <td className="px-4 py-3 align-top">Amlodipine, nifedipine</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">ACE-remmers</td>
              <td className="px-4 py-3 align-top">Perindopril, enalapril</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Bijwerkingen</h3>
      <p>Belangrijke bijwerkingen zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          bij <span className="font-semibold">amlodipine</span>: enkeloedeem;
        </li>
        <li>
          bij <span className="font-semibold">ACE-remmers</span>: angio-oedeem.
        </li>
      </ul>
      <p>ACE-remmers kunnen dus angio-oedeem geven, terwijl angiotensine-II-receptorblokkers deze bijwerking niet hebben.</p>
      <p>
        {'>'}{' '}
        <span className="font-semibold">Aandachtsvraag:</span> Welke bijwerking hoort klassiek bij amlodipine?{' '}
        <br />
        {'>'}{' '}
        <span className="font-semibold">Mini-antwoord:</span> Enkeloedeem.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Wanneer verwijs je naar de internist?</h3>
      <p>Redenen voor verwijzing zijn onder andere:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>therapieresistente hypertensie;</li>
        <li>verdenking op secundaire hypertensie;</li>
        <li>verdenking op een hypertensief spoedgeval;</li>
        <li>aanhoudende hypertensie na pre-eclampsie.</li>
      </ul>
      <p>Een jonge leeftijd alleen is op zichzelf geen reden voor verwijzing.</p>
    </div>
  )
}
