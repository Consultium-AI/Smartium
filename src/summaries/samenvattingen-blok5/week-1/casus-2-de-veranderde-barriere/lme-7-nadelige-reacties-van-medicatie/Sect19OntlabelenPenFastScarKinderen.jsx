export default function Sect19OntlabelenPenFastScarKinderen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Ontlabelen van penicilline-allergie</h2>
      <p>
        Een geregistreerde penicilline-allergie blijkt vaak niet terecht. Minder dan 10% van de patiënten met zo’n
        registratie heeft bij aanvullend onderzoek werkelijk een aantoonbare allergie.
      </p>
      <p>
        Daarom is ontlabelen belangrijk. Ontlabelen betekent dat de registratie van penicilline-allergie uit het dossier
        wordt verwijderd als blijkt dat de kans op een echte allergie laag is.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Waarom is ontlabelen belangrijk?</h3>
      <p>
        Omdat onterechte allergielabels kunnen leiden tot onnodig vermijden van effectieve antibiotica. Daardoor krijgt
        een patiënt soms minder optimale behandeling.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">PEN-FAST</h3>
      <p>
        PEN-FAST is een klinische beslisregel om patiënten met een laag risico op penicilline-allergie te herkennen.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 4. PEN-FAST-score</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Variabele
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Punten
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Reactie 5 jaar of minder geleden</td>
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">2</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Anaphylaxie of angio-oedeem</td>
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">2</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Behandeling nodig voor de reactie</td>
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">1</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Interpretatie van de totaalscore:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>0 punten: erg laag risico, kans {'<'} 1%</li>
        <li>1-2 punten: laag risico, kans {'<'} 5%</li>
        <li>3 punten: matig risico, kans ongeveer 20%</li>
        <li>4-5 punten: hoog risico, kans {'>'} 50%</li>
      </ul>
      <p>
        Bij een lage score kan penicilline soms worden vrijgegeven. Een directe orale challenge kan dan helpen om aan te
        tonen dat de patiënt een enkelvoudige dosis penicilline verdraagt, met daarna observatie. Bij een hogere score
        is verwijzing naar de allergie-expert voor aanvullende diagnostiek passend.
      </p>
      <p>
        Er bestaat ook een PEN-FAST+ variant met extra voorspellende variabelen, om de kans op misclassificatie verder te
        verkleinen.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">SCAR</h3>
      <p>
        Bij een severe cutaneous adverse reaction, zoals SJS/TEN of een andere ernstige cutane reactie, worden geen
        allergietesten gedaan en is het advies om de allergie niet te ontlabelen.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Kinderen</h3>
      <p>
        Bij kinderen wordt een medicatie-allergie vaak ten onrechte geregistreerd, vooral tijdens infecties. Als een
        kind tijdens een infectie een maculopapuleus exantheem of urticaria krijgt en tegelijkertijd een antibioticum
        of NSAID gebruikt, wordt de huidreactie vaak aan het medicijn toegeschreven, terwijl de infectie zelf de
        oorzaak kan zijn.
      </p>
      <p>
        Als een kind alleen huidklachten had tijdens medicijngebruik, zijn huidtesten vaak niet voldoende en kan een
        provocatietest met een enkele dosis en observatie na 1 uur meer informatie geven. Bij anafylaxie is een
        huidtest altijd geïndiceerd.
      </p>
      <p>
        Bij een bevestigde amoxicilline-allergie kan na ongeveer 5 jaar opnieuw getest worden, omdat veel kinderen er
        dan overheen gegroeid blijken te zijn.
      </p>
    </div>
  )
}
