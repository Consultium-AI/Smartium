export default function Sect07DiagnoseVersusFollowUp() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Diagnose versus follow-up</h2>
      <p>
        Bij diagnose kijk je vooral naar het beenmerg: hoeveel plasmacellen zijn er, en is er sprake van
        monoklonaliteit? Daarnaast bepaal je het M-proteïne in het bloed met elektroforese, immunofixatie en vrije
        lichte ketens.
      </p>
      <p>Bij follow-up en behandeling verschuift de nadruk naar bloedonderzoek:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>elektroforese om te zien of de hoeveelheid M-proteïne daalt;</li>
        <li>vrije lichte ketens om snel verandering te volgen;</li>
        <li>immunofixatie als het M-proteïne al niet meer zichtbaar is.</li>
      </ul>
      <p>
        Wanneer het M-proteïne in het bloed verdwijnt, wordt gekeken of er ook sprake is van complete respons in het
        beenmerg.
      </p>
      <div className="rounded-xl border-l-4 border-primary-400 bg-primary-50 dark:bg-primary-500/10 p-4 space-y-2">
        <p>
          <strong className="text-primary-900 dark:text-primary-200">Aandachtvraag:</strong> Waarom is
          beenmergonderzoek nodig als het M-proteïne al weg lijkt?{'  '}
          <strong className="text-primary-900 dark:text-primary-200">Mini-antwoord:</strong> Om te bevestigen of er
          echt complete respons is en om onderscheid te maken met een diepere partiële respons.
        </p>
      </div>
    </div>
  )
}
