export default function Sect03Enzymkinetiek() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Enzymkinetiek</h2>
      <p>
        <strong className="text-slate-900 dark:text-slate-100">Enzymkinetiek</strong> beschrijft de reactiesnelheid van een enzymatische reactie bij verschillende substraatconcentraties, in een constante omgeving. Daarbij zie je meestal twee gedragingen:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Eerste-orde kinetiek</strong>: bij lage substraatconcentraties neemt de reactiesnelheid toe als de substraatconcentratie stijgt.
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Nulde-orde kinetiek</strong>: bij hogere substraatconcentraties blijft de reactiesnelheid ongeveer constant, ook als er nog meer substraat bijkomt.
        </li>
      </ul>
      <p>
        Dat laatste laat zien dat enzymen <strong className="text-slate-900 dark:text-slate-100">verzadigbaar</strong> zijn. Op een gegeven moment zijn alle actieve plaatsen bezet en kan de snelheid niet verder toenemen.
      </p>
    </div>
  )
}
