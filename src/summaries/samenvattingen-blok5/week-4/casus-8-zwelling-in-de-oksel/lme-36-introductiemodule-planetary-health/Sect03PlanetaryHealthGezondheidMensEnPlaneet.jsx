export default function Sect03PlanetaryHealthGezondheidMensEnPlaneet() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Planetary health: gezondheid van mens én planeet</h2>
      <p>
        Planetary health gaat over meer dan alleen klimaatverandering. Het idee is dat de gezondheid van mensen niet los te
        zien is van de gezondheid van de planeet. Een gezonde planeet en gezonde mensen horen dus bij elkaar. Als
        natuurlijke systemen op aarde veranderen door menselijk handelen, heeft dat gevolgen voor de gezondheid van
        mensen, dieren en ecosystemen.
      </p>
      <p>
        Voorbeelden van zulke veranderingen zijn verlies van biodiversiteit, vervuiling van bodem, water en lucht,
        ontbossing en verzuring van oceanen. Het gaat dus om bredere milieuschade dan alleen opwarming van de aarde.
      </p>
      <p>
        Aandacht-vraag: Wat bedoelen we met <em>planetary health</em>?
        {'  '}
        Mini-antwoord: Dat de gezondheid van mensen direct samenhangt met de gezondheid van de leefomgeving en de aarde.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 1. Voorbeelden van door de mens veroorzaakte veranderingen en hun betekenis
      </h3>
      <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-100 dark:bg-slate-800/80">
            <tr>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Verandering in het natuurlijke systeem</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Mogelijke betekenis voor gezondheid</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            <tr>
              <td className="p-3 align-top">Verlies van biodiversiteit</td>
              <td className="p-3">Verstoring van ecosystemen en natuurlijke balans</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Vervuiling van bodem, water en lucht</td>
              <td className="p-3">Slechtere leefomgeving en meer gezondheidsrisico’s</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Ontbossing</td>
              <td className="p-3">Verandering van leefgebieden en meer verstoring van systemen</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Verzuring van oceanen</td>
              <td className="p-3">Schade aan mariene ecosystemen</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
