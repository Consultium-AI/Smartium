import {
  Activity,
  BookOpen,
  CircleCheck,
  FileText,
  HeartPulse,
  Layers,
  Microscope,
  Pill,
  Stethoscope,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import SummarySectionHeader from './SummarySectionHeader'
import SectLeerdoelen from './sections/SectLeerdoelen'
import SectCasusEnKlinischeContext from './sections/SectCasusEnKlinischeContext'
import SectEenBorstafwijkingKanOpVerschillendeM from './sections/SectEenBorstafwijkingKanOpVerschillendeM'
import SectInDezeCasusZijnVooralDeVolgendePunte from './sections/SectInDezeCasusZijnVooralDeVolgendePunte'
import SectAandachtsvraag from './sections/SectAandachtsvraag'
import SectKlinischRedeneren from './sections/SectKlinischRedeneren'
import SectVanKlachtNaarBeleid from './sections/SectVanKlachtNaarBeleid'
import SectDeRedeneringVerlooptInStappen from './sections/SectDeRedeneringVerlooptInStappen'
import SectBijEenKnobbelInDeBorstDenkJeInElkGev from './sections/SectBijEenKnobbelInDeBorstDenkJeInElkGev'
import SectBeeldvorming from './sections/SectBeeldvorming'
import SectMammografie from './sections/SectMammografie'
import SectBelangrijkeBegrippenHierbijZijn from './sections/SectBelangrijkeBegrippenHierbijZijn'
import SectEchografie from './sections/SectEchografie'
import SectMri from './sections/SectMri'
import SectTabel1BeeldvormingBijVerdenkingOpBor from './sections/SectTabel1BeeldvormingBijVerdenkingOpBor'
import SectWeefseldiagnostiek from './sections/SectWeefseldiagnostiek'
import SectBijBorstkankerZijnDeVolgendeBiomarke from './sections/SectBijBorstkankerZijnDeVolgendeBiomarke'
import SectInvasiefDuctaalMammacarcinoom from './sections/SectInvasiefDuctaalMammacarcinoom'
import SectHer2EnDeHallmarksOfCancer from './sections/SectHer2EnDeHallmarksOfCancer'
import SectHer2EnOokErPrPassenBijDeHallmark from './sections/SectHer2EnOokErPrPassenBijDeHallmark'
import SectTabel2Her2Classificatie from './sections/SectTabel2Her2Classificatie'
import SectBijEen2UitslagWordtAanvullendOnderzo from './sections/SectBijEen2UitslagWordtAanvullendOnderzo'
import SectPrognostischeEnPredictieveBetekenis from './sections/SectPrognostischeEnPredictieveBetekenis'
import SectEenBiomarkerKan from './sections/SectEenBiomarkerKan'
import SectBehandelingEnBeleid from './sections/SectBehandelingEnBeleid'
import SectDeBehandelingBestaatUitEenCombinatie from './sections/SectDeBehandelingBestaatUitEenCombinatie'
import SectChirurgie from './sections/SectChirurgie'
import SectErZijnTweeHoofdopties from './sections/SectErZijnTweeHoofdopties'
import SectSysteemtherapieKanBestaanUit from './sections/SectSysteemtherapieKanBestaanUit'
import SectDeKeuzeHangtAfVanDeBiomarkersEnVanDe from './sections/SectDeKeuzeHangtAfVanDeBiomarkersEnVanDe'
import SectRadiotherapie from './sections/SectRadiotherapie'
import SectBelangrijkIs from './sections/SectBelangrijkIs'
import SectTabel3GlobaleBehandellogicaBijGeloka from './sections/SectTabel3GlobaleBehandellogicaBijGeloka'
import SectBestralingsplanning from './sections/SectBestralingsplanning'
import SectKlinischeSamenvattingVanDeCasus from './sections/SectKlinischeSamenvattingVanDeCasus'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-02', title: 'Casus en klinische context', icon: Activity },
  { id: 'sect-03', title: 'Belangrijke klachten en bevindingen', icon: Stethoscope },
  { id: 'sect-04', title: 'Klinisch redeneren', icon: Layers },
  { id: 'sect-05', title: 'Differentiaaldiagnose', icon: Table2 },
  { id: 'sect-06', title: 'Diagnostiek', icon: Microscope },
  { id: 'sect-07', title: 'Belangrijke ziektebeelden', icon: HeartPulse },
  { id: 'sect-08', title: 'Behandeling en beleid', icon: Pill },
  { id: 'sect-09', title: 'Bestralingsplanning', icon: FileText },
  { id: 'sect-10', title: 'Klinische samenvatting', icon: Stethoscope },
  { id: 'sect-11', title: 'Samenvatting', icon: CircleCheck },
]

