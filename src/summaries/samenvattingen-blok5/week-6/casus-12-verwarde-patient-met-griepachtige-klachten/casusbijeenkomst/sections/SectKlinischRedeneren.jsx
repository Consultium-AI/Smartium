import { Inline, PBody, SubHeading } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}>1. Denk eerst aan de omgeving</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Bij klachten binnenshuis moet je altijd vragen naar de woning:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li><Inline>{`Is er een gaskachel, geiser, cv-ketel, open haard of ander verbrandingsapparaat?`}</Inline></li>
        <li><Inline>{`Is er vocht of schimmel?`}</Inline></li>
        <li><Inline>{`Zijn er lekkages of achterstallig onderhoud?`}</Inline></li>
        <li><Inline>{`Zijn de klachten thuis erger dan buitenshuis?`}</Inline></li>
        <li><Inline>{`Zijn er ook klachten bij andere huisgenoten?`}</Inline></li>
      </ul>
      <p className="leading-relaxed m-0">
        <Inline>{`In deze casus zijn vooral twee oorzaken belangrijk:`}</Inline>
      </p>
      <ol className="list-decimal pl-6 space-y-2 m-0">
        <li><Inline>{`**Koolmonoxideblootstelling**`}</Inline></li>
        <li><Inline>{`**Vocht en schimmel met luchtwegklachten**`}</Inline></li>
      </ol>

      <SubHeading level={2}>2. Koolmonoxide als verklaring</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Koolmonoxide is een gevaarlijk gas dat kan ontstaan bij verbranding, bijvoorbeeld door cv-ketel, gasfornuis, geiser, houtkachel of open haard, en verkeer en roken.`}</Inline>
      </p>
      <p className="leading-relaxed m-0">
        <Inline>{`Koolmonoxide is lastig te herkennen, omdat het klachten kan geven die lijken op griep, stress of psychische problemen. Daardoor worden verkeerde diagnoses snel gemaakt.`}</Inline>
      </p>

      <SubHeading>Acute koolmonoxidevergiftiging</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Bij een acute vergiftiging zie je vaak:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li><Inline>{`griepachtige verschijnselen`}</Inline></li>
        <li><Inline>{`hoofdpijn`}</Inline></li>
        <li><Inline>{`keelpijn`}</Inline></li>
        <li><Inline>{`‘verstopt’ hoofd`}</Inline></li>
        <li><Inline>{`benauwdheid`}</Inline></li>
        <li><Inline>{`pijn op de borst`}</Inline></li>
        <li><Inline>{`hartkloppingen`}</Inline></li>
        <li><Inline>{`misselijkheid en overgeven`}</Inline></li>
        <li><Inline>{`verwardheid, hallucinaties`}</Inline></li>
        <li><Inline>{`flauwte, slaperigheid, coma of zelfs overlijden`}</Inline></li>
      </ul>

      <SubHeading>Chronische koolmonoxidevergiftiging</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Bij langdurige lage blootstelling kunnen juist vage, chronische klachten ontstaan, zoals:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li><Inline>{`chronische vermoeidheid`}</Inline></li>
        <li><Inline>{`depressie`}</Inline></li>
        <li><Inline>{`burn-outachtige klachten`}</Inline></li>
        <li><Inline>{`prikkelbaarheid`}</Inline></li>
        <li><Inline>{`agressie of een kort lontje`}</Inline></li>
        <li><Inline>{`concentratieverlies`}</Inline></li>
        <li><Inline>{`geheugenverlies`}</Inline></li>
        <li><Inline>{`leer-, gedrags- en spraakproblemen`}</Inline></li>
        <li><Inline>{`evenwichtsstoornissen`}</Inline></li>
        <li><Inline>{`bizarre neurologische klachten`}</Inline></li>
      </ul>
      <PBody
        text={`**Aandacht-vraagje:** waarom kan koolmonoxide zo verraderlijk zijn?
**Mini-antwoord:** omdat de klachten vaag en breed zijn en daardoor op veel andere aandoeningen kunnen lijken.`}
      />

      <SubHeading level={2}>3. Schimmel en vocht als verklaring</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Schimmels in huis kunnen ontstekingsreacties geven en de luchtwegen irriteren. Dat kan leiden tot hoesten, niezen, snotteren en verergering van astma.`}</Inline>
      </p>
      <p className="leading-relaxed m-0">
        <Inline>{`Mensen met bestaande luchtwegklachten zijn hier extra gevoelig voor. Bij een kind met astma is schimmel in huis dus extra relevant.`}</Inline>
      </p>
    </div>
  )
}
