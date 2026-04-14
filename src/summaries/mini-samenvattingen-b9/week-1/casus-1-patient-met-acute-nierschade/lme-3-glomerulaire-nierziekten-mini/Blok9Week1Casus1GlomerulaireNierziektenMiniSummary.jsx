import {
  BookOpen,
  Eye,
  Microscope,
  GitCompare,
  Droplets,
  Pill,
  Flame,
  ClipboardList,
  CheckCircle2,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Intro from './Sect01Intro'
import Sect02KlinischBeeld from './Sect02KlinischBeeld'
import Sect03Pathofysiologie from './Sect03Pathofysiologie'
import Sect04NefrotischVsNefritisch from './Sect04NefrotischVsNefritisch'
import Sect05NefrotischEnSymptomatisch from './Sect05NefrotischEnSymptomatisch'
import Sect06ZiekteSpecifiekNefrotisch from './Sect06ZiekteSpecifiekNefrotisch'
import Sect07NefritischSyndroom from './Sect07NefritischSyndroom'
import Sect08DiagnostiekEnBehandelingNefritisch from './Sect08DiagnostiekEnBehandelingNefritisch'
import Sect09Samengevat from './Sect09Samengevat'

const Blok9Week1Casus1GlomerulaireNierziektenMiniSummary = () => {
  const tableOfContents = [
    { id: 'mini-sect-01', title: 'Glomerulaire nierziekten: kern', icon: BookOpen },
    { id: 'mini-sect-02', title: 'Klinisch beeld', icon: Eye },
    { id: 'mini-sect-03', title: 'Pathofysiologie', icon: Microscope },
    { id: 'mini-sect-04', title: 'Nefrotisch versus nefritisch', icon: GitCompare },
    { id: 'mini-sect-05', title: 'Nefrotisch en symptomatische behandeling', icon: Droplets },
    { id: 'mini-sect-06', title: 'Ziekte-specifiek nefrotisch', icon: Pill },
    { id: 'mini-sect-07', title: 'Nefritisch syndroom', icon: Flame },
    { id: 'mini-sect-08', title: 'Diagnostiek en behandeling nefritisch', icon: ClipboardList },
    { id: 'mini-sect-09', title: 'Samengevat', icon: CheckCircle2 },
  ]

  return (
    <SummaryLayout
      title="Glomerulaire nierziekten"
      description="Glomerulaire nierziekten zijn aandoeningen van het nierfilter, de glomerulus. Je kunt ze zien als de tegenhanger van tubulaire nierziekten."
      caseLabel="Week 1 · Casus 1: Patiënt met acute nierschade"
      blokLabel="Blok 9"
      tableOfContents={tableOfContents}
      summaryVariantToggle={{
        activeLmeId: 'blok9-week1-casus1-glomerulaire-nierziekten-mini',
        variants: [
          { id: 'blok9-week1-casus1-glomerulaire-nierziekten', label: 'Uitgebreid' },
          { id: 'blok9-week1-casus1-glomerulaire-nierziekten-mini', label: 'Kort' },
        ],
      }}
    >
      <section id="mini-sect-01" className="scroll-mt-24 mb-12">
        <Sect01Intro />
      </section>
      <section id="mini-sect-02" className="scroll-mt-24 mb-12">
        <Sect02KlinischBeeld />
      </section>
      <section id="mini-sect-03" className="scroll-mt-24 mb-12">
        <Sect03Pathofysiologie />
      </section>
      <section id="mini-sect-04" className="scroll-mt-24 mb-12">
        <Sect04NefrotischVsNefritisch />
      </section>
      <section id="mini-sect-05" className="scroll-mt-24 mb-12">
        <Sect05NefrotischEnSymptomatisch />
      </section>
      <section id="mini-sect-06" className="scroll-mt-24 mb-12">
        <Sect06ZiekteSpecifiekNefrotisch />
      </section>
      <section id="mini-sect-07" className="scroll-mt-24 mb-12">
        <Sect07NefritischSyndroom />
      </section>
      <section id="mini-sect-08" className="scroll-mt-24 mb-12">
        <Sect08DiagnostiekEnBehandelingNefritisch />
      </section>
      <section id="mini-sect-09" className="scroll-mt-24 mb-12">
        <Sect09Samengevat />
      </section>
    </SummaryLayout>
  )
}

export default Blok9Week1Casus1GlomerulaireNierziektenMiniSummary
