import {
  BookOpen,
  HeartPulse,
  Scale,
  Target,
  Clock,
  ShieldAlert,
  Apple,
  CircleHelp,
  Pill,
  FlaskConical,
  Link2,
  ClipboardList,
  ListChecks,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02WatIsHypertensieEnWaaromMeten from './Sect02WatIsHypertensieEnWaaromMeten'
import Sect03HoeDefinieerJeHypertensie from './Sect03HoeDefinieerJeHypertensie'
import Sect04PraktischeBehandelgrenzen from './Sect04PraktischeBehandelgrenzen'
import Sect05BloeddrukMeten from './Sect05BloeddrukMeten'
import Sect06WelkeSchade from './Sect06WelkeSchade'
import Sect07NietMedicamenteuzeBehandeling from './Sect07NietMedicamenteuzeBehandeling'
import Sect08Monotherapie from './Sect08Monotherapie'
import Sect09MedicamenteuzeHoofdgroepen from './Sect09MedicamenteuzeHoofdgroepen'
import Sect10WerkingMiddelengroepen from './Sect10WerkingMiddelengroepen'
import Sect11Combinaties from './Sect11Combinaties'
import Sect12Therapietrouw from './Sect12Therapietrouw'
import Sect13Samenvatting from './Sect13Samenvatting'

const Blok9Week3Casus5HypertensieSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Wat is hypertensie en waarom is het belangrijk?', icon: HeartPulse },
    { id: 'sect-03', title: 'Hoe definieer je hypertensie?', icon: Scale },
    { id: 'sect-04', title: 'Praktische behandelgrenzen en streefwaarden', icon: Target },
    { id: 'sect-05', title: 'Bloeddruk meten: spreekkamer, thuismeting en 24-uursmeting', icon: Clock },
    { id: 'sect-06', title: 'Welke schade kan hypertensie geven?', icon: ShieldAlert },
    { id: 'sect-07', title: 'Niet-medicamenteuze behandeling', icon: Apple },
    { id: 'sect-08', title: 'Waarom werkt monotherapie vaak niet genoeg?', icon: CircleHelp },
    { id: 'sect-09', title: 'Medicamenteuze behandeling: de hoofdgroepen', icon: Pill },
    { id: 'sect-10', title: 'RAAS, calciumantagonisten, diuretica en betablokkers', icon: FlaskConical },
    { id: 'sect-11', title: 'Welke combinaties zijn gewenst?', icon: Link2 },
    { id: 'sect-12', title: 'Therapietrouw en follow-up', icon: ClipboardList },
    { id: 'sect-13', title: 'Samenvatting', icon: ListChecks },
  ]

  return (
    <SummaryLayout
      title="Hypertensie"
      description="Hypertensie is een te hoge bloeddruk. Het is een veelvoorkomende aandoening: ongeveer 25% van de volwassenen heeft hypertensie, en dit neemt toe met de leeftijd. In sommige bevolkingsgroepen ligt de prevalentie nog hoger. Belangrijk is dat hypertensie vaak geen klachten geeft. Juist daarom is meten zo belangrijk: je wacht niet op symptomen, omdat schade dan al kan ontstaan."
      caseLabel="Week 3 · Casus 5: Patiënt met hypertensie"
      blokLabel="Blok 9"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=blok9-week3-casus5-hypertensie"
    >
      <section id="sect-01" className="scroll-mt-24 mb-12"><Sect01Leerdoelen /></section>
      <section id="sect-02" className="scroll-mt-24 mb-12"><Sect02WatIsHypertensieEnWaaromMeten /></section>
      <section id="sect-03" className="scroll-mt-24 mb-12"><Sect03HoeDefinieerJeHypertensie /></section>
      <section id="sect-04" className="scroll-mt-24 mb-12"><Sect04PraktischeBehandelgrenzen /></section>
      <section id="sect-05" className="scroll-mt-24 mb-12"><Sect05BloeddrukMeten /></section>
      <section id="sect-06" className="scroll-mt-24 mb-12"><Sect06WelkeSchade /></section>
      <section id="sect-07" className="scroll-mt-24 mb-12"><Sect07NietMedicamenteuzeBehandeling /></section>
      <section id="sect-08" className="scroll-mt-24 mb-12"><Sect08Monotherapie /></section>
      <section id="sect-09" className="scroll-mt-24 mb-12"><Sect09MedicamenteuzeHoofdgroepen /></section>
      <section id="sect-10" className="scroll-mt-24 mb-12"><Sect10WerkingMiddelengroepen /></section>
      <section id="sect-11" className="scroll-mt-24 mb-12"><Sect11Combinaties /></section>
      <section id="sect-12" className="scroll-mt-24 mb-12"><Sect12Therapietrouw /></section>
      <section id="sect-13" className="scroll-mt-24 mb-12"><Sect13Samenvatting /></section>
    </SummaryLayout>
  )
}

export default Blok9Week3Casus5HypertensieSummary
