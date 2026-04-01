export default function Sect02NucleaireGeneeskundeEnFdgPetCt() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Nucleaire geneeskunde en FDG PET/CT</h2>
      <p>
        Bij nucleaire geneeskunde worden radioactieve stoffen gebruikt om processen in het lichaam zichtbaar te maken. De
        radioactieve stof wordt aan de patiënt toegediend en de straling die het lichaam uitzendt wordt opgevangen met een
        gamma- of PET-camera. Het gaat dus om een functioneel onderzoek: je ziet niet alleen waar iets zit, maar ook hoe
        actief het weefsel is.
      </p>
      <p>
        Dat is anders dan bij radiologische beeldvorming, waarbij vooral de anatomie zichtbaar wordt gemaakt. Radiologie
        en nucleaire geneeskunde vullen elkaar daarom aan.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 1. Verschil tussen radiologie en nucleaire geneeskunde
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Onderzoek
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Wat wordt zichtbaar?
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kenmerk
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Radiologische beeldvorming
              </td>
              <td className="px-4 py-3 align-top">Anatomie</td>
              <td className="px-4 py-3 align-top">Laat de bouw van het lichaam zien</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Nucleaire geneeskunde</td>
              <td className="px-4 py-3 align-top">Functie en procesactiviteit</td>
              <td className="px-4 py-3 align-top">Laat stofwisseling of andere processen zien</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        FDG PET/CT is een veelgebruikte vorm van nucleaire beeldvorming. FDG staat voor fluorodeoxyglucose: een
        radioactieve vorm van glucose. FDG lijkt op gewone glucose, maar is zo aangepast dat het na opname in de cel daar
        als het ware blijft “vastzitten” en niet verder wordt gemetaboliseerd. Daardoor laat het onderzoek gebieden met
        een hoog metabolisme zien. Hoe meer FDG een plek opneemt, hoe hoger de activiteit.
      </p>
      <p className="text-slate-800 dark:text-slate-200 border-l-4 border-primary-400 pl-4 py-2 bg-primary-50/80 dark:bg-primary-500/10 rounded-r-lg">
        &gt; Aandachtsvraag: Waarom is FDG PET/CT zo gevoelig?{'  '}
        &gt; Mini-antwoord: Omdat veel actieve processen, zoals tumorgroei, infectie en ontsteking, extra glucose opnemen.
      </p>
    </div>
  )
}
