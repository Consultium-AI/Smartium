import { Inline, SubHeading } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}>Casus 1: klassieke Sjögren met vooral sicca en artralgie</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Een patiënt met droge mond, gestoorde speekselfunctie, anti-SSA60 en afwijkend speekselklierbiopt kreeg de diagnose Sjögren. De klachten bestonden vooral uit **moeheid** en **inflammatoire artralgie**. Het beleid sloot aan bij de categorie met vooral symptomen en beperkte systemische activiteit.`}</Inline>
      </p>

      <SubHeading level={2}>Casus 2: Sjögren met Hashimoto</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Een 60-jarige vrouw had vermoeidheid, droge ogen, droge huid, gewichtstoename, obstipatie en koukleumen. Er was ook een voorgeschiedenis van vitiligo en Raynaud. Onderzoek liet zien:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li>
          <Inline>{`positieve ANA, anti-SSA52, anti-SSA60 en anti-SSB`}</Inline>
        </li>
        <li>
          <Inline>{`positieve reumafactor`}</Inline>
        </li>
        <li>
          <Inline>{`verhoogde TSH en verlaagd vrij T4`}</Inline>
        </li>
        <li>
          <Inline>{`positieve anti-TPO`}</Inline>
        </li>
        <li>
          <Inline>{`afwijkende Schirmer-test`}</Inline>
        </li>
        <li>
          <Inline>{`normale speekselfunctietest`}</Inline>
        </li>
        <li>
          <Inline>{`focusscore 0 op parotisbiopt`}</Inline>
        </li>
      </ul>
      <p className="leading-relaxed m-0">
        <Inline>{`De conclusie was **Sjögren met oculaire sicca** en daarnaast **Hashimoto-thyreoïditis**. De schildklierafwijking past bij de klachten van kou, gewichtstoename, obstipatie en vermoeidheid.`}</Inline>
      </p>

      <SubHeading level={2}>Casus 3: BALS</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Een 45-jarige vrouw had droge ogen en droge mond, maar relatief weinig systemische klachten. Er waren wel duidelijke biologische tekenen van B-celactivatie:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li>
          <Inline>{`ANA sterk positief`}</Inline>
        </li>
        <li>
          <Inline>{`anti-SSA52, anti-SSA60 en anti-SSB positief`}</Inline>
        </li>
        <li>
          <Inline>{`reumafactor positief`}</Inline>
        </li>
        <li>
          <Inline>{`IgG verhoogd`}</Inline>
        </li>
        <li>
          <Inline>{`C3 en C4 verlaagd`}</Inline>
        </li>
        <li>
          <Inline>{`afwijkende Schirmer-test`}</Inline>
        </li>
        <li>
          <Inline>{`verlaagde speekselfunctie`}</Inline>
        </li>
        <li>
          <Inline>{`afwijkend speekselklierbiopt met focusscore 2, lymfoepitheliale laesies, plasmacelshift van IgA naar IgG en kiemcentra`}</Inline>
        </li>
      </ul>
      <p className="leading-relaxed m-0">
        <Inline>{`Dit past bij **BALS**: weinig symptoomlast, maar wel duidelijke B-celactivatie.`}</Inline>
      </p>

      <SubHeading level={2}>Casus 4: HSA</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Een 59-jarige man had droge ogen, droge mond en Raynaud, maar ook ernstige **dunnevezelneuropathie**. Later ontstonden klachten van vermoeidheid en kortademigheid, met op CT een **interstitiële longziekte**. Dit past bij **HSA**, omdat er sprake is van hoge systemische ziekteactiviteit met zenuw- en longbetrokkenheid.`}</Inline>
      </p>
    </div>
  )
}
