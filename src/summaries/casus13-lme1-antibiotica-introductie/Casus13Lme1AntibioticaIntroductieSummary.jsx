import {
  BookOpen, LayoutList, History, FlaskConical, AlertTriangle, Layers, BookMarked,
  Pill, Shield, List, GitCompare, Dna, Beaker, AlertCircle, Microscope, ClipboardList, Target
} from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'
import Image01IntroductieSummary from './Image01IntroductieSummary'
import Image02MenuSummary from './Image02MenuSummary'
import Image03AchtergrondIntroSummary from './Image03AchtergrondIntroSummary'
import Image04GeschiedenisFlemingSummary from './Image04GeschiedenisFlemingSummary'
import Image05DiscoveryVoidSummary from './Image05DiscoveryVoidSummary'
import Image06CategorieenAntibioticaSummary from './Image06CategorieenAntibioticaSummary'
import Image07BasiskennisIntroSummary from './Image07BasiskennisIntroSummary'
import Image08NaslagwerkSummary from './Image08NaslagwerkSummary'
import Image09CelwandsyntheseremmersIntroSummary from './Image09CelwandsyntheseremmersIntroSummary'
import Image10BetalactamantibioticaSummary from './Image10BetalactamantibioticaSummary'
import Image11PenicillinesOnderverdelingSummary from './Image11PenicillinesOnderverdelingSummary'
import Image12PenicillineVsAmoxicillineSummary from './Image12PenicillineVsAmoxicillineSummary'
import Image13AmoxicillineVsAugmentinSummary from './Image13AmoxicillineVsAugmentinSummary'
import Image14CeftriaxonMeropenemSummary from './Image14CeftriaxonMeropenemSummary'
import Image15NucleinezursyntheseremmersSummary from './Image15NucleinezursyntheseremmersSummary'
import Image16BijwerkingenNucleinezurSummary from './Image16BijwerkingenNucleinezurSummary'
import Image17FoliumzuurmetabolismeSummary from './Image17FoliumzuurmetabolismeSummary'
import Image18UWINitrofurantoineSummary from './Image18UWINitrofurantoineSummary'
import Image19UWINierinsufficientieSummary from './Image19UWINierinsufficientieSummary'
import Image20EiwitsyntheseremmersSummary from './Image20EiwitsyntheseremmersSummary'
import Image21SpectrumEiwitsyntheseremmersSummary from './Image21SpectrumEiwitsyntheseremmersSummary'
import Image22IndicatieEiwitsyntheseremmersSummary from './Image22IndicatieEiwitsyntheseremmersSummary'
import Image23DoxycyclineSummary from './Image23DoxycyclineSummary'
import Image24TestJeKennisSpectrumSummary from './Image24TestJeKennisSpectrumSummary'

