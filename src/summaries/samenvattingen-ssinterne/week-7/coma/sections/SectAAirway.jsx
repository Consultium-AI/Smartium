import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`A – Airway`}</Inline></SubHeading>
      <PBody text={`Bij een verlaagd bewustzijn is de luchtweg bedreigd door afname van spiertonus en reflexen, waaronder de braakreflex. Controleer of de luchtweg vrij is. Geef zo nodig luchtwegmanoeuvres, plaats een **Mayo-tube** of overweeg intubatie. Let ook op braken, trauma, inhalatietrauma en verbranding. Bij trauma moet je de nek stabiliseren en beeldvorming verrichten.`} />
      <p className="leading-relaxed"><Inline>{`Bij een EMV-score onder 8 en/of afwezige braakreflex is de luchtweg potentieel bedreigd.`}</Inline></p>
    </div>
  )
}
