export default function Sect07Communicatie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Communicatie met patiënt en familie</h2>
      <p>
        Niet iedere patiënt of familie kijkt hetzelfde aan tegen ziekte, sterven en medische besluitvorming. In Nederland zijn artsen vaak direct in hun communicatie, maar dat kan door sommige mensen als hard of confronterend worden ervaren. Soms speelt de familie een centrale rol in de besluitvorming. Ook kan slecht nieuws liever indirect worden gebracht of kan men sterk vasthouden aan hoop op herstel.
      </p>
      <p>
        Goede communicatie begint daarom met ruimte voor de ander. Dat doe je door open vragen te stellen, medische vaktaal te vermijden en regelmatig te controleren of de uitleg goed begrepen is. Zo ontstaat een gesprek waarin wederzijds vertrouwen en begrip centraal staan.
      </p>
      <p>
        Wanneer behandeling op de IC geen verbetering meer oplevert of zelfs schade veroorzaakt, moet de arts dat zorgvuldig uitleggen. Vermijd formuleringen die hard of afwijzend kunnen klinken, zoals {'"'}zinloze behandeling{'"'} of {'"'}we stoppen met zorg{'"'}. Leg liever uit dat het lichaam te ziek is om nog te herstellen en dat verdere intensieve behandelingen vooral extra lijden kunnen veroorzaken. Benoem ook wat wél blijft: pijnstilling, behandeling van benauwdheid, comfort en nabijheid.
      </p>
      <p>
        Een belangrijk punt is dat de arts de medische verantwoordelijkheid houdt voor deze beslissing. Naasten hoeven zich daardoor niet schuldig te voelen over het overlijden.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Tabel 3. Formuleren in gesprekken over behandelbeperkingen</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Minder passend</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Passender</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">{'"'}De behandeling is zinloos en moet worden gestopt.{'"'}</td>
              <td className="px-4 py-3 align-top">
                {'"'}Uw vader is zo ernstig ziek dat verdere intensieve behandeling hem niet meer beter kan maken. We blijven wel alles doen om hem comfortabel te houden.{'"'}
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">{'"'}Wij kunnen medisch niets meer voor uw vader doen.{'"'}</td>
              <td className="px-4 py-3 align-top">
                {'"'}We kunnen de ziekte niet meer omkeren, maar we blijven zorgen voor comfort en verlichting van klachten.{'"'}
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">{'"'}We moeten nu stoppen.{'"'}</td>
              <td className="px-4 py-3 align-top">
                {'"'}We kijken samen wat in deze situatie nog bijdraagt aan herstel en wat vooral extra belasting geeft.{'"'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
