export default function Sect06PrimairHyperaldosteronisme() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Primair hyperaldosteronisme</h2>
      <p>
        Aldosteron wordt geproduceerd in de bijnierschors. Normaal reageert aldosteron op de vullingsstatus via renine en op het kaliumgehalte. Bij primair hyperaldosteronisme is de aldosteronsecretie autonoom geworden. De productie staat dan los van bloeddruk, vullingsstatus en kaliumgehalte.
      </p>
      <p>Het effect is duidelijk:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>meer natriumreabsorptie in het distale deel van de tubulus;</li>
        <li>meer kalium- en waterstofexcretie;</li>
        <li>daardoor hypertensie;</li>
        <li>en vaak hypokaliëmie.</li>
      </ul>
      <p>
        Langdurig kan dit ook leiden tot metabole alkalose. Ernstige hypokaliëmie kan spierzwakte geven.
      </p>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          Aandachtspunt: waarom geeft te veel aldosteron hypokaliëmie?</p>
        <p className="mt-2">
          <span className="font-semibold">Kort antwoord:</span>{' '}omdat aldosteron in de nier zorgt voor meer natriumterugresorptie, maar tegelijk meer kalium- en waterstofuitscheiding.
        </p>
      </div>
      <p>Bij primair hyperaldosteronisme denk je aan:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>hypertensie met neiging tot hypokaliëmie;</li>
        <li>kaliurese ondanks hypokaliëmie;</li>
        <li>een hoog aldosteron met laag renine, dus een hoge aldosteron-renine ratio;</li>
        <li>op CT van de bijnieren: een adenoom of bilaterale hyperplasie.</li>
      </ul>
      <p>De behandeling hangt af van de oorzaak:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>bij een adenoom kan een laparoscopische adrenalectomie worden gedaan; dit kan zelfs tot volledige genezing leiden;</li>
        <li>bij bilaterale hyperplasie is de behandeling medicamenteus.</li>
      </ul>
      <p>
        Een passend geneesmiddel hierbij is spironolacton. Hydrochloorthiazide is hier geen goede keuze, omdat het de hypokaliëmie kan verergeren.
      </p>
    </div>
  )
}
