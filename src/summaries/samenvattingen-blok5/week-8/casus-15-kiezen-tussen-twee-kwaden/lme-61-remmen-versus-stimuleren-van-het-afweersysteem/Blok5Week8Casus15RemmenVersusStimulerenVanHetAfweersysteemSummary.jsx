import {
  Activity,
  BookOpen,
  CircleCheck,
  Dna,
  Layers,
  Pill,
  Shield,
  ShieldAlert,
  Syringe,
  Table2,
  Zap,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02InleidingRemmenOfStimuleren from './Sect02InleidingRemmenOfStimuleren'
import Sect03ImmuunsuppressieveGeneesmiddelenTabel1EnKlassiek from './Sect03ImmuunsuppressieveGeneesmiddelenTabel1EnKlassiek'
import Sect04Azathioprine from './Sect04Azathioprine'
import Sect05Mycofenolaatmofetil from './Sect05Mycofenolaatmofetil'
import Sect06Cyclofosfamide from './Sect06Cyclofosfamide'
import Sect07BiologicalsMonoklonaleAntistoffen from './Sect07BiologicalsMonoklonaleAntistoffen'
import Sect08Cytokineremmers from './Sect08Cytokineremmers'
import Sect09JakRemmers from './Sect09JakRemmers'
import Sect10ImmuunstimulatieCheckpoint from './Sect10ImmuunstimulatieCheckpoint'
import Sect11BijwerkingenCheckpointEnWeerstand from './Sect11BijwerkingenCheckpointEnWeerstand'
import Sect12CARTCeltherapie from './Sect12CARTCeltherapie'
import Sect13Samenvatting from './Sect13Samenvatting'

const Blok5Week8Casus15RemmenVersusStimulerenVanHetAfweersysteemSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Inleiding: remmen of stimuleren van het immuunsysteem', icon: Zap },
    { id: 'sect-03', title: 'Immuunsuppressieve geneesmiddelen', icon: Table2 },
    { id: 'sect-04', title: 'Azathioprine', icon: Pill },
    { id: 'sect-05', title: 'Mycofenolaatmofetil', icon: Pill },
    { id: 'sect-06', title: 'Cyclofosfamide', icon: Pill },
    { id: 'sect-07', title: 'Biologicals: gerichte immuunmodulatie', icon: Layers },
    { id: 'sect-08', title: 'Cytokineremmers', icon: Activity },
    { id: 'sect-09', title: 'JAK-remmers', icon: Dna },
    { id: 'sect-10', title: 'Immuunstimulatie bij kanker', icon: Shield },
    { id: 'sect-11', title: 'Bijwerkingen van checkpointremming', icon: ShieldAlert },
    { id: 'sect-12', title: 'CAR-T-celtherapie', icon: Syringe },
    { id: 'sect-13', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Remmen versus stimuleren van het afweersysteem"
      description="Het immuunsysteem reageert meestal goed op vreemde antigenen."
      caseLabel="Week 8 · Casus 15: Kiezen tussen twee kwaden"
      blokLabel="Blok 5"
      practiceLink="/oefenvragen?lme=blok5-week8-casus15-remmen-versus-stimuleren-van-het-afweersysteem"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02InleidingRemmenOfStimuleren />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03ImmuunsuppressieveGeneesmiddelenTabel1EnKlassiek />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04Azathioprine />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05Mycofenolaatmofetil />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06Cyclofosfamide />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07BiologicalsMonoklonaleAntistoffen />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08Cytokineremmers />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09JakRemmers />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10ImmuunstimulatieCheckpoint />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11BijwerkingenCheckpointEnWeerstand />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12CARTCeltherapie />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week8Casus15RemmenVersusStimulerenVanHetAfweersysteemSummary
