import { Inline, SubHeading } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}>Bij verdenking op koolmonoxide</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`De aanpak is gericht op:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li><Inline>{`de bron opsporen`}</Inline></li>
        <li><Inline>{`blootstelling stoppen`}</Inline></li>
        <li><Inline>{`medische beoordeling van klachten`}</Inline></li>
        <li><Inline>{`COHb meten bij acute verdenking`}</Inline></li>
        <li><Inline>{`rekening houden met mogelijke gevolgen voor alle huisgenoten`}</Inline></li>
      </ul>
      <p className="leading-relaxed m-0">
        <Inline>{`Bij chronische blootstelling is een **ademtest** belangrijk. Die geeft direct aan of iemand recent aan koolmonoxide is blootgesteld. Dat is vooral nuttig omdat chronische blootstelling niet altijd goed zichtbaar is in een gewone bloedmeting.`}</Inline>
      </p>

      <SubHeading level={2}>Bij verdenking op inhalatieschade</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Als er aanwijzingen zijn voor inhalatietrauma, moet je snel handelen. Er wordt nadruk gelegd op ademweg bewaken, cervicale wervelkolom beschermen, kijken of de ademweg vrij is, nagaan of de patiënt kan spreken, en ademweg steeds opnieuw beoordelen.`}</Inline>
      </p>
      <p className="leading-relaxed m-0">
        <Inline>{`Bij acute problemen kan respiratoire insufficiëntie ontstaan door inhalatieschade. Daarom moet je **snelle intubatie overwegen vanwege verwacht oedeem**.`}</Inline>
      </p>
    </div>
  )
}
