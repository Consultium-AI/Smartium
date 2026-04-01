export default function Sect08CARTCeltherapie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">CAR T-celtherapie</h2>
      <p>
        CAR T-celtherapie is een nieuwe celtherapie die nog volop in ontwikkeling is, maar al duidelijk heeft laten zien
        dat de prognose van onder andere DLBCL sterk kan verbeteren. CAR staat voor chimeric antigen receptor.
      </p>
      <p>De behandeling verloopt in stappen:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>aferese: T-cellen worden afgenomen uit het bloed;</li>
        <li>modificatie: de T-cellen worden genetisch aangepast;</li>
        <li>expansie en productvorming: de cellen worden vermeerderd;</li>
        <li>preconditionering: de patiënt krijgt vooraf behandeling;</li>
        <li>infusie: de CAR T-cellen worden teruggegeven.</li>
      </ul>
      <p>De CAR T-cellen herkennen vervolgens doelcellen en doden deze.</p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Indicaties</h3>
      <p>
        In Europa zijn verschillende CAR T-producten geregistreerd, onder andere voor multipel myeloom en diverse
        B-celmaligniteiten. In Nederland zijn de beschikbare indicaties beperkter en gaat het vooral om:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          anti-CD19 CAR bij diffuus grootcellig B-cellymfoom, na twee eerdere behandellijnen of bij primair refractaire
          ziekte;
        </li>
        <li>
          acute lymfoblastaire leukemie (ALL) bij kinderen en jongvolwassenen tot 25 jaar met recidief na
          beenmergtransplantatie of bij een tweede of later recidief van B-cel-ALL.
        </li>
      </ul>
      <p>
        CAR-T wordt ook besproken bij multipel myeloom en andere B-cellymfoomen. Voor multipel myeloom richten
        CAR-producten zich vaak op BCMA.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Klinische studies en effect</h3>
      <p>
        De overlevingscurve van refractair DLBCL was vóór CAR-T ongunstig. Klinische studies laten zien dat CAR-T de
        uitkomsten duidelijk heeft verbeterd. In de TRANSCEND-studie werd bijvoorbeeld een progressievrije overleving van
        ongeveer 40% op 24 maanden gezien, tegenover ongeveer 10% zonder CAR-T. Vergelijkbare resultaten worden gezien in
        verschillende anti-CD19 CAR-studies en ook in dagelijkse praktijk.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Toxiciteit van CAR-T</h3>
      <p>CAR-T kan gepaard gaan met belangrijke bijwerkingen:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>cytokine release syndrome (CRS): ontstaat door sterke immuunactivatie met snelle afgifte van cytokinen;</li>
        <li>neurologische toxiciteit / ICANS: verwardheid, delier, afasie, insulten;</li>
        <li>cytopenieën;</li>
        <li>B-celaplasie;</li>
        <li>hypogammaglobulinemie;</li>
        <li>allergie of anafylaxie;</li>
        <li>on-target, off-tumor toxiciteit;</li>
        <li>zeldzaam: insertionele oncogenese.</li>
      </ul>
      <p>
        CRS treedt vaak samen op met maximale T-cel-expansie en ontstaat meestal binnen dagen na infusie. Neurologische
        toxiciteit treedt vaak later op. Veel toxiciteit is tijdelijk, maar specialistische opvang is noodzakelijk.
      </p>
    </div>
  )
}
