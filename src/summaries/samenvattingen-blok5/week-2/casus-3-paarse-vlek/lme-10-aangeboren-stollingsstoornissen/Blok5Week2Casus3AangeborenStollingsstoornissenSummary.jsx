import {
  Activity,
  BookOpen,
  CircleCheck,
  Dna,
  GitCompare,
  HeartPulse,
  Layers,
  Microscope,
  Pill,
  Stethoscope,
  Syringe,
  Table2,
  Target,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02GroteBeeld from './Sect02GroteBeeld'
import Sect03KlinischePresentatie from './Sect03KlinischePresentatie'
import Sect04Tabel1Bloedingspatroon from './Sect04Tabel1Bloedingspatroon'
import Sect05DiagnostiekDenken from './Sect05DiagnostiekDenken'
import Sect06Tabel2Basisdiagnostiek from './Sect06Tabel2Basisdiagnostiek'
import Sect07HemofilieWatIsHet from './Sect07HemofilieWatIsHet'
import Sect08BloedingBijHemofilie from './Sect08BloedingBijHemofilie'
import Sect09Tabel4ErnstHemofilie from './Sect09Tabel4ErnstHemofilie'
import Sect10BehandelingHemofilieDoelen from './Sect10BehandelingHemofilieDoelen'
import Sect11MedicamenteuzeBehandelingHemofilie from './Sect11MedicamenteuzeBehandelingHemofilie'
import Sect12Tabel5BehandelingHemofilie from './Sect12Tabel5BehandelingHemofilie'
import Sect13ZiekteVanVonWillebrand from './Sect13ZiekteVanVonWillebrand'
import Sect14TypenVonWillebrand from './Sect14TypenVonWillebrand'
import Sect15DiagnostiekVonWillebrand from './Sect15DiagnostiekVonWillebrand'
import Sect16BehandelingVonWillebrand from './Sect16BehandelingVonWillebrand'
import Sect17SamenvattingVerschillen from './Sect17SamenvattingVerschillen'
import Sect18Samenvatting from './Sect18Samenvatting'

const Blok5Week2Casus3AangeborenStollingsstoornissenSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Het grote beeld', icon: Layers },
    { id: 'sect-03', title: 'Klinische presentatie', icon: Stethoscope },
    { id: 'sect-04', title: 'Tabel 1: bloedingspatroon', icon: Table2 },
    { id: 'sect-05', title: 'Diagnostiek: denken', icon: Target },
    { id: 'sect-06', title: 'Tabel 2: basisdiagnostiek', icon: Table2 },
    { id: 'sect-07', title: 'Hemofilie', icon: Dna },
    { id: 'sect-08', title: 'Bloeding bij hemofilie', icon: Activity },
    { id: 'sect-09', title: 'Tabel 4: ernst hemofilie', icon: Table2 },
    { id: 'sect-10', title: 'Behandeling hemofilie', icon: HeartPulse },
    { id: 'sect-11', title: 'Medicatie hemofilie', icon: Pill },
    { id: 'sect-12', title: 'Tabel 5: behandeling hemofilie', icon: Table2 },
    { id: 'sect-13', title: 'Ziekte van Von Willebrand', icon: HeartPulse },
    { id: 'sect-14', title: 'Typen Von Willebrand', icon: GitCompare },
    { id: 'sect-15', title: 'Diagnostiek VWD', icon: Microscope },
    { id: 'sect-16', title: 'Behandeling VWD', icon: Syringe },
    { id: 'sect-17', title: 'Verschillen', icon: GitCompare },
    { id: 'sect-18', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Aangeboren stollingsstoornissen"
      description="Aangeboren stollingsstoornissen kunnen leiden tot een verhoogde bloedingsneiging. Ze kunnen op verschillende plekken in de stollingscascade ontstaan en zijn dan aanwezig in de primaire hemostase of de secundaire hemostase."
      caseLabel="Week 2 · Casus 3: Paarse vlek"
      blokLabel="Blok 5"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02GroteBeeld />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03KlinischePresentatie />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04Tabel1Bloedingspatroon />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05DiagnostiekDenken />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06Tabel2Basisdiagnostiek />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07HemofilieWatIsHet />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08BloedingBijHemofilie />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09Tabel4ErnstHemofilie />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10BehandelingHemofilieDoelen />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11MedicamenteuzeBehandelingHemofilie />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12Tabel5BehandelingHemofilie />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13ZiekteVanVonWillebrand />
      </section>
      <section id="sect-14" className="scroll-mt-24 mb-12">
        <Sect14TypenVonWillebrand />
      </section>
      <section id="sect-15" className="scroll-mt-24 mb-12">
        <Sect15DiagnostiekVonWillebrand />
      </section>
      <section id="sect-16" className="scroll-mt-24 mb-12">
        <Sect16BehandelingVonWillebrand />
      </section>
      <section id="sect-17" className="scroll-mt-24 mb-12">
        <Sect17SamenvattingVerschillen />
      </section>
      <section id="sect-18" className="scroll-mt-24 mb-12">
        <Sect18Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week2Casus3AangeborenStollingsstoornissenSummary
