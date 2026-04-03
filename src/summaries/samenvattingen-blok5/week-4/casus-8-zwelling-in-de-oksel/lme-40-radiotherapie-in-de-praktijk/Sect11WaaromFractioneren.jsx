export default function Sect11WaaromFractioneren() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Waarom fractioneren we?</h2>
      <p>Fractioneren heeft meerdere voordelen:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Gezonde cellen krijgen tijd om te herstellen tussen de fracties.</li>
        <li>
          In gebieden waar veel acute schade aan gezond weefsel kan ontstaan, wordt eerder gehypofractioneerd om acute
          toxiciteit te beperken.
        </li>
        <li>In andere situaties kan juist hyperfractionering worden gebruikt.</li>
      </ul>
      <p>
        Belangrijk is dat het interval tussen de fracties niet te lang mag zijn. De maligne cellen mogen namelijk niet de
        kans krijgen om te herstellen.
      </p>
      <p>Daarnaast spelen nog drie belangrijke processen mee:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          (DNA-)repair: de mogelijkheid van de cel om radiatieschade te herstellen tussen de fracties door.
        </li>
        <li>Repopulatie: de mogelijkheid van cellen om zich opnieuw te delen tussen de fracties door.</li>
        <li>
          Redistributie: cellen worden getroffen in de radiosensitieve fase van de celcyclus, vooral de G2- en M-fase.
          Hoe meer cellen in deze fasen zitten, hoe gevoeliger de tumor voor bestraling is.
        </li>
        <li>
          Reoxygenatie: hypoxische cellen zijn minder gevoelig voor radiotherapie. Tijdens de behandeling kan de
          zuurstofvoorziening verbeteren, waardoor cellen minder hypoxisch worden en dus gevoeliger worden voor
          bestraling.
        </li>
      </ul>
      <p>
        Aandachtsvraag: Waarom zijn hypoxische cellen minder gevoelig?</p>
      <p className="mt-2">
        <span className="font-semibold">Antwoord:</span>{' '}Omdat ze minder zuurstof hebben;
        tijdens behandeling kan reoxygenatie optreden, waardoor ze gevoeliger worden.
      </p>
    </div>
  )
}
