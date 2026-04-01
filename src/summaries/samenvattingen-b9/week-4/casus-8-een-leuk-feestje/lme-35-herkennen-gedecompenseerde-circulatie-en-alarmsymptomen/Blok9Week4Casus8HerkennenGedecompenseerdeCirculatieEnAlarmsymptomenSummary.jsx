import {
  Activity,
  Beaker,
  BookOpen,
  Brain,
  Droplets,
  FlaskConical,
  Gauge,
  HeartPulse,
  LayoutGrid,
  Lightbulb,
  ListChecks,
  Scale,
  Stethoscope,
  Waves,
  Zap,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02Inleiding from './Sect02Inleiding'
import Sect03LokaleBloedstroom from './Sect03LokaleBloedstroom'
import Sect04HumoraleRegulatie from './Sect04HumoraleRegulatie'
import Sect05NeuraleRegulatie from './Sect05NeuraleRegulatie'
import Sect06CardiacOutput from './Sect06CardiacOutput'
import Sect07BloeddrukVaatweerstandPerfusie from './Sect07BloeddrukVaatweerstandPerfusie'
import Sect08Baroreceptorreflex from './Sect08Baroreceptorreflex'
import Sect09Raas from './Sect09Raas'
import Sect10SympathischeActivatieHerkennen from './Sect10SympathischeActivatieHerkennen'
import Sect11AdequateCirculatie from './Sect11AdequateCirculatie'
import Sect12Tabel4Organen from './Sect12Tabel4Organen'
import Sect13LactaatEnBalans from './Sect13LactaatEnBalans'
import Sect14CompensatieEnDecompensatie from './Sect14CompensatieEnDecompensatie'
import Sect15Samenvatting from './Sect15Samenvatting'

const Blok9Week4Casus8HerkennenGedecompenseerdeCirculatieEnAlarmsymptomenSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Inleiding', icon: Lightbulb },
    { id: 'sect-03', title: 'Hoofdstuk 1: regulatie van de bloedstroom en cardiac output', icon: Waves },
    { id: 'sect-04', title: 'Humorale regulatie', icon: FlaskConical },
    { id: 'sect-05', title: 'Neurale regulatie: sympathicus en parasympathicus', icon: Brain },
    { id: 'sect-06', title: 'Wat bepaalt de cardiac output?', icon: HeartPulse },
    { id: 'sect-07', title: 'Hoofdstuk 2: regulatie van bloeddruk en vaattonus', icon: Gauge },
    { id: 'sect-08', title: 'De baroreceptorreflex: snelle regeling', icon: Activity },
    { id: 'sect-09', title: 'RAAS: langzamere regeling via de nieren', icon: Beaker },
    { id: 'sect-10', title: 'Hoe herken je sympathische activatie?', icon: Zap },
    { id: 'sect-11', title: 'Hoofdstuk 3: het beoordelen van de circulatie', icon: Stethoscope },
    { id: 'sect-12', title: 'Tabel 4. Beoordeling van de circulatie per orgaan', icon: LayoutGrid },
    { id: 'sect-13', title: 'Nog een extra manier om de balans te controleren', icon: Droplets },
    { id: 'sect-14', title: 'Compensatie en decompensatie', icon: Scale },
    { id: 'sect-15', title: 'Samenvatting', icon: ListChecks },
  ]

  return (
    <SummaryLayout
      title="Herkennen gedecompenseerde circulatie en alarmsymptomen"
      description="De bloedcirculatie heeft één belangrijke taak: elk weefsel precies zoveel bloed geven als het nodig heeft."
      caseLabel="Week 4 · Casus 8: Een leuk feestje"
      blokLabel="Blok 9"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02Inleiding />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03LokaleBloedstroom />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04HumoraleRegulatie />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05NeuraleRegulatie />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06CardiacOutput />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07BloeddrukVaatweerstandPerfusie />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08Baroreceptorreflex />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09Raas />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10SympathischeActivatieHerkennen />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11AdequateCirculatie />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12Tabel4Organen />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13LactaatEnBalans />
      </section>
      <section id="sect-14" className="scroll-mt-24 mb-12">
        <Sect14CompensatieEnDecompensatie />
      </section>
      <section id="sect-15" className="scroll-mt-24 mb-12">
        <Sect15Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok9Week4Casus8HerkennenGedecompenseerdeCirculatieEnAlarmsymptomenSummary
