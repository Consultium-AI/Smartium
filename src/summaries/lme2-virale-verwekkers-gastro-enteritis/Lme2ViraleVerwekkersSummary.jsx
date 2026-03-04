import {
  BookOpen, LayoutList, AlertTriangle, Search, Bug, Activity, Users,
  Stethoscope, FlaskConical, Pill, User, FileText, ClipboardList, BarChart3,
  Syringe, BookMarked
} from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'
import Image01IntroductieSummary from './Image01IntroductieSummary'
import Image02MenuSummary from './Image02MenuSummary'
import Image03KindsterfteSummary from './Image03KindsterfteSummary'
import Image04OorzakenSummary from './Image04OorzakenSummary'
import Image05RotavirusSummary from './Image05RotavirusSummary'
import Image06NorovirusSummary from './Image06NorovirusSummary'
import Image07AdenovirusSummary from './Image07AdenovirusSummary'
import Image08AstrovirusSummary from './Image08AstrovirusSummary'
import Image09EpidemiologieSummary from './Image09EpidemiologieSummary'
import Image10TransmissieSummary from './Image10TransmissieSummary'
import Image11PathogeneseSummary from './Image11PathogeneseSummary'
import Image12CasusHematologieSummary from './Image12CasusHematologieSummary'
import Image13DiagnostiekSummary from './Image13DiagnostiekSummary'
import Image14BehandelingSummary from './Image14BehandelingSummary'
import Image15CasusEliseSummary from './Image15CasusEliseSummary'
import Image16AnamneseEliseSummary from './Image16AnamneseEliseSummary'
import Image17LichamelijkOnderzoekSummary from './Image17LichamelijkOnderzoekSummary'
import Image18LichamelijkEliseSummary from './Image18LichamelijkEliseSummary'
import Image19DehydratieTabelSummary from './Image19DehydratieTabelSummary'
import Image20DifferentiaaldiagnoseSummary from './Image20DifferentiaaldiagnoseSummary'
import Image21VerwekkerSummary from './Image21VerwekkerSummary'
import Image22DiagnostiekBehandelingSummary from './Image22DiagnostiekBehandelingSummary'
import Image23RotavirusvaccinSummary from './Image23RotavirusvaccinSummary'
import Image24SamenvattingSummary from './Image24SamenvattingSummary'