const Casus13Lme1AntibioticaIntroductieSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Introductie en leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Menu', icon: LayoutList },
    { id: 'sect-03', title: 'Achtergrond', icon: History },
    { id: 'sect-04', title: 'Geschiedenis penicilline', icon: FlaskConical },
    { id: 'sect-05', title: 'Discovery void', icon: AlertTriangle },
    { id: 'sect-06', title: 'Categorieën antibiotica', icon: Layers },
    { id: 'sect-07', title: 'Basiskennis antibiotica', icon: BookMarked },
    { id: 'sect-08', title: 'Naslagwerk', icon: BookOpen },
    { id: 'sect-09', title: 'Celwandsyntheseremmers', icon: Shield },
    { id: 'sect-10', title: 'Bètalactamantibiotica', icon: Pill },
    { id: 'sect-11', title: 'Penicillines onderverdeling', icon: List },
    { id: 'sect-12', title: 'Penicilline vs amoxicilline', icon: GitCompare },
    { id: 'sect-13', title: 'Amoxicilline vs Augmentin', icon: GitCompare },
    { id: 'sect-14', title: 'Ceftriaxon en meropenem', icon: Pill },
    { id: 'sect-15', title: 'Nucleïnezuursyntheseremmers', icon: Dna },
    { id: 'sect-16', title: 'Bijwerkingen nucleïnezuursyntheseremmers', icon: AlertTriangle },
    { id: 'sect-17', title: 'Remmers van foliumzuurmetabolisme', icon: Beaker },
    { id: 'sect-18', title: 'Eerste keus UWI', icon: Pill },
    { id: 'sect-19', title: 'UWI bij nierinsufficiëntie', icon: AlertCircle },
    { id: 'sect-20', title: 'Eiwitsyntheseremmers (50S)', icon: Layers },
    { id: 'sect-21', title: 'Spectrum eiwitsyntheseremmers', icon: Microscope },
    { id: 'sect-22', title: 'Indicatie en bijzonderheden', icon: ClipboardList },
    { id: 'sect-23', title: 'Doxycycline (30S)', icon: Pill },
    { id: 'sect-24', title: 'Test je kennis – spectrum', icon: Target },
  ]

  return (
    <SummaryLayout
      title="Antibiotica Introductie"
      description="Complete samenvatting van de module over antibiotica: geschiedenis, categorieën, werkingsmechanismen en basiskennis."
      caseLabel="Week 7 Casus 13 Een piloot met koorts LME 1"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=casus13-lme1-antibiotica-introductie"
    >
      <section id="sect-01" className="scroll-mt-24 mb-12"><Image01IntroductieSummary standalone={false} /></section>
      <section id="sect-02" className="scroll-mt-24 mb-12"><Image02MenuSummary standalone={false} /></section>
      <section id="sect-03" className="scroll-mt-24 mb-12"><Image03AchtergrondIntroSummary standalone={false} /></section>
      <section id="sect-04" className="scroll-mt-24 mb-12"><Image04GeschiedenisFlemingSummary standalone={false} /></section>
      <section id="sect-05" className="scroll-mt-24 mb-12"><Image05DiscoveryVoidSummary standalone={false} /></section>
      <section id="sect-06" className="scroll-mt-24 mb-12"><Image06CategorieenAntibioticaSummary standalone={false} /></section>
      <section id="sect-07" className="scroll-mt-24 mb-12"><Image07BasiskennisIntroSummary standalone={false} /></section>
      <section id="sect-08" className="scroll-mt-24 mb-12"><Image08NaslagwerkSummary standalone={false} /></section>
      <section id="sect-09" className="scroll-mt-24 mb-12"><Image09CelwandsyntheseremmersIntroSummary standalone={false} /></section>
      <section id="sect-10" className="scroll-mt-24 mb-12"><Image10BetalactamantibioticaSummary standalone={false} /></section>
      <section id="sect-11" className="scroll-mt-24 mb-12"><Image11PenicillinesOnderverdelingSummary standalone={false} /></section>
      <section id="sect-12" className="scroll-mt-24 mb-12"><Image12PenicillineVsAmoxicillineSummary standalone={false} /></section>
      <section id="sect-13" className="scroll-mt-24 mb-12"><Image13AmoxicillineVsAugmentinSummary standalone={false} /></section>
      <section id="sect-14" className="scroll-mt-24 mb-12"><Image14CeftriaxonMeropenemSummary standalone={false} /></section>
      <section id="sect-15" className="scroll-mt-24 mb-12"><Image15NucleinezursyntheseremmersSummary standalone={false} /></section>
      <section id="sect-16" className="scroll-mt-24 mb-12"><Image16BijwerkingenNucleinezurSummary standalone={false} /></section>
      <section id="sect-17" className="scroll-mt-24 mb-12"><Image17FoliumzuurmetabolismeSummary standalone={false} /></section>
      <section id="sect-18" className="scroll-mt-24 mb-12"><Image18UWINitrofurantoineSummary standalone={false} /></section>
      <section id="sect-19" className="scroll-mt-24 mb-12"><Image19UWINierinsufficientieSummary standalone={false} /></section>
      <section id="sect-20" className="scroll-mt-24 mb-12"><Image20EiwitsyntheseremmersSummary standalone={false} /></section>
      <section id="sect-21" className="scroll-mt-24 mb-12"><Image21SpectrumEiwitsyntheseremmersSummary standalone={false} /></section>
      <section id="sect-22" className="scroll-mt-24 mb-12"><Image22IndicatieEiwitsyntheseremmersSummary standalone={false} /></section>
      <section id="sect-23" className="scroll-mt-24 mb-12"><Image23DoxycyclineSummary standalone={false} /></section>
      <section id="sect-24" className="scroll-mt-24 mb-12"><Image24TestJeKennisSpectrumSummary standalone={false} /></section>
    </SummaryLayout>
  )
}

export default Casus13Lme1AntibioticaIntroductieSummary
