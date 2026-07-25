// Auto-generated SSInterne samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-ssinterne-samenvattingen.mjs --module pneumonie
import {
  Activity,
  BookOpen,
  CircleCheck,
  FileText,
  HeartPulse,
  Layers,
  Microscope,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../components/SummaryLayout'
import SectLeerdoelen from './sections/SectLeerdoelen'
import SectPneumonieHetKlinischeBeeld from './sections/SectPneumonieHetKlinischeBeeld'
import SectCasusAlsUitgangspunt from './sections/SectCasusAlsUitgangspunt'
import SectDifferentiaaldiagnoseBijKoortsEnDysp from './sections/SectDifferentiaaldiagnoseBijKoortsEnDysp'
import SectEersteOnderzoekBijVerdenkingPneumoni from './sections/SectEersteOnderzoekBijVerdenkingPneumoni'
import SectBelangrijkAanvullendOnderzoek from './sections/SectBelangrijkAanvullendOnderzoek'
import SectLaboratoriumEnArteriLeBloedgas from './sections/SectLaboratoriumEnArteriLeBloedgas'
import SectXThoraxBijPneumonie from './sections/SectXThoraxBijPneumonie'
import SectTabel2XThoraxpatronenEnBetekenis from './sections/SectTabel2XThoraxpatronenEnBetekenis'
import SectVanViralePneumonieNaarSuperinfectie from './sections/SectVanViralePneumonieNaarSuperinfectie'
import SectTabel3VerwekkerEnGrambeeld from './sections/SectTabel3VerwekkerEnGrambeeld'
import SectWelkeVirussenEnBacteriNPassenHierbij from './sections/SectWelkeVirussenEnBacteriNPassenHierbij'
import SectBehandelingVanErnstigeCap from './sections/SectBehandelingVanErnstigeCap'
import SectTabel4BehandelingInDezeCasus from './sections/SectTabel4BehandelingInDezeCasus'
import SectDefinitieveUitslagenEnEinddiagnose from './sections/SectDefinitieveUitslagenEnEinddiagnose'
import SectKlinischeKern from './sections/SectKlinischeKern'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "Pneumonie: het klinische beeld", icon: FileText },
    { id: 'sect-03', title: "Casus als uitgangspunt", icon: Activity },
    { id: 'sect-04', title: "Differentiaaldiagnose bij koorts en dyspnoe", icon: FileText },
    { id: 'sect-05', title: "Eerste onderzoek bij verdenking pneumonie", icon: Microscope },
    { id: 'sect-06', title: "Belangrijk aanvullend onderzoek", icon: Microscope },
    { id: 'sect-07', title: "Laboratorium en arteriële bloedgas", icon: FileText },
    { id: 'sect-08', title: "X-thorax bij pneumonie", icon: FileText },
    { id: 'sect-09', title: "Tabel 2. X-thoraxpatronen en betekenis", icon: Table2 },
    { id: 'sect-10', title: "Van virale pneumonie naar superinfectie", icon: FileText },
    { id: 'sect-11', title: "Tabel 3. Verwekker en Grambeeld", icon: Table2 },
    { id: 'sect-12', title: "Welke virussen en bacteriën passen hierbij?", icon: FileText },
    { id: 'sect-13', title: "Behandeling van ernstige CAP", icon: HeartPulse },
    { id: 'sect-14', title: "Tabel 4. Behandeling in deze casus", icon: Table2 },
    { id: 'sect-15', title: "Definitieve uitslagen en einddiagnose", icon: FileText },
    { id: 'sect-16', title: "Klinische kern", icon: FileText },
    { id: 'sect-17', title: "Samenvatting", icon: CircleCheck },
]

const SsinterneWeek3PneumonieSummary = () => (
  <SummaryLayout
    title="Pneumonie"
    description="Pneumonie betekent een infectie van het longweefsel. Koorts, hoesten en dyspnoe zijn daarbij veelvoorkomende klachten. Het lastige is dat deze klachten niet alleen door een infectie kunnen komen, maar ook door andere aandoeningen, zoals…"
    caseLabel="Week 3 · Pneumonie"
    blokLabel="Interne Geneeskunde"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectPneumonieHetKlinischeBeeld />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectCasusAlsUitgangspunt />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectDifferentiaaldiagnoseBijKoortsEnDysp />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectEersteOnderzoekBijVerdenkingPneumoni />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectBelangrijkAanvullendOnderzoek />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectLaboratoriumEnArteriLeBloedgas />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SectXThoraxBijPneumonie />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SectTabel2XThoraxpatronenEnBetekenis />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <SectVanViralePneumonieNaarSuperinfectie />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <SectTabel3VerwekkerEnGrambeeld />
    </section>
    <section id="sect-12" className="scroll-mt-24 mb-12">
      <SectWelkeVirussenEnBacteriNPassenHierbij />
    </section>
    <section id="sect-13" className="scroll-mt-24 mb-12">
      <SectBehandelingVanErnstigeCap />
    </section>
    <section id="sect-14" className="scroll-mt-24 mb-12">
      <SectTabel4BehandelingInDezeCasus />
    </section>
    <section id="sect-15" className="scroll-mt-24 mb-12">
      <SectDefinitieveUitslagenEnEinddiagnose />
    </section>
    <section id="sect-16" className="scroll-mt-24 mb-12">
      <SectKlinischeKern />
    </section>
    <section id="sect-17" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default SsinterneWeek3PneumonieSummary
