export default function Sect12TnmClassificatie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">TNM-classificatie</h2>
      <p>
        De TNM-classificatie is een internationaal systeem om het stadium van longkanker te bepalen. Dat is belangrijk voor de prognose en de keuze van behandeling.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Tabel 4. Overzicht van TNM bij longkanker</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Component</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Betekenis</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold">T</td>
              <td className="px-4 py-3 align-top">Grootte en lokale uitbreiding van de primaire tumor</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold">N</td>
              <td className="px-4 py-3 align-top">Aan- of afwezigheid en lokalisatie van lymfekliermetastasen</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold">M</td>
              <td className="px-4 py-3 align-top">Aan- of afwezigheid van metastasen op afstand</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">T-categorie</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-semibold">T1</span>: tumor ≤3 cm, omgeven door longweefsel, zonder ingroei in de hoofdbronchus
        </li>
        <li>
          <span className="font-semibold">T1a</span>: ≤1 cm
        </li>
        <li>
          <span className="font-semibold">T1b</span>: &gt;1 tot ≤2 cm
        </li>
        <li>
          <span className="font-semibold">T1c</span>: &gt;2 tot ≤3 cm
        </li>
        <li>
          <span className="font-semibold">T2</span>: tumor &gt;3 tot ≤5 cm, of ingroei in hoofdbronchus, viscerale pleura, of nabije longkwab
        </li>
        <li>
          <span className="font-semibold">T2a</span>: &gt;3 tot ≤4 cm, of een aantal andere T2-kenmerken
        </li>
        <li>
          <span className="font-semibold">T2b</span>: &gt;4 tot ≤5 cm
        </li>
        <li>
          <span className="font-semibold">T3</span>: tumor &gt;5 tot ≤7 cm, of ingroei in thoraxwand, diafragma of nabije structuren, of een tweede tumor in dezelfde longkwab
        </li>
        <li>
          <span className="font-semibold">T4</span>: tumor &gt;7 cm, of ingroei in mediastinum, hart, grote vaten, trachea, oesofagus, wervelkolom, of aanwezigheid van een satellietlaesie in dezelfde long maar in een andere longkwab
        </li>
      </ul>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">N-categorie</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-semibold">N0</span>: geen lymfekliermetastasen
        </li>
        <li>
          <span className="font-semibold">N1</span>: metastasen in ipsilaterale peribronchiale en/of hiliaire klieren
        </li>
        <li>
          <span className="font-semibold">N2</span>: metastasen in ipsilaterale mediastinale en/of subcarinale klieren
        </li>
        <li>
          <span className="font-semibold">N2a</span>: één ipsilaterale mediastinale of subcarinale station
        </li>
        <li>
          <span className="font-semibold">N2b</span>: meerdere ipsilaterale mediastinale en/of subcarinale stations
        </li>
        <li>
          <span className="font-semibold">N3</span>: metastasen in contralaterale mediastinale, hiliaire, supraclaviculaire of scalene klieren
        </li>
      </ul>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">M-categorie</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-semibold">M0</span>: geen metastasen op afstand
        </li>
        <li>
          <span className="font-semibold">M1a</span>: tumor in contralaterale long, pleuravocht met tumorcellen, of pericardvocht met tumorcellen
        </li>
        <li>
          <span className="font-semibold">M1b</span>: één metastase op afstand, bijvoorbeeld in hersenen of lever
        </li>
        <li>
          <span className="font-semibold">M1c</span>: meerdere metastasen op afstand in één of meerdere organen
        </li>
      </ul>
      <p>
        Op basis van de TNM-classificatie wordt een patiënt ingedeeld in stadium I, II, III of IV. Voor kleincellig longcarcinoom wordt ook vaak gesproken over <span className="font-semibold">limited disease</span> voor stadium I t/m III en <span className="font-semibold">extended disease</span> voor stadium IV.
      </p>
      <p>
        Bij longkanker zijn veel patiënten bij diagnose al in een gevorderd stadium. Bijna de helft bevindt zich op het moment van diagnose al in stadium IV. Longkanker wordt dus vaak pas ontdekt als er al uitzaaiingen zijn.
      </p>
      <p>
        <span className="font-semibold">Aandachtspunt:</span> in welk stadium worden veel patiënten ontdekt?{' '}
        <br />
        <span className="font-semibold">Mini-antwoord:</span> vaak stadium IV, dus met metastasen.
      </p>
    </div>
  )
}
