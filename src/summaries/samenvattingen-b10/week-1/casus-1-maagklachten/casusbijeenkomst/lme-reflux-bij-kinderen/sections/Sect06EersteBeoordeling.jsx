export default function Sect06EersteBeoordeling() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Eerste beoordeling en beleid</h2>
      <p>
        De eerste stap is bijna altijd:{' '}
        <strong className="text-slate-900 dark:text-slate-100">
          goed uitvragen, goed kijken en de groei beoordelen
        </strong>
        . De groeicurve zegt veel over de ernst van het probleem. Een goede groei maakt een ernstige oorzaak minder
        waarschijnlijk, terwijl onvoldoende groei juist een belangrijk aandachtspunt is.
      </p>
      <p>
        Ook de <strong className="text-slate-900 dark:text-slate-100">hoeveelheid voeding</strong> is belangrijk. Bij
        zuigelingen is over- of ondervoeding vaak een deel van het probleem. Een richtwaarde die hier genoemd wordt is ongeveer{' '}
        <strong className="text-slate-900 dark:text-slate-100">150 ml/kg/dag</strong>. Als een baby duidelijk minder binnenkrijgt, kan dat de klachten en de groei verklaren.
      </p>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Tabel 4. Eerste stappen bij refluxklachten bij een kind
        </h3>
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Situatie
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Eerste aanpak
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">
                  <strong className="text-slate-900 dark:text-slate-100">Geen alarmsymptomen, groeicurve goed</strong>
                </td>
                <td className="px-4 py-3 align-top">
                  uitleg en educatie, voorkom overvoeding, let op houding tijdens en na de voeding, eventueel voeding verdikken
                </td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">
                  <strong className="text-slate-900 dark:text-slate-100">Geen verbetering na verdikken</strong>
                </td>
                <td className="px-4 py-3 align-top">
                  overweeg een <strong className="text-slate-900 dark:text-slate-100">eiwithydrolysaat</strong> of{' '}
                  <strong className="text-slate-900 dark:text-slate-100">aminozuurgebaseerde voeding</strong>; bij
                  borstgevoede zuigelingen: eliminatie van melk uit de maternale voeding gedurende 2-4 weken
                </td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">
                  <strong className="text-slate-900 dark:text-slate-100">Nog steeds klachten</strong>
                </td>
                <td className="px-4 py-3 align-top">
                  overweeg behandeling met <strong className="text-slate-900 dark:text-slate-100">zuurremmers</strong> gedurende
                  4-8 weken, waarbij een PPI de eerste keuze is
                </td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">
                  <strong className="text-slate-900 dark:text-slate-100">
                    Blijvende of terugkerende klachten, of alarmsymptomen
                  </strong>
                </td>
                <td className="px-4 py-3 align-top">
                  verwijs naar kinderarts/kinder-MDL voor verdere evaluatie en/of behandeling
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>Bij zuigelingen met refluxklachten en geen alarmsignalen zijn praktische adviezen belangrijk:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>verminder de flesvolume naar normale hoeveelheden;</li>
        <li>
          verdik de flesvoeding indien nodig, bijvoorbeeld met johannesbroodpitmeel of door een kunstvoeding te gebruiken waarin dat al zit;
        </li>
        <li>let op de juiste houding tijdens en na het voeden;</li>
        <li>laat het kind tussendoor extra boeren;</li>
        <li>geef uitleg en geruststelling aan ouders.</li>
      </ul>
      <p>
        Belangrijk is dat het niet uitmaakt wie de fles geeft, zolang de{' '}
        <strong className="text-slate-900 dark:text-slate-100">techniek goed</strong> is. Ook{' '}
        {'\u0022'}vaker een fles geven{'\u0022'} is niet automatisch beter; een te kleine hoeveelheid per voeding kan juist verklaren waarom een baby veel honger lijkt te hebben, maar toch onvoldoende totale inname krijgt.
      </p>
      <p>
        Als er sprake is van borstgevoede zuigelingen waarbij koemelkallergie vermoed wordt, kan eliminatie van melk uit de maternale voeding een rol spelen. Als klachten tijdens afbouwen terugkomen, is verdere vervolgstap nodig.
      </p>
    </div>
  )
}
