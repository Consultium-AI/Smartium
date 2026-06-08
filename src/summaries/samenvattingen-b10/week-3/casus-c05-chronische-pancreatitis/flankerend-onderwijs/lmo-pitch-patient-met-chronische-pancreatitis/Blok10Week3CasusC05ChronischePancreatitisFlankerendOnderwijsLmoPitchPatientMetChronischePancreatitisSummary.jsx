import {
  BookOpen,
  FileText,
  Heart,
  LayoutList,
  MessageCircle,
  Stethoscope,
} from 'lucide-react'
import SummaryLayout from '../../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './sections/Sect01Leerdoelen'
import Sect02ChronischePancreatitisMeerDanAlleenEenAandoening from './sections/Sect02ChronischePancreatitisMeerDanAlleenEenAandoening'
import Sect03DeImpactOpHetDagelijksLeven from './sections/Sect03DeImpactOpHetDagelijksLeven'
import Sect04PatientenverhalenAlsOnderdeelVanDeLeerstof from './sections/Sect04PatientenverhalenAlsOnderdeelVanDeLeerstof'
import Sect05KlinischeRelevantie from './sections/Sect05KlinischeRelevantie'
import Sect06Samenvatting from './sections/Sect06Samenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-02', title: 'Meer dan een aandoening', icon: Stethoscope },
  { id: 'sect-03', title: 'Impact dagelijks leven', icon: Heart },
  { id: 'sect-04', title: 'Patiëntenverhalen', icon: MessageCircle },
  { id: 'sect-05', title: 'Klinische relevantie', icon: LayoutList },
  { id: 'sect-06', title: 'Samenvatting', icon: FileText },
]

const Blok10Week3CasusC05ChronischePancreatitisFlankerendOnderwijsLmoPitchPatientMetChronischePancreatitisSummary = () => (
  <SummaryLayout
    title="Pitch patiënt met chronische pancreatitis"
    moduleKind="lmo"
    description="Chronische pancreatitis is een langdurige aandoening van de alvleesklier. Voor patiënten betekent dit vaak niet alleen medische zorg, maar ook een ziekte die het dagelijks functioneren sterk kan beïnvloeden."
    caseLabel="Week 3 · Casus C05: Chronische pancreatitis"
    blokLabel="Blok 10"
    tableOfContents={tableOfContents}
    practiceLink="/oefenvragen?lme=blok10-week3-casus-c05-chronische-pancreatitis-lmo-pitch-patient-met-chronische-pancreatitis"
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <Sect01Leerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <Sect02ChronischePancreatitisMeerDanAlleenEenAandoening />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <Sect03DeImpactOpHetDagelijksLeven />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <Sect04PatientenverhalenAlsOnderdeelVanDeLeerstof />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <Sect05KlinischeRelevantie />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <Sect06Samenvatting />
    </section>
  </SummaryLayout>
)

export default Blok10Week3CasusC05ChronischePancreatitisFlankerendOnderwijsLmoPitchPatientMetChronischePancreatitisSummary
