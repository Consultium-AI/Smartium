import { Inline, PBody, SubHeading } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="leading-relaxed m-0">
        <Inline>{`De diagnostiek bij een kind met buikmassa moet gericht en zorgvuldig zijn. Eerst wil je bevestigen dat er echt een massa is en daarna bepalen waar die vandaan komt.`}</Inline>
      </p>

      <SubHeading level={2}>1. Anamnese en lichamelijk onderzoek</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Je vraagt naar:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li><Inline>{`duur van de klachten,`}</Inline></li>
        <li><Inline>{`koorts,`}</Inline></li>
        <li><Inline>{`pijn,`}</Inline></li>
        <li><Inline>{`gewichtsverlies,`}</Inline></li>
        <li><Inline>{`eetlust,`}</Inline></li>
        <li><Inline>{`braken,`}</Inline></li>
        <li><Inline>{`obstipatie,`}</Inline></li>
        <li><Inline>{`plasklachten,`}</Inline></li>
        <li><Inline>{`en eventuele eerdere ziekten.`}</Inline></li>
      </ul>
      <p className="leading-relaxed m-0">
        <Inline>{`Bij lichamelijk onderzoek let je op:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li><Inline>{`lokalisatie van de massa,`}</Inline></li>
        <li><Inline>{`grootte,`}</Inline></li>
        <li><Inline>{`pijn,`}</Inline></li>
        <li><Inline>{`bewegelijkheid,`}</Inline></li>
        <li><Inline>{`algemene toestand,`}</Inline></li>
        <li><Inline>{`en tekenen van orgaanbetrokkenheid.`}</Inline></li>
      </ul>

      <SubHeading level={2}>2. Beeldvorming</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`De eerste belangrijke stap is meestal **echografie** van de buik. Daarmee kun je vaak zien:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li><Inline>{`of de massa uit de nier komt,`}</Inline></li>
        <li><Inline>{`of het een solide of cystische afwijking is,`}</Inline></li>
        <li><Inline>{`en of er aanwijzingen zijn voor uitbreiding.`}</Inline></li>
      </ul>
      <p className="leading-relaxed m-0">
        <Inline>{`Daarna kan aanvullende beeldvorming nodig zijn, zoals **CT** of **MRI**, afhankelijk van de vraagstelling en de vermoedelijke diagnose.`}</Inline>
      </p>

      <SubHeading level={2}>3. Aanvullend onderzoek</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Afhankelijk van de verdenking kunnen ook andere onderzoeken nodig zijn, zoals:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li><Inline>{`bloedonderzoek,`}</Inline></li>
        <li><Inline>{`nierfunctie,`}</Inline></li>
        <li><Inline>{`ontstekingsparameters,`}</Inline></li>
        <li><Inline>{`bloedbeeld,`}</Inline></li>
        <li><Inline>{`en eventueel onderzoek naar metastasen of uitbreiding.`}</Inline></li>
      </ul>
      <p className="leading-relaxed m-0">
        <Inline>{`De diagnostiek is dus niet alleen bedoeld om “een massa te zien”, maar vooral om te bepalen **wat voor massa het is**, **waar hij vandaan komt**, en **hoe uitgebreid het proces is**.`}</Inline>
      </p>
      <PBody
        text={`**Aandacht-vraag:** Waarom is echografie vaak de eerste stap?
**Mini-antwoord:** Omdat echografie snel, niet-invasief en geschikt is om te bepalen of de massa uit de nier of uit een ander orgaan komt.`}
      />
    </div>
  )
}
