import {
  BookOpen,
  Eye,
  Microscope,
  GitCompare,
  Droplets,
  Pill,
  Target,
  Flame,
  ClipboardList,
  Syringe,
  ListChecks,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02AlgemeenBeeld from './Sect02AlgemeenBeeld'
import Sect03Pathofysiologie from './Sect03Pathofysiologie'
import Sect04NefrotischVsNefritisch from './Sect04NefrotischVsNefritisch'
import Sect05NefrotischSyndroom from './Sect05NefrotischSyndroom'
import Sect06SymptomatischNefrotisch from './Sect06SymptomatischNefrotisch'
import Sect07ZiektespecifiekNefrotisch from './Sect07ZiektespecifiekNefrotisch'
import Sect08NefritischSyndroom from './Sect08NefritischSyndroom'
import Sect09DiagnostiekNefritisch from './Sect09DiagnostiekNefritisch'
import Sect10BehandelingNefritisch from './Sect10BehandelingNefritisch'
import Sect11Samenvatting from './Sect11Samenvatting'

const Blok9Week1Casus1GlomerulaireNierziektenSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Algemeen beeld', icon: Eye },
    { id: 'sect-03', title: 'Pathofysiologie', icon: Microscope },
    { id: 'sect-04', title: 'Nefrotisch versus nefritisch', icon: GitCompare },
    { id: 'sect-05', title: 'Nefrotisch syndroom', icon: Droplets },
    { id: 'sect-06', title: 'Symptomatische behandeling nefrotisch', icon: Pill },
    { id: 'sect-07', title: 'Ziekte-specifiek nefrotisch', icon: Target },
    { id: 'sect-08', title: 'Nefritisch syndroom', icon: Flame },
    { id: 'sect-09', title: 'Diagnostiek nefritisch', icon: ClipboardList },
    { id: 'sect-10', title: 'Behandeling nefritisch', icon: Syringe },
    { id: 'sect-11', title: 'Samenvatting', icon: ListChecks },
  ]

  return (
    <SummaryLayout
      title="Glomerulaire nierziekten"
      practiceLink="/oefenvragen?lme=blok9-week1-casus1-glomerulaire-nierziekten"
      description="Glomerulaire nierziekten zijn aandoeningen van het nierfilter, de glomerulus. Je kunt ze zien als de tegenhanger van tubulaire nierziekten."
      caseLabel="Week 1 · Casus 1: Patiënt met acute nierschade"
      blokLabel="Blok 9"
      tableOfContents={tableOfContents}
      summaryVariantToggle={{
        activeLmeId: 'blok9-week1-casus1-glomerulaire-nierziekten',
        variants: [
          { id: 'blok9-week1-casus1-glomerulaire-nierziekten', label: 'Uitgebreid' },
          { id: 'blok9-week1-casus1-glomerulaire-nierziekten-mini', label: 'Kort' },
        ],
      }}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12"><Sect01Leerdoelen /></section>
      <section id="sect-02" className="scroll-mt-24 mb-12"><Sect02AlgemeenBeeld /></section>
      <section id="sect-03" className="scroll-mt-24 mb-12"><Sect03Pathofysiologie /></section>
      <section id="sect-04" className="scroll-mt-24 mb-12"><Sect04NefrotischVsNefritisch /></section>
      <section id="sect-05" className="scroll-mt-24 mb-12"><Sect05NefrotischSyndroom /></section>
      <section id="sect-06" className="scroll-mt-24 mb-12"><Sect06SymptomatischNefrotisch /></section>
      <section id="sect-07" className="scroll-mt-24 mb-12"><Sect07ZiektespecifiekNefrotisch /></section>
      <section id="sect-08" className="scroll-mt-24 mb-12"><Sect08NefritischSyndroom /></section>
      <section id="sect-09" className="scroll-mt-24 mb-12"><Sect09DiagnostiekNefritisch /></section>
      <section id="sect-10" className="scroll-mt-24 mb-12"><Sect10BehandelingNefritisch /></section>
      <section id="sect-11" className="scroll-mt-24 mb-12"><Sect11Samenvatting /></section>
    </SummaryLayout>
  )
}

export default Blok9Week1Casus1GlomerulaireNierziektenSummary
