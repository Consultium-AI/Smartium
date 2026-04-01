export default function Sect15TumordiameterTnm() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Tumordiameter, radicaliteit en TNM</h2>
      <p>
        De tumordiameter is belangrijk voor de prognose. Hierbij is het belangrijk dat de pathologische diameter wordt
        vergeleken met de diameter op beeldvorming. Soms zijn er verklaarbare discrepanties, bijvoorbeeld bij een
        uitgegroeid DCIS-component of bij een lobulair carcinoom.
      </p>
      <p>De stagering gebeurt volgens de pTNM-criteria en geeft de uitgebreidheid van het carcinoom weer:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>T: diameter van de primaire tumor</li>
        <li>N: aantal en locatie van regionale lymfeklieren</li>
        <li>M: aanwezigheid of afwezigheid van metastasen op afstand</li>
      </ul>
      <p>
        De radicaliteit na resectie is ook belangrijk. Voor optimale lokale behandeling is het van belang dat bekend is
        hoe het zit met de snijvlakken na een resectie. Bij irradicaliteit kan gekozen worden voor aanvullende
        behandeling, zoals radiotherapie en/of nogmaals chirurgie.
      </p>
    </div>
  )
}
