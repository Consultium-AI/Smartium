export default function Sect15BehandelingRectum() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Behandeling van rectumcarcinoom</h2>
      <p>Bij rectumcarcinoom is de behandeling meer afhankelijk van de precieze locatie in het rectum.</p>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">T1</h3>
        <p className="mt-4">
          T1-tumoren kunnen soms endoscopisch worden verwijderd. Er is in het rectum ook een extra optie: TAMIS. Dat is
          een minimaal invasieve chirurgische benadering voor bereikbare laesies, meestal &lt;15 cm van de lineaal
          dentata.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">T2-T3</h3>
        <p className="mt-4">
          Bij T2-tumoren wordt standaard geopereerd als er geen M1-ziekte is. Soms wordt gekozen voor orgaansparende
          behandeling. Dan kan radiotherapie of chemoradiatie worden gegeven, idealiter in studieverband.
        </p>
        <p className="mt-4">Bij T2-T3 speelt de ligging mee:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>proximale tumoren: partiële mesorectale excisie (PME);</li>
          <li>distale tumoren: totale mesorectale excisie (TME).</li>
        </ul>
        <p className="mt-4">
          Als orgaansparing gewenst is, kan eerst worden voorbehandeld met chemo en/of radiotherapie.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">T4, MRF+ en EMVI+</h3>
        <p className="mt-4">
          Bij T4-tumoren, en zeker als de mesorectale fascie betrokken is of als er EMVI aanwezig is, wordt vaak eerst
          neoadjuvante chemoradiatie gegeven. Daarna beoordeel je opnieuw of lokale excisie, TME of watchful wait met latere
          chirurgie passend is.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Partiële versus totale mesorectale excisie
        </h3>
        <p className="mt-4">
          Bij TME wordt het volledige mesorectum verwijderd. Dat geeft een grotere kans dat ook structuren die aan het
          mesorectale vet grenzen beschadigd raken. Daardoor is de kans op postoperatieve morbiditeit groter, zoals:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>lekkage van de anastomose,</li>
          <li>incontinentie voor feces en/of urine,</li>
          <li>seksuele disfunctie.</li>
        </ul>
        <p className="mt-4">
          Bij PME blijft een deel van het mesorectum in situ. Dat gebeurt op minimaal 5 cm afstand van de tumor. PME is
          dus minder uitgebreid, maar niet voor elke tumor even goed mogelijk. Hoe distaler de tumor ligt, hoe lastiger
          een PME wordt.
        </p>
      </div>
    </div>
  )
}
