export default function Sect11RenaleAnemie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">3. Overige therapie bij CNS</h2>
      <p>
        Naast leefstijl en voeding zijn er nog twee veelvoorkomende problemen bij CNS die extra behandeling kunnen vragen: renale anemie en metabole acidose.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Renale anemie</h3>
      <p className="mb-3">
        Anemie komt veel voor bij chronische nierschade, en naarmate de nierfunctie verder verslechtert, neemt de incidentie toe. Het kan voorkomen bij ongeveer 25–50% van de patiënten. Renale anemie is ongunstig omdat het geassocieerd is met meer opnames, meer hart- en vaatziekten, meer sterfte en een lagere kwaliteit van leven.
      </p>
      <p className="mb-2">De oorzaak is multifactorieel. Niet alleen een tekort aan erytropoëtine speelt mee, maar ook:</p>
      <ul className="list-disc pl-6 space-y-1 mb-3">
        <li>opstapeling van toxines;</li>
        <li>versnelde afbraak van erytrocyten;</li>
        <li>verhoogd hepcidine, waardoor ferroportine in de darm dichtgaat en ijzer minder goed wordt opgenomen;</li>
        <li>mogelijk ook andere factoren zoals ontsteking en comorbiditeit.</li>
      </ul>
      <p className="mb-2">De evaluatie van anemie bestaat uit verschillende stappen:</p>
      <ul className="list-disc pl-6 space-y-1 mb-3">
        <li>andere oorzaken uitsluiten, zoals bloedverlies, infecties of inflammatie;</li>
        <li>de ijzerstatus bepalen;</li>
        <li>het effect van behandeling evalueren en zo nodig een ESA starten.</li>
      </ul>
      <p className="mb-3">
        Bij CNS worden voor ijzerstatus hogere streefwaarden aangehouden dan bij een “zuivere” ijzergebreksanemie. Een ferritine &lt; 200 µg/L en transferrinesaturatie &lt; 25% zijn een reden om ijzer te suppleren.
      </p>
      <p className="font-medium text-slate-800 dark:text-slate-200">Tabel 3. Behandeling van renale anemie in stappen</p>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Stap</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Wat doe je?</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Waarom?</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 font-medium">1</td>
              <td className="px-4 py-3">Sluit andere oorzaken uit</td>
              <td className="px-4 py-3">Anemie is niet alleen door CNS zelf</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 font-medium">2</td>
              <td className="px-4 py-3">Bepaal ijzerstatus</td>
              <td className="px-4 py-3">IJzertekort komt vaak voor</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 font-medium">3</td>
              <td className="px-4 py-3">Start zo nodig ijzer</td>
              <td className="px-4 py-3">Eerst ijzer, omdat dit bloedtransfusies en behoefte aan epo kan verminderen</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 font-medium">4</td>
              <td className="px-4 py-3">Evalueer effect en start zo nodig ESA</td>
              <td className="px-4 py-3">Bij onvoldoende effect van ijzer</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 font-medium">5</td>
              <td className="px-4 py-3">Houd hemoglobine binnen streefgebied</td>
              <td className="px-4 py-3">Niet normaliseren, maar gericht behandelen</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-3">
        De eerste stap in de behandeling van renale anemie is dus ijzer geven. Dat vermindert de noodzaak voor bloedtransfusies en verlaagt ook de behoefte aan epo. Dat is vooral belangrijk bij patiënten die mogelijk een niertransplantatie nodig hebben, omdat bloedtransfusies immunisatie kunnen geven.
      </p>
      <p className="mb-3">
        Epo of ESA&apos;s moeten met terughoudendheid worden gebruikt. Te veel epo kan leiden tot normalisatie van het hemoglobine, maar dat geeft juist meer kans op CVA&apos;s en een klein verhoogd kankerrisico, zonder echte verbetering van de kwaliteit van leven. Daarom wordt niet gestreefd naar normalisatie van de anemie. Het advies is om te mikken op een hemoglobine van 6,2–7,4 mmol/L.
      </p>
      <p>
        ESA&apos;s worden subcutaan toegediend door de patiënt zelf of via de hemodialysemachine bij hemodialysepatiënten. Er zijn ook nieuwe orale middelen die een vergelijkbaar effect op anemie kunnen hebben en een alternatief kunnen zijn voor patiënten die niet willen spuiten.
      </p>
    </div>
  )
}
