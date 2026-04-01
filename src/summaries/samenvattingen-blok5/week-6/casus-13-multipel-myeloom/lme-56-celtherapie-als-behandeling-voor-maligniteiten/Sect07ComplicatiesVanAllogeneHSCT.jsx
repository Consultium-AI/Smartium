export default function Sect07ComplicatiesVanAllogeneHSCT() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Complicaties van allogene HSCT</h2>
      <p>
        Allogene HSCT is een intensieve behandeling met kortetermijn- en langetermijncomplicaties. Deze kunnen leiden tot
        transplantatie-gerelateerde mortaliteit (TRM). De sterfte door transplantatiecomplicaties na allogene HSCT ligt
        gemiddeld rond 15%. Ook kan de kwaliteit van leven beïnvloed worden. Daarom moet het risico op complicaties altijd
        meegewogen worden in de keuze voor deze behandeling.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Toxiciteit van conditionering</h3>
      <p>Bij myeloablatieve conditionering zijn de toxiciteit en bijwerkingen groot. Mogelijke complicaties zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>tijdelijke diepe pancytopenie;</li>
        <li>infecties;</li>
        <li>mucositis;</li>
        <li>alopecie;</li>
        <li>misselijkheid en braken;</li>
        <li>infertiliteit;</li>
        <li>veno-occlusieve ziekte van de lever;</li>
        <li>longschade;</li>
        <li>hartfalen;</li>
        <li>op langere termijn secundaire maligniteiten, hypothyreoïdie, staar en nierinsufficiëntie.</li>
      </ul>
      <p>Niet-myeloablatieve conditionering is minder toxisch.</p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Acute GVHD</h3>
      <p>
        Acute GVHD wordt veroorzaakt door alloreactieve T-cellen van de donor. De incidentie is ongeveer 50%, maar varieert
        per donor, stamcelbron en profylaxe. Het begint meestal tussen dag +10 en +50 bij myeloablatieve
        stamceltransplantatie. Na niet-myeloablatieve conditionering kan het tijdstip later en meer variabel zijn,
        soms ook pas na dag 100.
      </p>
      <p>Belangrijke targetorganen zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>huid: roodheid en blaarvorming;</li>
        <li>tractus digestivus: misselijkheid, braken, diarree;</li>
        <li>lever: geelzucht.</li>
      </ul>
      <p>
        De ernst wordt gegradeerd van 1 tot 4. Profylaxe bestaat uit immuunsuppressieve medicatie rondom en na de
        transplantatie, en soms uit het verwijderen of vernietigen van donor-T-cellen uit het transplantaat. Behandeling
        bestaat bij beperkte huidafwijkingen uit lokale corticosteroïden; bij uitgebreidere ziekte of betrokkenheid van
        darmen of lever worden hoge doses prednison gegeven.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Chronische GVHD</h3>
      <p>
        Chronische GVHD treedt meestal later op, vaak tijdens het afbouwen van immunosuppressie. Het ziektebeeld is zeer
        variabel en kan mild tot zeer ernstig verlopen. Bijna elk orgaan kan aangedaan zijn, vooral huid, ogen, mond, lever
        en longen. Het kan gepaard gaan met ernstige immuundeficiëntie en opportunistische infecties. Behandeling hangt af
        van de ernst: lokaal bij beperkte klachten, systemisch met prednison bij ernstiger vormen.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Opportunistische infecties en immuunreconstitutie</h3>
      <p>
        Na allogene HSCT is het risico op infecties verhoogd. Dat komt door neutropenie in de vroege fase, vooral na
        myeloablatieve conditionering, én door langdurige B- en T-lymfopenie. Het herstel van nieuwe naïeve CD4+
        T-cellen kan 1 tot 2 jaar duren.
      </p>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Onderdeel van herstel
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Tijd
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Epitheliale barrières, granulocyten, NK-cellen
              </td>
              <td className="px-4 py-3 align-top">{'< 1 maand'}</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">B-cellen en T-cellen</td>
              <td className="px-4 py-3 align-top">6–24 maanden</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
