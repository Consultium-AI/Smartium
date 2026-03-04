import {
  BookOpen, LayoutList, HelpCircle, AlertTriangle, BarChart3, Shield, Layers,
  User, ShieldCheck, ListChecks, XCircle, Pill, Activity, Droplets, Bug,
  Search, GitBranch, BookMarked, Building2, HeartPulse
} from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'
import Image01IntroductieSummary from './Image01IntroductieSummary'
import Image02MenuSummary from './Image02MenuSummary'
import Image03WatZijnZorggerelateerdeSummary from './Image03WatZijnZorggerelateerdeSummary'
import Image04DefinitieEnMeestVoorkomendSummary from './Image04DefinitieEnMeestVoorkomendSummary'
import Image05VolgordeMeestVoorkomendSummary from './Image05VolgordeMeestVoorkomendSummary'
import Image06PostoperatieveWondinfectiesIntroSummary from './Image06PostoperatieveWondinfectiesIntroSummary'
import Image07POWIClassificatieSummary from './Image07POWIClassificatieSummary'
import Image08SAureusDragerschapSummary from './Image08SAureusDragerschapSummary'
import Image09PreventieveMaatregelenIntroSummary from './Image09PreventieveMaatregelenIntroSummary'
import Image10PreventieveMaatregelenLijstSummary from './Image10PreventieveMaatregelenLijstSummary'
import Image11PreoperatiefScherenSummary from './Image11PreoperatiefScherenSummary'
import Image12AntibiotischeProfylaxeSummary from './Image12AntibiotischeProfylaxeSummary'
import Image13SurveillanceSummary from './Image13SurveillanceSummary'
import Image14UrineweginfectiesIntroSummary from './Image14UrineweginfectiesIntroSummary'
import Image15UWIEcoliSummary from './Image15UWIEcoliSummary'
import Image16BronVanDeInfectieIntroSummary from './Image16BronVanDeInfectieIntroSummary'
import Image17EndogeenExogeenSummary from './Image17EndogeenExogeenSummary'
import Image18TerminologieIntroSummary from './Image18TerminologieIntroSummary'
import Image19HospitalAcquiredSummary from './Image19HospitalAcquiredSummary'
import Image20PrimaireSecundaireSepsisSummary from './Image20PrimaireSecundaireSepsisSummary'

const Casus12Lme4ZorggerelateerdeInfectiesSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Introductie en leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Menu', icon: LayoutList },
    { id: 'sect-03', title: 'Wat zijn zorggerelateerde infecties?', icon: HelpCircle },
    { id: 'sect-04', title: 'Definitie en impact', icon: AlertTriangle },
    { id: 'sect-05', title: 'Volgorde van meest naar minst voorkomend', icon: BarChart3 },
    { id: 'sect-06', title: 'Postoperatieve wondinfecties', icon: Shield },
    { id: 'sect-07', title: 'POWI – Classificatie en verwekker', icon: Layers },
    { id: 'sect-08', title: 'S. aureus en dragerschap', icon: User },
    { id: 'sect-09', title: 'Preventieve maatregelen – Intro', icon: ShieldCheck },
    { id: 'sect-10', title: 'Preventieve maatregelen – Lijst', icon: ListChecks },
    { id: 'sect-11', title: 'Preoperatief scheren', icon: XCircle },
    { id: 'sect-12', title: 'Antibiotische profylaxe', icon: Pill },
    { id: 'sect-13', title: 'Surveillance', icon: Activity },
    { id: 'sect-14', title: 'Urineweginfecties', icon: Droplets },
    { id: 'sect-15', title: 'E. coli als verwekker', icon: Bug },
    { id: 'sect-16', title: 'De bron van de infectie', icon: Search },
    { id: 'sect-17', title: 'Endogene en exogene bronnen', icon: GitBranch },
    { id: 'sect-18', title: 'Terminologie', icon: BookMarked },
    { id: 'sect-19', title: 'Hospital acquired', icon: Building2 },
    { id: 'sect-20', title: 'Primaire en secundaire sepsis', icon: HeartPulse },
  ]

  return (
    <SummaryLayout
      title="Zorggerelateerde infecties"
      description="Complete samenvatting van de module over zorggerelateerde infecties, POWI, urineweginfecties en preventie."
      caseLabel="Week 6 Casus 12 Lijninfecties & resistenties LME 4"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=casus12-lme4-zorggerelateerde-infecties"
    >
      <section id="sect-01" className="scroll-mt-24 mb-12"><Image01IntroductieSummary standalone={false} /></section>
      <section id="sect-02" className="scroll-mt-24 mb-12"><Image02MenuSummary standalone={false} /></section>
      <section id="sect-03" className="scroll-mt-24 mb-12"><Image03WatZijnZorggerelateerdeSummary standalone={false} /></section>
      <section id="sect-04" className="scroll-mt-24 mb-12"><Image04DefinitieEnMeestVoorkomendSummary standalone={false} /></section>
      <section id="sect-05" className="scroll-mt-24 mb-12"><Image05VolgordeMeestVoorkomendSummary standalone={false} /></section>
      <section id="sect-06" className="scroll-mt-24 mb-12"><Image06PostoperatieveWondinfectiesIntroSummary standalone={false} /></section>
      <section id="sect-07" className="scroll-mt-24 mb-12"><Image07POWIClassificatieSummary standalone={false} /></section>
      <section id="sect-08" className="scroll-mt-24 mb-12"><Image08SAureusDragerschapSummary standalone={false} /></section>
      <section id="sect-09" className="scroll-mt-24 mb-12"><Image09PreventieveMaatregelenIntroSummary standalone={false} /></section>
      <section id="sect-10" className="scroll-mt-24 mb-12"><Image10PreventieveMaatregelenLijstSummary standalone={false} /></section>
      <section id="sect-11" className="scroll-mt-24 mb-12"><Image11PreoperatiefScherenSummary standalone={false} /></section>
      <section id="sect-12" className="scroll-mt-24 mb-12"><Image12AntibiotischeProfylaxeSummary standalone={false} /></section>
      <section id="sect-13" className="scroll-mt-24 mb-12"><Image13SurveillanceSummary standalone={false} /></section>
      <section id="sect-14" className="scroll-mt-24 mb-12"><Image14UrineweginfectiesIntroSummary standalone={false} /></section>
      <section id="sect-15" className="scroll-mt-24 mb-12"><Image15UWIEcoliSummary standalone={false} /></section>
      <section id="sect-16" className="scroll-mt-24 mb-12"><Image16BronVanDeInfectieIntroSummary standalone={false} /></section>
      <section id="sect-17" className="scroll-mt-24 mb-12"><Image17EndogeenExogeenSummary standalone={false} /></section>
      <section id="sect-18" className="scroll-mt-24 mb-12"><Image18TerminologieIntroSummary standalone={false} /></section>
      <section id="sect-19" className="scroll-mt-24 mb-12"><Image19HospitalAcquiredSummary standalone={false} /></section>
      <section id="sect-20" className="scroll-mt-24 mb-12"><Image20PrimaireSecundaireSepsisSummary standalone={false} /></section>
    </SummaryLayout>
  )
}

export default Casus12Lme4ZorggerelateerdeInfectiesSummary
