export default function Sect11ReclasseringEnRecidiverisico() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Reclassering en recidiverisico</h2>
      <p>
        Een algoritme dat het risico op recidive berekent, wordt gebruikt door de reclasseringsmedewerker en de rechter. Dit is hoog risico, omdat een foutieve beslissing schade kan veroorzaken voor burger of maatschappij.
      </p>
      <p>
        Het algoritme berekent de kans dat een crimineel opnieuw in de fout gaat. Een belangrijk punt is dat variabelen zoals postcode niet meegenomen mogen worden, omdat dat discriminatierisico’s geeft.
      </p>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          Aandacht-vraag: Waarom is postcode hier een probleem?  Mini-antwoord: Omdat postcode kan leiden tot discriminatie.
        </p>
      </div>
    </div>
  )
}
