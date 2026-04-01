export default function Sect05SymptomenVoedselallergie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Symptomen van voedselallergie</h2>
      <p>Het is belangrijk om bij de anamnese goed te letten op:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>het tijdsbeloop tussen blootstelling en reactie;</li>
        <li>de reproduceerbaarheid van de klachten;</li>
        <li>de aard en ernst van de klachten.</li>
      </ul>
      <p>
        De meeste IgE-gemedieerde reacties ontstaan snel: vaak binnen 2 uur na blootstelling, maar meestal zelfs binnen
        5 tot 30 minuten.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 2. Symptomen van voedselallergie</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Orgaansysteem
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Mogelijke klachten
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Huid en/of slijmvliezen</td>
              <td className="px-4 py-3 align-top">Urticaria, erytheem, angio-oedeem</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Luchtwegen</td>
              <td className="px-4 py-3 align-top">
                Rhinitis, conjunctivitis, niezen, hoesten, heesheid, stemverandering, stridor, piepend expirium
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Maagdarmstelsel</td>
              <td className="px-4 py-3 align-top">Buikpijn, misselijkheid, braken, diarree</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Circulatoir</td>
              <td className="px-4 py-3 align-top">Tachycardie, hypotensie, ritmestoornis, bradycardie, shock</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Neurologisch</td>
              <td className="px-4 py-3 align-top">Veranderd gedrag, veranderd bewustzijn</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Een bijzonder fenomeen is het oraal allergie syndroom (OAS). Dat zie je vaak bij wat oudere kinderen en
        volwassenen. Dan ontstaan jeuk in mond, keel en lippen en soms lipzwelling na het eten van vers fruit of rauwe
        groente. Dit past bij het zogeheten paraberksyndroom: iemand maakt eerst antistoffen tegen pollen-eiwitten, maar
        door kruisreactiviteit reageert het lichaam ook op bepaalde voedingsmiddelen, vooral fruit en groente. Deze
        eiwitten zijn niet goed bestand tegen maagzuur en ook niet goed bestand tegen verhitten. Daarom geven bewerkte
        voedingsmiddelen vaak geen klachten.
      </p>
    </div>
  )
}
