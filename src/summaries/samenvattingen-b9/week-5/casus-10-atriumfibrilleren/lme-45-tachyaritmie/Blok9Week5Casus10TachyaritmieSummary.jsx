import {
  Activity,
  BookOpen,
  ClipboardList,
  GitBranch,
  HeartPulse,
  Layers,
  ListChecks,
  Microscope,
  Scale,
  ShieldAlert,
  Stethoscope,
  Table2,
  Zap,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02AlgemeneAanpak from './Sect02AlgemeneAanpak'
import Sect03HoeOntstaatTachycardie from './Sect03HoeOntstaatTachycardie'
import Sect04SmalcomplexTachycardieen from './Sect04SmalcomplexTachycardieen'
import Sect05AtrialeTachycardie from './Sect05AtrialeTachycardie'
import Sect06Atriumflutter from './Sect06Atriumflutter'
import Sect07AVNRT from './Sect07AVNRT'
import Sect08AVRTenWPW from './Sect08AVRTenWPW'
import Sect09OngrijpbareRitmestoornis from './Sect09OngrijpbareRitmestoornis'
import Sect10BredeComplexTachycardie from './Sect10BredeComplexTachycardie'
import Sect11AntiAritmicaVaughanWilliams from './Sect11AntiAritmicaVaughanWilliams'
import Sect12ManagementVeiligheid from './Sect12ManagementVeiligheid'
import Sect13LangeTermijnBeleid from './Sect13LangeTermijnBeleid'
import Sect14Samenvatting from './Sect14Samenvatting'

const Blok9Week5Casus10TachyaritmieSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Algemene aanpak bij tachycardie', icon: Stethoscope },
    { id: 'sect-03', title: 'Hoe ontstaat een tachycardie?', icon: GitBranch },
    { id: 'sect-04', title: 'Smalcomplex tachycardieën', icon: Zap },
    { id: 'sect-05', title: 'Atriale tachycardie', icon: Activity },
    { id: 'sect-06', title: 'Atriumflutter', icon: HeartPulse },
    { id: 'sect-07', title: 'AVNRT', icon: Layers },
    { id: 'sect-08', title: 'AVRT en WPW', icon: Table2 },
    { id: 'sect-09', title: 'De ongrijpbare ritmestoornis', icon: Microscope },
    { id: 'sect-10', title: 'Brede complex tachycardie: VT of aberrantie?', icon: ShieldAlert },
    { id: 'sect-11', title: 'Anti-aritmica volgens Vaughan Williams', icon: ClipboardList },
    { id: 'sect-12', title: 'Management & veiligheid', icon: Scale },
    { id: 'sect-13', title: 'Lange termijn beleid', icon: HeartPulse },
    { id: 'sect-14', title: 'Samenvatting', icon: ListChecks },
  ]

  return (
    <SummaryLayout
      title="Tachyaritmie"
      description="Bij tachycardie is het eerste uitgangspunt altijd: behandel de patiënt, niet het monitorbeeld. De eerste stap is dus niet meteen de ritmestoornis benoemen, maar de patiënt beoordelen."
      caseLabel="Week 5 · Casus 10: Atriumfibrilleren"
      blokLabel="Blok 9"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02AlgemeneAanpak />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03HoeOntstaatTachycardie />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04SmalcomplexTachycardieen />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05AtrialeTachycardie />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06Atriumflutter />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07AVNRT />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08AVRTenWPW />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09OngrijpbareRitmestoornis />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10BredeComplexTachycardie />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11AntiAritmicaVaughanWilliams />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12ManagementVeiligheid />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13LangeTermijnBeleid />
      </section>
      <section id="sect-14" className="scroll-mt-24 mb-12">
        <Sect14Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok9Week5Casus10TachyaritmieSummary
