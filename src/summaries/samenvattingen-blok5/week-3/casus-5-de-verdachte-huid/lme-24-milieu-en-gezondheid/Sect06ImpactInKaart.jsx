export default function Sect06ImpactInKaart() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Hoe breng je impact in kaart?</h2>
      <p>
        Er bestaan verschillende manieren om de milieubelasting van een zorgorganisatie zichtbaar te maken. Een
        veelgebruikte aanpak is een milieubarometer, waarmee je vooral energiegebruik, vervoer en afvalverwerking in
        beeld brengt. Dat is handig om de eerste grote verbeterpunten te herkennen.
      </p>
      <p>
        Voor een nog uitgebreidere analyse wordt vaak een levenscyclusanalyse (LCA) gebruikt. Daarbij kijk je niet alleen
        naar het directe gebruik van een product of behandeling, maar naar de hele levenscyclus: van grondstof en
        productie tot transport, gebruik en afval. Zo krijg je een beter beeld van de totale impact.
      </p>
      <p>
        Een voorbeeld daarvan is een analyse van CABG-zorg en cataractoperaties. Daaruit bleek dat een CABG-patiënt meer
        dan een halve ton CO₂ kan veroorzaken. Belangrijke bronnen waren medische disposables, energieverbruik en vervoer
        van medewerkers. Bij cataractoperaties lag de uitstoot per operatie veel lager, maar ook daar bleek
        patiëntenvervoer een grote bijdrage te leveren.
      </p>
      <div className="rounded-xl border border-amber-200 dark:border-amber-600/40 bg-amber-50 dark:bg-amber-950/65 p-4">
        <p className="text-amber-900 dark:text-amber-100">
          <strong className="text-amber-950 dark:text-amber-50">Aandachtsvraag:</strong> Wat leer je van een LCA?{' '}
          <span className="font-medium">
            Mini-antwoord: Dat je de milieubelasting van een behandeling of product over de hele keten bekijkt, waardoor
            duidelijk wordt waar de grootste winst te behalen is.
          </span>
        </p>
      </div>
    </div>
  )
}
