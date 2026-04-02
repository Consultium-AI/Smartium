import {
  Activity,
  BookOpen,
  CircleCheck,
  Dna,
  Droplets,
  Flame,
  HeartPulse,
  HelpCircle,
  Layers,
  ListTree,
  Microscope,
  Shield,
  Sparkles,
  Stethoscope,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02WatIsAutoinflammatie from './Sect02WatIsAutoinflammatie'
import Sect03WanneerIsActivatieWelNodig from './Sect03WanneerIsActivatieWelNodig'
import Sect04KlassiekeTekenenVanOntsteking from './Sect04KlassiekeTekenenVanOntsteking'
import Sect05Cytokinen from './Sect05Cytokinen'
import Sect06KoortsEnAcuteFaseEiwitten from './Sect06KoortsEnAcuteFaseEiwitten'
import Sect07WeefselschadeDoorLangdurigeOntsteking from './Sect07WeefselschadeDoorLangdurigeOntsteking'
import Sect08HuidafwijkingenBijAutoinflammatie from './Sect08HuidafwijkingenBijAutoinflammatie'
import Sect09AmyloidEnDeNier from './Sect09AmyloidEnDeNier'
import Sect10BelangrijkeZiektebeeldenTabel from './Sect10BelangrijkeZiektebeeldenTabel'
import Sect11FamiliaireMediterraneKoorts from './Sect11FamiliaireMediterraneKoorts'
import Sect12ZiekteVanSchnitzler from './Sect12ZiekteVanSchnitzler'
import Sect13VexasSyndroom from './Sect13VexasSyndroom'
import Sect14WaaromIsKennisVanHetMechanismeBelangrijk from './Sect14WaaromIsKennisVanHetMechanismeBelangrijk'
import Sect15SamenvattendBeeld from './Sect15SamenvattendBeeld'
import Sect16Samenvatting from './Sect16Samenvatting'

const Blok5Week5Casus10PrincipesEnKlinischeAspectenVanAutoInflammatieSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Wat is autoinflammatie?', icon: Sparkles },
    { id: 'sect-03', title: 'Wanneer is activatie van het immuunsysteem wél nodig?', icon: Shield },
    { id: 'sect-04', title: 'De klassieke tekenen van ontsteking', icon: Flame },
    { id: 'sect-05', title: 'Cytokinen: pro-inflammatoir en anti-inflammatoir', icon: Activity },
    { id: 'sect-06', title: 'Koorts en acute-fase-eiwitten', icon: Droplets },
    { id: 'sect-07', title: 'Weefselschade door langdurige ontsteking', icon: HeartPulse },
    { id: 'sect-08', title: 'Huidafwijkingen bij autoinflammatie', icon: Layers },
    { id: 'sect-09', title: 'Amyloïd en de nier', icon: Microscope },
    { id: 'sect-10', title: 'Belangrijke ziektebeelden', icon: Table2 },
    { id: 'sect-11', title: 'Familiaire mediterrane koorts (FMF)', icon: Dna },
    { id: 'sect-12', title: 'Ziekte van Schnitzler', icon: Stethoscope },
    { id: 'sect-13', title: 'VEXAS-syndroom', icon: ListTree },
    { id: 'sect-14', title: 'Waarom is kennis van het mechanisme belangrijk?', icon: HelpCircle },
    { id: 'sect-15', title: 'Samenvattend beeld van de verschillende aandoeningen', icon: Layers },
    { id: 'sect-16', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Principes en klinische aspecten van auto-inflammatie"
      description="Autoinflammatie betekent dat er een defect is in antigeen-onafhankelijke immunologische mechanismen. Daardoor worden pro-inflammatoire effectormoleculen geactiveerd of worden anti-inflammatoire effectormoleculen juist geremd. Het gevolg is dat het immuunsysteem aan blijft staan."
      caseLabel="Week 5 · Casus 10: Patiënt met auto-inflammatoire ziekte"
      blokLabel="Blok 5"
      practiceLink="/oefenvragen?lme=blok5-week5-casus10-principes-en-klinische-aspecten-van-auto-inflammatie"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02WatIsAutoinflammatie />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03WanneerIsActivatieWelNodig />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04KlassiekeTekenenVanOntsteking />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05Cytokinen />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06KoortsEnAcuteFaseEiwitten />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07WeefselschadeDoorLangdurigeOntsteking />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08HuidafwijkingenBijAutoinflammatie />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09AmyloidEnDeNier />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10BelangrijkeZiektebeeldenTabel />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11FamiliaireMediterraneKoorts />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12ZiekteVanSchnitzler />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13VexasSyndroom />
      </section>
      <section id="sect-14" className="scroll-mt-24 mb-12">
        <Sect14WaaromIsKennisVanHetMechanismeBelangrijk />
      </section>
      <section id="sect-15" className="scroll-mt-24 mb-12">
        <Sect15SamenvattendBeeld />
      </section>
      <section id="sect-16" className="scroll-mt-24 mb-12">
        <Sect16Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week5Casus10PrincipesEnKlinischeAspectenVanAutoInflammatieSummary