const Lme2ViraleVerwekkersSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Introductie en leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Menu', icon: LayoutList },
    { id: 'sect-03', title: 'Kindsterfte', icon: AlertTriangle },
    { id: 'sect-04', title: 'Oorzaken', icon: Search },
    { id: 'sect-05', title: 'Rotavirus', icon: Bug },
    { id: 'sect-06', title: 'Norovirus', icon: Bug },
    { id: 'sect-07', title: 'Adenovirus', icon: Bug },
    { id: 'sect-08', title: 'Astrovirus', icon: Bug },
    { id: 'sect-09', title: 'Epidemiologie', icon: BarChart3 },
    { id: 'sect-10', title: 'Transmissie', icon: Users },
    { id: 'sect-11', title: 'Pathogenese', icon: Activity },
    { id: 'sect-12', title: 'Casus hematologie', icon: FileText },
    { id: 'sect-13', title: 'Diagnostiek', icon: FlaskConical },
    { id: 'sect-14', title: 'Behandeling', icon: Pill },
    { id: 'sect-15', title: 'Casus Elise', icon: User },
    { id: 'sect-16', title: 'Anamnese Elise', icon: ClipboardList },
    { id: 'sect-17', title: 'Lichamelijk onderzoek', icon: Stethoscope },
    { id: 'sect-18', title: 'Lichamelijk onderzoek Elise', icon: Stethoscope },
    { id: 'sect-19', title: 'Dehydratie tabel', icon: FileText },
    { id: 'sect-20', title: 'Differentiaaldiagnose', icon: Search },
    { id: 'sect-21', title: 'Verwekker', icon: Bug },
    { id: 'sect-22', title: 'Diagnostiek en behandeling', icon: FlaskConical },
    { id: 'sect-23', title: 'Rotavirusvaccin', icon: Syringe },
    { id: 'sect-24', title: 'Samenvatting', icon: BookMarked },
  ]

  return (
    <SummaryLayout
      title="Virale verwekkers van gastro-enteritis"
      description="Complete samenvatting van de module over virale oorzaken van diarree: rotavirus, norovirus, adenovirus, astrovirus, diagnostiek en behandeling."
      caseLabel="Week 5 Casus 9 LME 2"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme2-virale-verwekkers-gastro-enteritis"
    >
      <section id="sect-01" className="scroll-mt-24 mb-12"><Image01IntroductieSummary standalone={false} /></section>
      <section id="sect-02" className="scroll-mt-24 mb-12"><Image02MenuSummary standalone={false} /></section>
      <section id="sect-03" className="scroll-mt-24 mb-12"><Image03KindsterfteSummary standalone={false} /></section>
      <section id="sect-04" className="scroll-mt-24 mb-12"><Image04OorzakenSummary standalone={false} /></section>
      <section id="sect-05" className="scroll-mt-24 mb-12"><Image05RotavirusSummary standalone={false} /></section>
      <section id="sect-06" className="scroll-mt-24 mb-12"><Image06NorovirusSummary standalone={false} /></section>
      <section id="sect-07" className="scroll-mt-24 mb-12"><Image07AdenovirusSummary standalone={false} /></section>
      <section id="sect-08" className="scroll-mt-24 mb-12"><Image08AstrovirusSummary standalone={false} /></section>
      <section id="sect-09" className="scroll-mt-24 mb-12"><Image09EpidemiologieSummary standalone={false} /></section>
      <section id="sect-10" className="scroll-mt-24 mb-12"><Image10TransmissieSummary standalone={false} /></section>
      <section id="sect-11" className="scroll-mt-24 mb-12"><Image11PathogeneseSummary standalone={false} /></section>
      <section id="sect-12" className="scroll-mt-24 mb-12"><Image12CasusHematologieSummary standalone={false} /></section>
      <section id="sect-13" className="scroll-mt-24 mb-12"><Image13DiagnostiekSummary standalone={false} /></section>
      <section id="sect-14" className="scroll-mt-24 mb-12"><Image14BehandelingSummary standalone={false} /></section>
      <section id="sect-15" className="scroll-mt-24 mb-12"><Image15CasusEliseSummary standalone={false} /></section>
      <section id="sect-16" className="scroll-mt-24 mb-12"><Image16AnamneseEliseSummary standalone={false} /></section>
      <section id="sect-17" className="scroll-mt-24 mb-12"><Image17LichamelijkOnderzoekSummary standalone={false} /></section>
      <section id="sect-18" className="scroll-mt-24 mb-12"><Image18LichamelijkEliseSummary standalone={false} /></section>
      <section id="sect-19" className="scroll-mt-24 mb-12"><Image19DehydratieTabelSummary standalone={false} /></section>
      <section id="sect-20" className="scroll-mt-24 mb-12"><Image20DifferentiaaldiagnoseSummary standalone={false} /></section>
      <section id="sect-21" className="scroll-mt-24 mb-12"><Image21VerwekkerSummary standalone={false} /></section>
      <section id="sect-22" className="scroll-mt-24 mb-12"><Image22DiagnostiekBehandelingSummary standalone={false} /></section>
      <section id="sect-23" className="scroll-mt-24 mb-12"><Image23RotavirusvaccinSummary standalone={false} /></section>
      <section id="sect-24" className="scroll-mt-24 mb-12"><Image24SamenvattingSummary standalone={false} /></section>
    </SummaryLayout>
  )
}

export default Lme2ViraleVerwekkersSummary
