import {
  BookOpen, LayoutList, Activity, PlayCircle, Layers, Circle,
  Target, GitBranch, ArrowRight, ListOrdered, XCircle, CheckCircle2
} from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'
import Image01IntroductieSummary from './Image01IntroductieSummary'
import Image02MenuSummary from './Image02MenuSummary'
import Image03FunctiesDiagramSummary from './Image03FunctiesDiagramSummary'
import Image04FunctiesVideoSummary from './Image04FunctiesVideoSummary'
import Image05StructurenMiltSummary from './Image05StructurenMiltSummary'
import Image06RodeWittePulpaSummary from './Image06RodeWittePulpaSummary'
import Image07RodePulpaStructurenSummary from './Image07RodePulpaStructurenSummary'
import Image08WittePulpaStructurenSummary from './Image08WittePulpaStructurenSummary'
import Image09PALSSummary from './Image09PALSSummary'
import Image10OpenGeslotenCirculatieSummary from './Image10OpenGeslotenCirculatieSummary'
import Image11OpenCirculatieBelangrijkSummary from './Image11OpenCirculatieBelangrijkSummary'
import Image12OpenCirculatieRouteSummary from './Image12OpenCirculatieRouteSummary'
import Image13GeslotenCirculatieSummary from './Image13GeslotenCirculatieSummary'
import Image14AfsluitingSummary from './Image14AfsluitingSummary'

const Lme6VoorbereidingVowMiltSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Introductie en leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Introductie thema', icon: LayoutList },
    { id: 'sect-03', title: 'Anatomie van de milt', icon: Activity },
    { id: 'sect-04', title: 'Functies van de milt', icon: PlayCircle },
    { id: 'sect-05', title: 'Structuren in de milt', icon: Layers },
    { id: 'sect-06', title: 'Rode en witte pulpa', icon: Circle },
    { id: 'sect-07', title: 'Samenstelling rode pulpa', icon: Layers },
    { id: 'sect-08', title: 'Samenstelling witte pulpa', icon: Layers },
    { id: 'sect-09', title: 'PALS', icon: Target },
    { id: 'sect-10', title: 'Open en gesloten circulatie', icon: GitBranch },
    { id: 'sect-11', title: 'Open circulatie belangrijkst', icon: ArrowRight },
    { id: 'sect-12', title: 'Route open circulatie', icon: ListOrdered },
    { id: 'sect-13', title: 'Gesloten circulatie', icon: XCircle },
    { id: 'sect-14', title: 'Afsluiting', icon: CheckCircle2 },
  ]

  return (
    <SummaryLayout
      title="Voorbereiding VOW Milt"
      description="Complete samenvatting van de module over de milt: anatomie, rode en witte pulpa, open en gesloten circulatie."
      caseLabel="Week 5 Casus 7 LME 6"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme6-voorbereiding-vow-milt"
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Image01IntroductieSummary standalone={false} />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Image02MenuSummary standalone={false} />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Image03FunctiesDiagramSummary standalone={false} />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Image04FunctiesVideoSummary standalone={false} />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Image05StructurenMiltSummary standalone={false} />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Image06RodeWittePulpaSummary standalone={false} />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Image07RodePulpaStructurenSummary standalone={false} />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Image08WittePulpaStructurenSummary standalone={false} />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Image09PALSSummary standalone={false} />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Image10OpenGeslotenCirculatieSummary standalone={false} />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Image11OpenCirculatieBelangrijkSummary standalone={false} />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Image12OpenCirculatieRouteSummary standalone={false} />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Image13GeslotenCirculatieSummary standalone={false} />
      </section>
      <section id="sect-14" className="scroll-mt-24 mb-12">
        <Image14AfsluitingSummary standalone={false} />
      </section>
    </SummaryLayout>
  )
}

export default Lme6VoorbereidingVowMiltSummary
