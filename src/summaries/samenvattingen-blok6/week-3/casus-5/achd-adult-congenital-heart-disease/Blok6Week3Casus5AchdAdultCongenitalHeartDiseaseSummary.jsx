// Auto-generated Blok 6 samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-blok6-samenvattingen.mjs --module achd-adult-congenital-heart-disease
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
import SummaryLayout from '../../../../../components/SummaryLayout'
import SectLeerdoelen from './sections/SectLeerdoelen'
import SectInleidingWatIsAchd from './sections/SectInleidingWatIsAchd'
import SectWaaromIsDitKlinischBelangrijk from './sections/SectWaaromIsDitKlinischBelangrijk'
import SectEmbryonaleOntwikkelingVanHetHart from './sections/SectEmbryonaleOntwikkelingVanHetHart'
import SectOorzakenVanAangeborenHartafwijkingen from './sections/SectOorzakenVanAangeborenHartafwijkingen'
import SectEpidemiologieWelkeAfwijkingenKomenHe from './sections/SectEpidemiologieWelkeAfwijkingenKomenHe'
import SectMeerVolwassenenMetAchd from './sections/SectMeerVolwassenenMetAchd'
import SectVentrikelseptumdefectVsd from './sections/SectVentrikelseptumdefectVsd'
import SectHemodynamischeEffectenVanEenVsd from './sections/SectHemodynamischeEffectenVanEenVsd'
import SectBehandelingVanEenVsd from './sections/SectBehandelingVanEenVsd'
import SectAtriumseptumdefectAsd from './sections/SectAtriumseptumdefectAsd'
import SectAnatomischeTypenAsd from './sections/SectAnatomischeTypenAsd'
import SectHemodynamischeEffectenVanEenAsd from './sections/SectHemodynamischeEffectenVanEenAsd'
import SectBehandelingVanEenAsd from './sections/SectBehandelingVanEenAsd'
import SectOpenDuctusBotalliPda from './sections/SectOpenDuctusBotalliPda'
import SectHemodynamischeEffectenVanEenPda from './sections/SectHemodynamischeEffectenVanEenPda'
import SectBehandelingVanEenPda from './sections/SectBehandelingVanEenPda'
import SectTetralogieVanFallot from './sections/SectTetralogieVanFallot'
import SectWaaromGeeftDitCyanose from './sections/SectWaaromGeeftDitCyanose'
import SectBehandelingVanTetralogieVanFallot from './sections/SectBehandelingVanTetralogieVanFallot'
import SectLangeTermijnComplicatiesNaCorrectie from './sections/SectLangeTermijnComplicatiesNaCorrectie'
import SectLevenMetEenAangeborenHartafwijkingLa from './sections/SectLevenMetEenAangeborenHartafwijkingLa'
import SectWelkeLateComplicatiesKomenVoor from './sections/SectWelkeLateComplicatiesKomenVoor'
import SectKlinischRedenerenWanneerWordtEenAfwi from './sections/SectKlinischRedenerenWanneerWordtEenAfwi'
import SectLichamelijkOnderzoekWelkBeeldPastBij from './sections/SectLichamelijkOnderzoekWelkBeeldPastBij'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "Inleiding: wat is ACHD?", icon: FileText },
    { id: 'sect-03', title: "Waarom is dit klinisch belangrijk?", icon: FileText },
    { id: 'sect-04', title: "Embryonale ontwikkeling van het hart", icon: FileText },
    { id: 'sect-05', title: "Oorzaken van aangeboren hartafwijkingen", icon: FileText },
    { id: 'sect-06', title: "Epidemiologie: welke afwijkingen komen het vaakst voor?", icon: FileText },
    { id: 'sect-07', title: "Meer volwassenen met ACHD", icon: FileText },
    { id: 'sect-08', title: "Ventrikelseptumdefect (VSD)", icon: FileText },
    { id: 'sect-09', title: "Hemodynamische effecten van een VSD", icon: FileText },
    { id: 'sect-10', title: "Behandeling van een VSD", icon: HeartPulse },
    { id: 'sect-11', title: "Atriumseptumdefect (ASD)", icon: FileText },
    { id: 'sect-12', title: "Anatomische typen ASD", icon: Layers },
    { id: 'sect-13', title: "Hemodynamische effecten van een ASD", icon: FileText },
    { id: 'sect-14', title: "Behandeling van een ASD", icon: HeartPulse },
    { id: 'sect-15', title: "Open ductus Botalli / PDA", icon: FileText },
    { id: 'sect-16', title: "Hemodynamische effecten van een PDA", icon: FileText },
    { id: 'sect-17', title: "Behandeling van een PDA", icon: HeartPulse },
    { id: 'sect-18', title: "Tetralogie van Fallot", icon: FileText },
    { id: 'sect-19', title: "Waarom geeft dit cyanose?", icon: FileText },
    { id: 'sect-20', title: "Behandeling van tetralogie van Fallot", icon: HeartPulse },
    { id: 'sect-21', title: "Lange termijn complicaties na correctie", icon: FileText },
    { id: 'sect-22', title: "Leven met een aangeboren hartafwijking: late complicaties", icon: FileText },
    { id: 'sect-23', title: "Welke late complicaties komen voor?", icon: FileText },
    { id: 'sect-24', title: "Klinisch redeneren: wanneer wordt een afwijking ontdekt?", icon: FileText },
    { id: 'sect-25', title: "Lichamelijk onderzoek: welk beeld past bij welke afwijking?", icon: Microscope },
    { id: 'sect-26', title: "Samenvatting", icon: CircleCheck },
]

