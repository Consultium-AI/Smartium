// Auto-generated SSInterne samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-ssinterne-samenvattingen.mjs --module cognitieve-stoornissen
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
import SectCognitieveStoornissenWaaromDitBelang from './sections/SectCognitieveStoornissenWaaromDitBelang'
import SectEersteBenaderingAnamneseEnHeteroanam from './sections/SectEersteBenaderingAnamneseEnHeteroanam'
import SectWaarLetJeOpInDeAnamnese from './sections/SectWaarLetJeOpInDeAnamnese'
import SectWaarLetJeOpInDeHeteroanamnese from './sections/SectWaarLetJeOpInDeHeteroanamnese'
import SectGedragsobservatieEnLichamelijkOnderz from './sections/SectGedragsobservatieEnLichamelijkOnderz'
import SectGedragsobservatie from './sections/SectGedragsobservatie'
import SectAandachtspuntenBijLichamelijkOnderzo from './sections/SectAandachtspuntenBijLichamelijkOnderzo'
import SectCasusDeEersteIndruk from './sections/SectCasusDeEersteIndruk'
import SectMedicatieBeoordelen from './sections/SectMedicatieBeoordelen'
import SectDifferentiaaldiagnoseWatPastHier from './sections/SectDifferentiaaldiagnoseWatPastHier'
import SectDementieVersusDelier from './sections/SectDementieVersusDelier'
import SectAanvullendOnderzoekHyponatriMieAlsBe from './sections/SectAanvullendOnderzoekHyponatriMieAlsBe'
import SectTabel2IndelingVanHyponatriMie from './sections/SectTabel2IndelingVanHyponatriMie'
import SectBehandelingVanDeHyponatriMie from './sections/SectBehandelingVanDeHyponatriMie'
import SectWernickeEncefalopathieEenBelangrijke from './sections/SectWernickeEncefalopathieEenBelangrijke'
import SectWatIsThiamine from './sections/SectWatIsThiamine'
import SectKlinischBeeld from './sections/SectKlinischBeeld'
import SectBehandeling from './sections/SectBehandeling'
import SectScreeningVanCognitiefFunctionerenDeM from './sections/SectScreeningVanCognitiefFunctionerenDeM'
import SectCognitiefFunctionerenEnVeroudering from './sections/SectCognitiefFunctionerenEnVeroudering'
import SectMildCognitiveImpairment from './sections/SectMildCognitiveImpairment'
import SectNeuropsychologischOnderzoek from './sections/SectNeuropsychologischOnderzoek'
import SectWatTestEenNpo from './sections/SectWatTestEenNpo'
import SectIndicatiesVoorEenNpo from './sections/SectIndicatiesVoorEenNpo'
import SectValkuilen from './sections/SectValkuilen'
import SectUitslagVanHetNpoEnVerdereDiagnostiek from './sections/SectUitslagVanHetNpoEnVerdereDiagnostiek'
import SectPrognoseEnBegeleiding from './sections/SectPrognoseEnBegeleiding'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "Cognitieve stoornissen: waarom dit belangrijk is", icon: FileText },
    { id: 'sect-03', title: "Eerste benadering: anamnese en heteroanamnese", icon: FileText },
    { id: 'sect-04', title: "Waar let je op in de anamnese?", icon: FileText },
    { id: 'sect-05', title: "Waar let je op in de heteroanamnese?", icon: FileText },
    { id: 'sect-06', title: "Gedragsobservatie en lichamelijk onderzoek", icon: Microscope },
    { id: 'sect-07', title: "Gedragsobservatie", icon: FileText },
    { id: 'sect-08', title: "Aandachtspunten bij lichamelijk onderzoek", icon: Microscope },
    { id: 'sect-09', title: "Casus: de eerste indruk", icon: Activity },
    { id: 'sect-10', title: "Medicatie beoordelen", icon: FileText },
    { id: 'sect-11', title: "Differentiaaldiagnose: wat past hier?", icon: FileText },
    { id: 'sect-12', title: "Dementie versus delier", icon: FileText },
    { id: 'sect-13', title: "Aanvullend onderzoek: hyponatriëmie als belangrijke aanwijzing", icon: Microscope },
    { id: 'sect-14', title: "Tabel 2. Indeling van hyponatriëmie", icon: Table2 },
    { id: 'sect-15', title: "Behandeling van de hyponatriëmie", icon: HeartPulse },
    { id: 'sect-16', title: "Wernicke encefalopathie: een belangrijke verklaring", icon: FileText },
    { id: 'sect-17', title: "Wat is thiamine?", icon: FileText },
    { id: 'sect-18', title: "Klinisch beeld", icon: FileText },
    { id: 'sect-19', title: "Behandeling", icon: HeartPulse },
    { id: 'sect-20', title: "Screening van cognitief functioneren: de MMSE", icon: FileText },
    { id: 'sect-21', title: "Cognitief functioneren en veroudering", icon: FileText },
    { id: 'sect-22', title: "Mild cognitive impairment", icon: FileText },
    { id: 'sect-23', title: "Neuropsychologisch onderzoek", icon: Microscope },
    { id: 'sect-24', title: "Wat test een NPO?", icon: FileText },
    { id: 'sect-25', title: "Indicaties voor een NPO", icon: FileText },
    { id: 'sect-26', title: "Valkuilen", icon: FileText },
    { id: 'sect-27', title: "Uitslag van het NPO en verdere diagnostiek", icon: Microscope },
    { id: 'sect-28', title: "Prognose en begeleiding", icon: FileText },
    { id: 'sect-29', title: "Samenvatting", icon: CircleCheck },
]

