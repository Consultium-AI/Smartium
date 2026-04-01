import {
  Apple,
  Ban,
  BookOpen,
  CircleCheck,
  ListChecks,
  Microscope,
  Pill,
  Shield,
  Stethoscope,
  Syringe,
  Table2,
  Wind,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02Hoofdstuk1VoedselallergieWatIs from './Sect02Hoofdstuk1VoedselallergieWatIs'
import Sect03PreventieVanVoedselallergie from './Sect03PreventieVanVoedselallergie'
import Sect04Tabel1Begrippen from './Sect04Tabel1Begrippen'
import Sect05SymptomenVoedselallergie from './Sect05SymptomenVoedselallergie'
import Sect06DiagnostiekVoedselallergie from './Sect06DiagnostiekVoedselallergie'
import Sect07BehandelingEnBeleidVoedselallergie from './Sect07BehandelingEnBeleidVoedselallergie'
import Sect08Hoofdstuk2InhalatieallergieWatIs from './Sect08Hoofdstuk2InhalatieallergieWatIs'
import Sect09SymptomenInhalatieallergie from './Sect09SymptomenInhalatieallergie'
import Sect10IndelingAllergischeRhinitis from './Sect10IndelingAllergischeRhinitis'
import Sect11DiagnostiekInhalatieallergie from './Sect11DiagnostiekInhalatieallergie'
import Sect12BehandelingInhalatieAllergeenVermijden from './Sect12BehandelingInhalatieAllergeenVermijden'
import Sect13MedicatieInhalatieallergie from './Sect13MedicatieInhalatieallergie'
import Sect14Immunotherapie from './Sect14Immunotherapie'
import Sect15Samenvatting from './Sect15Samenvatting'

const Blok5Week1Casus2VoedingEnInhalatieallergieSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Hoofdstuk 1 Voedselallergie', icon: Apple },
    { id: 'sect-03', title: 'Preventie van voedselallergie', icon: Shield },
    { id: 'sect-04', title: 'Tabel 1. Begrippen rond voedselallergie', icon: Table2 },
    { id: 'sect-05', title: 'Symptomen van voedselallergie', icon: ListChecks },
    { id: 'sect-06', title: 'Diagnostiek bij voedselallergie', icon: Microscope },
    { id: 'sect-07', title: 'Behandeling en beleid bij voedselallergie', icon: Stethoscope },
    { id: 'sect-08', title: 'Hoofdstuk 2 Inhalatieallergie', icon: Wind },
    { id: 'sect-09', title: 'Symptomen van inhalatieallergie', icon: ListChecks },
    { id: 'sect-10', title: 'Indeling van allergische rhinitis', icon: Table2 },
    { id: 'sect-11', title: 'Diagnostiek bij inhalatieallergie', icon: Microscope },
    { id: 'sect-12', title: 'Behandeling en beleid bij inhalatieallergie', icon: Ban },
    { id: 'sect-13', title: 'Medicatie', icon: Pill },
    { id: 'sect-14', title: 'Immunotherapie', icon: Syringe },
    { id: 'sect-15', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Voeding en inhalatieallergie"
      description="Bij een voedselallergie reageert het afweersysteem op voeding. De meest voorkomende vorm is een IgE-gemedieerde voedselallergie. Dat betekent dat het lichaam IgE-antistoffen maakt tegen een bepaald voedingsmiddel. Er bestaan ook reacties op voeding die niet door het immuunsysteem worden veroorzaakt, zoals lactose-intolerantie. In deze samenvatting gaat het steeds om de IgE-gemedieerde voedselallergie."
      caseLabel="Week 1 · Casus 2: De veranderde barrière"
      blokLabel="Blok 5"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02Hoofdstuk1VoedselallergieWatIs />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03PreventieVanVoedselallergie />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04Tabel1Begrippen />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05SymptomenVoedselallergie />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06DiagnostiekVoedselallergie />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07BehandelingEnBeleidVoedselallergie />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08Hoofdstuk2InhalatieallergieWatIs />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09SymptomenInhalatieallergie />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10IndelingAllergischeRhinitis />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11DiagnostiekInhalatieallergie />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12BehandelingInhalatieAllergeenVermijden />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13MedicatieInhalatieallergie />
      </section>
      <section id="sect-14" className="scroll-mt-24 mb-12">
        <Sect14Immunotherapie />
      </section>
      <section id="sect-15" className="scroll-mt-24 mb-12">
        <Sect15Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week1Casus2VoedingEnInhalatieallergieSummary
