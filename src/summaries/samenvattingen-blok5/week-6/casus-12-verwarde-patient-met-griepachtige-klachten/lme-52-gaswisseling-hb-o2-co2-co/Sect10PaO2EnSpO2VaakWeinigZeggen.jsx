export default function Sect10PaO2EnSpO2VaakWeinigZeggen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Waarom paO2 en SpO2 vaak weinig zeggen</h2>
      <p>
        Bij een arteriële bloedgasanalyse worden onder andere paO2, paCO2, bicarbonaat, pH en SaO2 gemeten. De normale
        waarden die hierbij horen zijn:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>paO2: 75–100 mmHg</li>
        <li>paCO2: 35–45 mmHg</li>
        <li>HCO3-: 22–26 mmol/L</li>
        <li>pH: 7,35–7,45</li>
        <li>SaO2: 95–98%</li>
      </ul>
      <p>
        Bij CO-intoxicatie liggen deze waarden meestal in de normale range. Dat komt omdat deze metingen vooral iets zeggen
        over de longfunctie en de zuurstofspanning in het bloed, en minder over de zuurstoftransportcapaciteit. De
        standaard SaO2-bepaling maakt bovendien geen onderscheid tussen O2-gebonden Hb en CO-gebonden Hb.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Waarom blijft paO2 vaak normaal?</h3>
      <p>
        paO2 meet de hoeveelheid vrij opgeloste zuurstof in arterieel bloed. Bij CO-intoxicatie is vooral het
        hemoglobineprobleem aanwezig: CO bezet de bindingsplaatsen en belemmert afgifte, maar de hoeveelheid opgeloste
        zuurstof kan nog normaal zijn. Daarom kan de paO2 normaal blijven.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Waarom is standaard pulse-oximetrie onbetrouwbaar?</h3>
      <p>
        Een standaard pulse-oximeter kan niet goed onderscheid maken tussen zuurstofgebonden hemoglobine en CO-gebonden
        hemoglobine. Daardoor kan de SpO2 normaal lijken, ook wanneer er sprake is van een CO-intoxicatie.
      </p>
      <p>
        Met pulse co-oximetrie kan wél het percentage CO-Hb en daarmee de zuurstofverzadiging nauwkeuriger worden gemeten,
        zonder bloed af te nemen.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Waarom is CO-Hb alleen niet genoeg?</h3>
      <p>Het carboxyhemoglobinegehalte is nuttig, maar heeft beperkingen:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>het zegt niet altijd goed iets over de ernst van de klachten;</li>
        <li>de waarde kan alweer dalen tegen de tijd dat de patiënt wordt gemeten;</li>
        <li>het geeft geen volledig beeld van weefselschade;</li>
        <li>bij zwangeren is het een onbetrouwbare maat voor het risico op zuurstofgebrek bij het ongeboren kind.</li>
      </ul>
    </div>
  )
}
