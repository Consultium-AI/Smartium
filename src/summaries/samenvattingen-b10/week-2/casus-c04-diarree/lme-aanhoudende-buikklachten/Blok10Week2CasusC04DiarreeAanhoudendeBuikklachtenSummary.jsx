import {
  Activity,
  BarChart3,
  BookOpen,
  ClipboardList,
  FileText,
  HeartHandshake,
  HelpCircle,
  Lightbulb,
  Link2,
  ListChecks,
  MessageCircle,
  Microscope,
  Network,
  Search,
  Table2,
  Target,
  Users,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './sections/Sect01Leerdoelen'
import Sect02WatBedoelenWeMetAanhoudendeBuikklachten from './sections/Sect02WatBedoelenWeMetAanhoudendeBuikklachten'
import Sect03HoeVaakKomtHetVoor from './sections/Sect03HoeVaakKomtHetVoor'
import Sect04WieHebbenErVakerLastVan from './sections/Sect04WieHebbenErVakerLastVan'
import Sect05AlkKanSamenGaanMetEenBestaandeZiekte from './sections/Sect05AlkKanSamenGaanMetEenBestaandeZiekte'
import Sect06PatroonVanPersisterendeAlk from './sections/Sect06PatroonVanPersisterendeAlk'
import Sect07DeBenaderingWeesNieuwsgierig from './sections/Sect07DeBenaderingWeesNieuwsgierig'
import Sect08RolVanGevoelensGedachtenEnSocialeOmgeving from './sections/Sect08RolVanGevoelensGedachtenEnSocialeOmgeving'
import Sect09WatVraagJeDanBijvoorbeeld from './sections/Sect09WatVraagJeDanBijvoorbeeld'
import Sect10SocialeOmgevingEnVoorbeeld from './sections/Sect10SocialeOmgevingEnVoorbeeld'
import Sect11InstandhoudendeFactorenOpSporen from './sections/Sect11InstandhoudendeFactorenOpSporen'
import Sect12Verwachtingsmanagement from './sections/Sect12Verwachtingsmanagement'
import Sect13AanvullendOnderzoek from './sections/Sect13AanvullendOnderzoek'
import Sect14UitlegGevenBiedPerspectief from './sections/Sect14UitlegGevenBiedPerspectief'
import Sect15TerugrapportageAanDeHuisarts from './sections/Sect15TerugrapportageAanDeHuisarts'
import Sect16KlinischeRelevantie from './sections/Sect16KlinischeRelevantie'
import Sect17Samenvatting from './sections/Sect17Samenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  {
    id: 'sect-02',
    title: 'Aanhoudende buikklachten: wat bedoelen we daarmee? · Tabel 1',
    icon: HelpCircle,
  },
  { id: 'sect-03', title: 'Hoe vaak komt het voor?', icon: BarChart3 },
  { id: 'sect-04', title: 'Wie hebben er vaker last van?', icon: Users },
  { id: 'sect-05', title: 'ALK kan samen gaan met een bestaande ziekte', icon: Link2 },
  { id: 'sect-06', title: 'Het patroon van persisterende ALK · Tabel 2', icon: Network },
  { id: 'sect-07', title: 'De benadering: wees nieuwsgierig', icon: Search },
  {
    id: 'sect-08',
    title: 'De rol van gevoelens, gedachten en sociale omgeving',
    icon: MessageCircle,
  },
  { id: 'sect-09', title: 'Wat vraag je dan bijvoorbeeld?', icon: ListChecks },
  {
    id: 'sect-10',
    title: 'De sociale omgeving en kort voorbeeld uit de benadering',
    icon: HeartHandshake,
  },
  { id: 'sect-11', title: 'Instandhoudende factoren opsporen · Tabel 3', icon: Table2 },
  { id: 'sect-12', title: 'Aandacht voor verwachtingen: verwachtingsmanagement', icon: Target },
  { id: 'sect-13', title: 'Aanvullend onderzoek · Tabel 4', icon: Microscope },
  { id: 'sect-14', title: 'Uitleg geven: bied perspectief', icon: Lightbulb },
  { id: 'sect-15', title: 'Terugrapportage aan de huisarts', icon: ClipboardList },
  { id: 'sect-16', title: 'Klinische relevantie', icon: Activity },
  { id: 'sect-17', title: 'Samenvatting', icon: FileText },
]

const Blok10Week2CasusC04DiarreeAanhoudendeBuikklachtenSummary = () => (
  <SummaryLayout
    title="Aanhoudende buikklachten"
    moduleKind="lme"
    description="Aanhoudende lichamelijke klachten zijn klachten waarvoor de arts niet of onvoldoende een lichamelijke verklaring vindt. In deze e-module draait het vooral om aanhoudende buikklachten."
    caseLabel="Week 2 · Casus C04: Diarree"
    blokLabel="Blok 10"
    tableOfContents={tableOfContents}
    practiceLink="/oefenvragen?lme=blok10-week2-casus-c04-diarree-aanhoudende-buikklachten"
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <Sect01Leerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <Sect02WatBedoelenWeMetAanhoudendeBuikklachten />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <Sect03HoeVaakKomtHetVoor />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <Sect04WieHebbenErVakerLastVan />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <Sect05AlkKanSamenGaanMetEenBestaandeZiekte />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <Sect06PatroonVanPersisterendeAlk />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <Sect07DeBenaderingWeesNieuwsgierig />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <Sect08RolVanGevoelensGedachtenEnSocialeOmgeving />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <Sect09WatVraagJeDanBijvoorbeeld />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <Sect10SocialeOmgevingEnVoorbeeld />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <Sect11InstandhoudendeFactorenOpSporen />
    </section>
    <section id="sect-12" className="scroll-mt-24 mb-12">
      <Sect12Verwachtingsmanagement />
    </section>
    <section id="sect-13" className="scroll-mt-24 mb-12">
      <Sect13AanvullendOnderzoek />
    </section>
    <section id="sect-14" className="scroll-mt-24 mb-12">
      <Sect14UitlegGevenBiedPerspectief />
    </section>
    <section id="sect-15" className="scroll-mt-24 mb-12">
      <Sect15TerugrapportageAanDeHuisarts />
    </section>
    <section id="sect-16" className="scroll-mt-24 mb-12">
      <Sect16KlinischeRelevantie />
    </section>
    <section id="sect-17" className="scroll-mt-24 mb-12">
      <Sect17Samenvatting />
    </section>
  </SummaryLayout>
)

export default Blok10Week2CasusC04DiarreeAanhoudendeBuikklachtenSummary

