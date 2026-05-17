export default function SectInleidingRisicofactoren() {
  return (
    <div className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">INLEIDING – RISICOFACTOREN (7)</h2>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <h3 className="font-bold text-slate-900 dark:text-slate-100">
            Belangrijkste risicofactoren hoge tractus digestivusbloeding
          </h3>
          <ol className="list-decimal pl-6 space-y-4">
            <li>
              <strong>NSAID- of aspirinegebruik</strong> → Beschadigt maagslijmvlies → ulcusvorming
            </li>
            <li>
              <strong>Antistolling (DOAC’s, coumarines, clopidogrel)</strong> → Verhoogt bloedingsrisico bij bestaande laesies
            </li>
            <li>
              <strong>Levercirrose / portale hypertensie</strong> → Vorming van slokdarm- of maagvarices
            </li>
            <li>
              <strong>Voorgeschiedenis van ulcuslijden</strong> → Grotere kans op recidiefbloeding
            </li>
            <li>
              <strong>Overmatig alcoholgebruik</strong> → Gastritis + verhoogde kans op varices
            </li>
          </ol>
        </div>
        <div className="space-y-4">
          <h3 className="font-bold text-slate-900 dark:text-slate-100">
            Belangrijkste risicofactoren lage tractus digestivusbloeding
          </h3>
          <ol className="list-decimal pl-6 space-y-4">
            <li>
              <strong>Hoge leeftijd (&gt;60 jaar)</strong> → Meer divertikels en vaatmalformaties
            </li>
            <li>
              <strong>Diverticulose in de voorgeschiedenis</strong> → Veelvoorkomende oorzaak van acute bloedingen
            </li>
            <li>
              <strong>Angiodysplasieën</strong> → Fragiele vaatstructuren in de darmwand
            </li>
            <li>
              <strong>Antistollingsgebruik / plaatjesremmers</strong> → Verergeren bestaande bloedingsbronnen
            </li>
            <li>
              <strong>Comorbiditeit (bijv. nierfalen, cardiovasculaire ziekte)</strong> → Slechtere vaatconditie en verhoogd risico
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}
