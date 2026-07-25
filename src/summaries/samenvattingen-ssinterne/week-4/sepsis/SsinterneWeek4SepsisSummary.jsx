// Auto-generated SSInterne samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-ssinterne-samenvattingen.mjs --module sepsis
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
import SectWatIsSepsis from './sections/SectWatIsSepsis'
import SectQsofaEnSofa from './sections/SectQsofaEnSofa'
import SectWaaromIsSnelleHerkenningZoBelangrijk from './sections/SectWaaromIsSnelleHerkenningZoBelangrijk'
import SectCasus1FlebitisMetSepsisEnMrsa from './sections/SectCasus1FlebitisMetSepsisEnMrsa'
import SectBloedkweekAfnemenEnVerwerken from './sections/SectBloedkweekAfnemenEnVerwerken'
import SectCasus2PatiNtMetDwarslaesieEnUrosepsi from './sections/SectCasus2PatiNtMetDwarslaesieEnUrosepsi'
import SectCasus3PatiNteMetDiarreeEnToxineGemed from './sections/SectCasus3PatiNteMetDiarreeEnToxineGemed'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "Wat is sepsis?", icon: FileText },
    { id: 'sect-03', title: "qSOFA en SOFA", icon: FileText },
    { id: 'sect-04', title: "Waarom is snelle herkenning zo belangrijk?", icon: FileText },
    { id: 'sect-05', title: "Casus 1: flebitis met sepsis en MRSA", icon: Activity },
    { id: 'sect-06', title: "Bloedkweek: afnemen en verwerken", icon: FileText },
    { id: 'sect-07', title: "Casus 2: patiënt met dwarslaesie en urosepsis", icon: Activity },
    { id: 'sect-08', title: "Casus 3: patiënte met diarree en toxine-gemedieerde sepsis", icon: Activity },
    { id: 'sect-09', title: "Samenvatting", icon: CircleCheck },
]

const SsinterneWeek4SepsisSummary = () => (
  <SummaryLayout
    title="Sepsis"
    description="Na het doornemen van deze stof moet je in staat zijn om sepsis te herkennen en de diagnose te stellen op basis van het klinisch beeld. Je leert de belangrijkste verwekkers van verschillende infecties die tot sepsis kunnen leiden…"
    caseLabel="Week 4 · Sepsis"
    blokLabel="Interne Geneeskunde"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectWatIsSepsis />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectQsofaEnSofa />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectWaaromIsSnelleHerkenningZoBelangrijk />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectCasus1FlebitisMetSepsisEnMrsa />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectBloedkweekAfnemenEnVerwerken />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectCasus2PatiNtMetDwarslaesieEnUrosepsi />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SectCasus3PatiNteMetDiarreeEnToxineGemed />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default SsinterneWeek4SepsisSummary
