export default function Sect18Kruisallergie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Kruisallergie</h2>
      <p>
        Kruisallergie ontstaat wanneer twee medicijnen structureel op elkaar lijken. Dan kan dezelfde antistof of
        dezelfde T-celreceptor beide middelen herkennen.
      </p>
      <p>Dat betekent bijvoorbeeld:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>kruisreactie tussen verschillende penicillines is mogelijk</li>
        <li>
          kruisreactie tussen amoxicilline en aminofealosporines zoals cefaclor, cefalexine en cefadroxil kan voorkomen
        </li>
        <li>kruisreactie tussen bepaalde cefalosporines onderling kan voorkomen</li>
        <li>kruisreactie tussen cefalosporines en aztreonam kan voorkomen als ze dezelfde R1-zijketen delen</li>
      </ul>
      <p>
        Bij beta-lactam-antibiotica is de beta-lactamring belangrijk, maar vooral de R1-zijketen bepaalt vaak of
        kruisreactie optreedt. Medicijnen met identieke of vergelijkbare zijketens geven meer kans op kruisallergie.
      </p>
    </div>
  )
}
