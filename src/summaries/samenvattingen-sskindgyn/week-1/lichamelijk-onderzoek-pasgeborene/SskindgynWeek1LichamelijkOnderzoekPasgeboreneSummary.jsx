// Auto-generated SSKindgyn samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-sskindgyn-samenvattingen.mjs --module lichamelijk-onderzoek-pasgeborene
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
import SectHetLichamelijkOnderzoekVanDePasgebor from './sections/SectHetLichamelijkOnderzoekVanDePasgebor'
import SectHuidEnKleur from './sections/SectHuidEnKleur'
import SectSchedelEnFontanellen from './sections/SectSchedelEnFontanellen'
import SectGelaatOgenOrenNeusEnTong from './sections/SectGelaatOgenOrenNeusEnTong'
import SectHals from './sections/SectHals'
import SectThorax from './sections/SectThorax'
import SectAbdomen from './sections/SectAbdomen'
import SectGenitaliaEnAnus from './sections/SectGenitaliaEnAnus'
import SectRug from './sections/SectRug'
import SectExtremiteiten from './sections/SectExtremiteiten'
import SectOriNterendNeurologischOnderzoek from './sections/SectOriNterendNeurologischOnderzoek'
import SectPraktischeKernVanHetOnderzoek from './sections/SectPraktischeKernVanHetOnderzoek'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "Het lichamelijk onderzoek van de pasgeborene", icon: Microscope },
    { id: 'sect-03', title: "Huid en kleur", icon: FileText },
    { id: 'sect-04', title: "Schedel en fontanellen", icon: FileText },
    { id: 'sect-05', title: "Gelaat, ogen, oren, neus en tong", icon: FileText },
    { id: 'sect-06', title: "Hals", icon: FileText },
    { id: 'sect-07', title: "Thorax", icon: FileText },
    { id: 'sect-08', title: "Abdomen", icon: FileText },
    { id: 'sect-09', title: "Genitalia en anus", icon: FileText },
    { id: 'sect-10', title: "Rug", icon: FileText },
    { id: 'sect-11', title: "Extremiteiten", icon: FileText },
    { id: 'sect-12', title: "Oriënterend neurologisch onderzoek", icon: Microscope },
    { id: 'sect-13', title: "Praktische kern van het onderzoek", icon: Microscope },
    { id: 'sect-14', title: "Samenvatting", icon: CircleCheck },
]

const SskindgynWeek1LichamelijkOnderzoekPasgeboreneSummary = () => (
  <SummaryLayout
    title="Lichamelijk onderzoek pasgeborene"
    description="Na deze stof moet je een systematisch en volledig lichamelijk onderzoek van de pasgeborene kunnen uitvoeren, met speciale aandacht voor de leeftijdsspecifieke benadering van het kind. Daarbij hoort dat je weet waar je op let bij een…"
    caseLabel="Week 1 · Lichamelijk onderzoek pasgeborene"
    blokLabel="Kindergeneeskunde & Gynaecologie"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectHetLichamelijkOnderzoekVanDePasgebor />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectHuidEnKleur />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectSchedelEnFontanellen />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectGelaatOgenOrenNeusEnTong />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectHals />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectThorax />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SectAbdomen />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SectGenitaliaEnAnus />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <SectRug />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <SectExtremiteiten />
    </section>
    <section id="sect-12" className="scroll-mt-24 mb-12">
      <SectOriNterendNeurologischOnderzoek />
    </section>
    <section id="sect-13" className="scroll-mt-24 mb-12">
      <SectPraktischeKernVanHetOnderzoek />
    </section>
    <section id="sect-14" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default SskindgynWeek1LichamelijkOnderzoekPasgeboreneSummary
