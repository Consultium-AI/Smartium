export default function Sect11Levertransplantatie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Levertransplantatie bij HCC</h2>
      <p>
        Levertransplantatie is een belangrijke curatieve optie bij geselecteerde patiënten. De klassieke Milan-criteria beschrijven patiënten met HCC ≤5 cm, of maximaal drie tumoren met een maximale diameter van 3 cm, zonder invasieve groei of regionale metastasen. Bij deze groep werd een 4-jaarsoverleving van 75% gezien.
      </p>
      <p>
        In Nederland worden de criteria inmiddels verruimd. Daarbij wordt onder andere gewerkt met de AFP-modelscore. Die score gebruikt drie variabelen:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>grootste tumordiameter;</li>
        <li>aantal noduli;</li>
        <li>AFP-waarde.</li>
      </ul>
      <p>
        Een hogere score betekent een hoger recidiefrisico. Een afkapwaarde van 2 onderscheidt patiënten met een laag en hoog risico op recidief.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 6. AFP-model voor recidiefrisico</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
            <tr>
              <th className="px-4 py-3 font-semibold">Variabele</th>
              <th className="px-4 py-3 font-semibold">Punten</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Grootste tumordiameter ≤3 cm</td>
              <td className="px-4 py-3 align-top">0</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Grootste tumordiameter 3–6 cm</td>
              <td className="px-4 py-3 align-top">1</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Grootste tumordiameter &gt;6 cm</td>
              <td className="px-4 py-3 align-top">4</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Aantal noduli 1–3</td>
              <td className="px-4 py-3 align-top">0</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Aantal noduli ≥4</td>
              <td className="px-4 py-3 align-top">2</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">AFP ≤100 ng/mL</td>
              <td className="px-4 py-3 align-top">0</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">AFP 100–1000 ng/mL</td>
              <td className="px-4 py-3 align-top">2</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">AFP &gt;1000 ng/mL</td>
              <td className="px-4 py-3 align-top">3</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>De totale score wordt berekend door de punten op te tellen.</p>
      <p>
        Levertransplantatie heeft als voordeel dat niet alleen de tumor wordt behandeld, maar ook de onderliggende cirrose of leverziekte. Daardoor wordt de mortaliteit door cirrose en/of de oorspronkelijke leverziekte verminderd.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Donorallocatie, bridging en downstaging</h3>
      <p>
        Er is een tekort aan donorlevers. Daarom wordt prioriteit gegeven op basis van de ernst van de leverziekte, meestal met de MELD-score. De MELD-score schat de kans op overlijden binnen drie maanden. Patiënten met HCC hebben niet altijd een hoge MELD-score, waardoor zij via een MELD-exception extra punten kunnen krijgen.
      </p>
      <p>
        Omdat de wachttijd vaak 6 tot 12 maanden is, bestaat er een risico op uitval van de wachtlijst. Daarom wordt bridging therapy gebruikt. Dat kan bestaan uit TACE, RFA of resectie, met als doelen:
      </p>
      <ol className="list-decimal pl-6 space-y-2">
        <li>de patiënt binnen de transplantatiecriteria houden;</li>
        <li>mogelijk de uitkomst na transplantatie verbeteren door minder recidief.</li>
      </ol>
      <p>
        Downstaging betekent dat lokale therapie wordt gebruikt om een tumor die eerst buiten de transplantatiecriteria valt, terug te brengen binnen de criteria, zodat transplantatie alsnog mogelijk wordt.
      </p>
    </div>
  )
}
