import {
  BookOpen,
  LayoutGrid,
  Columns2,
  FlaskConical,
  Stethoscope,
  AlertTriangle,
  Syringe,
  Activity,
  HeartPulse,
  ClipboardList,
  Layers,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './sections/Sect01Leerdoelen'
import Sect02HetGrotePlaatje from './sections/Sect02HetGrotePlaatje'
import Sect03DkaEnHhsVerschil from './sections/Sect03DkaEnHhsVerschil'
import Sect04PathofysiologieDkaEnHhs from './sections/Sect04PathofysiologieDkaEnHhs'
import Sect05DiagnoseDkaEnHhs from './sections/Sect05DiagnoseDkaEnHhs'
import Sect06OorzakenEnUitlokkendeFactoren from './sections/Sect06OorzakenEnUitlokkendeFactoren'
import Sect07BehandelingDkaEnHhs from './sections/Sect07BehandelingDkaEnHhs'
import Sect08Hypoglykemie from './sections/Sect08Hypoglykemie'
import Sect09Casuistiek from './sections/Sect09Casuistiek'
import Sect10SamenvattingVanDeKern from './sections/Sect10SamenvattingVanDeKern'
import Sect11Samenvatting from './sections/Sect11Samenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-02', title: 'Acute ontregelingen bij diabetes: het grote plaatje', icon: LayoutGrid },
  { id: 'sect-03', title: 'DKA en HHS: wat is het verschil?', icon: Columns2 },
  { id: 'sect-04', title: 'Pathofysiologie van DKA en HHS', icon: FlaskConical },
  { id: 'sect-05', title: 'Diagnose van DKA en HHS', icon: Stethoscope },
  { id: 'sect-06', title: 'Oorzaken en uitlokkende factoren', icon: AlertTriangle },
  { id: 'sect-07', title: 'Behandeling van DKA en HHS', icon: Syringe },
  { id: 'sect-08', title: 'Hypoglykemie', icon: HeartPulse },
  { id: 'sect-09', title: 'Casuïstiek: hoe denk je klinisch?', icon: Activity },
  { id: 'sect-10', title: 'Samenvatting van de kern', icon: Layers },
  { id: 'sect-11', title: 'Samenvatting', icon: ClipboardList },
]

const Blok10Week3CasusC06DmType1LmeAcuteOntregelingenDm1Summary = () => (
  <SummaryLayout
    title="Acute ontregelingen bij diabetes mellitus type 1"
    moduleKind="lme"
    description={
      <>
        Bij diabetes werkt het hormoon insuline niet voldoende. Dat kan twee hoofdoorzaken hebben. Soms is er een{' '}
        <strong className="text-slate-800 dark:text-slate-100">absoluut insulinetekort</strong>, omdat de
        insuline-producerende cellen in de eilandjes van Langerhans zijn vernietigd; dat past bij{' '}
        <strong className="text-slate-800 dark:text-slate-100">diabetes type 1</strong>. Soms is er juist{' '}
        <strong className="text-slate-800 dark:text-slate-100">verminderde insulinegevoeligheid van weefsels</strong>; dat heet ook wel een relatief insulinetekort en past bij{' '}
        <strong className="text-slate-800 dark:text-slate-100">diabetes type 2</strong> en{' '}
        <strong className="text-slate-800 dark:text-slate-100">diabetes gravidarum</strong>.
      </>
    }
    caseLabel="Week 3 · Casus C06: DM type 1"
    blokLabel="Blok 10"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <Sect01Leerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <Sect02HetGrotePlaatje />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <Sect03DkaEnHhsVerschil />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <Sect04PathofysiologieDkaEnHhs />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <Sect05DiagnoseDkaEnHhs />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <Sect06OorzakenEnUitlokkendeFactoren />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <Sect07BehandelingDkaEnHhs />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <Sect08Hypoglykemie />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <Sect09Casuistiek />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <Sect10SamenvattingVanDeKern />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <Sect11Samenvatting />
    </section>
  </SummaryLayout>
)

export default Blok10Week3CasusC06DmType1LmeAcuteOntregelingenDm1Summary
