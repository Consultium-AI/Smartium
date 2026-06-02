import { Inline, PBody, SubHeading } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}>Eerste casus</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Bij de eerste casus zijn de klachten al langere tijd aanwezig sinds het gezin in de woning woont. Er is sprake van:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li><Inline>{`gaskachel`}</Inline></li>
        <li><Inline>{`enkel glas`}</Inline></li>
        <li><Inline>{`vocht en schimmels`}</Inline></li>
        <li><Inline>{`vaak verkoudheid en hoesten`}</Inline></li>
        <li><Inline>{`sinds de herfst toename van hoofdpijn en vermoeidheid`}</Inline></li>
        <li><Inline>{`psychische klachten`}</Inline></li>
      </ul>

      <SubHeading level={2}>Tweede casus</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Bij de tweede casus gaat het om:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li><Inline>{`jarenlange schimmel in de woning`}</Inline></li>
        <li><Inline>{`een kind van 8 met astma`}</Inline></li>
        <li><Inline>{`vocht in de muren`}</Inline></li>
        <li><Inline>{`lekkages en achterstallig onderhoud`}</Inline></li>
      </ul>

      <SubHeading level={2}>Wat is hier belangrijk aan?</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`De klachten zijn niet heel specifiek. Hoofdpijn, moeheid, verwardheid, prikkelbaarheid en benauwdheid kunnen veel oorzaken hebben. Juist daarom moet je denken aan iets in de leefomgeving, zeker als meerdere gezinsleden klachten hebben of als de klachten samenhangen met het verblijf in huis.`}</Inline>
      </p>
      <PBody
        text={`**Aandacht-vraagje:** waarom is het verdacht als meerdere mensen in hetzelfde huis vergelijkbare klachten hebben?
**Mini-antwoord:** dan denk je sneller aan een gemeenschappelijke oorzaak, zoals een probleem in de woning.`}
      />
    </div>
  )
}
