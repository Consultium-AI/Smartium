import {
  BookOpen, LayoutList, Shield, Pill, Activity, FlaskConical, HelpCircle,
  AlertTriangle, BarChart3, Target, Layers, Syringe, Zap, CheckCircle,
  Brain, Microscope
} from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'
import Image01IntroductieSummary from './Image01IntroductieSummary'
import Image02MenuSummary from './Image02MenuSummary'
import Image03PrincipesImmuunsuppressieSummary from './Image03PrincipesImmuunsuppressieSummary'
import Image04ImmunosuppressivaSummary from './Image04ImmunosuppressivaSummary'
import Image05CorticosteroidenSummary from './Image05CorticosteroidenSummary'
import Image06SynthetischeGlucocorticoïdenSummary from './Image06SynthetischeGlucocorticoïdenSummary'
import Image07QuizCorticosteroidenSummary from './Image07QuizCorticosteroidenSummary'
import Image08BijwerkingenOverzichtSummary from './Image08BijwerkingenOverzichtSummary'
import Image09PrednisonEnAlternatievenSummary from './Image09PrednisonEnAlternatievenSummary'
import Image10CalcineurineRemmersSummary from './Image10CalcineurineRemmersSummary'
import Image11QuizCalcineurineSummary from './Image11QuizCalcineurineSummary'
import Image12AntiTNFAlphaSummary from './Image12AntiTNFAlphaSummary'
import Image13AntiTNFStructurenSummary from './Image13AntiTNFStructurenSummary'
import Image14BiologicalsOverzichtSummary from './Image14BiologicalsOverzichtSummary'
import Image15WerkingVaccinsSummary from './Image15WerkingVaccinsSummary'
import Image16PassieveImmunisatieSummary from './Image16PassieveImmunisatieSummary'
import Image17QuizRabiesSummary from './Image17QuizRabiesSummary'
import Image18ImmunostimulantiaSummary from './Image18ImmunostimulantiaSummary'
import Image19VaccinTypenSummary from './Image19VaccinTypenSummary'
import Image20ActieveImmunisatieSummary from './Image20ActieveImmunisatieSummary'
import Image21AdjuvantenSummary from './Image21AdjuvantenSummary'
import Image22SlotSummary from './Image22SlotSummary'
import Image23AntimetabolietenSummary from './Image23AntimetabolietenSummary'
import Image24AntigenPresentatieSummary from './Image24AntigenPresentatieSummary'
import Image25ImmunologischGeheugenSummary from './Image25ImmunologischGeheugenSummary'
import Image26EindeSummary from './Image26EindeSummary'
import Image27SlotSummary from './Image27SlotSummary'

