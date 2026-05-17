export default function Sect09EndocrieneFunctieVanDePancreas () {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Endocriene functie van de pancreas</h2>
      <p>
        Tussen de acini liggen de <strong className="text-slate-900 dark:text-slate-100">eilandjes van Langerhans</strong>. Dit zijn de endocriene onderdelen van de pancreas. Er zijn relatief meer eilandjes in de <strong className="text-slate-900 dark:text-slate-100">staart</strong>{' '}van de pancreas dan in de rest van het orgaan.
      </p>
      <p>De eilandjes van Langerhans bestaan vooral uit:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">alfa-cellen</strong>: maken <strong className="text-slate-900 dark:text-slate-100">glucagon</strong>;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">bètacellen</strong>: maken <strong className="text-slate-900 dark:text-slate-100">insuline</strong>.
        </li>
      </ul>
      <p>Daarnaast zijn er ook nog andere celtypen:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">deltacellen</strong>: maken <strong className="text-slate-900 dark:text-slate-100">somatostatine</strong>;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">PP-cellen</strong> of <strong className="text-slate-900 dark:text-slate-100">gammacellen</strong>: maken{' '}
          <strong className="text-slate-900 dark:text-slate-100">pancreatisch polypeptide</strong>.
        </li>
      </ul>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 6. Endocriene celtypen van de pancreas</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-white/60 dark:bg-slate-900/40">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-600 text-left bg-slate-50/90 dark:bg-slate-800/60">
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Celtype</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Hormoon</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Belangrijk effect</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/80 dark:divide-slate-600/70">
            <tr>
              <td className="p-3 align-top">Alfa-cel</td>
              <td className="p-3 align-top">Glucagon</td>
              <td className="p-3 align-top">Stimuleert verhoging van de bloedglucose</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Bèta-cel</td>
              <td className="p-3 align-top">Insuline</td>
              <td className="p-3 align-top">Stimuleert verlaging van de bloedglucose</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Deltacel</td>
              <td className="p-3 align-top">Somatostatine</td>
              <td className="p-3 align-top">Reguleert de productie van glucagon en insuline</td>
            </tr>
            <tr>
              <td className="p-3 align-top">PP-cel / gammacel</td>
              <td className="p-3 align-top">Pancreatisch polypeptide</td>
              <td className="p-3 align-top">Remt productie van pancreasenzyemen en gal; beïnvloedt verzadiging</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        De activiteit van alfa- en bètacellen wordt grotendeels gereguleerd door de <strong className="text-slate-900 dark:text-slate-100">bloedglucosespiegel</strong>. Als de glucose hoog is, worden de bètacellen gestimuleerd om insuline te maken en worden de alfacellen geremd in hun glucagonproductie. Als de glucose laag is, worden juist de alfacellen gestimuleerd om glucagon te produceren.
      </p>
      <p>
        Insuline wordt afgegeven door de <strong className="text-slate-900 dark:text-slate-100">centraal gelegen bètacellen</strong>. Daarna komt het langs de alfacellen. Dat is handig, omdat insuline op die manier de productie van glucagon kan remmen.
      </p>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35 space-y-2">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          <strong className="font-semibold">Korte denkvraag:</strong> waarom is de bloedstroom in een eilandje van Langerhans zo ingericht?
        </p>
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0 mt-2">
          <strong className="font-semibold">Mini-antwoord:</strong> zodat insuline vanuit de bètacellen eerst andere eilandjescellen bereikt en daar direct een remmend effect kan hebben.
        </p>
      </div>
    </div>
  )
}