const Blok6Week3Casus5AchdAdultCongenitalHeartDiseaseSummary = () => (
  <SummaryLayout
    title="ACHD (Adult Congenital Heart Disease)"
    description="Inleiding: wat is ACHD?"
    caseLabel="Week 3 · Casus 5: De schrik slaat je om het hart"
    blokLabel="Blok 6"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectInleidingWatIsAchd />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectWaaromIsDitKlinischBelangrijk />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectEmbryonaleOntwikkelingVanHetHart />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectOorzakenVanAangeborenHartafwijkingen />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectEpidemiologieWelkeAfwijkingenKomenHe />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectMeerVolwassenenMetAchd />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SectVentrikelseptumdefectVsd />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SectHemodynamischeEffectenVanEenVsd />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <SectBehandelingVanEenVsd />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <SectAtriumseptumdefectAsd />
    </section>
    <section id="sect-12" className="scroll-mt-24 mb-12">
      <SectAnatomischeTypenAsd />
    </section>
    <section id="sect-13" className="scroll-mt-24 mb-12">
      <SectHemodynamischeEffectenVanEenAsd />
    </section>
    <section id="sect-14" className="scroll-mt-24 mb-12">
      <SectBehandelingVanEenAsd />
    </section>
    <section id="sect-15" className="scroll-mt-24 mb-12">
      <SectOpenDuctusBotalliPda />
    </section>
    <section id="sect-16" className="scroll-mt-24 mb-12">
      <SectHemodynamischeEffectenVanEenPda />
    </section>
    <section id="sect-17" className="scroll-mt-24 mb-12">
      <SectBehandelingVanEenPda />
    </section>
    <section id="sect-18" className="scroll-mt-24 mb-12">
      <SectTetralogieVanFallot />
    </section>
    <section id="sect-19" className="scroll-mt-24 mb-12">
      <SectWaaromGeeftDitCyanose />
    </section>
    <section id="sect-20" className="scroll-mt-24 mb-12">
      <SectBehandelingVanTetralogieVanFallot />
    </section>
    <section id="sect-21" className="scroll-mt-24 mb-12">
      <SectLangeTermijnComplicatiesNaCorrectie />
    </section>
    <section id="sect-22" className="scroll-mt-24 mb-12">
      <SectLevenMetEenAangeborenHartafwijkingLa />
    </section>
    <section id="sect-23" className="scroll-mt-24 mb-12">
      <SectWelkeLateComplicatiesKomenVoor />
    </section>
    <section id="sect-24" className="scroll-mt-24 mb-12">
      <SectKlinischRedenerenWanneerWordtEenAfwi />
    </section>
    <section id="sect-25" className="scroll-mt-24 mb-12">
      <SectLichamelijkOnderzoekWelkBeeldPastBij />
    </section>
    <section id="sect-26" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default Blok6Week3Casus5AchdAdultCongenitalHeartDiseaseSummary
