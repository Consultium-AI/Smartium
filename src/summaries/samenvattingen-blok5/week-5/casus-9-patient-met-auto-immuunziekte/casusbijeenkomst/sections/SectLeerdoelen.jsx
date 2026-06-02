import { Inline } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li>
          <Inline>{`Herkennen welke tumoren en andere oorzaken kunnen passen bij een kind met een buikzwelling.`}</Inline>
        </li>
        <li>
          <Inline>{`De belangrijkste kenmerken van neuroblastoom kunnen koppelen aan klachten, leeftijd en aanvullende diagnostiek.`}</Inline>
        </li>
        <li>
          <Inline>{`Weten welke onderzoeken je inzet bij verdenking op een neuroblastoom.`}</Inline>
        </li>
        <li>
          <Inline>{`Begrijpen wat een hoog-risico neuroblastoom betekent en welke behandeling daarbij hoort.`}</Inline>
        </li>
        <li>
          <Inline>{`De belangrijkste complicaties en lange-termijneffecten van de behandeling kunnen noemen.`}</Inline>
        </li>
        <li>
          <Inline>{`De hallmarks of cancer kunnen koppelen aan neuroblastoom.`}</Inline>
        </li>
      </ul>
    </div>
  )
}
