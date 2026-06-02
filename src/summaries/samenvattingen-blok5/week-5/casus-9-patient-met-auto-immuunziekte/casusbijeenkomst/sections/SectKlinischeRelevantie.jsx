import { Inline } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="leading-relaxed m-0">
        <Inline>{`De casus laat zien dat een buikmassa bij een kind altijd serieus moet worden genomen. De combinatie van leeftijd, klachten, lichamelijk onderzoek en aanvullende diagnostiek bepaalt de richting van de differentiaaldiagnose. Neuroblastoom is daarbij een belangrijke diagnose, vooral bij jonge kinderen met buikzwelling, malaise, raccoon eyes en afwijkende urinecatecholamines.`}</Inline>
      </p>
      <p className="leading-relaxed m-0">
        <Inline>{`Ook wordt duidelijk dat behandeling intensief is en dat je niet alleen naar genezing kijkt, maar ook naar complicaties en lange-termijneffecten.`}</Inline>
      </p>
    </div>
  )
}
