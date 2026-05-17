export default function Sect08WatLevertScreeningOp() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Wat levert screening op?</h2>
      <p>
        Screening kan veel voordeel hebben, maar vooral in een kleine groep die echt baat heeft. Tegelijk levert screening in
        een grote groep vaak een klein nadeel op, bijvoorbeeld door belasting van de test of onterechte uitslagen. Daarom
        moet screening alleen worden ingevoerd als de voordelen groter zijn dan de nadelen.
      </p>
      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Voordelen van screening</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>sterfte voorkomen;</li>
          <li>ziektelast voorkomen;</li>
          <li>behandelingen voorkomen;</li>
          <li>geruststelling bij een correct positieve uitslag.</li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Nadelen van screening</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>lasten van de test;</li>
          <li>overdiagnose;</li>
          <li>fout-positieve uitslagen;</li>
          <li>onterechte geruststelling bij een fout-negatieve uitslag;</li>
          <li>stress;</li>
          <li>kosten;</li>
          <li>mogelijk meer antibioticagebruik.</li>
        </ul>
      </div>
      <p>De afweging tussen voordeel en nadeel is dus essentieel.</p>
    </div>
  )
}
