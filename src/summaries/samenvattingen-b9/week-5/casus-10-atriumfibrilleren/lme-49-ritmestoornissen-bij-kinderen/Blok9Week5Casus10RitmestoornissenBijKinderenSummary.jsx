import {
  Activity,
  Baby,
  BookOpen,
  ClipboardList,
  CircleCheck,
  HeartPulse,
  ListChecks,
  Microscope,
  Pill,
  ShieldAlert,
  Stethoscope,
  Table2,
  Zap,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02EcgEnHartfrequentieBijKinderen from './Sect02EcgEnHartfrequentieBijKinderen'
import Sect03SinustachycardieOfCirkeltachycardie from './Sect03SinustachycardieOfCirkeltachycardie'
import Sect04WelkeTachyaritmieenZieJeBijKinderen from './Sect04WelkeTachyaritmieenZieJeBijKinderen'
import Sect05WaaromPresenterenKinderenAnders from './Sect05WaaromPresenterenKinderenAnders'
import Sect06WolffParkinsonWhite from './Sect06WolffParkinsonWhite'
import Sect07BehandelingVanCirkeltachycardie from './Sect07BehandelingVanCirkeltachycardie'
import Sect08OnderhoudEnVerdereBehandeling from './Sect08OnderhoudEnVerdereBehandeling'
import Sect09SpecifiekeRitmestoornissenEctopischeAtrialeTachycardie from './Sect09SpecifiekeRitmestoornissenEctopischeAtrialeTachycardie'
import Sect10Atriumflutter from './Sect10Atriumflutter'
import Sect11Atriumfibrilleren from './Sect11Atriumfibrilleren'
import Sect12VentriculaireTachycardie from './Sect12VentriculaireTachycardie'
import Sect13LangQtSyndroom from './Sect13LangQtSyndroom'
import Sect14Ventrikelfibrilleren from './Sect14Ventrikelfibrilleren'
import Sect15KlinischeVoorbeelden from './Sect15KlinischeVoorbeelden'
import Sect16Samenvatting from './Sect16Samenvatting'

const Blok9Week5Casus10RitmestoornissenBijKinderenSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'ECG en hartfrequentie bij kinderen', icon: Activity },
    { id: 'sect-03', title: 'Sinustachycardie of cirkeltachycardie?', icon: Table2 },
    { id: 'sect-04', title: 'Welke tachyaritmieën zie je bij kinderen?', icon: ListChecks },
    { id: 'sect-05', title: 'Waarom presenteren kinderen anders dan volwassenen?', icon: Baby },
    { id: 'sect-06', title: 'Wolff-Parkinson-White en de delta-golf', icon: Zap },
    { id: 'sect-07', title: 'Behandeling van cirkeltachycardie', icon: Pill },
    { id: 'sect-08', title: 'Onderhoud en verdere behandeling', icon: Stethoscope },
    { id: 'sect-09', title: 'Specifieke ritmestoornissen en ECG-beelden', icon: Microscope },
    { id: 'sect-10', title: 'Atriumflutter', icon: HeartPulse },
    { id: 'sect-11', title: 'Atriumfibrilleren', icon: HeartPulse },
    { id: 'sect-12', title: 'Ventriculaire tachycardie', icon: Zap },
    { id: 'sect-13', title: 'Lang QT-syndroom', icon: Activity },
    { id: 'sect-14', title: 'Ventrikelfibrilleren', icon: ShieldAlert },
    { id: 'sect-15', title: 'Klinische voorbeelden die je moet herkennen', icon: ClipboardList },
    { id: 'sect-16', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Ritmestoornissen bij kinderen"
      description="Bij kinderen is het belangrijk om de hartfrequentie altijd op het ECG te bepalen. Dat is niet zomaar een detail: de cardiac output van een kind hangt voor een groot deel af van de hartfrequentie, omdat het slagvolume kleiner is dan bij volwassenen."
      caseLabel="Week 5 · Casus 10: Atriumfibrilleren"
      blokLabel="Blok 9"
      practiceLink="/oefenvragen?lme=blok9-week5-casus10-ritmestoornissen-bij-kinderen"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02EcgEnHartfrequentieBijKinderen />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03SinustachycardieOfCirkeltachycardie />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04WelkeTachyaritmieenZieJeBijKinderen />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05WaaromPresenterenKinderenAnders />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06WolffParkinsonWhite />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07BehandelingVanCirkeltachycardie />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08OnderhoudEnVerdereBehandeling />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09SpecifiekeRitmestoornissenEctopischeAtrialeTachycardie />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10Atriumflutter />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11Atriumfibrilleren />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12VentriculaireTachycardie />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13LangQtSyndroom />
      </section>
      <section id="sect-14" className="scroll-mt-24 mb-12">
        <Sect14Ventrikelfibrilleren />
      </section>
      <section id="sect-15" className="scroll-mt-24 mb-12">
        <Sect15KlinischeVoorbeelden />
      </section>
      <section id="sect-16" className="scroll-mt-24 mb-12">
        <Sect16Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok9Week5Casus10RitmestoornissenBijKinderenSummary
