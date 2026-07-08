// Auto-generated SSKindgyn samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-sskindgyn-samenvattingen.mjs --module menopauze
import {
  Activity,
  BookOpen,
  CircleCheck,
  FileText,
  HeartPulse,
  Layers,
  Microscope,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../components/SummaryLayout'
import SectLeerdoelen from './sections/SectLeerdoelen'
import SectBegrippenRondDeMenopauze from './sections/SectBegrippenRondDeMenopauze'
import SectFysiologieVanDeMenopauze from './sections/SectFysiologieVanDeMenopauze'
import SectOpvliegersEnNachtelijkZweten from './sections/SectOpvliegersEnNachtelijkZweten'
import SectKlachtenEnGevolgenInDePostmenopauzal from './sections/SectKlachtenEnGevolgenInDePostmenopauzal'
import SectBotmineraaldichtheidEnDxa from './sections/SectBotmineraaldichtheidEnDxa'
import SectBehandelingVanPostmenopauzaleKlachte from './sections/SectBehandelingVanPostmenopauzaleKlachte'
import SectNietHormonaleAlternatieven from './sections/SectNietHormonaleAlternatieven'
import SectHormonaleSubstitutietherapieRisicoSE from './sections/SectHormonaleSubstitutietherapieRisicoSE'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "Begrippen rond de menopauze", icon: FileText },
    { id: 'sect-03', title: "Fysiologie van de menopauze", icon: Layers },
    { id: 'sect-04', title: "Opvliegers en nachtelijk zweten", icon: FileText },
    { id: 'sect-05', title: "Klachten en gevolgen in de postmenopauzale fase", icon: Activity },
    { id: 'sect-06', title: "Botmineraaldichtheid en DXA", icon: FileText },
    { id: 'sect-07', title: "Behandeling van postmenopauzale klachten", icon: HeartPulse },
    { id: 'sect-08', title: "Niet-hormonale alternatieven", icon: FileText },
    { id: 'sect-09', title: "Hormonale substitutietherapie: risico’s en contra-indicaties", icon: HeartPulse },
    { id: 'sect-10', title: "Samenvatting", icon: CircleCheck },
]

const SskindgynWeek2MenopauzeSummary = () => (
  <SummaryLayout
    title="Menopauze"
    description="Na het bestuderen van deze stof kun je de belangrijkste begrippen rond de menopauze benoemen en uitleggen. Je kunt de fysiologie van de menopauze beschrijven, klachten die passen bij de overgang herkennen en de gevolgen van de…"
    caseLabel="Week 2 · Menopauze"
    blokLabel="Kindergeneeskunde & Gynaecologie"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectBegrippenRondDeMenopauze />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectFysiologieVanDeMenopauze />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectOpvliegersEnNachtelijkZweten />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectKlachtenEnGevolgenInDePostmenopauzal />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectBotmineraaldichtheidEnDxa />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectBehandelingVanPostmenopauzaleKlachte />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SectNietHormonaleAlternatieven />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SectHormonaleSubstitutietherapieRisicoSE />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default SskindgynWeek2MenopauzeSummary
