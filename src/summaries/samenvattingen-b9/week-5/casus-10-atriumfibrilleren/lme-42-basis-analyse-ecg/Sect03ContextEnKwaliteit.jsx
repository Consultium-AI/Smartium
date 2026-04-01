export default function Sect03ContextEnKwaliteit() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Context en kwaliteit: de twee eerste pluspunten</h2>
      <p>Voordat je inhoudelijk gaat beoordelen, kijk je eerst naar twee dingen: context en kwaliteit.</p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">1. Context</h3>
      <p>Je vraagt je af: wie is dit en waarom is dit ECG gemaakt?  Bij klachten zoals:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>pijn op de borst denk je extra aan ischemie en kijk je scherp naar ST-segment en T-toppen;</li>
        <li>hartkloppingen let je extra op ritmegeleiding, P-toppen, onregelmatigheden en extrasystolen;</li>
        <li>syncope/flauwvallen let je extra op pauzes, extreme bradycardie, of juist ventriculaire tachycardieën en op de QT-tijd;</li>
        <li>het tijdstip is belangrijk, want een ECG is een momentopname. Bij een infarct kan het beeld per uur veranderen.</li>
      </ul>
      <p>
        <span className="font-semibold">Aandacht-vraagje:</span> waarom moet je datum en tijd controleren?{' '}
        <br />
        <span className="font-semibold">Mini-antwoord:</span> omdat het ECG een momentopname is en het beeld bij een infarct snel kan veranderen.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">2. Kwaliteit</h3>
      <p>Je controleert of het ECG technisch bruikbaar is:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>juiste patiënt;</li>
        <li>relevant tijdstip;</li>
        <li>papiersnelheid 25 mm/s;</li>
        <li>ijking 10 mm/mV;</li>
        <li>rustiger lijntje zonder veel artefacten.</li>
      </ul>
      <p>Artefacten zijn technische verstoringen, zoals:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>60/50 Hz storing: een dikke, fijne trillende basislijn door elektrische interferentie;</li>
        <li>spierrillingen: ruisige, dikke basislijn, vaak door kou of spanning;</li>
        <li>wandering baseline: de lijn golft op en neer, bijvoorbeeld door ademhaling of beweging van de elektroden.</li>
      </ul>
      <p>
        Als de arm-elektroden verwisseld zijn, kan het ECG een vreemd beeld geven, zoals een zogenaamde extreme asdraaiing. Een handige check is: is aVR positief? Dat hoort normaal niet. Als dat wel zo is, denk je aan verkeerd geplaatste kabels.
      </p>
    </div>
  )
}
