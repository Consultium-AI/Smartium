export default function Sect03DeBotcellen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">De botcellen</h2>
      <p>
        De drie belangrijkste botcellen hebben elk hun eigen rol. Samen zorgen ze voor opbouw, onderhoud en afbraak van
        bot.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 2. De drie botcellen</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Celtype
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Ontstaan uit
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Functie
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Plaats/kenmerk
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Osteoblast</td>
              <td className="px-4 py-3 align-top">Mesenchymale stamcel</td>
              <td className="px-4 py-3 align-top">Maakt osteoid aan</td>
              <td className="px-4 py-3 align-top">Actief of inactief aan het botoppervlak</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Osteocyt</td>
              <td className="px-4 py-3 align-top">Gematurose osteoblast</td>
              <td className="px-4 py-3 align-top">Onderhoud en mechanotransductie</td>
              <td className="px-4 py-3 align-top">Ingevangen in osteoid en later bot</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Osteoclast</td>
              <td className="px-4 py-3 align-top">Hematopoëtische stamcel via monocytaircelsrij</td>
              <td className="px-4 py-3 align-top">Resorbeert gemineraliseerd bot</td>
              <td className="px-4 py-3 align-top">Zit in resorptielacunae (Howship lacunae)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Osteoblast</h3>
      <p>
        Osteoblasten ontstaan uit mesenchymale stamcellen. Ze maken osteoid aan, dus de nog niet gemineraliseerde
        botmatrix. Hun activiteit is sterk wisselend. Een osteoblast kan actief zijn en veel matrix produceren, of meer
        rustend aan het oppervlak liggen.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Osteocyt</h3>
      <p>
        Een osteocyt is een mature osteoblast die gevangen is geraakt in osteoid en later in bot. Osteocyten hebben een
        belangrijke functie in mechanotransductie: zij helpen mechanische belasting omzetten in biologische signalen. Ze
        staan onderling en met andere cellen in contact via uitgebreide verbindingen door de canaliculi.
      </p>
      <div className="rounded-xl border-l-4 border-primary-400 bg-primary-50 dark:bg-primary-500/10 p-4 space-y-2">
        <p>
          <strong className="text-primary-900 dark:text-primary-200">Aandacht:</strong> waarom zijn osteocyten
          belangrijk?{'  '}
          <strong className="text-primary-900 dark:text-primary-200">Kort antwoord:</strong> zij registreren belasting op
          bot en helpen die signalen doorgeven aan andere botcellen.
        </p>
      </div>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Osteoclast</h3>
      <p>
        Osteoclasten ontstaan uit de monocytaire reeks van een hematopoëtische stamcel. Hun taak is resorptie van
        gemineraliseerd bot. Ze liggen in een resorptielacune, ook wel Howship lacune genoemd. Om bot af te breken
        scheiden ze H⁺-ionen en collagenase uit. Zo wordt eerst de mineralisatie opgelost en daarna de matrix afgebroken.
      </p>
      <div className="rounded-xl border-l-4 border-primary-400 bg-primary-50 dark:bg-primary-500/10 p-4 space-y-2">
        <p>
          <strong className="text-primary-900 dark:text-primary-200">Aandacht:</strong> wie breekt bot af?{'  '}
          <strong className="text-primary-900 dark:text-primary-200">Kort antwoord:</strong> de osteoclast.
        </p>
      </div>
    </div>
  )
}
