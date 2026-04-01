import {
  Activity,
  BarChart3,
  BookOpen,
  Building2,
  CircleCheck,
  GitBranch,
  Layers,
  Lightbulb,
  Microscope,
  PieChart,
  Stethoscope,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02KinderoncologieInGroteLijnen from './Sect02KinderoncologieInGroteLijnen'
import Sect03HoeVaakKomtKinderkankerVoor from './Sect03HoeVaakKomtKinderkankerVoor'
import Sect04GlobaleIndeling from './Sect04GlobaleIndeling'
import Sect05WatKomtHetVaakstVoor from './Sect05WatKomtHetVaakstVoor'
import Sect06KinderkankerNietHetzelfde from './Sect06KinderkankerNietHetzelfde'
import Sect07WelkeTumoren from './Sect07WelkeTumoren'
import Sect08OntstaanKindertumoren from './Sect08OntstaanKindertumoren'
import Sect09GroeiVanTumoren from './Sect09GroeiVanTumoren'
import Sect10Overleving from './Sect10Overleving'
import Sect11ZorgGeorganiseerd from './Sect11ZorgGeorganiseerd'
import Sect12WatMoetJeVooralOnthouden from './Sect12WatMoetJeVooralOnthouden'
import Sect13Samenvatting from './Sect13Samenvatting'

const Blok5Week5Casus11IntroductieKinderoncologieSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Kinderoncologie in grote lijnen', icon: Layers },
    { id: 'sect-03', title: 'Hoe vaak komt kinderkanker voor?', icon: PieChart },
    { id: 'sect-04', title: 'Globale indeling van kinderkanker', icon: GitBranch },
    { id: 'sect-05', title: 'Wat komt het vaakst voor?', icon: Stethoscope },
    { id: 'sect-06', title: 'Kinderkanker is niet hetzelfde als volwassen kanker', icon: Microscope },
    { id: 'sect-07', title: 'Welke tumoren zie je bij kinderen en volwassenen?', icon: Activity },
    { id: 'sect-08', title: 'Ontstaan van kindertumoren', icon: Table2 },
    { id: 'sect-09', title: 'Groei van tumoren: waarom is dat belangrijk?', icon: BarChart3 },
    { id: 'sect-10', title: 'Overleving bij kinderen en volwassenen', icon: Stethoscope },
    { id: 'sect-11', title: 'Hoe is de zorg georganiseerd?', icon: Building2 },
    { id: 'sect-12', title: 'Wat moet je vooral onthouden?', icon: Lightbulb },
    { id: 'sect-13', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Introductie kinderoncologie"
      description="Kinderoncologie gaat over kanker bij kinderen. Daarbij worden alle kinderen met kwaadaardige aandoeningen behandeld binnen de kinderoncologie. Het is belangrijk om meteen te onthouden dat kinderkanker niet hetzelfde is als volwassen kanker."
      caseLabel="Week 5 · Casus 11: Kind met algehele malaise, koorts en zwelling in de buik"
      blokLabel="Blok 5"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02KinderoncologieInGroteLijnen />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03HoeVaakKomtKinderkankerVoor />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04GlobaleIndeling />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05WatKomtHetVaakstVoor />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06KinderkankerNietHetzelfde />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07WelkeTumoren />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08OntstaanKindertumoren />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09GroeiVanTumoren />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10Overleving />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11ZorgGeorganiseerd />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12WatMoetJeVooralOnthouden />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week5Casus11IntroductieKinderoncologieSummary
