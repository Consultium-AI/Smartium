export default function Sect03SlokdarmkankerAlgemeneBehandeling() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Slokdarmkanker: algemene behandeling</h2>
      <p>
        Slokdarmkanker komt in Nederland ongeveer 2700 keer per jaar voor. Op het moment van diagnose is de helft van de
        patiënten curatief te behandelen en de andere helft palliatief. Een slokdarmresectie is nog steeds het belangrijkste onderdeel van een curatieve behandeling, maar het gaat om majeure chirurgie met een duidelijke mortaliteit en morbiditeit. De patiënt moet daarom operabel en fit genoeg zijn.
      </p>
      <p>
        Een slokdarmresectie wordt alleen curatief uitgevoerd. Dat betekent dat er geen plaats is voor een palliatieve slokdarmresectie. Bij <strong className="text-slate-900 dark:text-slate-100">cT4b-tumoren</strong> met ingroei in andere organen en bij{' '}
        <strong className="text-slate-900 dark:text-slate-100">uitgezaaide ziekte op afstand</strong> wordt niet gereseceerd.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 pt-2">Voorbehandeling</h3>
      <p>Voor slokdarmkanker zijn er twee belangrijke voorbehandelstrategieën:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Neoadjuvante chemoradiotherapie (CRT)</strong>: deze geeft
          betere overleving dan operatie alleen. Plaveiselcelcarcinoom reageert hier goed op.
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Perioperatieve chemotherapie</strong>: met name{' '}
          <strong className="text-slate-900 dark:text-slate-100">FLOT</strong> bij slokdarmadenocarcinoom.
        </li>
      </ul>
      <p>
        Bij adenocarcinoom geeft FLOT betere overall survival en progression free survival dan preoperatieve chemoradiotherapie. Het effect is vooral duidelijk bij patiënten met lymfekliermetastasen. Chemotherapie geeft wel iets meer toxiciteit. Daarom geldt in de praktijk:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">chemotherapie</strong> is de standaard bij jonge, fitte
          patiënten met lymfekliermetastasen;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">chemoradiotherapie</strong> is een goede optie bij{' '}
          <strong className="text-slate-900 dark:text-slate-100">N0-ziekte</strong> en bij kwetsbare patiënten.
        </li>
      </ul>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 pt-2">
        Tabel 1. Globale keuze van voorbehandeling bij slokdarmkanker
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-white/60 dark:bg-slate-900/40">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-600 text-left bg-slate-50/90 dark:bg-slate-800/60">
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Tumortype / situatie</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Voorbehandeling</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Opmerking</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/80 dark:divide-slate-600/70">
            <tr>
              <td className="p-3 align-top">Plaveiselcelcarcinoom</td>
              <td className="p-3 align-top">Neoadjuvante CRT</td>
              <td className="p-3 align-top">Reageert goed op chemo + bestraling</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Adenocarcinoom met lymfekliermetastasen</td>
              <td className="p-3 align-top">Perioperatieve chemotherapie (FLOT)</td>
              <td className="p-3 align-top">Vaak standaard bij jonge fitte patiënten</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Adenocarcinoom zonder lymfekliermetastasen</td>
              <td className="p-3 align-top">CRT is een goede optie</td>
              <td className="p-3 align-top">Vooral bij N0-ziekte of kwetsbare patiënt</td>
            </tr>
            <tr>
              <td className="p-3 align-top">cT4b of metastasen op afstand</td>
              <td className="p-3 align-top">Geen curatieve resectie</td>
              <td className="p-3 align-top">Geen plaats voor palliatieve slokdarmresectie</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
