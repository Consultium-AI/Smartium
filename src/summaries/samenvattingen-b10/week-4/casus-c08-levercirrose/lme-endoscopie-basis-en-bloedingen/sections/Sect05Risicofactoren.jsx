export default function Sect05Risicofactoren() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Risicofactoren</h2>
      <p>Bij de anamnese zoek je actief naar factoren die de kans op een bloeding vergroten.</p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Risicofactoren voor hoge tractus bloedingen</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>NSAID- of aspirinegebruik: beschadigt het maagslijmvlies en kan ulcusvorming geven.</li>
        <li>
          Antistolling, zoals DOAC’s, coumarines en clopidogrel: verhoogt het bloedingsrisico bij bestaande laesies.
        </li>
        <li>Levercirrose of portale hypertensie: geeft kans op slokdarm- of maagvarices.</li>
        <li>Voorgeschiedenis van ulcuslijden: verhoogt de kans op recidiefbloeding.</li>
        <li>Overmatig alcoholgebruik: geassocieerd met gastritis en meer kans op varices.</li>
      </ul>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Risicofactoren voor lage tractus bloedingen</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          hogere leeftijd, vooral {'>'} 60 jaar;
        </li>
        <li>diverticulose in de voorgeschiedenis;</li>
        <li>angiodysplasieën;</li>
        <li>antistolling of plaatjesremmers;</li>
        <li>comorbiditeit, zoals nierfalen of cardiovasculaire ziekte.</li>
      </ul>
    </div>
  )
}