const Casus10Lme2ImmunomodulatieSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Introductie', icon: BookOpen },
    { id: 'sect-02', title: 'Menu Immunomodulatie', icon: LayoutList },
    { id: 'sect-03', title: 'Principes van immuunsuppressie', icon: Shield },
    { id: 'sect-04', title: 'Immunosuppressiva', icon: Pill },
    { id: 'sect-05', title: 'Corticosteroïden', icon: Activity },
    { id: 'sect-06', title: 'Synthetische glucocorticoïden', icon: FlaskConical },
    { id: 'sect-07', title: 'Quiz corticosteroïden', icon: HelpCircle },
    { id: 'sect-08', title: 'Bijwerkingen overzicht', icon: AlertTriangle },
    { id: 'sect-09', title: 'Prednison en alternatieven', icon: BarChart3 },
    { id: 'sect-10', title: 'Calcineurine-remmers', icon: Pill },
    { id: 'sect-11', title: 'Quiz calcineurine-remmers', icon: HelpCircle },
    { id: 'sect-12', title: 'Anti-TNF-alpha', icon: Target },
    { id: 'sect-13', title: 'Anti-TNF structuren', icon: Layers },
    { id: 'sect-14', title: 'Biologicals overzicht', icon: Layers },
    { id: 'sect-15', title: 'Werking van vaccins', icon: Syringe },
    { id: 'sect-16', title: 'Passieve immunisatie', icon: Shield },
    { id: 'sect-17', title: 'Rabies – passieve en actieve immunisatie', icon: FlaskConical },
    { id: 'sect-18', title: 'Immunostimulantia', icon: Zap },
    { id: 'sect-19', title: 'Vaccintypen', icon: BookOpen },
    { id: 'sect-20', title: 'Actieve immunisatie', icon: Syringe },
    { id: 'sect-21', title: 'Adjuvanten', icon: FlaskConical },
    { id: 'sect-22', title: 'Slot', icon: BookOpen },
    { id: 'sect-23', title: 'Antimetabolieten', icon: Pill },
    { id: 'sect-24', title: 'Antigenpresentatie', icon: Microscope },
    { id: 'sect-25', title: 'Immunologisch geheugen', icon: Brain },
    { id: 'sect-26', title: 'Einde', icon: CheckCircle },
    { id: 'sect-27', title: 'Slot', icon: BookOpen },
  ]

  return (
    <SummaryLayout
      title="Immunomodulatie"
      description="Complete samenvatting van de module over immunomodulatie: immuunsuppressie, biologicals en vaccins."
      caseLabel="Week 5 Casus 10 Vaccinatie LME 2"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=casus10-lme2-immunomodulatie"
    >
      <section id="sect-01" className="scroll-mt-24 mb-12"><Image01IntroductieSummary standalone={false} /></section>
      <section id="sect-02" className="scroll-mt-24 mb-12"><Image02MenuSummary standalone={false} /></section>
      <section id="sect-03" className="scroll-mt-24 mb-12"><Image03PrincipesImmuunsuppressieSummary standalone={false} /></section>
      <section id="sect-04" className="scroll-mt-24 mb-12"><Image04ImmunosuppressivaSummary standalone={false} /></section>
      <section id="sect-05" className="scroll-mt-24 mb-12"><Image05CorticosteroidenSummary standalone={false} /></section>
      <section id="sect-06" className="scroll-mt-24 mb-12"><Image06SynthetischeGlucocorticoïdenSummary standalone={false} /></section>
      <section id="sect-07" className="scroll-mt-24 mb-12"><Image07QuizCorticosteroidenSummary standalone={false} /></section>
      <section id="sect-08" className="scroll-mt-24 mb-12"><Image08BijwerkingenOverzichtSummary standalone={false} /></section>
      <section id="sect-09" className="scroll-mt-24 mb-12"><Image09PrednisonEnAlternatievenSummary standalone={false} /></section>
      <section id="sect-10" className="scroll-mt-24 mb-12"><Image10CalcineurineRemmersSummary standalone={false} /></section>
      <section id="sect-11" className="scroll-mt-24 mb-12"><Image11QuizCalcineurineSummary standalone={false} /></section>
      <section id="sect-12" className="scroll-mt-24 mb-12"><Image12AntiTNFAlphaSummary standalone={false} /></section>
      <section id="sect-13" className="scroll-mt-24 mb-12"><Image13AntiTNFStructurenSummary standalone={false} /></section>
      <section id="sect-14" className="scroll-mt-24 mb-12"><Image14BiologicalsOverzichtSummary standalone={false} /></section>
      <section id="sect-15" className="scroll-mt-24 mb-12"><Image15WerkingVaccinsSummary standalone={false} /></section>
      <section id="sect-16" className="scroll-mt-24 mb-12"><Image16PassieveImmunisatieSummary standalone={false} /></section>
      <section id="sect-17" className="scroll-mt-24 mb-12"><Image17QuizRabiesSummary standalone={false} /></section>
      <section id="sect-18" className="scroll-mt-24 mb-12"><Image18ImmunostimulantiaSummary standalone={false} /></section>
      <section id="sect-19" className="scroll-mt-24 mb-12"><Image19VaccinTypenSummary standalone={false} /></section>
      <section id="sect-20" className="scroll-mt-24 mb-12"><Image20ActieveImmunisatieSummary standalone={false} /></section>
      <section id="sect-21" className="scroll-mt-24 mb-12"><Image21AdjuvantenSummary standalone={false} /></section>
      <section id="sect-22" className="scroll-mt-24 mb-12"><Image22SlotSummary standalone={false} /></section>
      <section id="sect-23" className="scroll-mt-24 mb-12"><Image23AntimetabolietenSummary standalone={false} /></section>
      <section id="sect-24" className="scroll-mt-24 mb-12"><Image24AntigenPresentatieSummary standalone={false} /></section>
      <section id="sect-25" className="scroll-mt-24 mb-12"><Image25ImmunologischGeheugenSummary standalone={false} /></section>
      <section id="sect-26" className="scroll-mt-24 mb-12"><Image26EindeSummary standalone={false} /></section>
      <section id="sect-27" className="scroll-mt-24 mb-12"><Image27SlotSummary standalone={false} /></section>
    </SummaryLayout>
  )
}

export default Casus10Lme2ImmunomodulatieSummary
