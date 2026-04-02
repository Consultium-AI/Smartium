import {
  BookOpen,
  ShieldCheck,
  Hospital,
  UserRound,
  Scale,
  Table2,
  Stethoscope,
  Wind,
  Pill,
  ClipboardList,
  ListChecks,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02WaaromPreoperatieveScreeningBelangrijkIs from './Sect02WaaromPreoperatieveScreeningBelangrijkIs'
import Sect03WerkwijzeOpDePolikliniek from './Sect03WerkwijzeOpDePolikliniek'
import Sect04DeCasusAlsVoorbeeld from './Sect04DeCasusAlsVoorbeeld'
import Sect05PerioperatieveRisicoInschatting from './Sect05PerioperatieveRisicoInschatting'
import Sect06PatientgebondenRisicosASA from './Sect06PatientgebondenRisicosASA'
import Sect07ChirurgischeRisicos from './Sect07ChirurgischeRisicos'
import Sect08AnesthesiologischeRisicosLuchtweg from './Sect08AnesthesiologischeRisicosLuchtweg'
import Sect09ThuismedicatieEnPerioperatiefMedicatiebeleid from './Sect09ThuismedicatieEnPerioperatiefMedicatiebeleid'
import Sect10PreoperatieveInstructies from './Sect10PreoperatieveInstructies'
import Sect11Samenvatting from './Sect11Samenvatting'

const Blok9Week2Casus4PreoperatieveScreeningSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Waarom preoperatieve screening belangrijk is', icon: ShieldCheck },
    { id: 'sect-03', title: 'Werkwijze op de polikliniek', icon: Hospital },
    { id: 'sect-04', title: 'De casus als voorbeeld van risicofactoren', icon: UserRound },
    { id: 'sect-05', title: 'Perioperatieve risico-inschatting', icon: Scale },
    { id: 'sect-06', title: 'Patiëntgebonden risico’s: de ASA-classificatie', icon: Table2 },
    { id: 'sect-07', title: 'Chirurgische risico’s', icon: Stethoscope },
    { id: 'sect-08', title: 'Anesthesiologische risico’s: de luchtwegbeoordeling', icon: Wind },
    { id: 'sect-09', title: 'Thuismedicatie en perioperatief medicatiebeleid', icon: Pill },
    { id: 'sect-10', title: 'Preoperatieve instructies', icon: ClipboardList },
    { id: 'sect-11', title: 'Samenvatting', icon: ListChecks },
  ]

  return (
    <SummaryLayout
      title="Preoperatieve screening"
      description="Wereldwijd vinden er elk jaar ongeveer 230 miljoen operaties plaats. In de huidige richtlijn wordt onder een operatie verstaan: elke ingreep in een ziekenhuisoperatiekamer waarbij sprake is van incisie, excisie, manipulatie of hechting van weefsel, en die meestal regionale of algehele anesthesie of diepe sedatie nodig heeft om pijn te controleren."
      caseLabel="Week 2 · Casus 4: De vrouw die maar 20 meter kan lopen"
      blokLabel="Blok 9"
      practiceLink="/oefenvragen?lme=blok9-week2-casus4-preoperatieve-screening"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12"><Sect01Leerdoelen /></section>
      <section id="sect-02" className="scroll-mt-24 mb-12"><Sect02WaaromPreoperatieveScreeningBelangrijkIs /></section>
      <section id="sect-03" className="scroll-mt-24 mb-12"><Sect03WerkwijzeOpDePolikliniek /></section>
      <section id="sect-04" className="scroll-mt-24 mb-12"><Sect04DeCasusAlsVoorbeeld /></section>
      <section id="sect-05" className="scroll-mt-24 mb-12"><Sect05PerioperatieveRisicoInschatting /></section>
      <section id="sect-06" className="scroll-mt-24 mb-12"><Sect06PatientgebondenRisicosASA /></section>
      <section id="sect-07" className="scroll-mt-24 mb-12"><Sect07ChirurgischeRisicos /></section>
      <section id="sect-08" className="scroll-mt-24 mb-12"><Sect08AnesthesiologischeRisicosLuchtweg /></section>
      <section id="sect-09" className="scroll-mt-24 mb-12"><Sect09ThuismedicatieEnPerioperatiefMedicatiebeleid /></section>
      <section id="sect-10" className="scroll-mt-24 mb-12"><Sect10PreoperatieveInstructies /></section>
      <section id="sect-11" className="scroll-mt-24 mb-12"><Sect11Samenvatting /></section>
    </SummaryLayout>
  )
}

export default Blok9Week2Casus4PreoperatieveScreeningSummary
