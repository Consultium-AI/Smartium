import {
  BookOpen,
  Wind,
  Truck,
  RefreshCw,
  CircleDot,
  BarChart3,
  AlertOctagon,
  Droplets,
  Circle,
  Gauge,
  Fan,
  Package,
  Activity,
  PersonStanding,
  HeartPulse,
  ListChecks,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02ZuurstofopnameTransportAfgifte from './Sect02ZuurstofopnameTransportAfgifte'
import Sect03ZuurstoftransportTabel1 from './Sect03ZuurstoftransportTabel1'
import Sect04KoolzuurafgifteHaldane from './Sect04KoolzuurafgifteHaldane'
import Sect05AlveolusEnPneumocyten from './Sect05AlveolusEnPneumocyten'
import Sect06LongvolumesEnCapaciteiten from './Sect06LongvolumesEnCapaciteiten'
import Sect07FalendeRespiratieType1Type2 from './Sect07FalendeRespiratieType1Type2'
import Sect08Neusbril from './Sect08Neusbril'
import Sect09GewoonMasker from './Sect09GewoonMasker'
import Sect10VenturiMasker from './Sect10VenturiMasker'
import Sect11NonRebreathingMasker from './Sect11NonRebreathingMasker'
import Sect12Optiflow from './Sect12Optiflow'
import Sect13PositieveDrukbeademing from './Sect13PositieveDrukbeademing'
import Sect14Buikllegging from './Sect14Buikllegging'
import Sect15VvEcmo from './Sect15VvEcmo'
import Sect16Samenvatting from './Sect16Samenvatting'

const Blok9Week4Casus7SymptomatischeBehandelingRespiratoireInsufficientieSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Zuurstofopname, transport en afgifte aan de weefsels', icon: Wind },
    { id: 'sect-03', title: 'Zuurstoftransport is meer dan alleen ademhalen', icon: Truck },
    { id: 'sect-04', title: 'Koolzuurafgifte en het Haldane-effect', icon: RefreshCw },
    { id: 'sect-05', title: 'De alveolus, type I pneumocyt en type II pneumocyt', icon: CircleDot },
    { id: 'sect-06', title: 'Longvolumes en longcapaciteiten', icon: BarChart3 },
    { id: 'sect-07', title: 'Falende respiratie: type 1 en type 2', icon: AlertOctagon },
    { id: 'sect-08', title: 'Zuurstoftoediening: van neusbril tot Optiflow', icon: Droplets },
    { id: 'sect-09', title: 'Gewoon masker', icon: Circle },
    { id: 'sect-10', title: 'Venturi-masker', icon: Gauge },
    { id: 'sect-11', title: 'Non-rebreathing masker', icon: Fan },
    { id: 'sect-12', title: 'Optiflow', icon: Package },
    { id: 'sect-13', title: 'Positieve drukbeademing', icon: Activity },
    { id: 'sect-14', title: 'Buikllegging', icon: PersonStanding },
    { id: 'sect-15', title: 'VV-ECMO', icon: HeartPulse },
    { id: 'sect-16', title: 'Samenvatting', icon: ListChecks },
  ]

  return (
    <SummaryLayout
      title="Symptomatische behandeling van respiratoire insufficientie"
      description="De basis van ademhaling is eenvoudig: zuurstof moet vanuit de ingeademde lucht in het bloed komen, daarna worden vervoerd naar de weefsels en daar weer worden afgegeven."
      caseLabel="Week 4 · Casus 7: Patiënt met een pneumonie"
      blokLabel="Blok 9"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=blok9-week4-casus7-symptomatische-behandeling-respiratoire-insufficientie"
      summaryVariantToggle={{
        activeLmeId: 'blok9-week4-casus7-symptomatische-behandeling-respiratoire-insufficientie',
        variants: [
          { id: 'blok9-week4-casus7-symptomatische-behandeling-respiratoire-insufficientie', label: 'Uitgebreid' },
          { id: 'blok9-week4-casus7-symptomatische-behandeling-respiratoire-insufficientie-mini', label: 'Kort' },
        ],
      }}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12"><Sect01Leerdoelen /></section>
      <section id="sect-02" className="scroll-mt-24 mb-12"><Sect02ZuurstofopnameTransportAfgifte /></section>
      <section id="sect-03" className="scroll-mt-24 mb-12"><Sect03ZuurstoftransportTabel1 /></section>
      <section id="sect-04" className="scroll-mt-24 mb-12"><Sect04KoolzuurafgifteHaldane /></section>
      <section id="sect-05" className="scroll-mt-24 mb-12"><Sect05AlveolusEnPneumocyten /></section>
      <section id="sect-06" className="scroll-mt-24 mb-12"><Sect06LongvolumesEnCapaciteiten /></section>
      <section id="sect-07" className="scroll-mt-24 mb-12"><Sect07FalendeRespiratieType1Type2 /></section>
      <section id="sect-08" className="scroll-mt-24 mb-12"><Sect08Neusbril /></section>
      <section id="sect-09" className="scroll-mt-24 mb-12"><Sect09GewoonMasker /></section>
      <section id="sect-10" className="scroll-mt-24 mb-12"><Sect10VenturiMasker /></section>
      <section id="sect-11" className="scroll-mt-24 mb-12"><Sect11NonRebreathingMasker /></section>
      <section id="sect-12" className="scroll-mt-24 mb-12"><Sect12Optiflow /></section>
      <section id="sect-13" className="scroll-mt-24 mb-12"><Sect13PositieveDrukbeademing /></section>
      <section id="sect-14" className="scroll-mt-24 mb-12"><Sect14Buikllegging /></section>
      <section id="sect-15" className="scroll-mt-24 mb-12"><Sect15VvEcmo /></section>
      <section id="sect-16" className="scroll-mt-24 mb-12"><Sect16Samenvatting /></section>
    </SummaryLayout>
  )
}

export default Blok9Week4Casus7SymptomatischeBehandelingRespiratoireInsufficientieSummary