const SsinterneWeek6CognitieveStoornissenSummary = () => (
  <SummaryLayout
    title="Cognitieve stoornissen"
    description="Cognitieve stoornissen komen veel voor en zullen door de vergrijzing alleen maar vaker worden gezien. Bijna iedere zorgverlener krijgt er in de praktijk mee te maken. Het gaat vaak niet alleen om geheugenproblemen, maar ook om…"
    caseLabel="Week 6 · Cognitieve stoornissen"
    blokLabel="Interne Geneeskunde"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectCognitieveStoornissenWaaromDitBelang />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectEersteBenaderingAnamneseEnHeteroanam />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectWaarLetJeOpInDeAnamnese />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectWaarLetJeOpInDeHeteroanamnese />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectGedragsobservatieEnLichamelijkOnderz />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectGedragsobservatie />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SectAandachtspuntenBijLichamelijkOnderzo />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SectCasusDeEersteIndruk />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <SectMedicatieBeoordelen />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <SectDifferentiaaldiagnoseWatPastHier />
    </section>
    <section id="sect-12" className="scroll-mt-24 mb-12">
      <SectDementieVersusDelier />
    </section>
    <section id="sect-13" className="scroll-mt-24 mb-12">
      <SectAanvullendOnderzoekHyponatriMieAlsBe />
    </section>
    <section id="sect-14" className="scroll-mt-24 mb-12">
      <SectTabel2IndelingVanHyponatriMie />
    </section>
    <section id="sect-15" className="scroll-mt-24 mb-12">
      <SectBehandelingVanDeHyponatriMie />
    </section>
    <section id="sect-16" className="scroll-mt-24 mb-12">
      <SectWernickeEncefalopathieEenBelangrijke />
    </section>
    <section id="sect-17" className="scroll-mt-24 mb-12">
      <SectWatIsThiamine />
    </section>
    <section id="sect-18" className="scroll-mt-24 mb-12">
      <SectKlinischBeeld />
    </section>
    <section id="sect-19" className="scroll-mt-24 mb-12">
      <SectBehandeling />
    </section>
    <section id="sect-20" className="scroll-mt-24 mb-12">
      <SectScreeningVanCognitiefFunctionerenDeM />
    </section>
    <section id="sect-21" className="scroll-mt-24 mb-12">
      <SectCognitiefFunctionerenEnVeroudering />
    </section>
    <section id="sect-22" className="scroll-mt-24 mb-12">
      <SectMildCognitiveImpairment />
    </section>
    <section id="sect-23" className="scroll-mt-24 mb-12">
      <SectNeuropsychologischOnderzoek />
    </section>
    <section id="sect-24" className="scroll-mt-24 mb-12">
      <SectWatTestEenNpo />
    </section>
    <section id="sect-25" className="scroll-mt-24 mb-12">
      <SectIndicatiesVoorEenNpo />
    </section>
    <section id="sect-26" className="scroll-mt-24 mb-12">
      <SectValkuilen />
    </section>
    <section id="sect-27" className="scroll-mt-24 mb-12">
      <SectUitslagVanHetNpoEnVerdereDiagnostiek />
    </section>
    <section id="sect-28" className="scroll-mt-24 mb-12">
      <SectPrognoseEnBegeleiding />
    </section>
    <section id="sect-29" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default SsinterneWeek6CognitieveStoornissenSummary
