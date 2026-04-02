import {
  Activity,
  Baby,
  BarChart3,
  BookOpen,
  CircleCheck,
  Droplets,
  FlaskConical,
  HeartPulse,
  Layers,
  ListChecks,
  Microscope,
  Shield,
  Sparkles,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02DeHuidMeerDanAlleen from './Sect02DeHuidMeerDanAlleen'
import Sect03OpbouwVanDeHuidbarriere from './Sect03OpbouwVanDeHuidbarriere'
import Sect04WaaruitBestaatEnEpidermaleBarriere from './Sect04WaaruitBestaatEnEpidermaleBarriere'
import Sect05HuidAlsMicrobieleOmgeving from './Sect05HuidAlsMicrobieleOmgeving'
import Sect06PhVanDeHuid from './Sect06PhVanDeHuid'
import Sect07VernixCaseosa from './Sect07VernixCaseosa'
import Sect08WelkeFactorenBeinvloeden from './Sect08WelkeFactorenBeinvloeden'
import Sect09AtopischEczeem from './Sect09AtopischEczeem'
import Sect10PrematurenEnNeonaten from './Sect10PrematurenEnNeonaten'
import Sect11TransepidermaalWaterverlies from './Sect11TransepidermaalWaterverlies'
import Sect12ThermoregulatieBijPrematuren from './Sect12ThermoregulatieBijPrematuren'
import Sect13AbsorptieEnToxiciteit from './Sect13AbsorptieEnToxiciteit'
import Sect14HuidbarriereKinderenVsVolwassenen from './Sect14HuidbarriereKinderenVsVolwassenen'
import Sect15VerouderingHuidbarriere from './Sect15VerouderingHuidbarriere'
import Sect16SamenvattendeVergelijking from './Sect16SamenvattendeVergelijking'
import Sect17Samenvatting from './Sect17Samenvatting'

const Blok5Week1Casus1DeHuidbarriereVanJongTotOudSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'De huid: meer dan alleen een omhulling', icon: HeartPulse },
    { id: 'sect-03', title: 'Opbouw van de huidbarrière', icon: Layers },
    { id: 'sect-04', title: 'Waaruit bestaat de huidbarrière?', icon: ListChecks },
    { id: 'sect-05', title: 'De huid als microbiële omgeving', icon: Microscope },
    { id: 'sect-06', title: 'De pH van de huid', icon: FlaskConical },
    { id: 'sect-07', title: 'Wat is vernix caseosa?', icon: Sparkles },
    { id: 'sect-08', title: 'Welke factoren beïnvloeden de huidbarrière?', icon: Shield },
    {
      id: 'sect-09',
      title: 'Een voorbeeld van een verstoorde huidbarrière: atopisch eczeem',
      icon: Activity,
    },
    { id: 'sect-10', title: 'Prematuren en neonaten', icon: Baby },
    { id: 'sect-11', title: 'Transepidermaal waterverlies', icon: Droplets },
    { id: 'sect-12', title: 'Thermoregulatie bij prematuren', icon: Activity },
    { id: 'sect-13', title: 'Absorptie en toxiciteit', icon: FlaskConical },
    { id: 'sect-14', title: 'Huidbarrière bij kinderen versus volwassenen', icon: Table2 },
    { id: 'sect-15', title: 'Veroudering van de huidbarrière', icon: Layers },
    { id: 'sect-16', title: 'Samenvattende vergelijking in één overzicht', icon: BarChart3 },
    { id: 'sect-17', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="De huidbarrière van jong tot oud"
      description="De huid is niet alleen een buitenlaag, maar heeft meerdere belangrijke functies. De huid beschermt het lichaam, regelt de temperatuur, helpt bij het waarnemen van prikkels, draagt bij aan de vorming van vitamine D3 en heeft ook een sociale functie."
      caseLabel="Week 1 · Casus 1: De huid als succesvolle barrière"
      blokLabel="Blok 5"
      practiceLink="/oefenvragen?lme=blok5-week1-casus1-de-huidbarriere-van-jong-tot-oud"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02DeHuidMeerDanAlleen />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03OpbouwVanDeHuidbarriere />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04WaaruitBestaatEnEpidermaleBarriere />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05HuidAlsMicrobieleOmgeving />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06PhVanDeHuid />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07VernixCaseosa />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08WelkeFactorenBeinvloeden />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09AtopischEczeem />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10PrematurenEnNeonaten />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11TransepidermaalWaterverlies />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12ThermoregulatieBijPrematuren />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13AbsorptieEnToxiciteit />
      </section>
      <section id="sect-14" className="scroll-mt-24 mb-12">
        <Sect14HuidbarriereKinderenVsVolwassenen />
      </section>
      <section id="sect-15" className="scroll-mt-24 mb-12">
        <Sect15VerouderingHuidbarriere />
      </section>
      <section id="sect-16" className="scroll-mt-24 mb-12">
        <Sect16SamenvattendeVergelijking />
      </section>
      <section id="sect-17" className="scroll-mt-24 mb-12">
        <Sect17Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week1Casus1DeHuidbarriereVanJongTotOudSummary
