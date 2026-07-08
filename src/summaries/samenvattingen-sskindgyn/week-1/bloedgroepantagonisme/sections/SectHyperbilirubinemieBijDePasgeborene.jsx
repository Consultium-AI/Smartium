import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hyperbilirubinemie bij de pasgeborene`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bilirubine ontstaat bij de afbraak van hemoglobine uit rode bloedcellen. Bij een pasgeborene kan bilirubine snel stijgen, en dat kan fysiologisch of pathologisch zijn.`}</Inline></p>
      <SubHeading><Inline>{`Fysiologische hyperbilirubinemie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Fysiologische hyperbilirubinemie ontstaat meestal pas na ongeveer 72 uur na de geboorte. Dat komt door drie dingen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`het UDP-glucuronyltransferase in de lever is nog onrijp;`}</Inline></li>
        <li><Inline>{`erytrocyten hebben een kortere levensduur;`}</Inline></li>
        <li><Inline>{`de enterohepatische kringloop is toegenomen.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Deze vorm verdwijnt meestal binnen 10 dagen.`}</Inline></p>
      <SubHeading><Inline>{`Pathologische hyperbilirubinemie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij pathologische hyperbilirubinemie ontstaat de bilirubineverhoging vaak al binnen 24 uur na de geboorte. Dat is dus eerder en vaak ernstiger. Prematuriteit en infectie kunnen ook aanleiding geven tot hyperbilirubinemie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een belangrijk aandachtspunt is dat niet elke bilirubineverhoging hetzelfde betekent. Bij galgangatresie is er bijvoorbeeld sprake van geconjugeerde hyperbilirubinemie. Het risico op kernicterus wordt echter veroorzaakt door verhoogde vrije bilirubine. Daarom is galgangatresie op zichzelf geen indicatie voor wisseltransfusie. Om galgangatresie uit te sluiten, moet ook geconjugeerd bilirubine worden bepaald.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** waarom is bilirubine bij een pasgeborene klinisch zo belangrijk?
**Mini-antwoord:** omdat een hoge concentratie ongeconjugeerd bilirubine toxisch kan zijn en de hersenen kan beschadigen.`} />
      <SubHeading><Inline>{`Oorzaken van hyperbilirubinemie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Hyperbilirubinemie kan passen bij verschillende ziektebeelden. In deze stof ligt de nadruk op bloedgroepantagonisme, maar ook andere oorzaken kunnen voorkomen, zoals:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`rode bloedcelmembraandefecten;`}</Inline></li>
        <li><Inline>{`rode bloedcelenzymdefecten;`}</Inline></li>
        <li><Inline>{`thalassemie;`}</Inline></li>
        <li><Inline>{`galgangatresie.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij thalassemie ontstaat de hyperbilirubinemie meestal pas weken na de geboorte, omdat de hemoglobineproductie na de geboorte verandert. Heel zeldzaam is een gamma-delta-thalassemie, die wel al neonatale hemolyse kan geven.`}</Inline></p>
    </div>
  )
}
