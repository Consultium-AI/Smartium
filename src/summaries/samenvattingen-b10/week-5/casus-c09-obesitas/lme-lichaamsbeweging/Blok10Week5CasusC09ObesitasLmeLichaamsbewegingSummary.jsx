import {
  Activity,
  BookOpen,
  ClipboardList,
  FileText,
  HeartPulse,
  ListChecks,
  Pill,
  Scale,
  Stethoscope,
  Table2,
  Utensils,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import { blok10Week5CasusC09ObesitasLichaamsbewegingPracticeHref } from './Blok10Week5CasusC09ObesitasLichaamsbewegingOefenvragen'
import Section01BrondocumentTitel from './sections/Section01BrondocumentTitel'
import Section02Leerdoelen from './sections/Section02Leerdoelen'
import Section03ObesitasAlsChronischeZiekte from './sections/Section03ObesitasAlsChronischeZiekte'
import Section04OorzakenEnTabel1 from './sections/Section04OorzakenEnTabel1'
import Section05BariatrischeVormenEnTabel2 from './sections/Section05BariatrischeVormenEnTabel2'
import Section06GewichtsverliesEnTabel3 from './sections/Section06GewichtsverliesEnTabel3'
import Section07WatLevertBariatrieNogMeer from './sections/Section07WatLevertBariatrieNogMeer'
import Section08NietAlleenDoorAfvallen from './sections/Section08NietAlleenDoorAfvallen'
import Section09LeefregelsVoedingBewegingZwangerschap from './sections/Section09LeefregelsVoedingBewegingZwangerschap'
import Section10RisicosComplicatiesEnTabel4 from './sections/Section10RisicosComplicatiesEnTabel4'
import Section11DumpingEnVoedingsadvies from './sections/Section11DumpingEnVoedingsadvies'
import Section12NutrientenEnTabel5 from './sections/Section12NutrientenEnTabel5'
import Section13Indicaties from './sections/Section13Indicaties'
import Section14ContraIndicaties from './sections/Section14ContraIndicaties'
import Section15Samenvatting from './sections/Section15Samenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'LME40 – _Lichaamsbeweging', icon: FileText },
  { id: 'sect-02', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-03', title: 'Obesitas als chronische ziekte', icon: HeartPulse },
  { id: 'sect-04', title: 'Oorzaken van obesitas', icon: Table2 },
  { id: 'sect-05', title: 'Bariatrische chirurgie: welke vormen zijn er?', icon: Stethoscope },
  { id: 'sect-06', title: 'Hoe werkt gewichtsverlies na bariatrie?', icon: Activity },
  { id: 'sect-07', title: 'Wat levert bariatrie nog meer op?', icon: ListChecks },
  { id: 'sect-08', title: 'Niet alleen door afvallen', icon: Scale },
  { id: 'sect-09', title: 'Leefregels na bariatrische chirurgie', icon: Utensils },
  { id: 'sect-10', title: 'Risico’s en complicaties', icon: Stethoscope },
  { id: 'sect-11', title: 'Dumpingklachten en voedingsadvies', icon: Pill },
  { id: 'sect-12', title: 'Nutriëntendeficiënties en supplementen', icon: ClipboardList },
  { id: 'sect-13', title: 'Indicaties voor bariatrische chirurgie', icon: ListChecks },
  { id: 'sect-14', title: 'Contra-indicaties', icon: ClipboardList },
  { id: 'sect-15', title: 'Samenvatting', icon: BookOpen },
]

const Blok10Week5CasusC09ObesitasLmeLichaamsbewegingSummary = () => (
  <SummaryLayout
    title="Lichaamsbeweging"
    moduleKind="lme"
    description="Na het bestuderen van deze stof kun je:"
    caseLabel="Week 5 · Casus C09: Obesitas"
    blokLabel="Blok 10"
    practiceLink={blok10Week5CasusC09ObesitasLichaamsbewegingPracticeHref}
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <Section01BrondocumentTitel />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <Section02Leerdoelen />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <Section03ObesitasAlsChronischeZiekte />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <Section04OorzakenEnTabel1 />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <Section05BariatrischeVormenEnTabel2 />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <Section06GewichtsverliesEnTabel3 />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <Section07WatLevertBariatrieNogMeer />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <Section08NietAlleenDoorAfvallen />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <Section09LeefregelsVoedingBewegingZwangerschap />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <Section10RisicosComplicatiesEnTabel4 />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <Section11DumpingEnVoedingsadvies />
    </section>
    <section id="sect-12" className="scroll-mt-24 mb-12">
      <Section12NutrientenEnTabel5 />
    </section>
    <section id="sect-13" className="scroll-mt-24 mb-12">
      <Section13Indicaties />
    </section>
    <section id="sect-14" className="scroll-mt-24 mb-12">
      <Section14ContraIndicaties />
    </section>
    <section id="sect-15" className="scroll-mt-24 mb-12">
      <Section15Samenvatting />
    </section>
  </SummaryLayout>
)

export default Blok10Week5CasusC09ObesitasLmeLichaamsbewegingSummary
