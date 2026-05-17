export default function Sect03InsulinetekortEnMetabolisme () {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Wat doet een insulinetekort met het lichaam?
      </h2>
      <p>
        Insuline hoort bij de <strong className="text-slate-900 dark:text-slate-100">opslagfase</strong> van het lichaam. Het
        zorgt ervoor dat glucose uit de maaltijd wordt opgenomen in weefsels en wordt omgezet in opslagvormen zoals
        glycogeen en vet. Als insuline ontbreekt, verschuift het lichaam naar de{' '}
        <strong className="text-slate-900 dark:text-slate-100">mobilisatiefase</strong>: opgeslagen brandstoffen worden afgebroken en nieuwe glucose wordt gemaakt.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Effect van insuline op stofwisseling</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-white/60 dark:bg-slate-900/40">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-600 text-left bg-slate-50/90 dark:bg-slate-800/60">
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Stofwisselingsproces</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Effect van insuline</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/80 dark:divide-slate-600/70">
            <tr>
              <td className="p-3 align-top">Glucoseopname in spier en vet</td>
              <td className="p-3 align-top">Aan of versneld</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Glycogenese in lever</td>
              <td className="p-3 align-top">Aan of versneld</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Glycolyse in lever</td>
              <td className="p-3 align-top">Aan of versneld</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Lipogenese in vetweefsel</td>
              <td className="p-3 align-top">Aan of versneld</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Glycogenolyse in lever</td>
              <td className="p-3 align-top">Uit of vertraagd</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Gluconeogenese in lever</td>
              <td className="p-3 align-top">Uit of vertraagd</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Vetzuuroxidatie in lever en spieren</td>
              <td className="p-3 align-top">Uit of vertraagd</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Vetzuursynthese in lever</td>
              <td className="p-3 align-top">Aan of versneld</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Lipolyse in vetweefsel</td>
              <td className="p-3 align-top">Uit of vertraagd</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Door het ontbreken van insuline gebeuren deze processen juist andersom. Dan ontstaan meerdere gevolgen:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>glucose wordt minder goed opgenomen door cellen;</li>
        <li>vetweefsel wordt afgebroken;</li>
        <li>vrije vetzuren komen vrij;</li>
        <li>de lever gebruikt deze vetzuren als energiebron;</li>
        <li>
          daarbij ontstaan <strong className="text-slate-900 dark:text-slate-100">ketonlichamen</strong>;
        </li>
        <li>de bloedglucose stijgt;</li>
        <li>het lichaam verliest vocht via de urine.</li>
      </ul>
      <p>
        Dit verklaart ook waarom DM-1 kan leiden tot <strong className="text-slate-900 dark:text-slate-100">diabetische ketoacidose</strong>: een acute, levensbedreigende toestand met hoge glucose en veel ketonlichamen, waardoor het bloed verzuurt.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Waarom leidt insulinetekort tot gewichtsverlies?</h3>
      <p>
        Zonder insuline kunnen glucose en vet minder goed worden opgeslagen. Tegelijk breekt het lichaam vet en soms ook spierweefsel af om energie te maken. Daardoor valt iemand af, vaak onbedoeld. Ook vermoeidheid ontstaat, omdat cellen minder goed bruikbare energie kunnen opnemen.
      </p>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35 space-y-2">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          <strong className="font-semibold">Aandachtsvraag:</strong> Waarom krijgt iemand met DM-1 soms ketoacidose?
        </p>
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0 mt-2">
          <strong className="font-semibold">Mini-antwoord:</strong> Omdat het insulinetekort leidt tot vetafbraak en ketonvorming; die ketonlichamen zorgen voor verzuring.
        </p>
      </div>
    </div>
  )
}
