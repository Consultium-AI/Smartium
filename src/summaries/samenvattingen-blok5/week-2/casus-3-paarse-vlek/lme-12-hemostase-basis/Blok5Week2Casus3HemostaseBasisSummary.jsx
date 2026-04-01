import {
  Activity,
  BookOpen,
  CircleCheck,
  Droplets,
  Layers,
  Microscope,
  Shield,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02HemostaseDeBasis from './Sect02HemostaseDeBasis'
import Sect03OnderdelenTabel1 from './Sect03OnderdelenTabel1'
import Sect04VaatwandEnEndotheel from './Sect04VaatwandEnEndotheel'
import Sect05EndotheelRustEnNaBeschadiging from './Sect05EndotheelRustEnNaBeschadiging'
import Sect06PrimaireHemostase from './Sect06PrimaireHemostase'
import Sect07VonWillebrandFactorTabel2 from './Sect07VonWillebrandFactorTabel2'
import Sect08SecundaireHemostase from './Sect08SecundaireHemostase'
import Sect09RemmingSecundaireHemostase from './Sect09RemmingSecundaireHemostase'
import Sect10Fibrinolyse from './Sect10Fibrinolyse'
import Sect11HemostatischeBalans from './Sect11HemostatischeBalans'
import Sect12LaboratoriumdiagnostiekPrimaire from './Sect12LaboratoriumdiagnostiekPrimaire'
import Sect13Tabel3Testen from './Sect13Tabel3Testen'
import Sect14PtApttTabel4 from './Sect14PtApttTabel4'
import Sect15KoppelingKlinischeRelevantie from './Sect15KoppelingKlinischeRelevantie'
import Sect16SamenvattingHoofdpunten from './Sect16SamenvattingHoofdpunten'
import Sect17Samenvatting from './Sect17Samenvatting'

const Blok5Week2Casus3HemostaseBasisSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Basis van bloedstolling', icon: Droplets },
    { id: 'sect-03', title: 'Onderdelen (tabel 1)', icon: Table2 },
    { id: 'sect-04', title: 'Vaatwand en endotheel', icon: Layers },
    { id: 'sect-05', title: 'Endotheel rust / schade', icon: Shield },
    { id: 'sect-06', title: 'Primaire hemostase', icon: Activity },
    { id: 'sect-07', title: 'Von Willebrand factor', icon: Table2 },
    { id: 'sect-08', title: 'Secundaire hemostase', icon: Droplets },
    { id: 'sect-09', title: 'Remming secundair', icon: Shield },
    { id: 'sect-10', title: 'Fibrinolyse', icon: Activity },
    { id: 'sect-11', title: 'Hemostatische balans', icon: Layers },
    { id: 'sect-12', title: 'Lab: primaire hemostase', icon: Microscope },
    { id: 'sect-13', title: 'Tabel 3: testen', icon: Table2 },
    { id: 'sect-14', title: 'PT, APTT (tabel 4)', icon: Table2 },
    { id: 'sect-15', title: 'Klinische relevantie', icon: Activity },
    { id: 'sect-16', title: 'Hoofdpunten', icon: CircleCheck },
    { id: 'sect-17', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Hemostase basis"
      description="Hemostase betekent bloedstolling: het is het proces waarmee het lichaam een bloeding stopt zodra er schade aan een bloedvat ontstaat. Het woord is goed te onthouden als hemo = bloed en stase = stilstand. De functie van hemostase is dus heel eenvoudig: zorgen dat bloedverlies beperkt blijft en dat een wond niet blijft bloeden."
      caseLabel="Week 2 · Casus 3: Paarse vlek"
      blokLabel="Blok 5"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02HemostaseDeBasis />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03OnderdelenTabel1 />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04VaatwandEnEndotheel />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05EndotheelRustEnNaBeschadiging />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06PrimaireHemostase />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07VonWillebrandFactorTabel2 />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08SecundaireHemostase />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09RemmingSecundaireHemostase />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10Fibrinolyse />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11HemostatischeBalans />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12LaboratoriumdiagnostiekPrimaire />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13Tabel3Testen />
      </section>
      <section id="sect-14" className="scroll-mt-24 mb-12">
        <Sect14PtApttTabel4 />
      </section>
      <section id="sect-15" className="scroll-mt-24 mb-12">
        <Sect15KoppelingKlinischeRelevantie />
      </section>
      <section id="sect-16" className="scroll-mt-24 mb-12">
        <Sect16SamenvattingHoofdpunten />
      </section>
      <section id="sect-17" className="scroll-mt-24 mb-12">
        <Sect17Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week2Casus3HemostaseBasisSummary
