import { Inline, PBody, SubHeading } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="leading-relaxed m-0">
        <Inline>{`De eerste stap is: **is dit een infectie, een ontsteking, een aangeboren afwijking of een tumor?**`}</Inline>
      </p>
      <p className="leading-relaxed m-0">
        <Inline>{`Koorts en malaise kunnen je in eerste instantie aan een infectie doen denken, maar een **buikmassa** maakt dat je ook sterk moet denken aan een **maligniteit**. Bij kinderen zijn twee diagnoses klassiek belangrijk bij een buikmassa:`}</Inline>
      </p>
      <ol className="list-decimal pl-6 space-y-2 m-0">
        <li><Inline>{`**Wilms-tumor**`}</Inline></li>
        <li><Inline>{`**Neuroblastoom**`}</Inline></li>
      </ol>
      <p className="leading-relaxed m-0">
        <Inline>{`Daarnaast zijn er andere mogelijkheden, zoals:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li><Inline>{`hepatomegalie door leverziekte,`}</Inline></li>
        <li><Inline>{`niervergroting door hydronefrose of cysten,`}</Inline></li>
        <li><Inline>{`fecesophoping bij obstipatie,`}</Inline></li>
        <li><Inline>{`abces of ontstekingsmassa,`}</Inline></li>
        <li><Inline>{`lymfoom,`}</Inline></li>
        <li><Inline>{`of andere zeldzamere tumoren.`}</Inline></li>
      </ul>
      <p className="leading-relaxed m-0">
        <Inline>{`De klinische redenering draait dus om het onderscheid tussen:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li><Inline>{`**massa uit de nier** versus`}</Inline></li>
        <li><Inline>{`**massa uit de bijnier of het sympathisch zenuwstelsel** versus`}</Inline></li>
        <li><Inline>{`**massa uit andere buikorganen**.`}</Inline></li>
      </ul>
      <PBody
        text={`**Aandacht-vraag:** Waarom moet je bij een kind met buikmassa altijd aan een tumor denken?
**Mini-antwoord:** Omdat buikmassa’s bij kinderen vaak een maligniteit kunnen zijn en vroege herkenning belangrijk is voor verdere diagnostiek en behandeling.`}
      />

      <SubHeading level={2}>Klinische redenering stap voor stap</SubHeading>
      <ol className="list-decimal pl-6 space-y-3 m-0">
        <li>
          <Inline>{`Een kind heeft **malaise en koorts**. Dat kan passen bij infectie, maar is niet specifiek.`}</Inline>
        </li>
        <li>
          <Inline>{`Er is ook een **zwelling in de buik**. Dan moet je denken aan een echte massa en niet alleen aan buikpijn of een opgeblazen gevoel.`}</Inline>
        </li>
        <li>
          <Inline>{`Een buikmassa bij een kind maakt een **tumor** belangrijk in de differentiaaldiagnose.`}</Inline>
        </li>
        <li>
          <Inline>{`De twee klassieke kindertumoren die je dan moet overwegen zijn **Wilms-tumor** en **neuroblastoom**.`}</Inline>
        </li>
        <li>
          <Inline>{`Met lichamelijk onderzoek en beeldvorming probeer je te bepalen: komt de massa uit de **nier**, uit de **bijnier / sympathische keten**, of is er een andere oorzaak?`}</Inline>
        </li>
        <li>
          <Inline>{`Daarna volgt verdere diagnostiek om de diagnose en uitbreiding vast te stellen, zodat behandeling kan worden gepland.`}</Inline>
        </li>
      </ol>
    </div>
  )
}
