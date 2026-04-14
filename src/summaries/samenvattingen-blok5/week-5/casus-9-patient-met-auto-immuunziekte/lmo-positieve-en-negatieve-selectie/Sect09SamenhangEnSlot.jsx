export default function Sect09SamenhangEnSlot() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Samenhang tussen B- en T-celselectie</h2>
      <p>
        Er zijn duidelijke overeenkomsten tussen de selectie van B- en T-lymfocyten, maar ook belangrijke verschillen.
      </p>
      <p>
        Bij beide celtypen is klonale deletie een kernmechanisme van centrale tolerantie. Sterk autoreactieve cellen
        worden verwijderd door apoptose.
      </p>
      <p>
        Het verschil is dat B-lymfocyten daarnaast nog receptor editing kunnen ondergaan. Daarmee kan de
        receptorspecificiteit worden aangepast. Bij T-lymfocyten speelt juist de interactie met MHC een centrale rol:
        zij moeten niet alleen veilig zijn, maar ook bruikbaar in de context van MHC.
      </p>
      <p>
        Een tweede belangrijk verschil is dat in de thymus naast deletie ook de vorming van Treg-cellen kan optreden.
        Bovendien heeft AIRE een bijzondere rol in de negatieve selectie van T-cellen, omdat het helpt om
        weefselspecifieke autoantigenen zichtbaar te maken in de thymus.
      </p>

      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Samenvatting</h2>
      <p>
        Tijdens de ontwikkeling van lymfocyten ontstaat door genherschikking een grote diversiteit aan
        antigeenreceptoren. Daardoor kunnen ook autoreactieve cellen ontstaan. Om auto-immuniteit te voorkomen worden B- en
        T-lymfocyten geselecteerd.
      </p>
      <p>
        Bij B-lymfocyten gebeurt centrale tolerantie in het beenmerg. Onrijpe B-cellen die sterk binden aan
        autoantigenen kunnen worden verwijderd via klonale deletie of hun receptorspecificiteit veranderen via receptor
        editing. Niet alle autoreactieve B-cellen worden centraal verwijderd, waardoor perifere tolerantie ook nodig is.
      </p>
      <p>
        Bij T-lymfocyten gebeurt selectie in de thymus. In de cortex vindt positieve selectie plaats: thymocyten met een
        TCR die zwak tot intermediair bindt aan eigen MHC overleven. Tegelijk wordt bepaald of de cel uitrijpt tot CD4+-
        of CD8+-T-lymfocyt. In de medulla vindt negatieve selectie plaats: thymocyten die te sterk binden aan
        lichaamseigen peptide-MHC-complexen worden verwijderd door apoptose. Een deel differentieert tot regulatorische
        T-lymfocyten.
      </p>
      <p>
        AIRE speelt hierbij een belangrijke rol doordat het in medullaire epitheelcellen expressie van weefselspecifieke
        autoantigenen mogelijk maakt. Zo kunnen ook T-cellen die tegen zulke antigenen reageren tijdig worden
        uitgeschakeld.
      </p>
      <p>De kern is dus:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>B-cellen worden in het beenmerg gecontroleerd op autoreactiviteit</li>
        <li>T-cellen worden in de thymus gecontroleerd op bruikbaarheid én veiligheid</li>
        <li>AIRE ondersteunt negatieve selectie van T-cellen</li>
        <li>
          perifere tolerantie vormt een extra beveiligingslaag voor cellen die aan centrale selectie ontsnappen
        </li>
      </ul>
    </div>
  )
}
