export default function Sect08DialyseOpDeIC() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Dialyse op de IC</h2>
      <p>
        De module sluit af met dialyse in een bijzondere setting: de intensive care. Daar liggen vaak ernstig zieke patiënten met acute nierschade. Soms is dialyse nodig, maar het moment van starten is lastig en blijft onderwerp van discussie.
      </p>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">Wanneer starten?</h3>
        <p className="mb-3">
          Over het precieze tijdstip van starten bestaat veel discussie. Onderzoeken laten tegenstrijdige resultaten zien. Vroeg starten lijkt in elk geval niet tot betere overleving te leiden. Uitstellen van behandeling kan er juist voor zorgen dat dialyse soms niet nodig blijkt, bijvoorbeeld doordat:
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-3">
          <li>de patiënt overlijdt;</li>
          <li>de nierfunctie spontaan herstelt.</li>
        </ul>
        <p>
          In de praktijk bestaat daardoor variatie tussen IC-centra en IC-artsen.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">Welke dialyse wordt gebruikt?</h3>
        <p className="mb-3">
          De meest gebruikte vorm blijft hemodialyse. Acute peritoneale dialyse is ook mogelijk, maar wordt op de IC slechts beperkt toegepast, onder andere door beperkte ervaring en praktische bezwaren.
        </p>
        <p className="mb-3">
          Normale dialyse maakt gebruik van een bloedflow van ongeveer 250–350 ml/min. Dat is voor ernstig hemodynamisch instabiele IC-patiënten vaak te belastend, omdat hun hart die extra circulatoire belasting niet aankan. Daarom wordt op de IC geen reguliere dialyse gebruikt, maar een continue techniek.
        </p>
        <p>
          Bij deze continue techniek is de bloedflow veel lager, vaak rond 100 ml/min, en dat is meestal voldoende.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">Continu dialyseren en anticoagulatie</h3>
        <p className="mb-3">
          Meestal wordt op de IC CVVHD toegepast, dus continue veno-veneuze hemodialyse. Er kan ook gebruik worden gemaakt van convectieve klaring door hemofiltratie toe te passen (CVVHDF).
        </p>
        <p className="mb-2">
          Er wordt vaak extra plasmavoorraad door het filter geperst om voldoende klaring te krijgen. Dat kan:
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-3">
          <li>voor het filter worden toegediend: minder stolling, maar minder effectief;</li>
          <li>na het filter worden toegediend: omgekeerde voor- en nadelen.</li>
        </ul>
        <p className="mb-3">
          Bij IC-patiënten is antistolling vaak nodig, omdat zij door ontsteking vaak pro-trombotisch zijn. Tegelijk is het bloedingsrisico juist ook verhoogd. Daarom wordt vaak gekozen voor regionale antistolling: alleen in de machine.
        </p>
        <p className="mb-2">Dat gebeurt met citraat:</p>
        <ul className="list-disc pl-6 space-y-1 mb-3">
          <li>citraat wordt vóór het filter aan het bloed toegevoegd;</li>
          <li>het bindt calcium;</li>
          <li>daardoor wordt de stolling verstoord;</li>
          <li>na het filter moet calcium natuurlijk weer worden aangevuld.</li>
        </ul>
        <p>
          Een deel van het citraat gaat met het bloed van de patiënt mee en wordt, bij goede leverfunctie, omgezet in bicarbonaat. Bij acuut leverfalen is citraat daarom eigenlijk gecontra-indiceerd.
        </p>
      </div>
    </div>
  )
}
