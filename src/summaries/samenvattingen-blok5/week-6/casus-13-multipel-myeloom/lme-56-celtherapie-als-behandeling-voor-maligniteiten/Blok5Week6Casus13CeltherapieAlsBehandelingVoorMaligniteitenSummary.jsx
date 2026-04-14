import {
  Activity,
  AlertTriangle,
  BookOpen,
  CircleCheck,
  Dna,
  HelpCircle,
  Syringe,
  UserRound,
  Users,
  Zap,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Blok5Week6Casus13CeltherapieOefenvragenCallout from './Blok5Week6Casus13CeltherapieOefenvragenCallout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02HematopoietischeStamceltransplantatieInHetKort from './Sect02HematopoietischeStamceltransplantatieInHetKort'
import Sect03AutologeStamceltransplantatie from './Sect03AutologeStamceltransplantatie'
import Sect04AllogeneStamceltransplantatie from './Sect04AllogeneStamceltransplantatie'
import Sect05HetHLASysteem from './Sect05HetHLASysteem'
import Sect06ConditioneringEnInfusie from './Sect06ConditioneringEnInfusie'
import Sect07ComplicatiesVanAllogeneHSCT from './Sect07ComplicatiesVanAllogeneHSCT'
import Sect08CARTCeltherapie from './Sect08CARTCeltherapie'
import Sect09UitdagingenVanCARTCeltherapie from './Sect09UitdagingenVanCARTCeltherapie'
import Sect10Samenvatting from './Sect10Samenvatting'

const PRACTICE_LME_PATH = '/oefenvragen?lme=blok5-week6-casus13-celtherapie-als-behandeling-voor-maligniteiten'

const Blok5Week6Casus13CeltherapieAlsBehandelingVoorMaligniteitenSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Hematopoëtische stamceltransplantatie in het kort', icon: Activity },
    { id: 'sect-03', title: 'Autologe stamceltransplantatie', icon: UserRound },
    { id: 'sect-04', title: 'Allogene stamceltransplantatie', icon: Users },
    { id: 'sect-05', title: 'Het HLA-systeem', icon: Dna },
    { id: 'sect-06', title: 'Conditionering en infusie', icon: Syringe },
    { id: 'sect-07', title: 'Complicaties van allogene HSCT', icon: AlertTriangle },
    { id: 'sect-08', title: 'CAR T-celtherapie', icon: Zap },
    { id: 'sect-09', title: 'Uitdagingen van CAR T-celtherapie', icon: HelpCircle },
    { id: 'sect-10', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Celtherapie als behandeling voor maligniteiten"
      description="Hematopoëtische stamceltransplantatie (HSCT) betekent dat bloedvormende stamcellen via een infuus worden toegediend aan een patiënt die vooraf radio- en/of chemotherapie heeft gekregen."
      caseLabel="Week 6 · Casus 13: Multipel myeloom"
      blokLabel="Blok 5"
      tableOfContents={tableOfContents}
      practiceLink={PRACTICE_LME_PATH}
      practiceFooter={<Blok5Week6Casus13CeltherapieOefenvragenCallout to={PRACTICE_LME_PATH} />}
      summaryVariantToggle={{
        activeLmeId: 'blok5-week6-casus13-celtherapie-als-behandeling-voor-maligniteiten',
        variants: [
          { id: 'blok5-week6-casus13-celtherapie-als-behandeling-voor-maligniteiten', label: 'Uitgebreid' },
          { id: 'blok5-week6-casus13-celtherapie-als-behandeling-voor-maligniteiten-mini', label: 'Kort' },
        ],
      }}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02HematopoietischeStamceltransplantatieInHetKort />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03AutologeStamceltransplantatie />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04AllogeneStamceltransplantatie />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05HetHLASysteem />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06ConditioneringEnInfusie />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07ComplicatiesVanAllogeneHSCT />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08CARTCeltherapie />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09UitdagingenVanCARTCeltherapie />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week6Casus13CeltherapieAlsBehandelingVoorMaligniteitenSummary
