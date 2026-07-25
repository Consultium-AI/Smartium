// Auto-generated SSInterne samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-ssinterne-samenvattingen.mjs --module artrose-artritis
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
import SectAnatomieVanHandEnVoet from './sections/SectAnatomieVanHandEnVoet'
import SectHandEnPols from './sections/SectHandEnPols'
import SectVoet from './sections/SectVoet'
import SectBasalePathofysiologie from './sections/SectBasalePathofysiologie'
import SectSynoviumEnKraakbeen from './sections/SectSynoviumEnKraakbeen'
import SectArtrose from './sections/SectArtrose'
import SectKenmerkenVanArtrose from './sections/SectKenmerkenVanArtrose'
import SectOntstaanVanArtrose from './sections/SectOntstaanVanArtrose'
import SectTypischeGewrichtenBijArtrose from './sections/SectTypischeGewrichtenBijArtrose'
import SectArtritis from './sections/SectArtritis'
import SectReumatoDeArtritis from './sections/SectReumatoDeArtritis'
import SectSeronegatieveArtritis from './sections/SectSeronegatieveArtritis'
import SectKristalartropathieN from './sections/SectKristalartropathieN'
import SectSystematischeBeoordelingVanConventio from './sections/SectSystematischeBeoordelingVanConventio'
import Sect1WekeDelen from './sections/Sect1WekeDelen'
import Sect2Gewrichtsruimten from './sections/Sect2Gewrichtsruimten'
import Sect3VeranderingenVanHetBot from './sections/Sect3VeranderingenVanHetBot'
import Sect4Alignment from './sections/Sect4Alignment'
import SectRadiologischeKenmerkenPerAfwijking from './sections/SectRadiologischeKenmerkenPerAfwijking'
import SectTabel1BelangrijksteRadiologischeKenm from './sections/SectTabel1BelangrijksteRadiologischeKenm'
import SectArtroseInDePraktijk from './sections/SectArtroseInDePraktijk'
import SectRaInDePraktijk from './sections/SectRaInDePraktijk'
import SectSeronegatieveArtritisInDePraktijk from './sections/SectSeronegatieveArtritisInDePraktijk'
import SectJichtInDePraktijk from './sections/SectJichtInDePraktijk'
import SectTypischeStandsafwijkingenEnDeformite from './sections/SectTypischeStandsafwijkingenEnDeformite'
import SectHanddeformiteiten from './sections/SectHanddeformiteiten'
import SectNoduliVanBouchardEnHeberden from './sections/SectNoduliVanBouchardEnHeberden'
import SectSubluxatieEnAfwijkendeStand from './sections/SectSubluxatieEnAfwijkendeStand'
import SectSamenvattendeVergelijking from './sections/SectSamenvattendeVergelijking'
import SectTabel2VergelijkingVanArtroseEnArtrit from './sections/SectTabel2VergelijkingVanArtroseEnArtrit'
import SectKlinischeRelevantie from './sections/SectKlinischeRelevantie'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "Anatomie van hand en voet", icon: Layers },
    { id: 'sect-03', title: "Hand en pols", icon: FileText },
    { id: 'sect-04', title: "Voet", icon: FileText },
    { id: 'sect-05', title: "Basale pathofysiologie", icon: Layers },
    { id: 'sect-06', title: "Synovium en kraakbeen", icon: FileText },
    { id: 'sect-07', title: "Artrose", icon: FileText },
    { id: 'sect-08', title: "Kenmerken van artrose", icon: FileText },
    { id: 'sect-09', title: "Ontstaan van artrose", icon: FileText },
    { id: 'sect-10', title: "Typische gewrichten bij artrose", icon: FileText },
    { id: 'sect-11', title: "Artritis", icon: FileText },
    { id: 'sect-12', title: "Reumatoïde artritis", icon: FileText },
    { id: 'sect-13', title: "Seronegatieve artritis", icon: FileText },
    { id: 'sect-14', title: "Kristalartropathieën", icon: FileText },
    { id: 'sect-15', title: "Systematische beoordeling van conventionele beeldvorming", icon: FileText },
    { id: 'sect-16', title: "1. Weke delen", icon: FileText },
    { id: 'sect-17', title: "2. Gewrichtsruimten", icon: FileText },
    { id: 'sect-18', title: "3. Veranderingen van het bot", icon: FileText },
    { id: 'sect-19', title: "4. Alignment", icon: FileText },
    { id: 'sect-20', title: "Radiologische kenmerken per afwijking", icon: FileText },
    { id: 'sect-21', title: "Tabel 1. Belangrijkste radiologische kenmerken", icon: Table2 },
    { id: 'sect-22', title: "Artrose in de praktijk", icon: FileText },
    { id: 'sect-23', title: "RA in de praktijk", icon: FileText },
    { id: 'sect-24', title: "Seronegatieve artritis in de praktijk", icon: FileText },
    { id: 'sect-25', title: "Jicht in de praktijk", icon: FileText },
    { id: 'sect-26', title: "Typische standsafwijkingen en deformiteiten", icon: FileText },
    { id: 'sect-27', title: "Handdeformiteiten", icon: FileText },
    { id: 'sect-28', title: "Noduli van Bouchard en Heberden", icon: FileText },
    { id: 'sect-29', title: "Subluxatie en afwijkende stand", icon: FileText },
    { id: 'sect-30', title: "Samenvattende vergelijking", icon: FileText },
    { id: 'sect-31', title: "Tabel 2. Vergelijking van artrose en artritis", icon: Table2 },
    { id: 'sect-32', title: "Klinische relevantie", icon: FileText },
    { id: 'sect-33', title: "Samenvatting", icon: CircleCheck },
]

