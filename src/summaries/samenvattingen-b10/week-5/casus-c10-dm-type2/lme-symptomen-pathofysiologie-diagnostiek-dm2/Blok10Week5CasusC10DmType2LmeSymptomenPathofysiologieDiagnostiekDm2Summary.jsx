import {
  Activity,
  BookOpen,
  ClipboardList,
  FileText,
  HeartPulse,
  ListChecks,
  Stethoscope,
  Table2,
  TestTube2,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import { blok10Week5CasusC10DmType2SymptomenPathofysiologieDiagnostiekDm2PracticeHref } from './Blok10Week5CasusC10DmType2LmeSymptomenPathofysiologieDiagnostiekDm2Oefenvragen'
import Section01BrondocumentTitel from './sections/Section01BrondocumentTitel'
import Section02Leerdoelen from './sections/Section02Leerdoelen'
import Section03LichamelijkeBeweging from './sections/Section03LichamelijkeBeweging'
import Section04IntensiteitVanBewegen from './sections/Section04IntensiteitVanBewegen'
import Section05DoelenVanBewegen from './sections/Section05DoelenVanBewegen'
import Section06BeweegrichtlijnenPerLeeftijd from './sections/Section06BeweegrichtlijnenPerLeeftijd'
import Section07Dm2Insulineresistentie from './sections/Section07Dm2Insulineresistentie'
import Section08NormaleGlucoseregulatie from './sections/Section08NormaleGlucoseregulatie'
import Section09Risicofactoren from './sections/Section09Risicofactoren'
import Section10Prediabetes from './sections/Section10Prediabetes'
import Section11SymptomenDm2 from './sections/Section11SymptomenDm2'
import Section12DiagnoseEnScreening from './sections/Section12DiagnoseEnScreening'
import Section13BehandelingEnMonitoring from './sections/Section13BehandelingEnMonitoring'
import Section14KlinischeToepassing from './sections/Section14KlinischeToepassing'
import Section15Samenvatting from './sections/Section15Samenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'LME41 – _Symptomen_pathofysiologie_diagnostiek_DM2', icon: FileText },
  { id: 'sect-02', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-03', title: 'Lichamelijke beweging', icon: Activity },
  { id: 'sect-04', title: 'Intensiteit van bewegen', icon: Table2 },
  { id: 'sect-05', title: 'Doelen van bewegen', icon: ListChecks },
  { id: 'sect-06', title: 'Beweegrichtlijnen per leeftijd', icon: HeartPulse },
  { id: 'sect-07', title: 'DM2: van insulineresistentie naar diabetes', icon: Stethoscope },
  { id: 'sect-08', title: 'Van normale glucoseregulatie naar DM2', icon: Stethoscope },
  { id: 'sect-09', title: 'Risicofactoren voor DM2', icon: ClipboardList },
  { id: 'sect-10', title: 'Prediabetes', icon: TestTube2 },
  { id: 'sect-11', title: 'Symptomen van DM2', icon: Stethoscope },
  { id: 'sect-12', title: 'Diagnose en screening', icon: TestTube2 },
  { id: 'sect-13', title: 'Behandeling en monitoring', icon: HeartPulse },
  { id: 'sect-14', title: 'Klinische toepassing', icon: BookOpen },
  { id: 'sect-15', title: 'Samenvatting', icon: BookOpen },
]

const Blok10Week5CasusC10DmType2LmeSymptomenPathofysiologieDiagnostiekDm2Summary = () => (
  <SummaryLayout
    title="Symptomen, pathofysiologie en diagnostiek van diabetes mellitus type 2"
    moduleKind="lme"
    description="Na het bestuderen van deze stof kun je:"
    caseLabel="Week 5 · Casus C10: DM type 2"
    blokLabel="Blok 10"
    practiceLink={blok10Week5CasusC10DmType2SymptomenPathofysiologieDiagnostiekDm2PracticeHref}
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <Section01BrondocumentTitel />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <Section02Leerdoelen />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <Section03LichamelijkeBeweging />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <Section04IntensiteitVanBewegen />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <Section05DoelenVanBewegen />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <Section06BeweegrichtlijnenPerLeeftijd />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <Section07Dm2Insulineresistentie />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <Section08NormaleGlucoseregulatie />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <Section09Risicofactoren />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <Section10Prediabetes />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <Section11SymptomenDm2 />
    </section>
    <section id="sect-12" className="scroll-mt-24 mb-12">
      <Section12DiagnoseEnScreening />
    </section>
    <section id="sect-13" className="scroll-mt-24 mb-12">
      <Section13BehandelingEnMonitoring />
    </section>
    <section id="sect-14" className="scroll-mt-24 mb-12">
      <Section14KlinischeToepassing />
    </section>
    <section id="sect-15" className="scroll-mt-24 mb-12">
      <Section15Samenvatting />
    </section>
  </SummaryLayout>
)

export default Blok10Week5CasusC10DmType2LmeSymptomenPathofysiologieDiagnostiekDm2Summary
