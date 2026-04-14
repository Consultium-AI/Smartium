import {
  BookOpen,
  CircleCheck,
  Droplets,
  FlaskConical,
  Layers,
  ListChecks,
  Microscope,
  Pill,
  Shield,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02HuidAlsBarriereEnImmuunorgaan from './Sect02HuidAlsBarriereEnImmuunorgaan'
import Sect03OpbouwVanDeHuid from './Sect03OpbouwVanDeHuid'
import Sect04ImmuuncomponentenVanDeHuid from './Sect04ImmuuncomponentenVanDeHuid'
import Sect05Langerhanscellen from './Sect05Langerhanscellen'
import Sect06Cd8PlusTCellenInDeHuid from './Sect06Cd8PlusTCellenInDeHuid'
import Sect07HetHuidmicrobioom from './Sect07HetHuidmicrobioom'
import Sect08WaarZittenWelkeMicroOrganismen from './Sect08WaarZittenWelkeMicroOrganismen'
import Sect09FunctiesVanHetHuidmicrobioom from './Sect09FunctiesVanHetHuidmicrobioom'
import Sect10WaaromZijnLipidenBelangrijk from './Sect10WaaromZijnLipidenBelangrijk'
import Sect11InteractieMicrobioomEnImmunsysteem from './Sect11InteractieMicrobioomEnImmunsysteem'
import Sect12HuidDarmAsEnKorteKetenVetzuren from './Sect12HuidDarmAsEnKorteKetenVetzuren'
import Sect13DysbioseAcneEnAndereInflammatoireHuidziekten from './Sect13DysbioseAcneEnAndereInflammatoireHuidziekten'
import Sect14FactorenDieHetHuidmicrobioomBeinvloeden from './Sect14FactorenDieHetHuidmicrobioomBeinvloeden'
import Sect15ProbioticaSynbioticaEnHuidtherapie from './Sect15ProbioticaSynbioticaEnHuidtherapie'
import Sect16Samenvatting from './Sect16Samenvatting'

const Blok5Week1Casus1MicrobioomEnImmunologieVanDeHuidSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'De huid als barrière én immuunorgaan', icon: Shield },
    { id: 'sect-03', title: 'De opbouw van de huid', icon: Layers },
    { id: 'sect-04', title: 'Immuuncomponenten van de huid', icon: Microscope },
    { id: 'sect-05', title: 'Langerhanscellen: de poortwachters', icon: ListChecks },
    { id: 'sect-06', title: 'CD8+ T-cellen in de huid', icon: ListChecks },
    { id: 'sect-07', title: 'Het huidmicrobioom', icon: Table2 },
    { id: 'sect-08', title: 'Waar zitten welke micro-organismen?', icon: Table2 },
    { id: 'sect-09', title: 'Functies van het huidmicrobioom', icon: FlaskConical },
    { id: 'sect-10', title: 'Waarom zijn lipiden belangrijk?', icon: Droplets },
    { id: 'sect-11', title: 'Interactie tussen huidmicrobioom en immuunsysteem', icon: Microscope },
    { id: 'sect-12', title: 'De huid-darm-as en korte-keten-vetzuren', icon: Pill },
    { id: 'sect-13', title: 'Dysbiose, acne en andere inflammatoire huidziekten', icon: ListChecks },
    { id: 'sect-14', title: 'Factoren die het huidmicrobioom beïnvloeden', icon: Layers },
    { id: 'sect-15', title: 'Probiotica, synbiotica en huidtherapie', icon: Pill },
    { id: 'sect-16', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Microbioom en immunologie van de huid"
      description="De huid is niet alleen een fysieke barrière, maar ook een belangrijk immunologisch orgaan. Dat betekent dat de huid actief meedoet aan afweer, herkenning van micro-organismen en het bewaren van een evenwicht met de normale huidflora, oftewel het huidmicrobioom."
      caseLabel="Week 1 · Casus 1: De huid als succesvolle barrière"
      blokLabel="Blok 5"
      practiceLink="/oefenvragen?lme=blok5-week1-casus1-microbioom-en-immunologie-van-de-huid"
      tableOfContents={tableOfContents}
    summaryVariantToggle={{
      activeLmeId: 'blok5-week1-casus1-microbioom-en-immunologie-van-de-huid',
      variants: [
        { id: 'blok5-week1-casus1-microbioom-en-immunologie-van-de-huid', label: 'Uitgebreid' },
        { id: 'blok5-week1-casus1-microbioom-en-immunologie-van-de-huid-mini', label: 'Kort' },
      ],
    }}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02HuidAlsBarriereEnImmuunorgaan />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03OpbouwVanDeHuid />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04ImmuuncomponentenVanDeHuid />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05Langerhanscellen />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06Cd8PlusTCellenInDeHuid />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07HetHuidmicrobioom />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08WaarZittenWelkeMicroOrganismen />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09FunctiesVanHetHuidmicrobioom />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10WaaromZijnLipidenBelangrijk />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11InteractieMicrobioomEnImmunsysteem />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12HuidDarmAsEnKorteKetenVetzuren />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13DysbioseAcneEnAndereInflammatoireHuidziekten />
      </section>
      <section id="sect-14" className="scroll-mt-24 mb-12">
        <Sect14FactorenDieHetHuidmicrobioomBeinvloeden />
      </section>
      <section id="sect-15" className="scroll-mt-24 mb-12">
        <Sect15ProbioticaSynbioticaEnHuidtherapie />
      </section>
      <section id="sect-16" className="scroll-mt-24 mb-12">
        <Sect16Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week1Casus1MicrobioomEnImmunologieVanDeHuidSummary
