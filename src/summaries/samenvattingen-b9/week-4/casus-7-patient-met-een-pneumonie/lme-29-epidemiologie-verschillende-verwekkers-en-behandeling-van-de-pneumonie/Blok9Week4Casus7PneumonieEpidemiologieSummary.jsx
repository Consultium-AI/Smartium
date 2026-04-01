import {
  BookOpen,
  Stethoscope,
  BarChart3,
  ClipboardList,
  Table2,
  Bug,
  Microscope,
  Droplets,
  Wind,
  Dna,
  Activity,
  Baby,
  Biohazard,
  MapPin,
  Pill,
  AlertOctagon,
  HeartPulse,
  ListChecks,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02PneumonieInHetKort from './Sect02PneumonieInHetKort'
import Sect03EpidemiologieEnErnst from './Sect03EpidemiologieEnErnst'
import Sect04ErnstinschattingCurbs65 from './Sect04ErnstinschattingCurbs65'
import Sect05PSIEnRisicoklassen from './Sect05PSIEnRisicoklassen'
import Sect06VerwekkersGramIndeling from './Sect06VerwekkersGramIndeling'
import Sect07StreptococcusPneumoniae from './Sect07StreptococcusPneumoniae'
import Sect08HaemophilusInfluenzae from './Sect08HaemophilusInfluenzae'
import Sect09LegionellaPneumophila from './Sect09LegionellaPneumophila'
import Sect10ViraleVerwekkersEnInfluenza from './Sect10ViraleVerwekkersEnInfluenza'
import Sect11RSV from './Sect11RSV'
import Sect12HumaanMetapneumovirus from './Sect12HumaanMetapneumovirus'
import Sect13SarsCov2 from './Sect13SarsCov2'
import Sect14PneumonieVerschillendeSettings from './Sect14PneumonieVerschillendeSettings'
import Sect15BehandelingCAP from './Sect15BehandelingCAP'
import Sect16ComplicatiesLongabces from './Sect16ComplicatiesLongabces'
import Sect17PleuraleInfectie from './Sect17PleuraleInfectie'
import Sect18Samenvatting from './Sect18Samenvatting'

const Blok9Week4Casus7PneumonieEpidemiologieSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Pneumonie in het kort', icon: Stethoscope },
    { id: 'sect-03', title: 'Epidemiologie en ernst', icon: BarChart3 },
    { id: 'sect-04', title: 'Ernstinschatting: CURB-65', icon: ClipboardList },
    { id: 'sect-05', title: 'PSI en risicoklassen', icon: Table2 },
    { id: 'sect-06', title: 'Verwekkers: gram en atypisch', icon: Bug },
    { id: 'sect-07', title: 'Streptococcus pneumoniae', icon: Microscope },
    { id: 'sect-08', title: 'Haemophilus influenzae', icon: Droplets },
    { id: 'sect-09', title: 'Legionella pneumophila', icon: Wind },
    { id: 'sect-10', title: 'Virale verwekkers en influenza', icon: Dna },
    { id: 'sect-11', title: 'RSV', icon: Baby },
    { id: 'sect-12', title: 'Humaan metapneumovirus', icon: Activity },
    { id: 'sect-13', title: 'SARS-CoV-2', icon: Biohazard },
    { id: 'sect-14', title: 'Pneumonie in verschillende settings', icon: MapPin },
    { id: 'sect-15', title: 'Behandeling van CAP', icon: Pill },
    { id: 'sect-16', title: 'Complicaties: longabces', icon: AlertOctagon },
    { id: 'sect-17', title: 'Pleurale infectie', icon: HeartPulse },
    { id: 'sect-18', title: 'Samenvatting', icon: ListChecks },
  ]

  return (
    <SummaryLayout
      title="Epidemiologie, verschillende verwekkers en behandeling van de pneumonie"
      description="Pneumonie is een klinisch syndroom met veel verschillende gezichten. Patiënten kunnen hoesten, koorts hebben en benauwd zijn, maar het beeld hangt sterk af van de oorzaak en van de plek waar de infectie is ontstaan."
      caseLabel="Week 4 · Casus 7: Patiënt met een pneumonie"
      blokLabel="Blok 9"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12"><Sect01Leerdoelen /></section>
      <section id="sect-02" className="scroll-mt-24 mb-12"><Sect02PneumonieInHetKort /></section>
      <section id="sect-03" className="scroll-mt-24 mb-12"><Sect03EpidemiologieEnErnst /></section>
      <section id="sect-04" className="scroll-mt-24 mb-12"><Sect04ErnstinschattingCurbs65 /></section>
      <section id="sect-05" className="scroll-mt-24 mb-12"><Sect05PSIEnRisicoklassen /></section>
      <section id="sect-06" className="scroll-mt-24 mb-12"><Sect06VerwekkersGramIndeling /></section>
      <section id="sect-07" className="scroll-mt-24 mb-12"><Sect07StreptococcusPneumoniae /></section>
      <section id="sect-08" className="scroll-mt-24 mb-12"><Sect08HaemophilusInfluenzae /></section>
      <section id="sect-09" className="scroll-mt-24 mb-12"><Sect09LegionellaPneumophila /></section>
      <section id="sect-10" className="scroll-mt-24 mb-12"><Sect10ViraleVerwekkersEnInfluenza /></section>
      <section id="sect-11" className="scroll-mt-24 mb-12"><Sect11RSV /></section>
      <section id="sect-12" className="scroll-mt-24 mb-12"><Sect12HumaanMetapneumovirus /></section>
      <section id="sect-13" className="scroll-mt-24 mb-12"><Sect13SarsCov2 /></section>
      <section id="sect-14" className="scroll-mt-24 mb-12"><Sect14PneumonieVerschillendeSettings /></section>
      <section id="sect-15" className="scroll-mt-24 mb-12"><Sect15BehandelingCAP /></section>
      <section id="sect-16" className="scroll-mt-24 mb-12"><Sect16ComplicatiesLongabces /></section>
      <section id="sect-17" className="scroll-mt-24 mb-12"><Sect17PleuraleInfectie /></section>
      <section id="sect-18" className="scroll-mt-24 mb-12"><Sect18Samenvatting /></section>
    </SummaryLayout>
  )
}

export default Blok9Week4Casus7PneumonieEpidemiologieSummary
