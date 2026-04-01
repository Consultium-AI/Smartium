export default function Sect07DiagnostiekEersteBehandelingCO() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Welke diagnostiek en eerste behandeling horen erbij?</h2>
      <p>Bij koolstofmonoxidevergiftiging zijn meerdere onderzoeken nuttig:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>ECG bepalen;</li>
        <li>HbCO bepalen;</li>
        <li>troponine bepalen;</li>
        <li>arterieel bloedgas bepalen.</li>
      </ul>
      <p>
        HbCO staat voor carboxyhemoglobine. Dit geeft een betrouwbare indruk van de blootstelling aan koolstofmonoxide.
        Een niet-invasieve HbCO-pulsmeter bestaat wel, maar die methode is nog onbetrouwbaar en wordt daarom niet
        aangeraden voor diagnostiek bij koolstofmonoxidevergiftigingen.
      </p>
      <p>
        Troponine en ECG zijn belangrijk om te beoordelen of er sprake is van hypoxie in het hartweefsel en om het
        hartritme in te schatten. Zo kun je ook de noodzaak voor cardiovasculaire behandeling beter inschatten.
      </p>
      <p>De eerste therapie is eenvoudig maar heel belangrijk:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>de patiënt uit de besmette omgeving halen;</li>
        <li>frisse lucht geven;</li>
        <li>100% zuurstof toedienen;</li>
        <li>bij ernstige intoxicaties beademen.</li>
      </ul>
      <p>Bij ernstige blootstelling versnelt zuurstoftherapie de eliminatie van koolstofmonoxide uit het bloed.</p>
      <div className="rounded-xl border-l-4 border-primary-400 bg-primary-50 dark:bg-primary-500/10 p-4 space-y-2">
        <p className="font-semibold text-primary-900 dark:text-primary-200">Aandacht-vragetje</p>
        <p>
          Welke stap is het belangrijkst in de behandeling?{'  '}De patiënt direct uit de besmette omgeving halen, zodat
          de blootstelling stopt.
        </p>
      </div>
    </div>
  )
}
