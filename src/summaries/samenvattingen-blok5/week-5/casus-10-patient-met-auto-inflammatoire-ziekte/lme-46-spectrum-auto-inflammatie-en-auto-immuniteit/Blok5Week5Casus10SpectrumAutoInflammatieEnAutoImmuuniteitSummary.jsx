import {
  Activity,
  BookOpen,
  CircleCheck,
  Dna,
  Flame,
  GitBranch,
  HelpCircle,
  Layers,
  Link2,
  ListChecks,
  Microscope,
  ShieldAlert,
  Skull,
  Sparkles,
  Stethoscope,
  Table2,
  Waves,
  Zap,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02HetSpectrum from './Sect02HetSpectrum'
import Sect03Tabel1BelangrijkeMechanismen from './Sect03Tabel1BelangrijkeMechanismen'
import Sect04Celdood from './Sect04Celdood'
import Sect05HetInflammasoom from './Sect05HetInflammasoom'
import Sect06Tabel3BelangrijkeInflammasomen from './Sect06Tabel3BelangrijkeInflammasomen'
import Sect07WaaromInflammasoomKlinischBelangrijk from './Sect07WaaromInflammasoomKlinischBelangrijk'
import Sect08FamiliaireMediterraneKoorts from './Sect08FamiliaireMediterraneKoorts'
import Sect09BredereRolPyrineInflammasoom from './Sect09BredereRolPyrineInflammasoom'
import Sect10VerworvenVormenVanAutoinflammatie from './Sect10VerworvenVormenVanAutoinflammatie'
import Sect11Interferonopathie from './Sect11Interferonopathie'
import Sect12AangeborenInterferonopathieen from './Sect12AangeborenInterferonopathieen'
import Sect13InterferonEnAutoImmuunziekten from './Sect13InterferonEnAutoImmuunziekten'
import Sect14EndoplasmatischReticulumStressSyndroom from './Sect14EndoplasmatischReticulumStressSyndroom'
import Sect15TrapsAlsVoorbeeld from './Sect15TrapsAlsVoorbeeld'
import Sect16RelopathyEnBehcet from './Sect16RelopathyEnBehcet'
import Sect17HoeKoppelJeKlachtenAanHetMechanisme from './Sect17HoeKoppelJeKlachtenAanHetMechanisme'
import Sect18Samenvatting from './Sect18Samenvatting'

const Blok5Week5Casus10SpectrumAutoInflammatieEnAutoImmuuniteitSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Het spectrum van auto-inflammatie en auto-immuniteit', icon: GitBranch },
    { id: 'sect-03', title: 'Tabel 1. Belangrijke mechanismen binnen het spectrum', icon: Table2 },
    { id: 'sect-04', title: 'Celdood: niet alleen necrose en apoptose', icon: Skull },
    { id: 'sect-05', title: 'Het inflammasoom', icon: Zap },
    { id: 'sect-06', title: 'Tabel 3. Belangrijke inflammasomen', icon: Layers },
    { id: 'sect-07', title: 'Waarom is het inflammasoom klinisch belangrijk?', icon: HelpCircle },
    { id: 'sect-08', title: 'Familiaire Mediterrane Koorts', icon: Flame },
    { id: 'sect-09', title: 'De bredere rol van het pyrine-inflammasoom', icon: ShieldAlert },
    { id: 'sect-10', title: 'Verworven vormen van auto-inflammatie', icon: Stethoscope },
    { id: 'sect-11', title: 'Interferonopathie', icon: Activity },
    { id: 'sect-12', title: 'Aangeboren interferonopathieën', icon: Dna },
    { id: 'sect-13', title: 'Interferon en auto-immuunziekten', icon: Sparkles },
    { id: 'sect-14', title: 'Endoplasmatisch reticulum stress syndroom', icon: Microscope },
    { id: 'sect-15', title: 'TRAPS als voorbeeld', icon: Waves },
    { id: 'sect-16', title: 'Relopathy', icon: Link2 },
    { id: 'sect-17', title: 'Hoe koppel je klachten aan het mechanisme?', icon: ListChecks },
    { id: 'sect-18', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Spectrum auto-inflammatie en auto-immuniteit"
      description="Binnen dit onderwerp staat vooral de overproductie van pro-inflammatoire cytokinen centraal. Dat zijn signaalstoffen die ontsteking aanjagen. Belangrijke cytokinen die hierbij steeds terugkomen zijn onder andere IL-1β, IL-18, IL-6, TNF-α en verschillende interferonen."
      caseLabel="Week 5 · Casus 10: Patiënt met auto-inflammatoire ziekte"
      blokLabel="Blok 5"
      practiceLink="/oefenvragen?lme=blok5-week5-casus10-spectrum-auto-inflammatie-en-auto-immuniteit"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02HetSpectrum />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03Tabel1BelangrijkeMechanismen />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04Celdood />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05HetInflammasoom />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06Tabel3BelangrijkeInflammasomen />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07WaaromInflammasoomKlinischBelangrijk />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08FamiliaireMediterraneKoorts />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09BredereRolPyrineInflammasoom />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10VerworvenVormenVanAutoinflammatie />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11Interferonopathie />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12AangeborenInterferonopathieen />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13InterferonEnAutoImmuunziekten />
      </section>
      <section id="sect-14" className="scroll-mt-24 mb-12">
        <Sect14EndoplasmatischReticulumStressSyndroom />
      </section>
      <section id="sect-15" className="scroll-mt-24 mb-12">
        <Sect15TrapsAlsVoorbeeld />
      </section>
      <section id="sect-16" className="scroll-mt-24 mb-12">
        <Sect16RelopathyEnBehcet />
      </section>
      <section id="sect-17" className="scroll-mt-24 mb-12">
        <Sect17HoeKoppelJeKlachtenAanHetMechanisme />
      </section>
      <section id="sect-18" className="scroll-mt-24 mb-12">
        <Sect18Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week5Casus10SpectrumAutoInflammatieEnAutoImmuuniteitSummary
