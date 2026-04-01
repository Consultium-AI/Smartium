export default function Sect07FalendeRespiratieType1Type2() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Falende respiratie: type 1 en type 2</h2>
      <p>Respiratoir falen wordt ingedeeld in twee typen.</p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Type 1 respiratoir falen</h3>
      <p>
        Type 1 is hypoxisch respiratoir falen: een probleem met de opname van zuurstof. Het wordt gedefinieerd als een perifere zuurstofsaturatie onder de 90%.
      </p>
      <p>Dit ontstaat bij:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>V/Q-mismatch met een ratio &lt; 1;</li>
        <li>shunting;</li>
        <li>diffusieproblemen door chronische inflammatie van de alveolocapillaire membraan.</li>
      </ul>
      <p>Voorbeelden zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>pneumonie;</li>
        <li>collaps van de dorsale alveoli, bijvoorbeeld bij langdurig liggen;</li>
        <li>longoedeem;</li>
        <li>sputumpluggen bij onvermogen tot ophoesten;</li>
        <li>pneumothorax.</li>
      </ul>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Type 2 respiratoir falen</h3>
      <p>
        Type 2 is een koolstofdioxide-afgifteprobleem, oftewel hypercapnie. De arteriële CO2-spanning is dan &gt; 6,5 kPa, met of zonder bijkomend oxygenatieprobleem.
      </p>
      <p>Type 2 ontstaat bij:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>V/Q-mismatch met een ratio &gt; 1, oftewel dode-ruimteventilatie;</li>
        <li>ernstige diffusieproblemen;</li>
        <li>alveolaire hypoventilatie.</li>
      </ul>
      <p>Voorbeelden zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>longembolie;</li>
        <li>spierzwakte;</li>
        <li>longfibrose;</li>
        <li>COPD.</li>
      </ul>
      <p>
        Het is belangrijk onderscheid te maken tussen deze twee vormen van respiratoir falen, omdat daarmee niet alleen de onderliggende diagnose, maar ook de passende therapie beter kan worden bepaald.
      </p>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35 text-sm text-amber-900 dark:text-amber-100 space-y-2">
        <p className="m-0">
          <span className="font-semibold">Aandachtsvraagje:</span>
          {' '}
          Waarom is onderscheid tussen type 1 en type 2 zo belangrijk?
        </p>
        <p className="m-0">
          <span className="font-semibold">Mini-antwoord:</span>
          {' '}
          Omdat de oorzaak, de onderliggende diagnose en de behandeling anders kunnen zijn.
        </p>
      </div>
    </div>
  )
}
