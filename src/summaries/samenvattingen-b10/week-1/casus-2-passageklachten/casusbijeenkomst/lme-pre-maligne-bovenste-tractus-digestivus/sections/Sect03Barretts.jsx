export default function Sect03Barretts() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Barrett's oesofagus</h2>
      <p>
        Barrett's oesofagus is een aandoening waarbij het normale plaveiselepitheel van de slokdarm wordt vervangen door
        intestinaal type slijmvlies. Het gaat dus om intestinale metaplasie van de slokdarm. Dit is een voorloper van slokdarmadenocarcinoom. Barrett's kan zich ontwikkelen via verschillende stadia van dysplasie, van laaggradig naar hooggradig, en uiteindelijk naar slokdarmkanker.
      </p>
      <p>
        De oorzaak hangt sterk samen met reflux. Terugvloei van zure maaginhoud leidt tot chronische irritatie. Daarbij
        spelen oxidatieve stress, DNA-schade en chronische ontsteking een rol. Op de langere termijn kan dit leiden tot
        metaplasie en verdere progressie. Verlies van p53 en chromosomale instabiliteit dragen later bij aan de progressie naar slokdarmcarcinoom. PPI-gebruik beschermt tegen progressie.
      </p>
      <p>
        Een sliding hernia diaphragmatica komt vaak voor bij Barrett's. Daarbij komt een deel van de cardia en proximale maag boven het middenrif te liggen. Door de verplaatste anatomie werkt de onderste slokdarmsfincter minder goed en kan maagzuur gemakkelijker terugvloeien. Er bestaat dus een duidelijke relatie tussen hernia diaphragmatica, reflux en Barrett's.
      </p>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Epidemiologie en risicofactoren</h3>
        <p>
          Barrett's ontwikkelt zich klassiek bij mannen van middelbare leeftijd, rond de 60 jaar, met reflux en overgewicht. Andere risicofactoren zijn roken, alcohol, etniciteit, geslacht en familiaire belasting. In de ontwikkelingsfase van Barrett's zijn leeftijd, mannelijk geslacht, roken, een hiatus hernia, familiegeschiedenis, witte etniciteit en obesitas van belang.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Endoscopisch beeld en classificatie</h3>
        <p>
          Endoscopisch herken je Barrett's als een zalmroze verkleuring van het slokdarmepitheel. De lengte wordt beschreven met de Prague-criteria. Daarmee geef je de circumferentiële uitbreiding en de maximale uitbreiding van de Barrett-segmentlengte aan, bijvoorbeeld C1M3.
        </p>
        <p>
          Voor de diagnostiek worden biopten genomen volgens het Seattle-protocol, meestal elke 2 cm. Een onregelmatige
          Z-lijn van minder dan 1 cm vraagt geen routinematige biopten of surveillance.
        </p>
        <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35 space-y-3">
          <p className="text-slate-800 dark:text-amber-100 m-0">
            <strong className="text-slate-900 dark:text-amber-50">Aandachtsvraag:</strong> hoe herken je Barrett's
            endoscopisch?
            <br />
            <strong className="text-slate-900 dark:text-amber-50">Antwoord:</strong> als een zalmroze verkleuring van het
            slokdarmepitheel.
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Surveillance van Barrett's</h3>
        <p>
          Barrett's wordt gecontroleerd om dysplasie vroeg te herkennen. De controle-interval hangt af van de lengte van
          het Barrett-segment:
        </p>
        <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100">
          Tabel 2. Surveillance van Barrett's oesofagus
        </h4>
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Barrett-lengte
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Controle-interval
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">{'≥ 1 cm en < 3 cm'}</td>
                <td className="px-4 py-3 align-top">elke 5 jaar</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">{'≥ 3 cm en < 10 cm'}</td>
                <td className="px-4 py-3 align-top">elke 3 jaar</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">≥ 10 cm</td>
                <td className="px-4 py-3 align-top">verwijzing naar expertcentrum</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 mb-0">
          In Nederland wordt vooral gecontroleerd bij patiënten met een Barrett-segment van 5 cm of langer en daarnaast bij
          laaggradige dysplasie of een positieve familieanamnese voor Barrett.
        </p>
      </div>
    </div>
  )
}
