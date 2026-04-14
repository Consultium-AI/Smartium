import {
  Activity,
  BookOpen,
  CheckCircle,
  GitBranch,
  HeartPulse,
  Layers,
  ListChecks,
  MessageCircle,
  Moon,
  Scale,
  User,
  Wine,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02WaaromBelangrijk from './Sect02WaaromBelangrijk'
import Sect03AFCareModel from './Sect03AFCareModel'
import Sect04Rob from './Sect04Rob'
import Sect05Alcohol from './Sect05Alcohol'
import Sect06Gewichtsverlies from './Sect06Gewichtsverlies'
import Sect07Beweging from './Sect07Beweging'
import Sect08StilleRisicos from './Sect08StilleRisicos'
import Sect09SharedDecisionMaking from './Sect09SharedDecisionMaking'
import Sect10AtrialeRemodeling from './Sect10AtrialeRemodeling'
import Sect11ResultaatBijRob from './Sect11ResultaatBijRob'
import Sect12Samenvatting from './Sect12Samenvatting'

const Blok9Week5Casus10LeefstijlAlsTherapieVoorAtriumfibrillerenSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Atriumfibrilleren en leefstijl: waarom dit zo belangrijk is', icon: HeartPulse },
    { id: 'sect-03', title: 'Het AF-CARE model en de C van risicofactoren', icon: Layers },
    { id: 'sect-04', title: 'Rob: leefstijl als onderdeel van de behandeling', icon: User },
    { id: 'sect-05', title: 'Alcohol: de “gezellige” boosdoener', icon: Wine },
    { id: 'sect-06', title: 'Gewichtsverlies: meer dan een paar kilo', icon: Scale },
    { id: 'sect-07', title: 'Beweging: de U-curve', icon: Activity },
    { id: 'sect-08', title: 'De stille risico’s: bloeddruk en slaapapneu', icon: Moon },
    { id: 'sect-09', title: 'Shared decision making: samen kiezen wat haalbaar is', icon: MessageCircle },
    { id: 'sect-10', title: 'Wat gebeurt er als je niets doet? Atrial remodeling', icon: GitBranch },
    { id: 'sect-11', title: 'Het resultaat bij Rob', icon: CheckCircle },
    { id: 'sect-12', title: 'Samenvatting', icon: ListChecks },
  ]

  return (
    <SummaryLayout
      title="Leefstijl als therapie voor atriumfibrilleren"
      description="Atriumfibrilleren is een hartritmestoornis waarbij het hart onregelmatig en vaak te snel klopt. De klachten kunnen verschillen, maar passen vaak bij hartkloppingen, vermoeidheid en duizeligheid. Soms voelt een patiënt zich vooral “niet goed”, zonder dat de klachten meteen specifiek lijken."
      caseLabel="Week 5 · Casus 10: Atriumfibrilleren"
      blokLabel="Blok 9"
      practiceLink="/oefenvragen?lme=blok9-week5-casus10-leefstijl-als-therapie-voor-atriumfibrilleren"
      tableOfContents={tableOfContents}
      summaryVariantToggle={{
        activeLmeId: 'blok9-week5-casus10-leefstijl-als-therapie-voor-atriumfibrilleren',
        variants: [
          { id: 'blok9-week5-casus10-leefstijl-als-therapie-voor-atriumfibrilleren', label: 'Uitgebreid' },
          { id: 'blok9-week5-casus10-leefstijl-als-therapie-voor-atriumfibrilleren-mini', label: 'Kort' },
        ],
      }}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02WaaromBelangrijk />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03AFCareModel />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04Rob />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05Alcohol />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06Gewichtsverlies />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07Beweging />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08StilleRisicos />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09SharedDecisionMaking />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10AtrialeRemodeling />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11ResultaatBijRob />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok9Week5Casus10LeefstijlAlsTherapieVoorAtriumfibrillerenSummary
