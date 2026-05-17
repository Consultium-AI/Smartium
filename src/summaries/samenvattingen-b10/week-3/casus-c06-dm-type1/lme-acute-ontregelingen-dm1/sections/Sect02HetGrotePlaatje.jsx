export default function Sect02HetGrotePlaatje () {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Acute ontregelingen bij diabetes: het grote plaatje
      </h2>
      <p>
        Bij diabetes werkt het hormoon insuline niet voldoende. Dat kan twee hoofdoorzaken hebben. Soms is er een{' '}
        <strong className="text-slate-900 dark:text-slate-100">absoluut insulinetekort</strong>, omdat de
        insuline-producerende cellen in de eilandjes van Langerhans zijn vernietigd; dat past bij{' '}
        <strong className="text-slate-900 dark:text-slate-100">diabetes type 1</strong>. Soms is er juist{' '}
        <strong className="text-slate-900 dark:text-slate-100">verminderde insulinegevoeligheid van weefsels</strong>;
        dat heet ook wel een relatief insulinetekort en past bij <strong className="text-slate-900 dark:text-slate-100">diabetes type 2</strong> en{' '}
        <strong className="text-slate-900 dark:text-slate-100">diabetes gravidarum</strong>.
      </p>
      <p>
        Als de diabetes onvoldoende behandeld is, of als ziekte, infectie of medicatie ervoor zorgen dat de glucosespiegel stijgt, kunnen levensbedreigende ontregelingen ontstaan. Aan de ene kant is er <strong className="text-slate-900 dark:text-slate-100">hyperglykemie</strong> met{' '}
        <strong className="text-slate-900 dark:text-slate-100">diabetische ketoacidose (DKA)</strong> of{' '}
        <strong className="text-slate-900 dark:text-slate-100">hyperosmolair hyperglykemisch syndroom (HHS)</strong>. Aan de andere kant kan behandeling met insuline of sulfonylureumderivaten juist te ver doorschieten en ontstaat{' '}
        <strong className="text-slate-900 dark:text-slate-100">hypoglykemie</strong>.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 1. De drie belangrijke acute ontregelingen bij diabetes
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-white/60 dark:bg-slate-900/40">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-600 text-left bg-slate-50/90 dark:bg-slate-800/60">
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Ontregeling</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Kernprobleem</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Typisch beeld</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Ontstaan</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/80 dark:divide-slate-600/70">
            <tr>
              <td className="p-3 align-top">DKA</td>
              <td className="p-3 align-top">Hyperglykemie, ketonen, acidose</td>
              <td className="p-3 align-top">Dehydratie, buikklachten, snelle ademhaling, acidosisymptomen</td>
              <td className="p-3 align-top">Snel: uren tot dagen</td>
            </tr>
            <tr>
              <td className="p-3 align-top">HHS</td>
              <td className="p-3 align-top">Hyperglykemie, hyperosmolariteit, dehydratie</td>
              <td className="p-3 align-top">Neurologische symptomen, veel dehydratie, weinig of geen ketonen</td>
              <td className="p-3 align-top">Langzamer: dagen tot weken</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Hypoglykemie</td>
              <td className="p-3 align-top">Te lage bloedglucose</td>
              <td className="p-3 align-top">Zweten, trillen, honger, neurologische klachten, sufheid</td>
              <td className="p-3 align-top">Vaak door behandeling</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35 space-y-2">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          <strong className="font-semibold">Aandachtsvraag:</strong> waarom moet je acute ontregelingen snel herkennen?
        </p>
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0 mt-2">
          <strong className="font-semibold">Mini-antwoord:</strong> omdat ze levensbedreigend zijn en snel kunnen leiden tot coma of overlijden.
        </p>
      </div>
    </div>
  )
}
