export default function Sect05DiagnostiekColoscopieEnCT() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Diagnostiek: eerst de tumor vinden, daarna stadiëren
      </h2>
      <p>De diagnostiek bij verdenking CRC heeft twee grote doelen:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>de tumor in kaart brengen en bevestigen wat het is;</li>
        <li>de uitbreiding en stadiëring bepalen, zodat je de behandeling en prognose kunt inschatten.</li>
      </ul>
      <p>De diagnostiek bestaat in grote lijnen uit:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>coloscopie met biopt en zo nodig tattooing;</li>
        <li>locoregionale stadiëring met beeldvorming.</li>
      </ul>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Coloscopie</h3>
        <p className="mt-4">Coloscopie is stap 1 in de diagnostiek. Hiermee kun je:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>de tumor identificeren;</li>
          <li>biopten nemen om de diagnose te bevestigen;</li>
          <li>weefsel verzamelen voor verdere typering;</li>
          <li>de tumor markeren met inkt/tattoo, zodat de chirurg de locatie later goed kan terugvinden.</li>
        </ul>
        <p className="mt-4">
          Biopten neem je bij voorkeur van het optisch meest afwijkende gebied. Het idee van markeren is dat de chirurg
          tijdens een eventuele operatie het resectievlak beter kan bepalen. Zo wordt ook de kans op seeding
          geminimaliseerd.
        </p>
        <p className="mt-4">
          Tijdens de coloscopie probeer je de hele darm in kaart te brengen tot aan het caecum. Het doel is dus een
          complete scope, waarbij ook synchrone poliepen worden opgespoord en verwijderd, tenzij er grote complexiteit of
          contra-indicaties zijn.
        </p>
        <p className="mt-4">
          Aandachtsvraag: Waarom is complete coloscopie belangrijk?{'  '}Mini-antwoord: Omdat je daarmee de hele darm
          beoordeelt en synchrone afwijkingen kunt vinden en zo nodig meteen kunt verwijderen.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">CT-colografie</h3>
        <p className="mt-4">
          Als coloscopie niet mogelijk is, bijvoorbeeld bij ernstige comorbiditeit of een matige conditie, kan
          CT-colografie worden gebruikt om CRC in beeld te brengen.
        </p>
        <p className="mt-4">
          Maar: CT-colografie is minder sensitief dan coloscopie. Het nadeel is ook dat je geen biopten kunt nemen of
          kunt markeren. Daarom is het geen ideale vervanger voor een incomplete preoperatieve coloscopie. Het wordt eerder
          genoemd als alternatief in geselecteerde situaties en kan ook een rol hebben als complementerende diagnostiek,
          vooral postoperatief.
        </p>
      </div>
    </div>
  )
}