const SsinterneWeek1ArtroseArtritisSummary = () => (
  <SummaryLayout
    title="Artrose artritis"
    description="Voor het onderscheiden van artrose en verschillende vormen van artritis is het heel belangrijk om te weten welke gewrichten aangedaan zijn. De verdeling over de gewrichten van handen en voeten geeft namelijk veel informatie voor de…"
    caseLabel="Week 1 · Artrose artritis"
    blokLabel="Interne Geneeskunde"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectAnatomieVanHandEnVoet />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectHandEnPols />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectVoet />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectBasalePathofysiologie />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectSynoviumEnKraakbeen />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectArtrose />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SectKenmerkenVanArtrose />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SectOntstaanVanArtrose />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <SectTypischeGewrichtenBijArtrose />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <SectArtritis />
    </section>
    <section id="sect-12" className="scroll-mt-24 mb-12">
      <SectReumatoDeArtritis />
    </section>
    <section id="sect-13" className="scroll-mt-24 mb-12">
      <SectSeronegatieveArtritis />
    </section>
    <section id="sect-14" className="scroll-mt-24 mb-12">
      <SectKristalartropathieN />
    </section>
    <section id="sect-15" className="scroll-mt-24 mb-12">
      <SectSystematischeBeoordelingVanConventio />
    </section>
    <section id="sect-16" className="scroll-mt-24 mb-12">
      <Sect1WekeDelen />
    </section>
    <section id="sect-17" className="scroll-mt-24 mb-12">
      <Sect2Gewrichtsruimten />
    </section>
    <section id="sect-18" className="scroll-mt-24 mb-12">
      <Sect3VeranderingenVanHetBot />
    </section>
    <section id="sect-19" className="scroll-mt-24 mb-12">
      <Sect4Alignment />
    </section>
    <section id="sect-20" className="scroll-mt-24 mb-12">
      <SectRadiologischeKenmerkenPerAfwijking />
    </section>
    <section id="sect-21" className="scroll-mt-24 mb-12">
      <SectTabel1BelangrijksteRadiologischeKenm />
    </section>
    <section id="sect-22" className="scroll-mt-24 mb-12">
      <SectArtroseInDePraktijk />
    </section>
    <section id="sect-23" className="scroll-mt-24 mb-12">
      <SectRaInDePraktijk />
    </section>
    <section id="sect-24" className="scroll-mt-24 mb-12">
      <SectSeronegatieveArtritisInDePraktijk />
    </section>
    <section id="sect-25" className="scroll-mt-24 mb-12">
      <SectJichtInDePraktijk />
    </section>
    <section id="sect-26" className="scroll-mt-24 mb-12">
      <SectTypischeStandsafwijkingenEnDeformite />
    </section>
    <section id="sect-27" className="scroll-mt-24 mb-12">
      <SectHanddeformiteiten />
    </section>
    <section id="sect-28" className="scroll-mt-24 mb-12">
      <SectNoduliVanBouchardEnHeberden />
    </section>
    <section id="sect-29" className="scroll-mt-24 mb-12">
      <SectSubluxatieEnAfwijkendeStand />
    </section>
    <section id="sect-30" className="scroll-mt-24 mb-12">
      <SectSamenvattendeVergelijking />
    </section>
    <section id="sect-31" className="scroll-mt-24 mb-12">
      <SectTabel2VergelijkingVanArtroseEnArtrit />
    </section>
    <section id="sect-32" className="scroll-mt-24 mb-12">
      <SectKlinischeRelevantie />
    </section>
    <section id="sect-33" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default SsinterneWeek1ArtroseArtritisSummary
