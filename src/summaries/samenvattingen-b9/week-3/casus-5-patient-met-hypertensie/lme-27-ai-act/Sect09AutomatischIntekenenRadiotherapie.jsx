export default function Sect09AutomatischIntekenenRadiotherapie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Automatisch intekenen bij radiotherapie</h2>
      <p>
        Bij radiotherapie kan AI helpen bij het automatisch intekenen van anatomische structuren. De technologie is bedoeld voor zowel laborant als arts en beïnvloedt de therapieplanning. Daarom is dit eveneens hoog risico.
      </p>
      <p>De uitdagingen zitten onder andere in:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>variatie in beeldvormingsprotocollen;</li>
        <li>verschillen in patiëntanatomie;</li>
        <li>verschillen in tumorkarakteristieken;</li>
        <li>het risico dat de patiëntpopulatie in het ziekenhuis niet overeenkomt met de populatie waarop het algoritme is getraind.</li>
      </ul>
      <p>
        De contouren moeten altijd beoordeeld worden. De arts blijft eindverantwoordelijk voor de juiste toepassing van de tools. Ook hier hoeft het gebruik van de AI-tool niet standaard aan de patiënt verteld te worden. Wel wordt vastgelegd wie de contouren heeft goedgekeurd; het gebruikte systeem hoeft niet expliciet vastgelegd te worden.
      </p>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          Aandacht-vraag: Moet je een patiënt standaard vertellen dat AI is gebruikt?</p>
      <p className="mt-2">
        <span className="font-semibold">Mini-antwoord:</span>{' '}Nee, dat hoeft niet standaard. Wel moet de arts de uitkomsten en de beoordeling goed vastleggen en blijft hij eindverantwoordelijk.
        </p>
      </div>
    </div>
  )
}
