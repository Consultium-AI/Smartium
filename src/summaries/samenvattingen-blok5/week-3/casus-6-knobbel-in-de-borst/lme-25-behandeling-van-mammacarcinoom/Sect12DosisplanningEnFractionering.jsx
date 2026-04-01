export default function Sect12DosisplanningEnFractionering() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Dosisplanning en fractionering</h2>
      <p>
        De bestraling wordt gegeven met fotonen, dus röntgenstraling met hoge energie. Bij mammacarcinoom zijn
        verschillende fractioneringsschema’s mogelijk. Fractionering betekent dat de totale dosis in kleinere porties
        wordt opgesplitst.
      </p>
      <p>De meest gebruikte schema’s zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>15 fracties van 2,67 Gy, 1x per dag, 5x per week;</li>
        <li>5 fracties van 5,2 Gy, 1x per dag, 5x per week.</li>
      </ul>
      <p>Gy staat voor Gray en is de eenheid van bestraling.</p>
      <p>Het maken van een bestralingsplan heet dosisplanning. Daarbij wordt gekeken of:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>de dosis in het doelgebied goed is;</li>
        <li>de dosis in kritieke organen zo laag mogelijk blijft.</li>
      </ul>
      <p>Belangrijke kritieke organen zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>het hart;</li>
        <li>de long;</li>
        <li>de contralaterale mamma.</li>
      </ul>
      <p>
        Aandachtsvraag: wat is het doel van dosisplanning?{'  '}
        Mini-antwoord: zorgen dat het doelgebied voldoende dosis krijgt en dat omliggende gezonde organen zo weinig
        mogelijk schade oplopen.
      </p>
    </div>
  )
}
