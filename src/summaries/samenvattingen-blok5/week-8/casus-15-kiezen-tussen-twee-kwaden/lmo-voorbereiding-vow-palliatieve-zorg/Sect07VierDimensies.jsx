export default function Sect07VierDimensies() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">De vier dimensies van lijden</h2>
      <p>
        In de palliatieve zorg kijk je naar vier dimensies van lijden. Dat is een belangrijk kernpunt uit deze e-learning,
        omdat het helpt om breder te kijken dan alleen lichamelijke symptomen.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 2. De vier dimensies van lijden</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600/80">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/70">
              <th className="px-3 py-2 text-left font-semibold text-slate-900 dark:text-slate-100">Dimensie</th>
              <th className="px-3 py-2 text-left font-semibold text-slate-900 dark:text-slate-100">Waar gaat het om?</th>
              <th className="px-3 py-2 text-left font-semibold text-slate-900 dark:text-slate-100">Voorbeelden</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600/80">
            <tr>
              <td className="px-3 py-2 align-top">Lichamelijk</td>
              <td className="px-3 py-2 align-top">Fysieke klachten</td>
              <td className="px-3 py-2 align-top">pijn, misselijkheid, benauwdheid, vermoeidheid</td>
            </tr>
            <tr>
              <td className="px-3 py-2 align-top">Psychisch</td>
              <td className="px-3 py-2 align-top">Emoties en mentale belasting</td>
              <td className="px-3 py-2 align-top">angst, somberheid, verdriet, depressieve klachten</td>
            </tr>
            <tr>
              <td className="px-3 py-2 align-top">Sociaal</td>
              <td className="px-3 py-2 align-top">Invloed van ziekte op het leven met anderen</td>
              <td className="px-3 py-2 align-top">gezin, steun, relaties, werk, financiën, maatschappelijke positie</td>
            </tr>
            <tr>
              <td className="px-3 py-2 align-top">Existentiëel</td>
              <td className="px-3 py-2 align-top">Vragen rond betekenis en zingeving</td>
              <td className="px-3 py-2 align-top">waarom overkomt mij dit, wat is nog belangrijk, geloof, spiritualiteit</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Deze indeling is belangrijk omdat klachten vaak niet netjes in één hokje passen. Pijn kan bijvoorbeeld lichamelijk
        zijn, maar ook erger worden door angst, eenzaamheid of existentiële onrust. Daarom moet je in gesprek met de patiënt
        steeds nagaan op welk gebied er lijden is.
      </p>
      <p>
        De existentiële dimensie wordt soms vergeten, maar is juist in deze fase heel belangrijk. Mensen kunnen zich afvragen:
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Wie ben ik nog?</li>
        <li>Wat gebeurt er met mij?</li>
        <li>Wat geeft mijn leven nog betekenis?</li>
        <li>Waar haal ik steun of inspiratie uit?</li>
      </ul>
      <p>Dat soort vragen zijn niet “extra” of “bijzaak”, maar horen gewoon bij goede palliatieve zorg.</p>

      <div className="rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50/80 dark:bg-slate-800/50 p-4 space-y-3">
        <p>Aandacht-vraag:Waarom is het niet genoeg om alleen lichamelijke klachten te behandelen?</p>
        <p>
          Mini-antwoord:Omdat lijden ook psychisch, sociaal en existentiëel kan zijn. Als je alleen het lichamelijke behandelt,
          kun je een groot deel van het probleem missen.
        </p>
      </div>
    </div>
  )
}
