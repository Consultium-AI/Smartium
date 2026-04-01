import {
  BookOpen,
  Scan,
  Brain,
  Activity,
  Table2,
  ListOrdered,
  Layers,
  Stethoscope,
  ListChecks,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02WaarDraaitDezeModuleOm from './Sect02WaarDraaitDezeModuleOm'
import Sect03VanCTBeeldenNaarKlinischDenken from './Sect03VanCTBeeldenNaarKlinischDenken'
import Sect04PerifereVaatziektenKlachtenHerkennenEnPlaatsen from './Sect04PerifereVaatziektenKlachtenHerkennenEnPlaatsen'
import Sect05DeZesCasussenAlsOefenmateriaal from './Sect05DeZesCasussenAlsOefenmateriaal'
import Sect06WatValtOpAanHetKlachtenpatroon from './Sect06WatValtOpAanHetKlachtenpatroon'
import Sect07PraktischeBetekenisVanDeBeeldvorming from './Sect07PraktischeBetekenisVanDeBeeldvorming'
import Sect08KlinischeRelevantie from './Sect08KlinischeRelevantie'
import Sect09Samenvatting from './Sect09Samenvatting'

const Blok9Week2Casus4CtScansBeoordelenVowToegepasteAnatomieSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Waar draait deze module om?', icon: Scan },
    { id: 'sect-03', title: 'Van CT-beelden naar klinisch denken', icon: Brain },
    { id: 'sect-04', title: 'Perifere vaatziekten: klachten herkennen en plaatsen', icon: Activity },
    { id: 'sect-05', title: 'De zes casussen als oefenmateriaal', icon: Table2 },
    { id: 'sect-06', title: 'Wat valt op aan het klachtenpatroon?', icon: ListOrdered },
    { id: 'sect-07', title: 'Praktische betekenis van de beeldvorming', icon: Layers },
    { id: 'sect-08', title: 'Klinische relevantie', icon: Stethoscope },
    { id: 'sect-09', title: 'Samenvatting', icon: ListChecks },
  ]

  return (
    <SummaryLayout
      title="CT-scans beoordelen VOW Toegepaste Anatomie"
      description="Deze module is een praktische kennismaking met het beoordelen van CT-scans binnen de toegepaste anatomie. Het uitgangspunt is dat je niet alleen naar een tweedimensionaal beeld kijkt, maar leert om die doorsneden om te zetten naar een bruikbaar ruimtelijk beeld van het lichaam."
      caseLabel="Week 2 · Casus 4: De vrouw die maar 20 meter kan lopen"
      blokLabel="Blok 9"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12"><Sect01Leerdoelen /></section>
      <section id="sect-02" className="scroll-mt-24 mb-12"><Sect02WaarDraaitDezeModuleOm /></section>
      <section id="sect-03" className="scroll-mt-24 mb-12"><Sect03VanCTBeeldenNaarKlinischDenken /></section>
      <section id="sect-04" className="scroll-mt-24 mb-12"><Sect04PerifereVaatziektenKlachtenHerkennenEnPlaatsen /></section>
      <section id="sect-05" className="scroll-mt-24 mb-12"><Sect05DeZesCasussenAlsOefenmateriaal /></section>
      <section id="sect-06" className="scroll-mt-24 mb-12"><Sect06WatValtOpAanHetKlachtenpatroon /></section>
      <section id="sect-07" className="scroll-mt-24 mb-12"><Sect07PraktischeBetekenisVanDeBeeldvorming /></section>
      <section id="sect-08" className="scroll-mt-24 mb-12"><Sect08KlinischeRelevantie /></section>
      <section id="sect-09" className="scroll-mt-24 mb-12"><Sect09Samenvatting /></section>
    </SummaryLayout>
  )
}

export default Blok9Week2Casus4CtScansBeoordelenVowToegepasteAnatomieSummary
