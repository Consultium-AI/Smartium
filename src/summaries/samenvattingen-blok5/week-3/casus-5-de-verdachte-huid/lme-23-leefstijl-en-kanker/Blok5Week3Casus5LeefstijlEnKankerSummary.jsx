import {
  Activity,
  Apple,
  BookOpen,
  CircleCheck,
  Cigarette,
  ClipboardList,
  Droplets,
  HeartPulse,
  ListChecks,
  Microscope,
  Pill,
  Sun,
  Table2,
  Wine,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02Introductie from './Sect02Introductie'
import Sect03WaaromKrijgtKankerMeerAandacht from './Sect03WaaromKrijgtKankerMeerAandacht'
import Sect04IncidentieEnTabel1 from './Sect04IncidentieEnTabel1'
import Sect05Roken from './Sect05Roken'
import Sect06Alcohol from './Sect06Alcohol'
import Sect07Zonblootstelling from './Sect07Zonblootstelling'
import Sect08Lichaamsbeweging from './Sect08Lichaamsbeweging'
import Sect09Overgewicht from './Sect09Overgewicht'
import Sect10Voeding from './Sect10Voeding'
import Sect11SupplementenEnHypedieten from './Sect11SupplementenEnHypedieten'
import Sect12Kankercachexie from './Sect12Kankercachexie'
import Sect13OorzakenOnvoldoendeVoedingsinname from './Sect13OorzakenOnvoldoendeVoedingsinname'
import Sect14DietistScreeningEnAdviezen from './Sect14DietistScreeningEnAdviezen'
import Sect15Samenvatting from './Sect15Samenvatting'

const Blok5Week3Casus5LeefstijlEnKankerSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Introductie: leefstijl en kanker', icon: HeartPulse },
    { id: 'sect-03', title: 'Waarom krijgt kanker meer aandacht?', icon: ClipboardList },
    { id: 'sect-04', title: 'Incidentie van kanker in Nederland', icon: Table2 },
    { id: 'sect-05', title: 'Roken', icon: Cigarette },
    { id: 'sect-06', title: 'Alcohol', icon: Wine },
    { id: 'sect-07', title: 'Zonblootstelling', icon: Sun },
    { id: 'sect-08', title: 'Lichaamsbeweging', icon: Activity },
    { id: 'sect-09', title: 'Overgewicht', icon: ListChecks },
    { id: 'sect-10', title: 'Voeding', icon: Apple },
    { id: 'sect-11', title: 'Voedingssupplementen en hypediëten', icon: Pill },
    { id: 'sect-12', title: 'Kankercachexie', icon: Microscope },
    { id: 'sect-13', title: 'Oorzaken van onvoldoende voedingsinname bij kanker', icon: ListChecks },
    { id: 'sect-14', title: 'Diëtist, screening en adviezen', icon: Droplets },
    { id: 'sect-15', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Leefstijl en kanker"
      description="Leefstijl speelt een belangrijke rol bij kanker, zowel bij het ontstaan als bij het verloop van de ziekte en de behandeling. Onder leefstijlfactoren vallen onder andere voeding, beweging, slaap, stressmanagement, rookgedrag, alcoholgebruik en zonblootstelling."
      caseLabel="Week 3 · Casus 5: De verdachte huid"
      blokLabel="Blok 5"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02Introductie />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03WaaromKrijgtKankerMeerAandacht />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04IncidentieEnTabel1 />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05Roken />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06Alcohol />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07Zonblootstelling />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08Lichaamsbeweging />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09Overgewicht />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10Voeding />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11SupplementenEnHypedieten />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12Kankercachexie />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13OorzakenOnvoldoendeVoedingsinname />
      </section>
      <section id="sect-14" className="scroll-mt-24 mb-12">
        <Sect14DietistScreeningEnAdviezen />
      </section>
      <section id="sect-15" className="scroll-mt-24 mb-12">
        <Sect15Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week3Casus5LeefstijlEnKankerSummary
