import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Behandeling van hyponatriëmie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De behandeling hangt af van de oorzaak, de duur en de klachten.`}</Inline></p>
      <SubHeading><Inline>{`Acute symptomatische hyponatriëmie`}</Inline></SubHeading>
      <PBody text={`Bij acute en/of symptomatische hyponatriëmie is **hypertoon zout** de behandeling. Dat is de enige behandeling die snel genoeg werkt om hersenoedeem te behandelen, omdat het water uit de hersencellen trekt.`} />
      <p className="leading-relaxed"><Inline>{`Hypertoon zout kan als bolus of als continue infusie worden gegeven. Een bolus van 150 ml 3% NaCl in 20 minuten is een voorbeeld. Daarna beoordeel je opnieuw natrium en klachten.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Isotoon zout is hier niet de juiste keuze, omdat het bij SIADH zelfs tot verdere hyponatriëmie kan leiden. Isotoon zout is vooral bedoeld bij hypovolemische hyponatriëmie.`}</Inline></p>
      <SubHeading><Inline>{`Chronische hyponatriëmie`}</Inline></SubHeading>
      <PBody text={`Bij chronische hyponatriëmie moet je voorzichtig corrigeren. De correctiesnelheid mag maximaal **8 tot 10 mmol/l per dag** zijn. Dat is een limiet, geen streefwaarde om actief na te jagen.`} />
      <PBody text={`Te snelle correctie kan leiden tot **osmotische demyelinisatie**. Dat is een ernstige complicatie, met risico op neurologische schade zoals verlammingen, epilepsie of zelfs locked-in syndroom.`} />
      <SubHeading><Inline>{`Tabel 5. Behandeling van hyponatriëmie`}</Inline></SubHeading>
      <DataTable rows={[["Situatie", "Behandeling"], ["Acute symptomatische hyponatriëmie", "hypertoon zout"], ["Hypovolemische hyponatriëmie", "isotoon zout"], ["SIADH", "waterrestrictie"], ["SIADH, aanvullende opties", "lisdiureticum + NaCl-tabletten, ureum, tolvaptan, eventueel demeclocycline"], ["Oorzakelijke behandeling", "stop uitlokkende medicatie, geef steroïden bij bijnierinsufficiëntie, behandel onderliggende oorzaak"]]} />
      <PBody text={`Bij SIADH is waterrestrictie de eerste keus. Hoe streng die beperking moet zijn, kun je inschatten met de verhouding tussen **urine-natrium + urine-kalium** en **serum-natrium**. Als die verhouding groter is dan 1, kan de waterbeperking zeer streng zijn, bijvoorbeeld minder dan 500 ml per dag. Bij een verhouding rond 1 is 500–700 ml per dag passend, en bij een verhouding kleiner dan 1 vaak minder dan 1 liter per dag.`} />
      <p className="leading-relaxed"><Inline>{`Naast waterrestrictie kunnen ook andere behandelingen worden gebruikt:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`furosemide met NaCl-tabletten;`}</Inline></li>
        <li><Inline>{`ureum;`}</Inline></li>
        <li><Inline>{`tolvaptan;`}</Inline></li>
        <li><Inline>{`eventueel demeclocycline.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Verder is het belangrijk om de oorzaak aan te pakken. Denk aan:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`stoppen van medicatie die hyponatriëmie veroorzaakt;`}</Inline></li>
        <li><Inline>{`isotone infusie bij hypovolemie;`}</Inline></li>
        <li><Inline>{`glucocorticoïden bij bijnierinsufficiëntie;`}</Inline></li>
        <li><Inline>{`verhogen van de eiwitinname bij “tea and toast”-hyponatriëmie.`}</Inline></li>
      </ul>
    </div>
  )
}
