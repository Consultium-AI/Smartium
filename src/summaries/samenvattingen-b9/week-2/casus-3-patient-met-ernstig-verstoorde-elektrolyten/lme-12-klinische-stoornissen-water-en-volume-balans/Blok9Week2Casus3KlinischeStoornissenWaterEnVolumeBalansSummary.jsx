import {
  BookOpen,
  Droplets,
  FlaskConical,
  Lightbulb,
  Syringe,
  Calculator,
  Stethoscope,
  LayoutList,
  ListChecks,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02WaterEnVolumebalans from './Sect02WaterEnVolumebalans'
import Sect03Osmolaliteit from './Sect03Osmolaliteit'
import Sect04VoorbeeldVerschil from './Sect04VoorbeeldVerschil'
import Sect05Infuusvloeistoffen from './Sect05Infuusvloeistoffen'
import Sect06WatertekortHypernatriemie from './Sect06WatertekortHypernatriemie'
import Sect07KlinischeBetekenis from './Sect07KlinischeBetekenis'
import Sect08SamenvattendOverzicht from './Sect08SamenvattendOverzicht'
import Sect09Samenvatting from './Sect09Samenvatting'

const Blok9Week2Casus3KlinischeStoornissenWaterEnVolumeBalansSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Water- en volumebalans: twee verschillende systemen', icon: Droplets },
    { id: 'sect-03', title: 'Osmolaliteit, effectieve osmolaliteit en toniciteit', icon: FlaskConical },
    { id: 'sect-04', title: 'Een voorbeeld om het verschil te begrijpen', icon: Lightbulb },
    { id: 'sect-05', title: 'Infuusvloeistoffen: waarom zijn ze hypo-, iso- of hypertoon?', icon: Syringe },
    { id: 'sect-06', title: 'Watertekort berekenen bij hypernatriëmie', icon: Calculator },
    { id: 'sect-07', title: 'Klinische betekenis van de waterbalans', icon: Stethoscope },
    { id: 'sect-08', title: 'Samenvattend overzicht van de kern', icon: LayoutList },
    { id: 'sect-09', title: 'Samenvatting', icon: ListChecks },
  ]

  return (
    <SummaryLayout
      title="Klinische stoornissen van de water- en volume balans"
      description="Bij stoornissen in de natriumconcentratie gaat het in de praktijk bijna altijd om een probleem in de waterbalans en veel minder vaak om een probleem in de natriumbalans zelf. Dat is een belangrijk uitgangspunt: een afwijkende serum-natriumwaarde zegt vooral iets over de verhouding tussen natrium en water."
      caseLabel="Week 2 · Casus 3: Patiënt met ernstig verstoorde elektrolyten"
      blokLabel="Blok 9"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12"><Sect01Leerdoelen /></section>
      <section id="sect-02" className="scroll-mt-24 mb-12"><Sect02WaterEnVolumebalans /></section>
      <section id="sect-03" className="scroll-mt-24 mb-12"><Sect03Osmolaliteit /></section>
      <section id="sect-04" className="scroll-mt-24 mb-12"><Sect04VoorbeeldVerschil /></section>
      <section id="sect-05" className="scroll-mt-24 mb-12"><Sect05Infuusvloeistoffen /></section>
      <section id="sect-06" className="scroll-mt-24 mb-12"><Sect06WatertekortHypernatriemie /></section>
      <section id="sect-07" className="scroll-mt-24 mb-12"><Sect07KlinischeBetekenis /></section>
      <section id="sect-08" className="scroll-mt-24 mb-12"><Sect08SamenvattendOverzicht /></section>
      <section id="sect-09" className="scroll-mt-24 mb-12"><Sect09Samenvatting /></section>
    </SummaryLayout>
  )
}

export default Blok9Week2Casus3KlinischeStoornissenWaterEnVolumeBalansSummary
