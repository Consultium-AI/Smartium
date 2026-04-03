export default function Sect07InteractiesEnOpname() {
  return (
    <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Interacties en opname</h2>
      <p>
        Tacrolimus heeft belangrijke interacties met andere middelen die CYP3A remmen of juist induceren. Denk aan:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>macrolide antibiotica;</li>
        <li>anti-epileptica;</li>
        <li>amiodaron;</li>
        <li>rifampicine;</li>
        <li>antischimmelmiddelen uit de azolgroep, zoals fluconazol.</li>
      </ul>
      <p>
        Daarnaast is diarree belangrijk. Diarree kan leiden tot versterkte absorptie van tacrolimus en ciclosporine. Dat komt doordat de P-glycoproteïne in de darm normaal gesproken een deel van het opgenomen middel weer naar buiten pompt, en doordat ook de afbraak in de darmwand via CYP3A4 afneemt. Bij diarree wordt dus meer tacrolimus opgenomen, waardoor de spiegel sterk kan stijgen.
      </p>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          Aandacht-vraag: Waarom is diarree bij een patiënt op tacrolimus zo belangrijk?</p>
      <p className="mt-2">
        <span className="font-semibold">Mini-antwoord:</span>{' '}Omdat de opname toeneemt en de bloedspiegel daardoor gevaarlijk hoog kan worden.
        </p>
      </div>
    </div>
  )
}
