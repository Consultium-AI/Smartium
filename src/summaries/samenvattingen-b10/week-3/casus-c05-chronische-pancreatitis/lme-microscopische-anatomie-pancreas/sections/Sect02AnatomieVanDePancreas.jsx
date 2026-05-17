export default function Sect02AnatomieVanDePancreas () {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Anatomie van de pancreas</h2>
      <p>
        De pancreas is een lang, smal orgaan dat niet vrij in de buikholte ligt, maar retroperitoneaal. Dat betekent dat
        het achter het peritoneum ligt, dus als het ware achter de buikholte. De pancreas ligt ingeklemd tussen meerdere
        structuren: aan de voorzijde liggen maag en duodenum, craniaal liggen lever en galblaas, lateraal ligt de milt en
        posterieur liggen de grote buikvaten.
      </p>
      <p>De pancreas wordt klassiek verdeeld in:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>de <strong className="text-slate-900 dark:text-slate-100">kop</strong>;</li>
        <li>
          het <strong className="text-slate-900 dark:text-slate-100">corpus</strong> of lichaam;
        </li>
        <li>
          de <strong className="text-slate-900 dark:text-slate-100">staart</strong>;
        </li>
        <li>
          en het <strong className="text-slate-900 dark:text-slate-100">processus uncinatus</strong>, een haakvormig
          uitsteeksel van de kop.
        </li>
      </ul>
      <p>
        De <strong className="text-slate-900 dark:text-slate-100">processus uncinatus</strong> is klinisch en anatomisch belangrijk omdat deze om de{' '}
        <strong className="text-slate-900 dark:text-slate-100">a. mesenterica superior</strong> en <strong className="text-slate-900 dark:text-slate-100">v. mesenterica superior</strong> heen haakt.
      </p>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35 space-y-2">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          <strong className="font-semibold">Korte denkvraag:</strong> waarom is het handig om de ligging van de pancreas zo goed te kennen?
        </p>
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0 mt-2">
          <strong className="font-semibold">Mini-antwoord:</strong> omdat de pancreas direct in relatie ligt tot grote vaten, het duodenum en de galwegen, en die relaties belangrijk zijn voor de functie én voor variaties in aanleg.
        </p>
      </div>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 1. Ligging, onderdelen en vaatrelaties van de pancreas
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-white/60 dark:bg-slate-900/40">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-600 text-left bg-slate-50/90 dark:bg-slate-800/60">
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Onderdeel</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Kenmerk</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/80 dark:divide-slate-600/70">
            <tr>
              <td className="p-3 align-top">Kop</td>
              <td className="p-3 align-top">Ligt tegen het duodenum aan</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Processus uncinatus</td>
              <td className="p-3 align-top">Haakt om de a. mesenterica superior en v. mesenterica superior</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Corpus</td>
              <td className="p-3 align-top">Centrale deel van het orgaan</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Staart</td>
              <td className="p-3 align-top">Loopt richting de milt</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Ligging</td>
              <td className="p-3 align-top">Retroperitoneaal</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Voorzijde</td>
              <td className="p-3 align-top">Maag en duodenum</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Bovenzijde</td>
              <td className="p-3 align-top">Lever en galblaas</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Lateraal</td>
              <td className="p-3 align-top">Milt</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
