import { Inline, PBody, SubHeading } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="leading-relaxed m-0">
        <Inline>{`Een kind met een buikmassa kan verschillende klachten hebben. In deze casus staan vooral de volgende signalen centraal:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li>
          <Inline>{`**Algehele malaise**: het kind voelt zich duidelijk ziek.`}</Inline>
        </li>
        <li>
          <Inline>{`**Koorts**: dit kan passen bij infectie, maar ook bij maligniteit.`}</Inline>
        </li>
        <li>
          <Inline>{`**Zwelling in de buik**: dit is het belangrijkste lichamelijke teken.`}</Inline>
        </li>
      </ul>
      <p className="leading-relaxed m-0">
        <Inline>{`Soms zijn er ook klachten zoals:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li><Inline>{`buikpijn,`}</Inline></li>
        <li><Inline>{`verminderde eetlust,`}</Inline></li>
        <li><Inline>{`gewichtsverlies,`}</Inline></li>
        <li><Inline>{`misselijkheid of braken,`}</Inline></li>
        <li><Inline>{`obstipatie,`}</Inline></li>
        <li><Inline>{`of een veranderd looppatroon door druk van de massa.`}</Inline></li>
      </ul>
      <p className="leading-relaxed m-0">
        <Inline>{`Een buikmassa bij een kind is klinisch belangrijk omdat het vaak pas laat wordt opgemerkt. Kinderen kunnen een tumor relatief lang compenseren. Daardoor kan een massa al behoorlijk groot zijn voordat er duidelijke klachten ontstaan.`}</Inline>
      </p>

      <SubHeading level={2}>Waar let je lichamelijk op?</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Bij lichamelijk onderzoek kijk je naar:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li><Inline>{`**algemene indruk**: ziek, bleek, suf of juist redelijk fit;`}</Inline></li>
        <li><Inline>{`**temperatuur** en andere vitale functies;`}</Inline></li>
        <li>
          <Inline>{`**buikonderzoek**: is er een voelbare massa, waar zit die, is die pijnlijk, beweeglijk of vast?`}</Inline>
        </li>
        <li><Inline>{`**vergrote lever of milt**;`}</Inline></li>
        <li><Inline>{`**lymfeklieren**;`}</Inline></li>
        <li><Inline>{`tekenen van **anemie** of dehydratie;`}</Inline></li>
        <li><Inline>{`eventueel **hypertensie** of andere orgaanklachten.`}</Inline></li>
      </ul>
      <PBody
        text={`**Aandacht-vraag:** Waarom is de locatie van een buikmassa zo belangrijk?
**Mini-antwoord:** Omdat de oorsprong van de massa vaak iets zegt over de oorzaak. Een massa uit de nier, bijnier, lever of darm geeft elk een andere differentiaaldiagnose.`}
      />
    </div>
  )
}
