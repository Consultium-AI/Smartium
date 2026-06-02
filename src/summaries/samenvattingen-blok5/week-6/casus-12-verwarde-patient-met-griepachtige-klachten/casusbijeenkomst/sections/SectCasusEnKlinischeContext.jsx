import { Inline } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="leading-relaxed m-0">
        <Inline>{`In deze casus staan klachten binnenshuis centraal. Er worden twee situaties naast elkaar gezet: een gezin met hoofdpijn, vermoeidheid, psychische klachten en een woning met een gaskachel, enkel glas, vocht en schimmel; en een andere casus met jarenlange schimmel en vocht in de woning, waarbij een kind astma heeft en de moeder zelf ook gezondheidsproblemen ervaart.`}</Inline>
      </p>
      <p className="leading-relaxed m-0">
        <Inline>{`De kernvraag is steeds: wat kan de oorzaak van de klachten in huis zijn, en wat moet je als eerste doen? Daarbij komen vooral koolmonoxidevergiftiging en problemen door vocht en schimmel naar voren.`}</Inline>
      </p>
    </div>
  )
}
