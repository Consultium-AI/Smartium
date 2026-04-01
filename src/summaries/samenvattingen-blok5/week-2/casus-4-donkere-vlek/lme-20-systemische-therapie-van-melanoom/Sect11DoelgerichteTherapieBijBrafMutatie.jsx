export default function Sect11DoelgerichteTherapieBijBrafMutatie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Doelgerichte therapie bij BRAF-mutatie</h2>
      <p>
        Bij 40–60% van de melanomen is er een activerende BRAF-mutatie aanwezig. BRAF is een eiwit in een intracellulaire
        signaalroute die celgroei regelt. Als BRAF gemuteerd is, geeft het continu een signaal door voor ongeremde
        celgroei. Daardoor kan melanoom ontstaan.
      </p>
      <p>Belangrijk om te onthouden:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>de mutatie is niet erfelijk;</li>
        <li>de mutatie ontstaat tijdens het leven;</li>
        <li>de mutatie zit in de praktijk alleen in tumorcellen.</li>
      </ul>
      <p>
        BRAF zit in de RAS/RAF/MEK/ERK-cascade, een belangrijke signaalroute voor celproliferatie.{'  '}
        Bij doelgerichte therapie worden medicijnen gebruikt die deze afwijkende route blokkeren. In melanoom gaat het
        vooral om:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>BRAF-remmers: bijvoorbeeld encorafenib, vemurafenib, dabrafenib</li>
        <li>MEK-remmers: bijvoorbeeld binimetinib, cobimetinib, trametinib</li>
      </ul>
      <p>
        BRAF-remmers werken specifiek op het gemuteerde BRAF-eiwit. Omdat melanomen echter snel resistent kunnen worden,
        wordt vaak ook een MEK-remmer toegevoegd. Zo ontstaat de combinatie BRAF + MEK-remming.
      </p>
      <p>
        Het idee is dat je de afwijkende signaalroute remt en daarmee de tumorgroei afremt of tumordood bereikt. Toch blijft
        resistentie een groot probleem.
      </p>
    </div>
  )
}
