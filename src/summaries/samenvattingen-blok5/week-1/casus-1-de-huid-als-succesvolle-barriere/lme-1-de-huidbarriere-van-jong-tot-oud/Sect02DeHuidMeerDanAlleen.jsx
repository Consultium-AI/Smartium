export default function Sect02DeHuidMeerDanAlleen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">De huid: meer dan alleen een omhulling</h2>
      <p>
        De huid is niet alleen een buitenlaag, maar heeft meerdere belangrijke functies. De huid beschermt het lichaam, regelt de temperatuur, helpt bij het waarnemen van prikkels, draagt bij aan de vorming van vitamine D3 en heeft ook een sociale functie.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Tabel 1. Belangrijke functies van de huid</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Functie
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Uitleg
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Barrière</td>
              <td className="px-4 py-3 align-top">
                Bescherming tegen ziekteverwekkers, uitdroging, schadelijke stoffen en UV-schade
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Thermoregulatie</td>
              <td className="px-4 py-3 align-top">
                Beïnvloeding van warmteverlies via bloedvaten, zweet en isolatie
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Waarneming</td>
              <td className="px-4 py-3 align-top">
                Gevoel voor warmte, kou, pijn, jeuk, druk, trillingen en aanraking
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Vitamine D3</td>
              <td className="px-4 py-3 align-top">
                Omzetting van vitamine D3, belangrijk voor botten, afweersysteem en spierfunctie
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Sociaal</td>
              <td className="px-4 py-3 align-top">
                Uiterlijk en huidafwijkingen kunnen invloed hebben op relaties, seksualiteit, zelfvertrouwen en werk
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        <span className="font-semibold">Aandacht-vraag:</span> Waarom is de huidbarrière zo belangrijk?{`  `}Mini-antwoord: Omdat de huid niet alleen bescherming geeft tegen buitenaf, maar ook voorkomt dat het lichaam te veel water verliest.
      </p>
    </div>
  )
}
