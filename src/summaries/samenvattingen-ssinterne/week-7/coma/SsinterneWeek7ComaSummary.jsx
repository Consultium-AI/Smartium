// Auto-generated SSInterne samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-ssinterne-samenvattingen.mjs --module coma
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
import SectComaWatIsHetEnWaaromIsHetBelangrijk from './sections/SectComaWatIsHetEnWaaromIsHetBelangrijk'
import SectOorzakenVanComa from './sections/SectOorzakenVanComa'
import SectTabel1HoofdgroepenVanOorzakenVanComa from './sections/SectTabel1HoofdgroepenVanOorzakenVanComa'
import SectMetaboleOorzaken from './sections/SectMetaboleOorzaken'
import SectStoornissenInHetGlucosemetabolisme from './sections/SectStoornissenInHetGlucosemetabolisme'
import SectTabel2KenmerkenVanHypoEnHyperglycemi from './sections/SectTabel2KenmerkenVanHypoEnHyperglycemi'
import SectLeverEnNierfalen from './sections/SectLeverEnNierfalen'
import SectHypothyreoDie from './sections/SectHypothyreoDie'
import SectToxischMedicamenteuzeOorzaken from './sections/SectToxischMedicamenteuzeOorzaken'
import SectTabel3BelangrijkeToxidromen from './sections/SectTabel3BelangrijkeToxidromen'
import SectInfectieuzeOorzaken from './sections/SectInfectieuzeOorzaken'
import SectNeurologischeOorzaken from './sections/SectNeurologischeOorzaken'
import SectAbcdeMethodiekBijComa from './sections/SectAbcdeMethodiekBijComa'
import SectAAirway from './sections/SectAAirway'
import SectBBreathing from './sections/SectBBreathing'
import SectCCirculation from './sections/SectCCirculation'
import SectDDisability from './sections/SectDDisability'
import SectEEnvironment from './sections/SectEEnvironment'
import SectTabel4AbcdeBijComa from './sections/SectTabel4AbcdeBijComa'
import SectAdemhalingspatronenEnFlappingTremor from './sections/SectAdemhalingspatronenEnFlappingTremor'
import SectHeteroAnamnese from './sections/SectHeteroAnamnese'
import SectOriNterendNeurologischOnderzoek from './sections/SectOriNterendNeurologischOnderzoek'
import SectGlasgowComaScaleEmvScore from './sections/SectGlasgowComaScaleEmvScore'
import SectTabel5GlasgowComaScale from './sections/SectTabel5GlasgowComaScale'
import SectSecondaryAssessmentEnAanvullendOnder from './sections/SectSecondaryAssessmentEnAanvullendOnder'
import SectCasuStiekDenkstappenBijEenComateuzeP from './sections/SectCasuStiekDenkstappenBijEenComateuzeP'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "Coma: wat is het en waarom is het belangrijk?", icon: FileText },
    { id: 'sect-03', title: "Oorzaken van coma", icon: FileText },
    { id: 'sect-04', title: "Tabel 1. Hoofdgroepen van oorzaken van coma", icon: Table2 },
    { id: 'sect-05', title: "Metabole oorzaken", icon: FileText },
    { id: 'sect-06', title: "Stoornissen in het glucosemetabolisme", icon: FileText },
    { id: 'sect-07', title: "Tabel 2. Kenmerken van hypo- en hyperglycemie", icon: Table2 },
    { id: 'sect-08', title: "Lever- en nierfalen", icon: FileText },
    { id: 'sect-09', title: "Hypothyreoïdie", icon: FileText },
    { id: 'sect-10', title: "Toxisch-medicamenteuze oorzaken", icon: FileText },
    { id: 'sect-11', title: "Tabel 3. Belangrijke toxidromen", icon: Table2 },
    { id: 'sect-12', title: "Infectieuze oorzaken", icon: FileText },
    { id: 'sect-13', title: "Neurologische oorzaken", icon: FileText },
    { id: 'sect-14', title: "ABCDE-methodiek bij coma", icon: FileText },
    { id: 'sect-15', title: "A – Airway", icon: FileText },
    { id: 'sect-16', title: "B – Breathing", icon: FileText },
    { id: 'sect-17', title: "C – Circulation", icon: FileText },
    { id: 'sect-18', title: "D – Disability", icon: FileText },
    { id: 'sect-19', title: "E – Environment", icon: FileText },
    { id: 'sect-20', title: "Tabel 4. ABCDE bij coma", icon: Table2 },
    { id: 'sect-21', title: "Ademhalingspatronen en flapping tremor", icon: FileText },
    { id: 'sect-22', title: "Hetero-anamnese", icon: FileText },
    { id: 'sect-23', title: "Oriënterend neurologisch onderzoek", icon: Microscope },
    { id: 'sect-24', title: "Glasgow Coma Scale / EMV-score", icon: FileText },
    { id: 'sect-25', title: "Tabel 5. Glasgow Coma Scale", icon: Table2 },
    { id: 'sect-26', title: "Secondary assessment en aanvullend onderzoek", icon: Microscope },
    { id: 'sect-27', title: "Casuïstiek: denkstappen bij een comateuze patiënt", icon: FileText },
    { id: 'sect-28', title: "Samenvatting", icon: CircleCheck },
]

