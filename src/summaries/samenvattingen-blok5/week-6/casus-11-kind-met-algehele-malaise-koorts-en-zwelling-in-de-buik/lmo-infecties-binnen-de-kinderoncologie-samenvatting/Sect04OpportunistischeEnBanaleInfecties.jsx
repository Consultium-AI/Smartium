export default function Sect04OpportunistischeEnBanaleInfecties() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Opportunistische en banale infecties</h2>
      <p>
        Een opportunistische infectie is een infectie door een verwekker die vooral ziekte veroorzaakt wanneer de afweer verminderd is. Binnen deze stof gaat het onder andere om virussen, gisten, schimmels, parasieten en bepaalde bacteriën.
      </p>

      <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 pt-2">Tabel 2. Belangrijke opportunistische verwekkers</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="w-full min-w-[32rem] border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100 dark:bg-slate-800/80">
              <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 text-left font-semibold text-slate-900 dark:text-slate-100">
                Groep
              </th>
              <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 text-left font-semibold text-slate-900 dark:text-slate-100">
                Voorbeelden
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Virussen</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                cytomegalovirus, Epstein-Barr-virus, varicella-zostervirus, herpessimplexvirus type 6, JC-virus, BK-virus
              </td>
            </tr>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Gisten</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                <em>Candida albicans</em>
              </td>
            </tr>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Schimmels en schimmelachtige verwekkers</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                <em>Aspergillus</em>, <em>Mucormycosis</em>, <em>Pneumocystis jirovecii</em>, <em>Cryptococcus</em>
              </td>
            </tr>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Parasieten</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                <em>Cryptosporidium</em>, <em>Toxoplasma</em>
              </td>
            </tr>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Bacteriën</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                <em>Pseudomonas aeruginosa</em>, <em>Burkholderia</em>, mycobacteriën
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Sommige opportunistische infecties zijn zo kenmerkend dat ze meteen aan een ernstig afweerdefect doen denken. Een eerste infectie met <em>Pneumocystis jirovecii</em> past bijvoorbeeld bij een ernstig defect in het T-celcompartiment. Dan moet niet alleen de infectie behandeld worden, maar ook actief gezocht worden naar de onderliggende oorzaak, zoals een ernstige primaire immuundeficiëntie of hiv.
      </p>
      <p>
        Daar staat tegenover dat gewone, alledaagse infecties in deze groep net zo goed relevant blijven. Bij een immuungecompromitteerd kind kan een banale luchtweginfectie veel heftiger verlopen dan bij een gezond kind. Dat maakt de klinische context zo belangrijk: niet alleen de naam van de verwekker telt, maar vooral de combinatie van verwekker, beloop en afweerstatus.
      </p>
      <p>
        Nog een belangrijk punt is dat meerdere infecties tegelijk vaker voorkomen. Het vinden van één pathogeen sluit dus niet uit dat er nog een tweede of derde verwekker meespeelt. Dat zie je duidelijk bij een zuigeling met SCID, bij wie tijdens leven maar een deel van de verwekkers gevonden werd, terwijl later meerdere bacteriën in longen, lever en brein aanwezig bleken.
      </p>
      <p>
        <strong>Aandacht-vraag:</strong>
        <br />
        Waarom is het vinden van één verwekker bij een immuungecompromitteerd kind niet altijd genoeg?
      </p>
      <p>
        <strong>Mini-antwoord:</strong>
        <br />
        Omdat meerdere infecties tegelijk juist vaker voorkomen bij verminderde afweer. Eén gevonden pathogeen kan dus maar een deel van het ziektebeeld verklaren.
      </p>
    </div>
  )
}
