import {
  Activity,
  BookOpen,
  CircleCheck,
  ClipboardList,
  HeartPulse,
  MessageCircle,
  Microscope,
  Stethoscope,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02WatIsEenLymfeklierdissectie from './Sect02WatIsEenLymfeklierdissectie'
import Sect03LymfeklierdissectiesInHetLichaam from './Sect03LymfeklierdissectiesInHetLichaam'
import Sect04VerschillendeDoelen from './Sect04VerschillendeDoelen'
import Sect05Timing from './Sect05Timing'
import Sect06UitvoeringVanDeIngreep from './Sect06UitvoeringVanDeIngreep'
import Sect07RisicosEnTabel3 from './Sect07RisicosEnTabel3'
import Sect08AcuteComplicaties from './Sect08AcuteComplicaties'
import Sect09ChronischeComplicaties from './Sect09ChronischeComplicaties'
import Sect10BehandelingVanComplicaties from './Sect10BehandelingVanComplicaties'
import Sect11WatBetekentDitPraktisch from './Sect11WatBetekentDitPraktisch'
import Sect12MeerwaardeMammacarcinoom from './Sect12MeerwaardeMammacarcinoom'
import Sect13MeerwaardeMelanoom from './Sect13MeerwaardeMelanoom'
import Sect14Samenvatting from './Sect14Samenvatting'

const Blok5Week4Casus8LymfeklierdissectieSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Wat is een lymfeklierdissectie?', icon: Stethoscope },
    { id: 'sect-03', title: 'Lymfeklierdissecties in het lichaam', icon: Activity },
    { id: 'sect-04', title: 'Verschillende doelen', icon: ClipboardList },
    { id: 'sect-05', title: 'Timing', icon: Table2 },
    { id: 'sect-06', title: 'Uitvoering van de ingreep', icon: Microscope },
    { id: 'sect-07', title: "Risico's en complicaties (Tabel 3)", icon: Table2 },
    { id: 'sect-08', title: 'Acute complicaties', icon: HeartPulse },
    { id: 'sect-09', title: 'Chronische complicaties', icon: HeartPulse },
    { id: 'sect-10', title: 'Behandeling van complicaties', icon: Table2 },
    { id: 'sect-11', title: 'Wat betekent dit praktisch?', icon: MessageCircle },
    { id: 'sect-12', title: 'Meerwaarde: mammacarcinoom', icon: Stethoscope },
    { id: 'sect-13', title: 'Melanoom', icon: Stethoscope },
    { id: 'sect-14', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Lymfeklierdissectie"
      description="Een lymfeklierdissectie is een chirurgische ingreep waarbij één of meer lymfeklieren worden verwijderd uit een bepaald anatomisch gebied. Dat gebeurt meestal omdat er sprake is van een verdenking op of aanwezigheid van lymfekliermetastasen."
      caseLabel="Week 4 · Casus 8: Zwelling in de oksel"
      blokLabel="Blok 5"
      practiceLink="/oefenvragen?lme=blok5-week4-casus8-lymfeklierdissectie"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02WatIsEenLymfeklierdissectie />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03LymfeklierdissectiesInHetLichaam />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04VerschillendeDoelen />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05Timing />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06UitvoeringVanDeIngreep />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07RisicosEnTabel3 />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08AcuteComplicaties />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09ChronischeComplicaties />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10BehandelingVanComplicaties />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11WatBetekentDitPraktisch />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12MeerwaardeMammacarcinoom />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13MeerwaardeMelanoom />
      </section>
      <section id="sect-14" className="scroll-mt-24 mb-12">
        <Sect14Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week4Casus8LymfeklierdissectieSummary
