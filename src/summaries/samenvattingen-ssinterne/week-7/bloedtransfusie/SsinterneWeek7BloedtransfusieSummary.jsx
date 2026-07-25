// Auto-generated SSInterne samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-ssinterne-samenvattingen.mjs --module bloedtransfusie
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
import SectBloedtransfusieInDePraktijk from './sections/SectBloedtransfusieInDePraktijk'
import SectWanneerDenkJeAanTransfusie from './sections/SectWanneerDenkJeAanTransfusie'
import SectWelkeBloedproductenGeefJeBijMassaalB from './sections/SectWelkeBloedproductenGeefJeBijMassaalB'
import SectWelkeLaboratoriumbepalingenZijnNodig from './sections/SectWelkeLaboratoriumbepalingenZijnNodig'
import SectBloedgroepenEnCompatibiliteit from './sections/SectBloedgroepenEnCompatibiliteit'
import SectHetAboSysteem from './sections/SectHetAboSysteem'
import SectWatGebeurtErBijAboIncompatibiliteit from './sections/SectWatGebeurtErBijAboIncompatibiliteit'
import SectHoeWordtDeBloedgroepBepaald from './sections/SectHoeWordtDeBloedgroepBepaald'
import SectRhesusEnAndereBloedgroepsystemen from './sections/SectRhesusEnAndereBloedgroepsystemen'
import SectIrregulaireAntistoffen from './sections/SectIrregulaireAntistoffen'
import SectTypeScreenBeleid from './sections/SectTypeScreenBeleid'
import SectGeldigheidVanBepalingen from './sections/SectGeldigheidVanBepalingen'
import SectBloedproducten from './sections/SectBloedproducten'
import SectWelkeBloedproductenZijnEr from './sections/SectWelkeBloedproductenZijnEr'
import SectTrombocytenEnPlasma from './sections/SectTrombocytenEnPlasma'
import SectTrombocytentransfusie from './sections/SectTrombocytentransfusie'
import SectPlasma from './sections/SectPlasma'
import SectInformedConsent from './sections/SectInformedConsent'
import SectChronischBloedverlies from './sections/SectChronischBloedverlies'
import SectTrombocytenBijChronischeSituaties from './sections/SectTrombocytenBijChronischeSituaties'
import SectInlooptijden from './sections/SectInlooptijden'
import SectTransfusiereactiesEnHemovigilantie from './sections/SectTransfusiereactiesEnHemovigilantie'
import SectAcuteEnUitgesteldeHemolyse from './sections/SectAcuteEnUitgesteldeHemolyse'
import SectFebrieleNietHemolytischeTransfusiere from './sections/SectFebrieleNietHemolytischeTransfusiere'
import SectTrali from './sections/SectTrali'
import SectInfectieuzeRisicoS from './sections/SectInfectieuzeRisicoS'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "Bloedtransfusie in de praktijk", icon: FileText },
    { id: 'sect-03', title: "Wanneer denk je aan transfusie?", icon: FileText },
    { id: 'sect-04', title: "Welke bloedproducten geef je bij massaal bloedverlies?", icon: FileText },
    { id: 'sect-05', title: "Welke laboratoriumbepalingen zijn nodig?", icon: FileText },
    { id: 'sect-06', title: "Bloedgroepen en compatibiliteit", icon: FileText },
    { id: 'sect-07', title: "Het ABO-systeem", icon: FileText },
    { id: 'sect-08', title: "Wat gebeurt er bij ABO-incompatibiliteit?", icon: FileText },
    { id: 'sect-09', title: "Hoe wordt de bloedgroep bepaald?", icon: FileText },
    { id: 'sect-10', title: "Rhesus en andere bloedgroepsystemen", icon: FileText },
    { id: 'sect-11', title: "Irregulaire antistoffen", icon: FileText },
    { id: 'sect-12', title: "Type & Screen-beleid", icon: HeartPulse },
    { id: 'sect-13', title: "Geldigheid van bepalingen", icon: FileText },
    { id: 'sect-14', title: "Bloedproducten", icon: FileText },
    { id: 'sect-15', title: "Welke bloedproducten zijn er?", icon: FileText },
    { id: 'sect-16', title: "Trombocyten en plasma", icon: FileText },
    { id: 'sect-17', title: "Trombocytentransfusie", icon: FileText },
    { id: 'sect-18', title: "Plasma", icon: FileText },
    { id: 'sect-19', title: "Informed consent", icon: FileText },
    { id: 'sect-20', title: "Chronisch bloedverlies", icon: FileText },
    { id: 'sect-21', title: "Trombocyten bij chronische situaties", icon: FileText },
    { id: 'sect-22', title: "Inlooptijden", icon: FileText },
    { id: 'sect-23', title: "Transfusiereacties en hemovigilantie", icon: FileText },
    { id: 'sect-24', title: "Acute en uitgestelde hemolyse", icon: FileText },
    { id: 'sect-25', title: "Febriele, niet-hemolytische transfusiereactie", icon: FileText },
    { id: 'sect-26', title: "TRALI", icon: FileText },
    { id: 'sect-27', title: "Infectieuze risico’s", icon: FileText },
    { id: 'sect-28', title: "Samenvatting", icon: CircleCheck },
]

