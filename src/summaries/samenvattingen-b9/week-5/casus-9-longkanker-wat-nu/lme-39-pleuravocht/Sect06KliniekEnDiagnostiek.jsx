export default function Sect06KliniekEnDiagnostiek() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Kliniek en diagnostiek</h2>
      <p>Pleuravocht geeft niet altijd klachten. Of iemand symptomen krijgt, hangt af van:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          de <span className="font-semibold">hoeveelheid</span> pleuravocht;
        </li>
        <li>
          de <span className="font-semibold">snelheid</span> waarmee het ontstaat;
        </li>
        <li>
          de <span className="font-semibold">conditie</span> van de patiënt.
        </li>
      </ul>
      <p>
        Als pleuravocht het gevolg is van een ontstekingsproces in de pleura, kan er <span className="font-semibold">pleuritische pijn</span> ontstaan: scherpe pijn die vaak erger wordt bij ademhalen.
      </p>
      <p>
        De meest voorkomende klacht bij grotere hoeveelheden pleuravocht is <span className="font-semibold">dyspnoe</span>. Toch kunnen zelfs relatief grote hoeveelheden soms weinig klachten geven, vooral als de longfunctie verder normaal is en het vocht langzaam is ontstaan.
      </p>
      <p>Bij lichamelijk onderzoek zijn twee bevindingen klassiek:</p>
      <ol className="list-decimal pl-6 space-y-2">
        <li>
          <span className="font-semibold">verminderd ademgeruis</span>
        </li>
        <li>
          <span className="font-semibold">gedempte percussie</span>
        </li>
      </ol>
      <p>
        Het vocht in de pleuraholte zorgt ervoor dat geluid minder goed wordt overgedragen en dat de normale sonore percussie dof wordt.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Beeldvorming</h3>
      <p>
        Bij verdenking op pleuravocht wordt meestal eerst een <span className="font-semibold">X-thorax</span> gemaakt. Andere veelgebruikte technieken zijn <span className="font-semibold">echografie</span> en <span className="font-semibold">CT-thorax</span>. Echografie en CT zijn gevoeliger voor de aanwezigheid van pleuravocht dan een gewone röntgenfoto.
      </p>
      <p>
        Op een X-thorax kan pleuravocht soms heel subtiel zijn. Een klassieke aanwijzing is het <span className="font-semibold">afplatten van de costofrenische hoek</span>. Vaak zie je het vocht basaal, bijvoorbeeld rechts of links onderin.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Pleurapunctie en analyse van het vocht</h3>
      <p>
        Met een <span className="font-semibold">pleurapunctie</span> kan vocht uit de pleuraholte worden afgenomen voor diagnostiek. De samenstelling van het pleuravocht helpt om te bepalen of er sprake is van een transsudaat of een exsudaat.
      </p>
      <p>Daarna wordt het pleuravocht vaak ook nog opgestuurd voor:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-semibold">microbiologie</span>: zijn er bacteriën?
        </li>
        <li>
          <span className="font-semibold">pathologie/cytologie</span>: zijn er maligne cellen?
        </li>
      </ul>
      <p>
        De indeling in transsudaat of exsudaat wordt gemaakt met de <span className="font-semibold">Light-criteria</span>. Er is sprake van een exsudaat als aan één van de volgende criteria wordt voldaan:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          pleuravocht/serum eiwitratio <span className="font-semibold">{'>'} 0,5</span>
        </li>
        <li>
          pleuravocht/serum LDH-ratio <span className="font-semibold">{'>'} 0,6</span>
        </li>
        <li>
          pleuravocht-LDH <span className="font-semibold">{'>'} 2/3 van de bovengrens van normaal serum-LDH</span>
        </li>
      </ul>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Tabel 4. Lichtcriteria voor exsudaat</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Criterion</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Afkapwaarde</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Pleuravocht/serum eiwitratio</td>
              <td className="px-4 py-3 align-top">{'>'} 0,5</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Pleuravocht/serum LDH-ratio</td>
              <td className="px-4 py-3 align-top">{'>'} 0,6</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Pleuravocht-LDH</td>
              <td className="px-4 py-3 align-top">{'>'} 2/3 bovengrens normaal serum-LDH</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
