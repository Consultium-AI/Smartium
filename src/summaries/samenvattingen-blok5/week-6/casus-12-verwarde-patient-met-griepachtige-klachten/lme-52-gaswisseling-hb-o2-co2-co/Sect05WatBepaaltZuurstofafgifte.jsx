export default function Sect05WatBepaaltZuurstofafgifte() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Wat bepaalt de zuurstofafgifte aan de weefsels?</h2>
      <p>De zuurstofverzadigingscurve verschuift naar rechts bij:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>een hogere CO2-concentratie;</li>
        <li>een hogere H+-concentratie, dus een lagere pH;</li>
        <li>een hogere lokale temperatuur.</li>
      </ul>
      <p>
        CO2 en H+ binden aan het eiwitdeel van hemoglobine en verlagen zo de affiniteit voor zuurstof. Daardoor geeft
        hemoglobine zuurstof makkelijker af in perifere weefsels. Dit is fysiologisch nuttig, want actieve weefsels maken
        meer CO2 en H+ aan en produceren ook warmte. Precies daar moet dus extra zuurstof vrijkomen.
      </p>
      <p>
        In de longcirculatie gebeurt het omgekeerde: daar daalt de CO2-concentratie en stijgt de pH, waardoor de curve
        juist iets naar links verschuift en hemoglobine makkelijker opnieuw zuurstof kan opnemen.
      </p>
    </div>
  )
}
