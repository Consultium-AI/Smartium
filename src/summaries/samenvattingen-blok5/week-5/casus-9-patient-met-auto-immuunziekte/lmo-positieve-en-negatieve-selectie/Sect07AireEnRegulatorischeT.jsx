export default function Sect07AireEnRegulatorischeT() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Rol van AIRE</h3>
      <p>
        Niet alle autoantigenen van het lichaam zijn vanzelf aanwezig in de thymus. Toch moeten zich ontwikkelende
        T-cellen ook leren niet te reageren op antigenen uit allerlei verschillende weefsels, zoals huid, darm of
        endocriene organen.
      </p>
      <p>
        Hier speelt AIRE een belangrijke rol. AIRE staat voor AutoImmune Regulator. Dit eiwit reguleert de expressie van
        weefselspecifieke autoantigenen in een subpopulatie van medullaire epitheelcellen. Daardoor kunnen deze cellen
        in de thymus antigenen tot expressie brengen die normaal vooral elders in het lichaam voorkomen.
      </p>
      <p>
        Deze antigenen worden vervolgens gepresenteerd in de context van MHC-klasse I en II. Op die manier kunnen
        autoreactieve onrijpe T-lymfocyten ook tegen zulke weefselspecifieke autoantigenen worden geselecteerd en
        verwijderd.
      </p>
      <p>
        Mutaties in het AIRE-gen kunnen daarom leiden tot ernstige auto-immuniteit, waarbij meerdere organen betrokken
        zijn.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Regulatorische T-lymfocyten</h3>
      <p>
        Negatieve selectie in de thymus leidt niet alleen tot deletie. Een alternatieve uitkomst is dat sommige
        autoreactieve T-lymfocyten differentiëren tot regulatorische T-lymfocyten, ook wel Treg-cellen. Deze cellen
        spelen later een belangrijke rol in het onderdrukken van auto-reactieve immuunreacties in de periferie.
      </p>
      <p>De vorming van Treg-cellen kan daarom ook gezien worden als een vorm van centrale tolerantie.</p>
    </div>
  )
}
