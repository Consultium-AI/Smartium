export default function Sect12BehandelingBcc() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Behandeling van het basaalcelcarcinoom</h2>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 5. Behandelopties bij basaalcelcarcinoom
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Behandeling
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kernkenmerk
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Vooral geschikt voor
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Chirurgische excisie</td>
              <td className="px-4 py-3 align-top">visuele marge minimaal 3 mm, specimen histopathologisch beoordeeld</td>
              <td className="px-4 py-3 align-top">alle subtypen, vooral standaardbehandeling</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Mohs-chirurgie</td>
              <td className="px-4 py-3 align-top">
                alle snijranden histopathologisch beoordeeld, weefselbesparend, minimale recidieven
              </td>
              <td className="px-4 py-3 align-top">hoog-risico BCC, functioneel/cosmetisch belangrijke locaties</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Cryotherapie</td>
              <td className="px-4 py-3 align-top">vloeibare stikstof, eenvoudig, hogere recidiefkans</td>
              <td className="px-4 py-3 align-top">vooral superficiële BCC</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Topicale therapie</td>
              <td className="px-4 py-3 align-top">5-fluorouracil of imiquimod, zelf aan te brengen</td>
              <td className="px-4 py-3 align-top">vooral superficiële BCC</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Radiotherapie</td>
              <td className="px-4 py-3 align-top">lokale behandeling met ioniserende straling</td>
              <td className="px-4 py-3 align-top">BCC die lastig te opereren zijn</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Fotodynamische therapie</td>
              <td className="px-4 py-3 align-top">fotosensitieve stof + licht</td>
              <td className="px-4 py-3 align-top">vooral oppervlakkige BCC</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Hedgehog-remmer</td>
              <td className="px-4 py-3 align-top">systemische medicatie</td>
              <td className="px-4 py-3 align-top">inoperabel of gemetastaseerd BCC, soms basaalcelnaevussyndroom</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Chirurgische excisie</h3>
      <p>
        Conventionele chirurgische excisie is de voorkeursbehandeling voor de meerderheid van de basaalcelcarcinomen. Er
        wordt een visuele marge van minimaal 3 mm aangehouden. Het geëxcideerde preparaat wordt histopathologisch
        onderzocht.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Mohs-chirurgie</h3>
      <p>
        Bij Mohs{'\u2019'} micrografisch gecontroleerde chirurgie worden alle snijranden histopathologisch beoordeeld. Er wordt
        een visuele marge van 2 mm aangehouden. De coupe wordt kort na excisie als vriescoupe beoordeeld, waardoor bijna
        volledige controle over de snijranden ontstaat. Als de radicaliteit onvolledig is, wordt verder geëxcideerd tot
        het gebied tumorvrij is.
      </p>
      <p>
        Deze behandeling heeft de minste recidieven, maar is tijdrovend en bewerkelijk. Daarom is zij vooral geschikt
        voor hoog-risico BCC’s en voor functioneel en cosmetisch belangrijke locaties, zoals het gelaat. Als het defect
        moet worden gesloten, kan dat vaak met een plastische reconstructie.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Cryotherapie</h3>
      <p>
        Cryotherapie met vloeibare stikstof van -196°C leidt tot kristallisatie van watermoleculen en daardoor tot
        celdood. Het is een simpele en makkelijk toepasbare behandeling, maar bij onjuist uitvoeren geeft het een vrij
        hoog recidiefpercentage. De methode is vooral geschikt voor oppervlakkige basaalcelcarcinomen.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Topicale therapie</h3>
      <p>
        Topische behandeling gebeurt met 5-fluorouracil of imiquimodcrème. De patiënt brengt de crème of gel zelf aan op
        het basaalcelcarcinoom, meestal gedurende enkele weken. Dit is vooral geschikt voor oppervlakkige basaalcelcarcinomen.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Radiotherapie</h3>
      <p>
        Radiotherapie veroorzaakt door ioniserende straling onherstelbare schade aan delende cellen, zoals tumorcellen.
        Het is een dure behandeling die relatief veel recidieven geeft. Zij is vooral geschikt voor basaalcelcarcinomen
        die lastig te opereren zijn.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Fotodynamische therapie</h3>
      <p>
        Bij fotodynamische therapie wordt de huid na applicatie van een fotosensitieve stof met licht bestraald. De
        stof wordt vooral door kankercellen opgenomen; na belichting sterven deze af. Deze behandeling is vooral geschikt
        voor oppervlakkige basaalcelcarcinomen. Vanwege de kosten en de lagere effectiviteit ten opzichte van topische
        therapie wordt zij weinig gebruikt.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Hedgehog-remmer</h3>
      <p>
        Een hedgehog-remmer is systemische medicatie die kan worden gegeven bij inoperabel of gemetastaseerd
        basaalcelcarcinoom en soms bij patiënten met basaalcelnaevussyndroom.
      </p>
    </div>
  )
}
