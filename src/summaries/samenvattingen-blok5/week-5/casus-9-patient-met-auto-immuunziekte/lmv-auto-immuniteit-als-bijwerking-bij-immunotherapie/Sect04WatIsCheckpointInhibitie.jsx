export default function Sect04WatIsCheckpointInhibitie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Wat is checkpoint-inhibitie?</h2>
      <p>
        Het immuunsysteem bevat remmende signalen, ook wel checkpoints genoemd. Die remmen voorkomen dat T-cellen te
        sterk of onnodig actief worden. Twee belangrijke voorbeelden hiervan zijn:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>CTLA-4</li>
        <li>PD-1/PD-L1</li>
      </ul>
      <p>
        Wanneer deze remmende signalen worden geblokkeerd, worden T-cellen actiever. Dat is gunstig als het gaat om het
        opruimen van tumorcellen. De afweerreactie tegen de tumor wordt dan sterker.
      </p>
      <p>
        Maar precies daar zit ook het probleem: als het immuunsysteem sterker wordt aangezet, kan het niet alleen
        tumorcellen aanvallen, maar ook gezonde lichaamscellen. Zo kan een behandeling die bedoeld is om kanker te
        bestrijden, tegelijk immuun-gemedieerde complicaties veroorzaken.
      </p>
      <p>
        Je kunt checkpoint-inhibitie dus zien als het loslaten van een rem op de afweer. Dat kan therapeutisch heel
        effectief zijn, maar het vergroot ook de kans op auto-immuniteit.
      </p>
    </div>
  )
}
