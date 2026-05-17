import {
  Activity,
  BookOpen,
  ClipboardList,
  FileText,
  FlaskConical,
  HeartPulse,
  Lightbulb,
  Microscope,
  Pill,
  Scan,
  Stethoscope,
  Syringe,
  Table2,
  Target,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './sections/Sect01Leerdoelen'
import Sect02WatIsLevercirrose from './sections/Sect02WatIsLevercirrose'
import Sect03OorzakenVanLevercirrose from './sections/Sect03OorzakenVanLevercirrose'
import Sect04OntwikkelingVanFibroseEnCirrose from './sections/Sect04OntwikkelingVanFibroseEnCirrose'
import Sect05PathofysiologieVanPortaleHypertensie from './sections/Sect05PathofysiologieVanPortaleHypertensie'
import Sect06DiagnostiekVanCirrose from './sections/Sect06DiagnostiekVanCirrose'
import Sect07LeverfunctiesEnFibroscan from './sections/Sect07LeverfunctiesEnFibroscan'
import Sect08SymptomenVanCirrose from './sections/Sect08SymptomenVanCirrose'
import Sect09ComplicatiesVanCirrose from './sections/Sect09ComplicatiesVanCirrose'
import Sect10Ascites from './sections/Sect10Ascites'
import Sect11DiagnostischePunctieVanAscites from './sections/Sect11DiagnostischePunctieVanAscites'
import Sect12SpontaneBacterielePeritonitis from './sections/Sect12SpontaneBacterielePeritonitis'
import Sect13HepatischeEncefalopathie from './sections/Sect13HepatischeEncefalopathie'
import Sect14VaricesbloedingEnPortaleHypertensie from './sections/Sect14VaricesbloedingEnPortaleHypertensie'
import Sect15Navelbreuk from './sections/Sect15Navelbreuk'
import Sect16DiagnoseVanCirroseSamenvattend from './sections/Sect16DiagnoseVanCirroseSamenvattend'
import Sect17PrognoseEnLevertransplantatie from './sections/Sect17PrognoseEnLevertransplantatie'
import Sect18Samenvatting from './sections/Sect18Samenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-02', title: 'Wat is levercirrose?', icon: Lightbulb },
  { id: 'sect-03', title: 'Oorzaken · Tabel 1', icon: ClipboardList },
  { id: 'sect-04', title: 'Ontwikkeling van fibrose en cirrose', icon: Activity },
  { id: 'sect-05', title: 'Pathofysiologie van portale hypertensie', icon: HeartPulse },
  { id: 'sect-06', title: 'Diagnostiek · Tabellen 2 en 3', icon: Microscope },
  { id: 'sect-07', title: 'Leverfuncties en Fibroscan', icon: FlaskConical },
  { id: 'sect-08', title: 'Symptomen van cirrose', icon: Stethoscope },
  { id: 'sect-09', title: 'Complicaties · Tabel overzicht', icon: Table2 },
  { id: 'sect-10', title: 'Ascites', icon: Syringe },
  { id: 'sect-11', title: 'Diagnostische punctie van ascites', icon: Scan },
  { id: 'sect-12', title: 'Spontane bacteriële peritonitis', icon: Pill },
  { id: 'sect-13', title: 'Hepatische encefalopathie', icon: Target },
  { id: 'sect-14', title: 'Varicesbloeding en portale hypertensie', icon: Activity },
  { id: 'sect-15', title: 'Navelbreuk', icon: Stethoscope },
  { id: 'sect-16', title: 'Diagnose van cirrose: samenvattend', icon: ClipboardList },
  { id: 'sect-17', title: 'Prognose en levertransplantatie', icon: FileText },
  { id: 'sect-18', title: 'Samenvatting', icon: FileText },
]

const Blok10Week4CasusC08LevercirroseLmeLevercirroseEnComplicatiesSummary = () => (
  <SummaryLayout
    title="Levercirrose en complicaties"
    moduleKind="lme"
    description="Levercirrose is het gevolg van necrose van levercellen, gevolgd door fibrose en nodulaire transformatie."
    caseLabel="Week 4 · Casus C08: Levercirrose"
    blokLabel="Blok 10"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <Sect01Leerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <Sect02WatIsLevercirrose />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <Sect03OorzakenVanLevercirrose />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <Sect04OntwikkelingVanFibroseEnCirrose />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <Sect05PathofysiologieVanPortaleHypertensie />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <Sect06DiagnostiekVanCirrose />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <Sect07LeverfunctiesEnFibroscan />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <Sect08SymptomenVanCirrose />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <Sect09ComplicatiesVanCirrose />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <Sect10Ascites />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <Sect11DiagnostischePunctieVanAscites />
    </section>
    <section id="sect-12" className="scroll-mt-24 mb-12">
      <Sect12SpontaneBacterielePeritonitis />
    </section>
    <section id="sect-13" className="scroll-mt-24 mb-12">
      <Sect13HepatischeEncefalopathie />
    </section>
    <section id="sect-14" className="scroll-mt-24 mb-12">
      <Sect14VaricesbloedingEnPortaleHypertensie />
    </section>
    <section id="sect-15" className="scroll-mt-24 mb-12">
      <Sect15Navelbreuk />
    </section>
    <section id="sect-16" className="scroll-mt-24 mb-12">
      <Sect16DiagnoseVanCirroseSamenvattend />
    </section>
    <section id="sect-17" className="scroll-mt-24 mb-12">
      <Sect17PrognoseEnLevertransplantatie />
    </section>
    <section id="sect-18" className="scroll-mt-24 mb-12">
      <Sect18Samenvatting />
    </section>
  </SummaryLayout>
)

export default Blok10Week4CasusC08LevercirroseLmeLevercirroseEnComplicatiesSummary
