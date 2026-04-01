import {
  Activity,
  BookOpen,
  Brain,
  CircleCheck,
  LayoutList,
  Microscope,
  Stethoscope,
  Table2,
  Wind,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02AlarmsymptomenBijKinderen from './Sect02AlarmsymptomenBijKinderen'
import Sect03MediastinaleVerbreding from './Sect03MediastinaleVerbreding'
import Sect04CasusVanKees from './Sect04CasusVanKees'
import Sect05DreigendeDwarslaesie from './Sect05DreigendeDwarslaesie'
import Sect06HersentumorenEnDreigendeInklemming from './Sect06HersentumorenEnDreigendeInklemming'
import Sect07TumorlocatiesInHetHoofd from './Sect07TumorlocatiesInHetHoofd'
import Sect08SamenvattingDrieKlinischeBeelden from './Sect08SamenvattingDrieKlinischeBeelden'
import Sect09SlotSamenvatting from './Sect09SlotSamenvatting'

const Blok5Week5Casus11AlarmsymptomenOpDeKinderleeftijdSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    {
      id: 'sect-02',
      title: 'Alarmsymptomen bij kinderen: waarom snel denken belangrijk is',
      icon: Stethoscope,
    },
    { id: 'sect-03', title: 'Mediastinale verbreding: als de borstkas te weinig ruimte heeft', icon: Wind },
    { id: 'sect-04', title: 'Casus van Kees: mediastinale massa met snel progressieve klachten', icon: Activity },
    { id: 'sect-05', title: 'Dreigende dwarslaesie: denken aan myelumcompressie', icon: Microscope },
    { id: 'sect-06', title: 'Hersentumoren en dreigende inklemming', icon: Brain },
    { id: 'sect-07', title: 'Tumorlocaties in het hoofd: de belangrijkste koppelingen', icon: Table2 },
    { id: 'sect-08', title: 'Samenvatting van de drie klinische beelden', icon: LayoutList },
    { id: 'sect-09', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Alarmsymptomen op de kinderleeftijd"
      description='Bij kinderen kunnen oncologische aandoeningen zich onverwacht presenteren met acute of snel progressieve klachten. Het gaat dan niet altijd om klassieke "kankersymptomen", maar juist om een combinatie van klachten die passen bij druk op organen, zenuwen of de hersenen.'
      caseLabel="Week 5 · Casus 11: Kind met algehele malaise, koorts en zwelling in de buik"
      blokLabel="Blok 5"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02AlarmsymptomenBijKinderen />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03MediastinaleVerbreding />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04CasusVanKees />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05DreigendeDwarslaesie />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06HersentumorenEnDreigendeInklemming />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07TumorlocatiesInHetHoofd />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08SamenvattingDrieKlinischeBeelden />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09SlotSamenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week5Casus11AlarmsymptomenOpDeKinderleeftijdSummary
