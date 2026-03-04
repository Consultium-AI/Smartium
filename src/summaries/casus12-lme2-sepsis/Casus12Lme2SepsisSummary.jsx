import {
  BookOpen, LayoutList, Globe, FileText, AlertCircle, List, HelpCircle, Layers,
  Target, Crosshair, Pill, Stethoscope, Clock, Search, User, Droplets, AlertTriangle,
  Activity, Zap, BarChart3, HeartPulse
} from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'
import Image01IntroductieSummary from './Image01IntroductieSummary'
import Image02MenuSummary from './Image02MenuSummary'
import Image03MaatschappelijkeImpactSummary from './Image03MaatschappelijkeImpactSummary'
import Image04Definities2016Summary from './Image04Definities2016Summary'
import Image05DefinitieSepsisSummary from './Image05DefinitieSepsisSummary'
import Image06TermenSummary from './Image06TermenSummary'
import Image07OorzakenSummary from './Image07OorzakenSummary'
import Image08GramSummary from './Image08GramSummary'
import Image09InfectiefocusSummary from './Image09InfectiefocusSummary'
import Image10FocuscontroleSummary from './Image10FocuscontroleSummary'
import Image11EmpirischeAntibioticaSummary from './Image11EmpirischeAntibioticaSummary'
import Image12DiagnostiekSummary from './Image12DiagnostiekSummary'
import Image13DuurBehandelingSummary from './Image13DuurBehandelingSummary'
import Image14ScreeningSummary from './Image14ScreeningSummary'
import Image15CasusVraag1Summary from './Image15CasusVraag1Summary'
import Image16CasusVraag2Summary from './Image16CasusVraag2Summary'
import Image17CasusVraag3Summary from './Image17CasusVraag3Summary'
import Image18CasusVraag4Summary from './Image18CasusVraag4Summary'
import Image19CasusVraag5Summary from './Image19CasusVraag5Summary'
import Image20EpidemiologieSummary from './Image20EpidemiologieSummary'
import Image21DefinitiesSummary from './Image21DefinitiesSummary'
import Image22FocusSummary from './Image22FocusSummary'
import Image23BehandelingSummary from './Image23BehandelingSummary'

const Casus12Lme2SepsisSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Introductie en leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Menu', icon: LayoutList },
    { id: 'sect-03', title: 'Maatschappelijke impact', icon: Globe },
    { id: 'sect-04', title: 'Sepsis 2016 consensus definities', icon: FileText },
    { id: 'sect-05', title: 'Definitie van sepsis', icon: AlertCircle },
    { id: 'sect-06', title: 'Termen en definities', icon: List },
    { id: 'sect-07', title: 'Oorzaken van sepsis', icon: HelpCircle },
    { id: 'sect-08', title: 'Gram-positief en gram-negatief', icon: Layers },
    { id: 'sect-09', title: 'Infectiefocus', icon: Target },
    { id: 'sect-10', title: 'Focuscontrole', icon: Crosshair },
    { id: 'sect-11', title: 'Empirische antibiotica', icon: Pill },
    { id: 'sect-12', title: 'Diagnostiek', icon: Stethoscope },
    { id: 'sect-13', title: 'Duur van behandeling', icon: Clock },
    { id: 'sect-14', title: 'Screening tools', icon: Search },
    { id: 'sect-15', title: 'Casus – Vraag 1', icon: User },
    { id: 'sect-16', title: 'Casus – Vraag 2: Bloedkweken', icon: Droplets },
    { id: 'sect-17', title: 'Casus – Vraag 3: Septische shock', icon: AlertTriangle },
    { id: 'sect-18', title: 'Casus – Vraag 4: Vochttherapie', icon: Activity },
    { id: 'sect-19', title: 'Casus – Vraag 5: Vasopressor', icon: Zap },
    { id: 'sect-20', title: 'Epidemiologie', icon: BarChart3 },
    { id: 'sect-21', title: 'Kernbegrippen', icon: BookOpen },
    { id: 'sect-22', title: 'Infectiefocus en behandeling', icon: Crosshair },
    { id: 'sect-23', title: 'Behandeling sepsis', icon: HeartPulse },
  ]

  return (
    <SummaryLayout
      title="Sepsis"
      description="Complete samenvatting van de module over sepsis, septische shock en behandeling."
      caseLabel="Week 6 Casus 12 Lijninfecties & resistenties LME 2"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=casus12-lme2-sepsis"
    >
      <section id="sect-01" className="scroll-mt-24 mb-12"><Image01IntroductieSummary standalone={false} /></section>
      <section id="sect-02" className="scroll-mt-24 mb-12"><Image02MenuSummary standalone={false} /></section>
      <section id="sect-03" className="scroll-mt-24 mb-12"><Image03MaatschappelijkeImpactSummary standalone={false} /></section>
      <section id="sect-04" className="scroll-mt-24 mb-12"><Image04Definities2016Summary standalone={false} /></section>
      <section id="sect-05" className="scroll-mt-24 mb-12"><Image05DefinitieSepsisSummary standalone={false} /></section>
      <section id="sect-06" className="scroll-mt-24 mb-12"><Image06TermenSummary standalone={false} /></section>
      <section id="sect-07" className="scroll-mt-24 mb-12"><Image07OorzakenSummary standalone={false} /></section>
      <section id="sect-08" className="scroll-mt-24 mb-12"><Image08GramSummary standalone={false} /></section>
      <section id="sect-09" className="scroll-mt-24 mb-12"><Image09InfectiefocusSummary standalone={false} /></section>
      <section id="sect-10" className="scroll-mt-24 mb-12"><Image10FocuscontroleSummary standalone={false} /></section>
      <section id="sect-11" className="scroll-mt-24 mb-12"><Image11EmpirischeAntibioticaSummary standalone={false} /></section>
      <section id="sect-12" className="scroll-mt-24 mb-12"><Image12DiagnostiekSummary standalone={false} /></section>
      <section id="sect-13" className="scroll-mt-24 mb-12"><Image13DuurBehandelingSummary standalone={false} /></section>
      <section id="sect-14" className="scroll-mt-24 mb-12"><Image14ScreeningSummary standalone={false} /></section>
      <section id="sect-15" className="scroll-mt-24 mb-12"><Image15CasusVraag1Summary standalone={false} /></section>
      <section id="sect-16" className="scroll-mt-24 mb-12"><Image16CasusVraag2Summary standalone={false} /></section>
      <section id="sect-17" className="scroll-mt-24 mb-12"><Image17CasusVraag3Summary standalone={false} /></section>
      <section id="sect-18" className="scroll-mt-24 mb-12"><Image18CasusVraag4Summary standalone={false} /></section>
      <section id="sect-19" className="scroll-mt-24 mb-12"><Image19CasusVraag5Summary standalone={false} /></section>
      <section id="sect-20" className="scroll-mt-24 mb-12"><Image20EpidemiologieSummary standalone={false} /></section>
      <section id="sect-21" className="scroll-mt-24 mb-12"><Image21DefinitiesSummary standalone={false} /></section>
      <section id="sect-22" className="scroll-mt-24 mb-12"><Image22FocusSummary standalone={false} /></section>
      <section id="sect-23" className="scroll-mt-24 mb-12"><Image23BehandelingSummary standalone={false} /></section>
    </SummaryLayout>
  )
}

export default Casus12Lme2SepsisSummary
