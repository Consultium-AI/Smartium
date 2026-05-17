import {
  Activity,
  BookOpen,
  ClipboardList,
  Eye,
  FileText,
  Footprints,
  HeartPulse,
  Microscope,
  Pill,
  Stethoscope,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import { blok10Week5CasusC10DmType2LangetermijnComplicatiesDiabetesPracticeHref } from './Blok10Week5CasusC10DmType2LmeLangetermijnComplicatiesDiabetesOefenvragen'
import Section01BrondocumentTitel from './sections/Section01BrondocumentTitel'
import Section02Leerdoelen from './sections/Section02Leerdoelen'
import Section03Inleiding from './sections/Section03Inleiding'
import Section04EpidemiologieEnZorgkosten from './sections/Section04EpidemiologieEnZorgkosten'
import Section05IndelingLangetermijncomplicaties from './sections/Section05IndelingLangetermijncomplicaties'
import Section06Pathofysiologie from './sections/Section06Pathofysiologie'
import Section07MicrovasculaireComplicaties from './sections/Section07MicrovasculaireComplicaties'
import Section08MacrovasculaireComplicaties from './sections/Section08MacrovasculaireComplicaties'
import Section09DiabetischeVoet from './sections/Section09DiabetischeVoet'
import Section10RisicofactorenPerComplicatie from './sections/Section10RisicofactorenPerComplicatie'
import Section11HbA1c from './sections/Section11HbA1c'
import Section12Preventie from './sections/Section12Preventie'
import Section13Monitoring from './sections/Section13Monitoring'
import Section14KlinischeRelevantie from './sections/Section14KlinischeRelevantie'
import Section15Samenvatting from './sections/Section15Samenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'LME42 – _Langetermijn_complicaties_diabetes', icon: FileText },
  { id: 'sect-02', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-03', title: 'Inleiding: waarom zijn langetermijncomplicaties zo belangrijk?', icon: HeartPulse },
  { id: 'sect-04', title: 'Epidemiologie en zorgkosten', icon: Table2 },
  { id: 'sect-05', title: 'Welke langetermijncomplicaties bestaan er?', icon: ClipboardList },
  { id: 'sect-06', title: 'Pathofysiologie: hoe ontstaan deze complicaties?', icon: Microscope },
  { id: 'sect-07', title: 'Microvasculaire complicaties', icon: Eye },
  { id: 'sect-08', title: 'Macrovasculaire complicaties', icon: Stethoscope },
  { id: 'sect-09', title: 'Diabetische voet: een combinatieprobleem', icon: Footprints },
  { id: 'sect-10', title: 'Risicofactoren en verschijnselen per complicatie', icon: Table2 },
  { id: 'sect-11', title: 'HbA1c: waarom is dit getal zo belangrijk?', icon: Activity },
  { id: 'sect-12', title: 'Preventie: waarom behandelen we diabetes?', icon: Pill },
  { id: 'sect-13', title: 'Monitoring op de poli of bij de huisarts', icon: Stethoscope },
  { id: 'sect-14', title: 'Klinische relevantie', icon: BookOpen },
  { id: 'sect-15', title: 'Samenvatting', icon: BookOpen },
]

const Blok10Week5CasusC10DmType2LmeLangetermijnComplicatiesDiabetesSummary = () => (
  <SummaryLayout
    title="Langetermijncomplicaties van diabetes mellitus"
    moduleKind="lme"
    description="Na het bestuderen van deze stof kun je:"
    caseLabel="Week 5 · Casus C10: DM type 2"
    blokLabel="Blok 10"
    practiceLink={blok10Week5CasusC10DmType2LangetermijnComplicatiesDiabetesPracticeHref}
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <Section01BrondocumentTitel />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <Section02Leerdoelen />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <Section03Inleiding />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <Section04EpidemiologieEnZorgkosten />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <Section05IndelingLangetermijncomplicaties />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <Section06Pathofysiologie />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <Section07MicrovasculaireComplicaties />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <Section08MacrovasculaireComplicaties />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <Section09DiabetischeVoet />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <Section10RisicofactorenPerComplicatie />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <Section11HbA1c />
    </section>
    <section id="sect-12" className="scroll-mt-24 mb-12">
      <Section12Preventie />
    </section>
    <section id="sect-13" className="scroll-mt-24 mb-12">
      <Section13Monitoring />
    </section>
    <section id="sect-14" className="scroll-mt-24 mb-12">
      <Section14KlinischeRelevantie />
    </section>
    <section id="sect-15" className="scroll-mt-24 mb-12">
      <Section15Samenvatting />
    </section>
  </SummaryLayout>
)

export default Blok10Week5CasusC10DmType2LmeLangetermijnComplicatiesDiabetesSummary
