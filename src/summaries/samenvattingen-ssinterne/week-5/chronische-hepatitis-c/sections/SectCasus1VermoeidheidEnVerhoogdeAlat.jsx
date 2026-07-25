import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Casus 1: vermoeidheid en verhoogde ALAT`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een vrouw van 61 jaar heeft vermoeidheidsklachten, een verhoogde ALAT en een positieve anti-HCV. In de voorgeschiedenis staat een gecompliceerde bevalling met veel bloedverlies in 1988. Daarbij past als mogelijke transmissieroute blootstelling aan besmet bloed.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De volgende stap is het bepalen van HCV-RNA om te zien of er sprake is van een actieve infectie. Daarnaast worden genotypering, bloedbeeld, leverfunctietesten en stollingsonderzoek verricht. Zo krijg je een beeld van zowel de infectie als de leverfunctie.`}</Inline></p>
    </div>
  )
}
