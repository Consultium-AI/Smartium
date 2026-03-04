import {
  LayoutList, BookOpen, FileText, AlertTriangle, BarChart3, Dna, Video, GitCompare,
  Zap, ArrowDownToLine, Microscope, ArrowUpFromLine, Target, ArrowRight, ClipboardCheck, AlertCircle
} from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'
import Image01MenuSummary from './Image01MenuSummary'
import Image02IntroductieSummary from './Image02IntroductieSummary'
import Image03NaslagwerkSummary from './Image03NaslagwerkSummary'
import Image04OntstaanResistentieSummary from './Image04OntstaanResistentieSummary'
import Image05DierhouderijSummary from './Image05DierhouderijSummary'
import Image06ResistentePopulatieSummary from './Image06ResistentePopulatieSummary'
import Image07ResistentiemechanismenIntroSummary from './Image07ResistentiemechanismenIntroSummary'
import Image08NatuurlijkVsVerkregenSummary from './Image08NatuurlijkVsVerkregenSummary'
import Image09InactivatieSummary from './Image09InactivatieSummary'
import Image10AmpCCarbapenemaseSummary from './Image10AmpCCarbapenemaseSummary'
import Image11InfluxVerminderenSummary from './Image11InfluxVerminderenSummary'
import Image12VancomycineSaureusSummary from './Image12VancomycineSaureusSummary'
import Image13EffluxSummary from './Image13EffluxSummary'
import Image14AangrijpingspuntSummary from './Image14AangrijpingspuntSummary'
import Image15BetalactamaseOrdeningSummary from './Image15BetalactamaseOrdeningSummary'
import Image16TestEcoliSummary from './Image16TestEcoliSummary'
import Image17TestProteusSummary from './Image17TestProteusSummary'
import Image18ConclusieSummary from './Image18ConclusieSummary'

const Casus13Lme2AntibioticaResistentieSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Menu Antibioticaresistentie', icon: LayoutList },
    { id: 'sect-02', title: 'Introductie en leerdoelen', icon: BookOpen },
    { id: 'sect-03', title: 'Naslagwerk antibiotica', icon: FileText },
    { id: 'sect-04', title: 'Het ontstaan van antimicrobiële resistentie', icon: AlertTriangle },
    { id: 'sect-05', title: 'Antibioticagebruik in de dierhouderij', icon: BarChart3 },
    { id: 'sect-06', title: 'Ontstaan van een resistente populatie', icon: Dna },
    { id: 'sect-07', title: 'Resistentiemechanismen', icon: Video },
    { id: 'sect-08', title: 'Natuurlijke vs verkregen resistentie', icon: GitCompare },
    { id: 'sect-09', title: 'Inactivatie', icon: Zap },
    { id: 'sect-10', title: 'AMP-C en Carbapenemase', icon: Zap },
    { id: 'sect-11', title: 'Influx verminderen', icon: ArrowDownToLine },
    { id: 'sect-12', title: 'Vancomycine-resistentie S. aureus', icon: Microscope },
    { id: 'sect-13', title: 'Efflux van antibiotica', icon: ArrowUpFromLine },
    { id: 'sect-14', title: 'Aangrijpingspunt aanpassen', icon: Target },
    { id: 'sect-15', title: 'Bètalactamase – volgorde resistentie', icon: ArrowRight },
    { id: 'sect-16', title: 'Test je kennis – E. coli', icon: ClipboardCheck },
    { id: 'sect-17', title: 'Test je kennis – Proteus vulgaris', icon: ClipboardCheck },
    { id: 'sect-18', title: 'Conclusie', icon: AlertCircle },
  ]

  return (
    <SummaryLayout
      title="Antibiotica Resistentie"
      description="Complete samenvatting van de module over antibioticaresistentie: ontstaan, mechanismen en strategieën."
      caseLabel="Week 7 Casus 13 Een piloot met koorts LME 2"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=casus13-lme2-antibiotica-resistentie"
    >
      <section id="sect-01" className="scroll-mt-24 mb-12"><Image01MenuSummary standalone={false} /></section>
      <section id="sect-02" className="scroll-mt-24 mb-12"><Image02IntroductieSummary standalone={false} /></section>
      <section id="sect-03" className="scroll-mt-24 mb-12"><Image03NaslagwerkSummary standalone={false} /></section>
      <section id="sect-04" className="scroll-mt-24 mb-12"><Image04OntstaanResistentieSummary standalone={false} /></section>
      <section id="sect-05" className="scroll-mt-24 mb-12"><Image05DierhouderijSummary standalone={false} /></section>
      <section id="sect-06" className="scroll-mt-24 mb-12"><Image06ResistentePopulatieSummary standalone={false} /></section>
      <section id="sect-07" className="scroll-mt-24 mb-12"><Image07ResistentiemechanismenIntroSummary standalone={false} /></section>
      <section id="sect-08" className="scroll-mt-24 mb-12"><Image08NatuurlijkVsVerkregenSummary standalone={false} /></section>
      <section id="sect-09" className="scroll-mt-24 mb-12"><Image09InactivatieSummary standalone={false} /></section>
      <section id="sect-10" className="scroll-mt-24 mb-12"><Image10AmpCCarbapenemaseSummary standalone={false} /></section>
      <section id="sect-11" className="scroll-mt-24 mb-12"><Image11InfluxVerminderenSummary standalone={false} /></section>
      <section id="sect-12" className="scroll-mt-24 mb-12"><Image12VancomycineSaureusSummary standalone={false} /></section>
      <section id="sect-13" className="scroll-mt-24 mb-12"><Image13EffluxSummary standalone={false} /></section>
      <section id="sect-14" className="scroll-mt-24 mb-12"><Image14AangrijpingspuntSummary standalone={false} /></section>
      <section id="sect-15" className="scroll-mt-24 mb-12"><Image15BetalactamaseOrdeningSummary standalone={false} /></section>
      <section id="sect-16" className="scroll-mt-24 mb-12"><Image16TestEcoliSummary standalone={false} /></section>
      <section id="sect-17" className="scroll-mt-24 mb-12"><Image17TestProteusSummary standalone={false} /></section>
      <section id="sect-18" className="scroll-mt-24 mb-12"><Image18ConclusieSummary standalone={false} /></section>
    </SummaryLayout>
  )
}

export default Casus13Lme2AntibioticaResistentieSummary
