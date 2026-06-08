export default function Sect05Surveillance() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Surveillance: wie moet je volgen?</h2>
      <p>
        Surveillance betekent dat je patiënten met een verhoogd risico regelmatig controleert om HCC vroeg op te sporen. Dit past bij de klassieke screeningcriteria van Wilson en Jungner. Daarin staat onder andere dat de aandoening een belangrijk gezondheidsprobleem moet zijn, dat er een behandeling beschikbaar moet zijn, dat er een geschikte test moet zijn en dat de ziekte een herkenbare vroege fase moet hebben.
      </p>
      <p>
        Voor HCC is surveillance vooral bedoeld voor patiënten met een hoog risico. De standaardmethode is abdominale echografie elke zes maanden, uitgevoerd door ervaren personeel. Dit is de basis van surveillance in hoogrisicogroepen.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 3. Patiëntengroepen bij wie surveillance wordt aanbevolen</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
            <tr>
              <th className="px-4 py-3 font-semibold">Patiëntengroep</th>
              <th className="px-4 py-3 font-semibold">Advies</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Cirrose, Child-Pugh A en B</td>
              <td className="px-4 py-3 align-top">Surveillance aanbevolen</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Cirrose, Child-Pugh C en wachtend op levertransplantatie</td>
              <td className="px-4 py-3 align-top">Surveillance aanbevolen</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Niet-cirrotische HBV-patiënten met intermediair of hoog risico volgens PAGE-B</td>
              <td className="px-4 py-3 align-top">Surveillance aanbevolen</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Niet-cirrotische F3-fibrose, ongeacht oorzaak</td>
              <td className="px-4 py-3 align-top">Surveillance kan overwogen worden op basis van individuele risicobeoordeling</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        De PAGE-B-score is een risicoscore voor HBV-patiënten. Die is gebaseerd op leeftijd, geslacht en trombocytenaantal. Een lage score betekent laag risico, een intermediaire score betekent een matig risico en een hoge score betekent een duidelijk verhoogd risico op HCC.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Hoe vaak en met welke test?</h3>
      <p>
        De standaard is echografie om de zes maanden. Het combineren van echografie met AFP kan de sensitiviteit verhogen, maar de specificiteit daalt dan wel iets. AFP, AFP-L3 en DCP zijn biomarkers die onderzocht zijn, maar ze zijn nog niet goed genoeg voor routinematige vroege detectie. CT of dynamische MRI zijn voor algemene surveillance niet kosteneffectief, onder andere door fout-positieve uitslagen en het gebruik van contrastmiddelen.
      </p>
      <p>Bij MASLD zonder cirrose is de rol van surveillance nog onduidelijk.</p>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35 space-y-2">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          <strong className="font-semibold">Aandachtsvraag:</strong> waarom is echografie de standaard en niet meteen CT of MRI?
        </p>
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0 mt-2">
          <strong className="font-semibold">Mini-antwoord:</strong> omdat echografie geschikt en praktisch is voor herhaalde controle, terwijl CT en MRI voor algemene surveillance niet kosteneffectief zijn.
        </p>
      </div>
    </div>
  )
}