const SsinterneWeek7BloedtransfusieSummary = () => (
  <SummaryLayout
    title="Bloedtransfusie"
    description="Bloedtransfusie kan levensreddend zijn, bijvoorbeeld bij groot trauma met massaal bloedverlies. Maar transfusie wordt ook gebruikt als ondersteunende behandeling, bijvoorbeeld bij beenmergfalen door een beenmerg- of bloedziekte, of door…"
    caseLabel="Week 7 · Bloedtransfusie"
    blokLabel="Interne Geneeskunde"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectBloedtransfusieInDePraktijk />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectWanneerDenkJeAanTransfusie />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectWelkeBloedproductenGeefJeBijMassaalB />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectWelkeLaboratoriumbepalingenZijnNodig />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectBloedgroepenEnCompatibiliteit />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectHetAboSysteem />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SectWatGebeurtErBijAboIncompatibiliteit />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SectHoeWordtDeBloedgroepBepaald />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <SectRhesusEnAndereBloedgroepsystemen />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <SectIrregulaireAntistoffen />
    </section>
    <section id="sect-12" className="scroll-mt-24 mb-12">
      <SectTypeScreenBeleid />
    </section>
    <section id="sect-13" className="scroll-mt-24 mb-12">
      <SectGeldigheidVanBepalingen />
    </section>
    <section id="sect-14" className="scroll-mt-24 mb-12">
      <SectBloedproducten />
    </section>
    <section id="sect-15" className="scroll-mt-24 mb-12">
      <SectWelkeBloedproductenZijnEr />
    </section>
    <section id="sect-16" className="scroll-mt-24 mb-12">
      <SectTrombocytenEnPlasma />
    </section>
    <section id="sect-17" className="scroll-mt-24 mb-12">
      <SectTrombocytentransfusie />
    </section>
    <section id="sect-18" className="scroll-mt-24 mb-12">
      <SectPlasma />
    </section>
    <section id="sect-19" className="scroll-mt-24 mb-12">
      <SectInformedConsent />
    </section>
    <section id="sect-20" className="scroll-mt-24 mb-12">
      <SectChronischBloedverlies />
    </section>
    <section id="sect-21" className="scroll-mt-24 mb-12">
      <SectTrombocytenBijChronischeSituaties />
    </section>
    <section id="sect-22" className="scroll-mt-24 mb-12">
      <SectInlooptijden />
    </section>
    <section id="sect-23" className="scroll-mt-24 mb-12">
      <SectTransfusiereactiesEnHemovigilantie />
    </section>
    <section id="sect-24" className="scroll-mt-24 mb-12">
      <SectAcuteEnUitgesteldeHemolyse />
    </section>
    <section id="sect-25" className="scroll-mt-24 mb-12">
      <SectFebrieleNietHemolytischeTransfusiere />
    </section>
    <section id="sect-26" className="scroll-mt-24 mb-12">
      <SectTrali />
    </section>
    <section id="sect-27" className="scroll-mt-24 mb-12">
      <SectInfectieuzeRisicoS />
    </section>
    <section id="sect-28" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default SsinterneWeek7BloedtransfusieSummary
