import {
  Activity,
  BookOpen,
  CircleCheck,
  Droplets,
  FlaskConical,
  HeartPulse,
  Layers,
  ListChecks,
  Microscope,
  Shield,
  Sun,
  Table2,
  Zap,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02DeHuidbarriere from './Sect02DeHuidbarriere'
import Sect03ExterneFactorenEnTabel1 from './Sect03ExterneFactorenEnTabel1'
import Sect04Omgevingsomstandigheden from './Sect04Omgevingsomstandigheden'
import Sect05UvStralingEnZonbescherming from './Sect05UvStralingEnZonbescherming'
import Sect06MechanischeBelastingEnWondgenezing from './Sect06MechanischeBelastingEnWondgenezing'
import Sect07OrthoErgischeFactorenEnEelt from './Sect07OrthoErgischeFactorenEnEelt'
import Sect08ContactallergischeFactoren from './Sect08ContactallergischeFactoren'
import Sect09LeefstijlVoeding from './Sect09LeefstijlVoeding'
import Sect10Roken from './Sect10Roken'
import Sect11Stress from './Sect11Stress'
import Sect12LichamelijkeActiviteit from './Sect12LichamelijkeActiviteit'
import Sect13MicroOrganismen from './Sect13MicroOrganismen'
import Sect14Samenvatting from './Sect14Samenvatting'

const Blok5Week1Casus1ExterneVerstorendeFactorenOpDeHuidbarriereSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'De huidbarrière', icon: Shield },
    { id: 'sect-03', title: 'Externe factoren die de huidbarrière verstoren', icon: Table2 },
    { id: 'sect-04', title: 'Omgevingsomstandigheden', icon: Droplets },
    { id: 'sect-05', title: 'UV-straling en zonbescherming', icon: Sun },
    { id: 'sect-06', title: 'Mechanische belasting en verwondingen', icon: Activity },
    { id: 'sect-07', title: 'Ortho-ergische factoren en eelt en likdoorns', icon: FlaskConical },
    { id: 'sect-08', title: 'Contactallergische factoren', icon: Microscope },
    { id: 'sect-09', title: 'Leefstijl', icon: HeartPulse },
    { id: 'sect-10', title: 'Roken', icon: Zap },
    { id: 'sect-11', title: 'Stress', icon: Layers },
    { id: 'sect-12', title: 'Lichamelijke activiteit', icon: Activity },
    { id: 'sect-13', title: 'Micro-organismen', icon: ListChecks },
    { id: 'sect-14', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Externe verstorende factoren op de huidbarrière"
      description="De huidbarrière is de buitenste laag van de huid en werkt als een beschermend schild. De buitenste laag van de huid is het stratum corneum."
      caseLabel="Week 1 · Casus 1: De huid als succesvolle barrière"
      blokLabel="Blok 5"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02DeHuidbarriere />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03ExterneFactorenEnTabel1 />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04Omgevingsomstandigheden />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05UvStralingEnZonbescherming />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06MechanischeBelastingEnWondgenezing />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07OrthoErgischeFactorenEnEelt />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08ContactallergischeFactoren />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09LeefstijlVoeding />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10Roken />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11Stress />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12LichamelijkeActiviteit />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13MicroOrganismen />
      </section>
      <section id="sect-14" className="scroll-mt-24 mb-12">
        <Sect14Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week1Casus1ExterneVerstorendeFactorenOpDeHuidbarriereSummary
