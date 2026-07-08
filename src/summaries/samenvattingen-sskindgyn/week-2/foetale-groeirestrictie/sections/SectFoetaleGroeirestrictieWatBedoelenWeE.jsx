import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Foetale groeirestrictie: wat bedoelen we ermee?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Foetale groeirestrictie, vaak afgekort als FGR, betekent dat de foetus minder goed groeit dan verwacht. In oudere literatuur wordt ook de term intra-uteriene groeirestrictie (IUGR) gebruikt. Tegenwoordig wordt vaker gesproken van foetale groeirestrictie, omdat het niet zozeer gaat om de plaats in de baarmoeder, maar om de foetus zelf die beperkt groeit.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Belangrijk is dat FGR niet hetzelfde is als SGA, Small for Gestational Age. SGA betekent alleen dat het geboortegewicht te laag is voor de zwangerschapsduur. Een kind kan dus klein zijn zonder dat er sprake is van groeirestrictie. Omgekeerd kan er ook sprake zijn van groeirestrictie zonder dat het kind bij geboorte direct als SGA wordt geclassificeerd. Dat onderscheid is in de praktijk niet altijd scherp te maken.`}</Inline></p>
      <SubHeading><Inline>{`Waarom is dit belangrijk?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij verminderde foetale groei zijn de perinatale morbiditeit en mortaliteit verhoogd. Ook is er later in het leven een verhoogd risico op onder andere gestoorde ontwikkeling, diabetes en hypertensie. Foetale groeirestrictie is dus niet alleen een probleem rond de geboorte, maar heeft ook gevolgen op langere termijn.`}</Inline></p>
    </div>
  )
}
