import {
  Activity,
  BookOpen,
  CircleCheck,
  ClipboardList,
  FlaskConical,
  GitBranch,
  HelpCircle,
  Layers,
  Microscope,
  Pill,
  ScrollText,
  Shield,
  Stethoscope,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02PlaatsTypeIVEnTabel1 from './Sect02PlaatsTypeIVEnTabel1'
import Sect03ImmunopathogeneseTypeIV from './Sect03ImmunopathogeneseTypeIV'
import Sect04AandachtVraagjeEerste from './Sect04AandachtVraagjeEerste'
import Sect05TweeHoofdmechanismenEnTabel2 from './Sect05TweeHoofdmechanismenEnTabel2'
import Sect06CD4CytokineEnIFNGamma from './Sect06CD4CytokineEnIFNGamma'
import Sect07WelkeLeukocyten from './Sect07WelkeLeukocyten'
import Sect08KlassiekeDTHReactie from './Sect08KlassiekeDTHReactie'
import Sect09Contactdermatitis from './Sect09Contactdermatitis'
import Sect10AandachtVraagjeTweede from './Sect10AandachtVraagjeTweede'
import Sect11Geneesmiddelenreacties from './Sect11Geneesmiddelenreacties'
import Sect12CD8Cytotoxiciteit from './Sect12CD8Cytotoxiciteit'
import Sect13GranulomateuzeOntsteking from './Sect13GranulomateuzeOntsteking'
import Sect14TypeIVReactiesEnZiektebeelden from './Sect14TypeIVReactiesEnZiektebeelden'
import Sect15BelangrijkeBegrippenEnTabel3 from './Sect15BelangrijkeBegrippenEnTabel3'
import Sect16WatMoetJeEchtOnthouden from './Sect16WatMoetJeEchtOnthouden'
import Sect17AandachtVraagjeDerde from './Sect17AandachtVraagjeDerde'
import Sect18SlotSamenvatting from './Sect18SlotSamenvatting'

const Blok5Week1Casus2StmPathogeneseTypeIVAllergieSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Plaats type IV · Tabel 1', icon: Table2 },
    { id: 'sect-03', title: 'Immunopathogenese type IV', icon: Microscope },
    { id: 'sect-04', title: 'Aandachtsvraag · vertraagde reactie', icon: HelpCircle },
    { id: 'sect-05', title: 'Twee hoofdmechanismen · Tabel 2', icon: Layers },
    { id: 'sect-06', title: 'CD4+, IFN-γ, Th17', icon: Activity },
    { id: 'sect-07', title: 'Welke leukocyten?', icon: GitBranch },
    { id: 'sect-08', title: 'Klassieke DTH-reactie', icon: Stethoscope },
    { id: 'sect-09', title: 'Contactdermatitis', icon: Shield },
    { id: 'sect-10', title: 'Aandachtsvraag · kleine chemische stof', icon: HelpCircle },
    { id: 'sect-11', title: 'Geneesmiddelenreacties', icon: Pill },
    { id: 'sect-12', title: 'CD8+ en cytotoxiciteit', icon: Activity },
    { id: 'sect-13', title: 'Granulomateuze ontsteking', icon: FlaskConical },
    { id: 'sect-14', title: 'Type IV en ziektebeelden', icon: ClipboardList },
    { id: 'sect-15', title: 'Kernbegrippen · Tabel 3', icon: Table2 },
    { id: 'sect-16', title: 'Wat moet je echt onthouden?', icon: CircleCheck },
    { id: 'sect-17', title: 'Aandachtsvraag · IFN-γ', icon: HelpCircle },
    { id: 'sect-18', title: 'Samenvatting', icon: ScrollText },
  ]

  return (
    <SummaryLayout
      title="Pathogenese type IV allergie"
      description="Type IV allergie is een vertraagd, T-cel-gemedieerd type overgevoeligheidsreactie. In tegenstelling tot type I, II en III staan hier niet IgE, andere antistoffen of immuuncomplexen centraal, maar T-lymfocyten."
      caseLabel="Week 1 · Casus 2: De veranderde barrière"
      blokLabel="Blok 5"
      moduleKind="stm"
      tableOfContents={tableOfContents}
      summaryVariantToggle={{
        activeLmeId: 'blok5-week1-casus2-stm-pathogenese-type-iv-allergie',
        variants: [
          { id: 'blok5-week1-casus2-stm-pathogenese-type-iv-allergie', label: 'Uitgebreid' },
          { id: 'blok5-week1-casus2-stm-pathogenese-type-iv-allergie-mini', label: 'Kort' },
        ],
      }}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02PlaatsTypeIVEnTabel1 />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03ImmunopathogeneseTypeIV />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04AandachtVraagjeEerste />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05TweeHoofdmechanismenEnTabel2 />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06CD4CytokineEnIFNGamma />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07WelkeLeukocyten />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08KlassiekeDTHReactie />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09Contactdermatitis />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10AandachtVraagjeTweede />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11Geneesmiddelenreacties />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12CD8Cytotoxiciteit />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13GranulomateuzeOntsteking />
      </section>
      <section id="sect-14" className="scroll-mt-24 mb-12">
        <Sect14TypeIVReactiesEnZiektebeelden />
      </section>
      <section id="sect-15" className="scroll-mt-24 mb-12">
        <Sect15BelangrijkeBegrippenEnTabel3 />
      </section>
      <section id="sect-16" className="scroll-mt-24 mb-12">
        <Sect16WatMoetJeEchtOnthouden />
      </section>
      <section id="sect-17" className="scroll-mt-24 mb-12">
        <Sect17AandachtVraagjeDerde />
      </section>
      <section id="sect-18" className="scroll-mt-24 mb-12">
        <Sect18SlotSamenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week1Casus2StmPathogeneseTypeIVAllergieSummary
