import {
  BookOpen, LayoutList, Info, Tag, BarChart3, Stethoscope, Circle,
  Footprints, Droplets, CircleDot, Scalpel, Sparkles, Microscope,
  Lightbulb, FlaskConical, Pill, CheckCircle2
} from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'
import Image01IntroductieSummary from './Image01IntroductieSummary'
import Image02MenuSummary from './Image02MenuSummary'
import Image03InleidingSummary from './Image03InleidingSummary'
import Image04BenamingenSummary from './Image04BenamingenSummary'
import Image05VoorkomenSummary from './Image05VoorkomenSummary'
import Image06KlachtenSymptomenSummary from './Image06KlachtenSymptomenSummary'
import Image07KenmerkenTineaCorporisSummary from './Image07KenmerkenTineaCorporisSummary'
import Image08HerkenningTineaPedisSummary from './Image08HerkenningTineaPedisSummary'
import Image09HerkenningEczeemSummary from './Image09HerkenningEczeemSummary'
import Image10HerkenningTineaCorporisBlaasjesSummary from './Image10HerkenningTineaCorporisBlaasjesSummary'
import Image11HerkenningTineaCapitisSummary from './Image11HerkenningTineaCapitisSummary'
import Image12HerkenningOnychomycoseSummary from './Image12HerkenningOnychomycoseSummary'
import Image13HerkenningPsoriasisSummary from './Image13HerkenningPsoriasisSummary'
import Image14HerkenningTineaCorporisRandSummary from './Image14HerkenningTineaCorporisRandSummary'
import Image15HerkenningImpetigoSummary from './Image15HerkenningImpetigoSummary'
import Image16HerkenningPsoriasisNagelsSummary from './Image16HerkenningPsoriasisNagelsSummary'
import Image17HerkenningTineaBarbaeSummary from './Image17HerkenningTineaBarbaeSummary'
import Image18HerkenningEczeemBenenSummary from './Image18HerkenningEczeemBenenSummary'
import Image19HerkenningTineaPedisMoccasinSummary from './Image19HerkenningTineaPedisMoccasinSummary'
import Image20HerkenningPityriasisVersicolorSummary from './Image20HerkenningPityriasisVersicolorSummary'
import Image21DiagnostiekKOHSummary from './Image21DiagnostiekKOHSummary'
import Image22DiagnostiekWoodsLampSummary from './Image22DiagnostiekWoodsLampSummary'
import Image23DiagnostiekKweekSummary from './Image23DiagnostiekKweekSummary'
import Image24BehandelingSummary from './Image24BehandelingSummary'
import Image25EindeSummary from './Image25EindeSummary'