const SsinterneWeek7ComaSummary = () => (
  <SummaryLayout
    title="COMA"
    description="Coma: wat is het en waarom is het belangrijk?"
    caseLabel="Week 7 · COMA"
    blokLabel="Interne Geneeskunde"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectComaWatIsHetEnWaaromIsHetBelangrijk />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectOorzakenVanComa />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectTabel1HoofdgroepenVanOorzakenVanComa />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectMetaboleOorzaken />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectStoornissenInHetGlucosemetabolisme />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectTabel2KenmerkenVanHypoEnHyperglycemi />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SectLeverEnNierfalen />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SectHypothyreoDie />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <SectToxischMedicamenteuzeOorzaken />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <SectTabel3BelangrijkeToxidromen />
    </section>
    <section id="sect-12" className="scroll-mt-24 mb-12">
      <SectInfectieuzeOorzaken />
    </section>
    <section id="sect-13" className="scroll-mt-24 mb-12">
      <SectNeurologischeOorzaken />
    </section>
    <section id="sect-14" className="scroll-mt-24 mb-12">
      <SectAbcdeMethodiekBijComa />
    </section>
    <section id="sect-15" className="scroll-mt-24 mb-12">
      <SectAAirway />
    </section>
    <section id="sect-16" className="scroll-mt-24 mb-12">
      <SectBBreathing />
    </section>
    <section id="sect-17" className="scroll-mt-24 mb-12">
      <SectCCirculation />
    </section>
    <section id="sect-18" className="scroll-mt-24 mb-12">
      <SectDDisability />
    </section>
    <section id="sect-19" className="scroll-mt-24 mb-12">
      <SectEEnvironment />
    </section>
    <section id="sect-20" className="scroll-mt-24 mb-12">
      <SectTabel4AbcdeBijComa />
    </section>
    <section id="sect-21" className="scroll-mt-24 mb-12">
      <SectAdemhalingspatronenEnFlappingTremor />
    </section>
    <section id="sect-22" className="scroll-mt-24 mb-12">
      <SectHeteroAnamnese />
    </section>
    <section id="sect-23" className="scroll-mt-24 mb-12">
      <SectOriNterendNeurologischOnderzoek />
    </section>
    <section id="sect-24" className="scroll-mt-24 mb-12">
      <SectGlasgowComaScaleEmvScore />
    </section>
    <section id="sect-25" className="scroll-mt-24 mb-12">
      <SectTabel5GlasgowComaScale />
    </section>
    <section id="sect-26" className="scroll-mt-24 mb-12">
      <SectSecondaryAssessmentEnAanvullendOnder />
    </section>
    <section id="sect-27" className="scroll-mt-24 mb-12">
      <SectCasuStiekDenkstappenBijEenComateuzeP />
    </section>
    <section id="sect-28" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default SsinterneWeek7ComaSummary
