export default function Sect06LongvolumesEnCapaciteiten() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Longvolumes en longcapaciteiten</h2>
      <p>
        De longen hebben een grote overcapaciteit. In rust adem je ongeveer 5 liter per minuut, terwijl professionele atleten bij inspanning tot wel 125 liter per minuut kunnen ademen.
      </p>
      <p>
        Het normale teugvolume is ongeveer 300–500 mL. In rust adem je ongeveer 12 keer per minuut. Daarbovenop kun je nog extra inademen, het inspiratoire reservevolume, en nog extra uitademen, het expiratoire reservevolume. Zelfs na maximale uitademing blijft er lucht achter in de longen: het residuaal volume.
      </p>
      <p className="font-semibold text-slate-900 dark:text-slate-100">Tabel 3. Belangrijke longvolumes</p>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Begrip</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Uitleg</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Richtwaarde</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Teugvolume (Vt)</td>
              <td className="px-4 py-3 align-top">Lucht per normale ademteug</td>
              <td className="px-4 py-3 align-top">300–500 mL</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Inspiratoir reservevolume (IRV)</td>
              <td className="px-4 py-3 align-top">Extra lucht die je nog kunt inademen</td>
              <td className="px-4 py-3 align-top">ca. 2,5 L</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Expiratoir reservevolume (ERV)</td>
              <td className="px-4 py-3 align-top">Extra lucht die je nog kunt uitademen</td>
              <td className="px-4 py-3 align-top">ca. 1,5 L</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Residuaal volume (RV)</td>
              <td className="px-4 py-3 align-top">Lucht die altijd achterblijft</td>
              <td className="px-4 py-3 align-top">ca. 1,5 L</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Vitale capaciteit (VC)</td>
              <td className="px-4 py-3 align-top">Alles wat je in één ademteug kunt in- en uitademen</td>
              <td className="px-4 py-3 align-top">ca. 4,5 L</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Totale longcapaciteit (TLC)</td>
              <td className="px-4 py-3 align-top">Totale hoeveelheid lucht in de longen</td>
              <td className="px-4 py-3 align-top">ca. 6 L</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Functionele residuele capaciteit (FRC)</td>
              <td className="px-4 py-3 align-top">Lucht die na rustige uitademing in de longen achterblijft</td>
              <td className="px-4 py-3 align-top">ca. 3 L</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        De FRC is belangrijk omdat het longweefsel dat open is deelneemt aan de gaswisseling. Dat is de lucht die nog in de longen zit na de uitademing en vóór de volgende inademing. Die lucht wordt natuurlijk bij iedere ademteug ververst.
      </p>
      <p>
        De FRC wordt ook gebruikt bij het inleiden van narcose. Dan geef je vaak tijdelijk extra zuurstof om de FRC te vullen met 100% zuurstof in plaats van 21% zuurstof. Zo koop je tijd om veilig een beademingsbuis te plaatsen.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Waarom kan de FRC lager zijn?</h3>
      <p>De FRC is lager bij:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>ziekte aan de longen, waardoor surfactant afneemt en alveoli collaberen;</li>
        <li>obesitas, doordat het abdomen op de longen drukt;</li>
        <li>zwangerschap, ook door druk van het abdomen;</li>
        <li>kleine kinderen, omdat zij minder longovercapaciteit en minder expiratoir reservevolume hebben.</li>
      </ul>
      <p>
        Deze mensen zullen eerder een lage saturatie krijgen tijdens het plaatsen van een beademingsbuis.
      </p>
    </div>
  )
}
