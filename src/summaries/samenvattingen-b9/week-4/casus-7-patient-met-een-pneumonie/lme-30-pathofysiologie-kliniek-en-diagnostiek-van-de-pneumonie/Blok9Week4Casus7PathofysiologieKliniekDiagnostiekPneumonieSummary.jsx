import {
  BookOpen,
  Shield,
  Layers,
  Sparkles,
  Link2,
  AlertTriangle,
  Wind,
  Cigarette,
  Stethoscope,
  Activity,
  Scan,
  Microscope,
  ListChecks,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02WaaromLongBeschermd from './Sect02WaaromLongBeschermd'
import Sect03AfweerStructureel from './Sect03AfweerStructureel'
import Sect04AangeborenImmuniteit from './Sect04AangeborenImmuniteit'
import Sect05VerworvenImmuniteit from './Sect05VerworvenImmuniteit'
import Sect06AfweerstoornissenRisicofactoren from './Sect06AfweerstoornissenRisicofactoren'
import Sect07BronchiectasieënEnCystischeFibrose from './Sect07BronchiectasieënEnCystischeFibrose'
import Sect08RokenEnVapen from './Sect08RokenEnVapen'
import Sect09KliniekVanEenPneumonie from './Sect09KliniekVanEenPneumonie'
import Sect10Hypoxemie from './Sect10Hypoxemie'
import Sect11DiagnostiekRadiologisch from './Sect11DiagnostiekRadiologisch'
import Sect12MicrobiologischeDiagnostiek from './Sect12MicrobiologischeDiagnostiek'
import Sect13Samenvatting from './Sect13Samenvatting'

const Blok9Week4Casus7PathofysiologieKliniekDiagnostiekPneumonieSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Waarom de long zo goed beschermd moet worden', icon: Shield },
    { id: 'sect-03', title: 'Afweer: structureel en anatomisch', icon: Layers },
    { id: 'sect-04', title: 'Aangeboren immuniteit', icon: Sparkles },
    { id: 'sect-05', title: 'Verworven immuniteit', icon: Link2 },
    { id: 'sect-06', title: 'Afweerstoornissen en risicofactoren', icon: AlertTriangle },
    { id: 'sect-07', title: 'Bronchiëctasieën en cystische fibrose', icon: Wind },
    { id: 'sect-08', title: 'Roken en vapen', icon: Cigarette },
    { id: 'sect-09', title: 'Kliniek van een pneumonie', icon: Stethoscope },
    { id: 'sect-10', title: 'Hypoxemie', icon: Activity },
    { id: 'sect-11', title: 'Diagnostiek: radiologisch', icon: Scan },
    { id: 'sect-12', title: 'Microbiologische diagnostiek', icon: Microscope },
    { id: 'sect-13', title: 'Samenvatting', icon: ListChecks },
  ]

  return (
    <SummaryLayout
      title="Pathofysiologie, kliniek, en diagnostiek van de pneumonie"
      description="Elke dag ademen we enorme hoeveelheden lucht in en uit. Daarbij komen de luchtwegen en longen voortdurend in contact met micro-organismen."
      caseLabel="Week 4 · Casus 7: Patiënt met een pneumonie"
      blokLabel="Blok 9"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12"><Sect01Leerdoelen /></section>
      <section id="sect-02" className="scroll-mt-24 mb-12"><Sect02WaaromLongBeschermd /></section>
      <section id="sect-03" className="scroll-mt-24 mb-12"><Sect03AfweerStructureel /></section>
      <section id="sect-04" className="scroll-mt-24 mb-12"><Sect04AangeborenImmuniteit /></section>
      <section id="sect-05" className="scroll-mt-24 mb-12"><Sect05VerworvenImmuniteit /></section>
      <section id="sect-06" className="scroll-mt-24 mb-12"><Sect06AfweerstoornissenRisicofactoren /></section>
      <section id="sect-07" className="scroll-mt-24 mb-12"><Sect07BronchiectasieënEnCystischeFibrose /></section>
      <section id="sect-08" className="scroll-mt-24 mb-12"><Sect08RokenEnVapen /></section>
      <section id="sect-09" className="scroll-mt-24 mb-12"><Sect09KliniekVanEenPneumonie /></section>
      <section id="sect-10" className="scroll-mt-24 mb-12"><Sect10Hypoxemie /></section>
      <section id="sect-11" className="scroll-mt-24 mb-12"><Sect11DiagnostiekRadiologisch /></section>
      <section id="sect-12" className="scroll-mt-24 mb-12"><Sect12MicrobiologischeDiagnostiek /></section>
      <section id="sect-13" className="scroll-mt-24 mb-12"><Sect13Samenvatting /></section>
    </SummaryLayout>
  )
}

export default Blok9Week4Casus7PathofysiologieKliniekDiagnostiekPneumonieSummary
