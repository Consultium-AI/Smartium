export default function Sect02ZuurstofopnameTransportAfgifte() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Zuurstofopname, transport en afgifte aan de weefsels</h2>
      <p>
        De basis van ademhaling is eenvoudig: zuurstof moet vanuit de ingeademde lucht in het bloed komen, daarna worden vervoerd naar de weefsels en daar weer worden afgegeven. Dat hele proces hangt af van een goede gaswisseling in de longen, voldoende hemoglobine en genoeg circulatie om het zuurstofrijke bloed naar de weefsels te brengen.
      </p>
      <p>
        Op zeeniveau is de gemiddelde luchtdruk 101,3 kPa. De lucht bestaat voor ongeveer 21% uit zuurstof; dat noem je de FiO2 van 21%. Daardoor is de alveolaire zuurstofdruk normaal gesproken ongeveer 21,3 kPa. De lucht bevat verder vooral stikstofgas en een kleine hoeveelheid koolstofdioxide en argon.
      </p>
      <p>
        Omdat de arteriële zuurstofdruk lager is dan de alveolaire zuurstofdruk, zal zuurstof diffunderen over de alveolocapillaire membraan naar de bloedbaan. Hemoglobine heeft daarbij een zeer sterke affiniteit voor zuurstof, waardoor vrijwel al het zuurstof direct wordt gebonden.
      </p>
      <p>
        In de weefsels is die affiniteit juist lager. Dat komt door de hogere temperatuur, de hogere CO2-concentratie en de lagere pH in de weefsels. Daardoor laat hemoglobine zuurstof makkelijker los, zodat het aan de weefsels kan worden afgegeven.
      </p>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35 text-sm text-amber-900 dark:text-amber-100 space-y-2">
        <p className="m-0">
          <span className="font-semibold">Aandachtsvraagje:</span>
          {' '}
          Waarom kan zuurstof in de weefsels makkelijker loslaten van hemoglobine?
        </p>
        <p className="m-0">
          <span className="font-semibold">Mini-antwoord:</span>
          {' '}
          Omdat de weefsels warmer zijn, meer CO2 bevatten en een lagere pH hebben.
        </p>
      </div>
    </div>
  )
}