const Lme5SchimmelinfectiesSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Introductie en leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Module-overzicht', icon: LayoutList },
    { id: 'sect-03', title: 'Inleiding huidinfecties', icon: Info },
    { id: 'sect-04', title: 'Benamingen dermatomycosen', icon: Tag },
    { id: 'sect-05', title: 'Voorkomen', icon: BarChart3 },
    { id: 'sect-06', title: 'Klachten en symptomen', icon: Stethoscope },
    { id: 'sect-07', title: 'Kenmerken tinea corporis', icon: Circle },
    { id: 'sect-08', title: 'Herkenning tinea pedis', icon: Footprints },
    { id: 'sect-09', title: 'Herkenning eczeem', icon: Droplets },
    { id: 'sect-10', title: 'Herkenning tinea corporis blaasjes', icon: CircleDot },
    { id: 'sect-11', title: 'Herkenning tinea capitis', icon: Sparkles },
    { id: 'sect-12', title: 'Herkenning onychomycose', icon: Scalpel },
    { id: 'sect-13', title: 'Herkenning psoriasis', icon: Circle },
    { id: 'sect-14', title: 'Herkenning tinea corporis rand', icon: Circle },
    { id: 'sect-15', title: 'Herkenning impetigo', icon: Droplets },
    { id: 'sect-16', title: 'Herkenning psoriasis nagels', icon: Scalpel },
    { id: 'sect-17', title: 'Herkenning tinea barbae', icon: Stethoscope },
    { id: 'sect-18', title: 'Herkenning eczeem benen', icon: Droplets },
    { id: 'sect-19', title: 'Herkenning tinea pedis moccasin', icon: Footprints },
    { id: 'sect-20', title: 'Herkenning pityriasis versicolor', icon: Sparkles },
    { id: 'sect-21', title: 'Diagnostiek KOH-preparaat', icon: Microscope },
    { id: 'sect-22', title: "Diagnostiek Wood's lamp", icon: Lightbulb },
    { id: 'sect-23', title: 'Diagnostiek schimmelkweek', icon: FlaskConical },
    { id: 'sect-24', title: 'Behandeling', icon: Pill },
    { id: 'sect-25', title: 'Leerpunten en literatuur', icon: CheckCircle2 },
  ]

  return (
    <SummaryLayout
      title="Schimmelinfecties van de huid, nagels en haren"
      description="Complete samenvatting van de module over dermatomycosen: benamingen, herkenning, diagnostiek en behandeling."
      caseLabel="Week 5 Casus 7 LME 5"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme5-schimmelinfecties"
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Image01IntroductieSummary standalone={false} />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Image02MenuSummary standalone={false} />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Image03InleidingSummary standalone={false} />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Image04BenamingenSummary standalone={false} />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Image05VoorkomenSummary standalone={false} />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Image06KlachtenSymptomenSummary standalone={false} />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Image07KenmerkenTineaCorporisSummary standalone={false} />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Image08HerkenningTineaPedisSummary standalone={false} />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Image09HerkenningEczeemSummary standalone={false} />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Image10HerkenningTineaCorporisBlaasjesSummary standalone={false} />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Image11HerkenningTineaCapitisSummary standalone={false} />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Image12HerkenningOnychomycoseSummary standalone={false} />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Image13HerkenningPsoriasisSummary standalone={false} />
      </section>
      <section id="sect-14" className="scroll-mt-24 mb-12">
        <Image14HerkenningTineaCorporisRandSummary standalone={false} />
      </section>
      <section id="sect-15" className="scroll-mt-24 mb-12">
        <Image15HerkenningImpetigoSummary standalone={false} />
      </section>
      <section id="sect-16" className="scroll-mt-24 mb-12">
        <Image16HerkenningPsoriasisNagelsSummary standalone={false} />
      </section>
      <section id="sect-17" className="scroll-mt-24 mb-12">
        <Image17HerkenningTineaBarbaeSummary standalone={false} />
      </section>
      <section id="sect-18" className="scroll-mt-24 mb-12">
        <Image18HerkenningEczeemBenenSummary standalone={false} />
      </section>
      <section id="sect-19" className="scroll-mt-24 mb-12">
        <Image19HerkenningTineaPedisMoccasinSummary standalone={false} />
      </section>
      <section id="sect-20" className="scroll-mt-24 mb-12">
        <Image20HerkenningPityriasisVersicolorSummary standalone={false} />
      </section>
      <section id="sect-21" className="scroll-mt-24 mb-12">
        <Image21DiagnostiekKOHSummary standalone={false} />
      </section>
      <section id="sect-22" className="scroll-mt-24 mb-12">
        <Image22DiagnostiekWoodsLampSummary standalone={false} />
      </section>
      <section id="sect-23" className="scroll-mt-24 mb-12">
        <Image23DiagnostiekKweekSummary standalone={false} />
      </section>
      <section id="sect-24" className="scroll-mt-24 mb-12">
        <Image24BehandelingSummary standalone={false} />
      </section>
      <section id="sect-25" className="scroll-mt-24 mb-12">
        <Image25EindeSummary standalone={false} />
      </section>
    </SummaryLayout>
  )
}

export default Lme5SchimmelinfectiesSummary
