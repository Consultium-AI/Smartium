export default function Sect04VoedingAcutePancreatitis () {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Voeding bij acute pancreatitis</h2>
      <p>
        Bij <strong className="text-slate-900 dark:text-slate-100">acute pancreatitis</strong> neemt de voedingsbehoefte
        toe door katabole stress, terwijl patiënten vaak weinig of niets eten. De voedingstoestand kan snel verslechteren
        door:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>inflammatoire stress;</li>
        <li>verminderde inname door pijn en misselijkheid;</li>
        <li>verhoogde energiebehoefte;</li>
        <li>eiwitverlies;</li>
        <li>soms hypertriglyceridemie, die frequent voorkomt.</li>
      </ul>
      <p>
        De basis van de behandeling is:{' '}
        <strong className="text-slate-900 dark:text-slate-100">zo snel mogelijk weer voeden zodra dat kan</strong>.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Orale voeding bij milde acute pancreatitis
      </h3>
      <p>
        Bij milde acute pancreatitis mag de patiënt starten met orale voeding zodra de klachten dit toelaten. Dat betekent
        dus niet wachten tot alle klachten volledig weg zijn. Een zachte, vetbeperkte voeding is dan passend. Strikt
        starten met alleen heldere vloeistoffen is niet nodig.
      </p>
      <p>
        Het idee is simpel: vroegtijdige orale voeding is veilig en helpt bij herstel, darmfunctie en comfort.
      </p>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35 space-y-2">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          <strong className="font-semibold">Aandachtsvraag:</strong> Moet je bij milde acute pancreatitis wachten op
          normalisatie van lipase of amylase voordat iemand mag eten?
        </p>
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0 mt-2">
          <strong className="font-semibold">Mini-antwoord:</strong> Nee, voeding mag starten zodra de klachten dit toelaten.
        </p>
      </div>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Enterale voeding bij acute pancreatitis
      </h3>
      <p>
        Als orale intake onvoldoende blijft, wordt{' '}
        <strong className="text-slate-900 dark:text-slate-100">enterale voeding</strong> gestart. Dat gebeurt bij voorkeur
        binnen <strong className="text-slate-900 dark:text-slate-100">24–72 uur</strong>. Enterale voeding is toediening via
        het maag-darmkanaal, meestal via een sonde.
      </p>
      <p>Voorkeur gaat uit naar:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          een <strong className="text-slate-900 dark:text-slate-100">maagsonde</strong>;
        </li>
        <li>
          zo nodig een <strong className="text-slate-900 dark:text-slate-100">postpylorische sonde</strong> als er retentie
          is of als de passage belemmerd is.
        </li>
      </ul>
      <p>
        Enterale voeding heeft de voorkeur boven parenterale voeding, behalve wanneer het maag-darmkanaal niet bruikbaar is,
        bijvoorbeeld bij ileus, ischemie of andere duidelijke contra-indicaties.
      </p>
      <p>
        Waarom heeft enterale voeding de voorkeur? Omdat het de darmintegriteit behoudt, bacteriële translocatie en
        endotoxinepassage vermindert, infectieuze complicaties en sepsis verlaagt en geassocieerd is met lagere mortaliteit.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 3. Wanneer kies je welke voedingsroute?
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-white/60 dark:bg-slate-900/40">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-600 text-left bg-slate-50/90 dark:bg-slate-800/60">
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Situatie</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Voorkeursbeleid</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/80 dark:divide-slate-600/70">
            <tr>
              <td className="p-3 align-top">Milde acute pancreatitis, klachten nemen af</td>
              <td className="p-3 align-top">Start orale voeding zodra mogelijk</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Orale intake blijft &lt;50% van de behoefte gedurende 24–72 uur</td>
              <td className="p-3 align-top">Enterale voeding overwegen of starten</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Verwacht wordt dat enterale voeding minstens 7 dagen niet mogelijk is</td>
              <td className="p-3 align-top">Totale parenterale voeding (TPV)</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Darmkanaal niet bruikbaar, bijvoorbeeld ileus of ischemie</td>
              <td className="p-3 align-top">Parenterale voeding</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