const SectionDivider = () => (
  <hr className="border-slate-200 dark:border-slate-700 my-10" />
)

const Blok5Week2Casus4CasusbijeenkomstSummary = () => (
  <SummaryLayout
    title="Donkere vlek"
    moduleKind="casusbijeenkomst"
    description="De casusbijeenkomst draait om een jonge vrouw met een palpabele borstknobbel en familiale belasting: diagnostiek bij dicht borstweefsel, histologie versus cytologie, en curatieve behandeling van HER2-positief mammacarcinoom."
    caseLabel="Week 2 · Casus 4: Donkere vlek"
    blokLabel="Blok 5"
    practiceLink="/oefenvragen?lme=blok5-week2-casus4-casusbijeenkomst"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={BookOpen} title="Leerdoelen" tone="primary" />
      <SectLeerdoelen />
    </section>

    <SectionDivider />

    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={Activity} title="Casus en klinische context" tone="accent" />
      <SectCasusEnKlinischeContext />
    </section>

    <SectionDivider />

    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SummarySectionHeader
        icon={Stethoscope}
        title="Belangrijke klachten en bevindingen"
        tone="purple"
      />
      <div className="space-y-5">
        <SectEenBorstafwijkingKanOpVerschillendeM />
        <SectInDezeCasusZijnVooralDeVolgendePunte />
        <SectAandachtsvraag />
      </div>
    </section>

    <SectionDivider />

    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={Layers} title="Klinisch redeneren" tone="indigo" />
      <div className="space-y-5">
        <SectKlinischRedeneren />
        <SectVanKlachtNaarBeleid />
        <SectDeRedeneringVerlooptInStappen />
      </div>
    </section>

    <SectionDivider />

    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={Table2} title="Differentiaaldiagnose" tone="sky" />
      <SectBijEenKnobbelInDeBorstDenkJeInElkGev />
    </section>

    <SectionDivider />

    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={Microscope} title="Diagnostiek" tone="amber" />
      <div className="space-y-5">
        <SectBeeldvorming />
        <SectMammografie />
        <SectBelangrijkeBegrippenHierbijZijn />
        <SectEchografie />
        <SectMri />
        <SectTabel1BeeldvormingBijVerdenkingOpBor />
        <SectWeefseldiagnostiek />
        <SectBijBorstkankerZijnDeVolgendeBiomarke />
      </div>
    </section>

    <SectionDivider />

    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={HeartPulse} title="Belangrijke ziektebeelden" tone="rose" />
      <div className="space-y-5">
        <SectInvasiefDuctaalMammacarcinoom />
        <SectHer2EnDeHallmarksOfCancer />
        <SectHer2EnOokErPrPassenBijDeHallmark />
        <SectTabel2Her2Classificatie />
        <SectBijEen2UitslagWordtAanvullendOnderzo />
        <SectPrognostischeEnPredictieveBetekenis />
        <SectEenBiomarkerKan />
      </div>
    </section>

    <SectionDivider />

    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={Pill} title="Behandeling en beleid" tone="primary" />
      <div className="space-y-5">
        <SectBehandelingEnBeleid />
        <SectDeBehandelingBestaatUitEenCombinatie />
        <SectChirurgie />
        <SectErZijnTweeHoofdopties />
        <SectSysteemtherapieKanBestaanUit />
        <SectDeKeuzeHangtAfVanDeBiomarkersEnVanDe />
        <SectRadiotherapie />
        <SectBelangrijkIs />
        <SectTabel3GlobaleBehandellogicaBijGeloka />
      </div>
    </section>

    <SectionDivider />

    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={FileText} title="Bestralingsplanning" tone="emerald" />
      <SectBestralingsplanning />
    </section>

    <SectionDivider />

    <section id="sect-10" className="scroll-mt-24 mb-12">
      <SummarySectionHeader
        icon={Stethoscope}
        title="Klinische samenvatting"
        tone="accent"
      />
      <SectKlinischeSamenvattingVanDeCasus />
    </section>

    <SectionDivider />

    <section id="sect-11" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={CircleCheck} title="Samenvatting" tone="emerald" />
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default Blok5Week2Casus4CasusbijeenkomstSummary
