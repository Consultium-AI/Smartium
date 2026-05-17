const rows = [
  {
    cat: 'Ulcera',
    hoog:
      <>Peptisch ulcus ventriculi of duodeni (meest voorkomende oorzaak; ±50% van hoge bloedingen)</>,
    laag: (
      <>
        Ulceraties bij ischemische colitis of inflammatoire darmziekte.
        <br />
        Frequentie: 5-10%
      </>
    ),
  },
  {
    cat: 'Inflammatie',
    hoog: (
      <>
        Oesofagitis (bijv. refluxoesofagitis), gastritis of duodenitis, erosieve gastroduodenitis.
        <br />
        Frequentie: 10-15%
      </>
    ),
    laag: (
      <>
        Colitis (infectieus, inflammatoir, ischemisch), proctitis.
        <br />
        Frequentie: 10-20%
      </>
    ),
  },
  {
    cat: 'Varices',
    hoog: (
      <>
        Oesofagusvarices, maagvarices bij levercirrose en portale hypertensie.
        <br />
        Frequentie: 10-20%
      </>
    ),
    laag: (
      <>
        Zelden relevant; soms rectale varices bij portale hypertensie.
        <br />
        Frequentie: &lt;1%
      </>
    ),
  },
  {
    cat: '',
    hoog: (
      <>
        Angiodysplasie, Dieulafoy-laesie, GAVE (gastric antral vascular ectasia, &quot;watermeloenmaag&quot;).
        <br />
        Frequentie: 5-10%
      </>
    ),
    laag: (
      <>
        Angiodysplasie van het colon, divertikelbloeding.
        <br />
        Frequentie: 30-40%
      </>
    ),
  },
  {
    cat: 'Maligniteit',
    hoog: (
      <>
        Oesofaguscarcinoom, maagcarcinoom, duodenumtumoren.
        <br />
        Frequentie: 2-5%
      </>
    ),
    laag: (
      <>
        Colorectaal carcinoom, poliepen.
        <br />
        Frequentie: 5-10%
      </>
    ),
  },
  {
    cat: 'Mechanische mucosale schade',
    hoog: (
      <>
        Mallory-Weiss-laesie (mucosale scheur na braken).
        <br />
        Frequentie: 5-10%
      </>
    ),
    laag: (
      <>
        Anale fissuur.
        <br />
        Frequentie: 5%
      </>
    ),
  },
  {
    cat: 'Overig',
    hoog: <>Haemobilie, hemosuccus pancreaticus</>,
    laag: <>Post-poliepectomie-bloeding, hemorroïden (5-15%)</>,
  },
]

export default function SectEtiologieTabel() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">INLEIDING – ETIOLOGIE (5)</h2>
      <div>
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3">
          Etiologie en pathofysiologie van GI-bloedingen
        </h3>
        <p className="mb-3">
          De etiologie van hoge TD-bloedingen kan worden onderverdeeld in niet-variceale en variceale oorzaken. De oorzaken van lage TD-bloedingen verschillen van die van hoge bloedingen en zijn vaak gerelateerd aan vasculaire of structurele afwijkingen van het colon.
        </p>
        <p>
          Hieronder vind je een tabel met pathofysiologie groepen en binnen elke groep een aantal voorbeelden. Ook is beschreven hoe vaak zo&apos;n bloeding voorkomt. Op de volgende pagina volgen enkele voorbeelden in de vorm van foto&apos;s.
        </p>
      </div>
      <div className="overflow-x-auto rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-white dark:bg-slate-900/40">
        <table className="min-w-[720px] w-full text-sm border-collapse">
          <thead>
            <tr className="bg-primary-900 text-white">
              <th className="p-3 border border-white/15 text-left w-[14%]" />
              <th className="p-3 border border-white/15 text-left">Hoog</th>
              <th className="p-3 border border-white/15 text-left">Laag</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-slate-50/80 dark:bg-slate-900/55' : 'bg-white dark:bg-slate-900/30'}>
                <td className="p-3 border border-slate-200 dark:border-slate-600 align-top font-semibold text-slate-900 dark:text-slate-100">
                  {r.cat}
                </td>
                <td className="p-3 border border-slate-200 dark:border-slate-600 align-top">{r.hoog}</td>
                <td className="p-3 border border-slate-200 dark:border-slate-600 align-top">{r.laag}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
