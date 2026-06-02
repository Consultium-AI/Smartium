import {
  Activity,
  BookOpen,
  CircleCheck,
  Droplets,
  FileText,
  HeartPulse,
  Layers,
  Microscope,
  Pill,
  Shield,
  Stethoscope,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import SummarySectionHeader from './SummarySectionHeader'
import SectLeerdoelen from './sections/SectLeerdoelen'
import SectCasusEnKlinischeContext from './sections/SectCasusEnKlinischeContext'
import SectDeKernVanDeBijeenkomstIsDaaromSteeds from './sections/SectDeKernVanDeBijeenkomstIsDaaromSteeds'
import SectPsoriasisPresentatieEnKlinischeReden from './sections/SectPsoriasisPresentatieEnKlinischeReden'
import SectPsoriasisGeeftMeestal from './sections/SectPsoriasisGeeftMeestal'
import SectBelangrijkeBevindingenBijPsoriasis from './sections/SectBelangrijkeBevindingenBijPsoriasis'
import SectBijPsoriasisHorenInDezeCasusVooral from './sections/SectBijPsoriasisHorenInDezeCasusVooral'
import SectTabel1KernverschijnselenBijPsoriasis from './sections/SectTabel1KernverschijnselenBijPsoriasis'
import SectArtritisPsoriaticaEnDePestScore from './sections/SectArtritisPsoriaticaEnDePestScore'
import SectDeVragenGaanOver from './sections/SectDeVragenGaanOver'
import SectBehandelingVanPsoriasis from './sections/SectBehandelingVanPsoriasis'
import SectLokaleEnSystemischeBehandeling from './sections/SectLokaleEnSystemischeBehandeling'
import SectTabel2BiologicalsBijPsoriasis from './sections/SectTabel2BiologicalsBijPsoriasis'
import SectErWordtOokEenOntwikkelingBeschrevenV from './sections/SectErWordtOokEenOntwikkelingBeschrevenV'
import SectBelangrijkeOverwegingenBijBehandelin from './sections/SectBelangrijkeOverwegingenBijBehandelin'
import SectInDezeCasusSpelenMeerderePraktischeP from './sections/SectInDezeCasusSpelenMeerderePraktischeP'
import SectEczeemDeVeranderdeHuidbarriRe from './sections/SectEczeemDeVeranderdeHuidbarriRe'
import SectSmerenIsDaaromEssentieel from './sections/SectSmerenIsDaaromEssentieel'
import SectAtopischEczeemEnEczeemaHerpeticum from './sections/SectAtopischEczeemEnEczeemaHerpeticum'
import SectDeHuidafwijkingenZijnBeschrevenAls from './sections/SectDeHuidafwijkingenZijnBeschrevenAls'
import SectContactallergieEnVoedselallergie from './sections/SectContactallergieEnVoedselallergie'
import SectBijDezePatiNtWordtOokGedachtAan from './sections/SectBijDezePatiNtWordtOokGedachtAan'
import SectBehandelingVanEczeem from './sections/SectBehandelingVanEczeem'
import SectSmeerEnWasadvies from './sections/SectSmeerEnWasadvies'
import SectAanvullendOnderzoek from './sections/SectAanvullendOnderzoek'
import SectMedicamenteuzeBehandeling from './sections/SectMedicamenteuzeBehandeling'
import SectPurpuraVasculitisEnHematoom from './sections/SectPurpuraVasculitisEnHematoom'
import SectIgaVasculitis from './sections/SectIgaVasculitis'
import SectTypischeKenmerkenZijn from './sections/SectTypischeKenmerkenZijn'
import SectIgaDepositiesBijImmunofluorescentie from './sections/SectIgaDepositiesBijImmunofluorescentie'
import SectTabel3TypischeKenmerkenVanIgaVasculi from './sections/SectTabel3TypischeKenmerkenVanIgaVasculi'
import SectBehandelingEnFollowUp from './sections/SectBehandelingEnFollowUp'
import SectHemofilieAEnStollingsonderzoek from './sections/SectHemofilieAEnStollingsonderzoek'
import SectHemofilieLabEnOnderzoek from './sections/SectHemofilieLabEnOnderzoek'
import SectKliniekVanHemofilie from './sections/SectKliniekVanHemofilie'
import SectDeErnstHangtAfVanDeFactoractiviteit from './sections/SectDeErnstHangtAfVanDeFactoractiviteit'
import SectBehandelingVanHemofilieA from './sections/SectBehandelingVanHemofilieA'
import SectTabel4HemofilieAInHetKort from './sections/SectTabel4HemofilieAInHetKort'
import SectVonWillebrandziekteType2N from './sections/SectVonWillebrandziekteType2N'
import SectDezeCasusbijeenkomstLaatZienDatHuida from './sections/SectDezeCasusbijeenkomstLaatZienDatHuida'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-02', title: 'Casus en klinische context', icon: Activity },
  { id: 'sect-03', title: 'Psoriasis: presentatie en klinische redenering', icon: Layers },
  { id: 'sect-04', title: 'Artritis psoriatica en de PEST-score', icon: Stethoscope },
  { id: 'sect-05', title: 'Behandeling van psoriasis', icon: Pill },
  { id: 'sect-06', title: 'Eczeem: de veranderde huidbarrière', icon: Shield },
  { id: 'sect-07', title: 'Behandeling van eczeem', icon: HeartPulse },
  { id: 'sect-08', title: 'Purpura, vasculitis en hematoom', icon: Droplets },
  { id: 'sect-09', title: 'IgA-vasculitis', icon: Microscope },
  { id: 'sect-10', title: 'Hemofilie A en stollingsonderzoek', icon: FileText },
  { id: 'sect-11', title: 'Samenvatting van de kern', icon: Table2 },
  { id: 'sect-12', title: 'Samenvatting', icon: CircleCheck },
]

const SectionDivider = () => (
  <hr className="border-slate-200 dark:border-slate-700 my-10" />
)

const Blok5Week1Casus2CasusbijeenkomstSummary = () => (
  <SummaryLayout
    title="De veranderde barrière"
    moduleKind="casusbijeenkomst"
    description="De casusbijeenkomst draait om de huid als veranderde barrière. De huid kan op verschillende manieren “lek” of beschadigd raken: bij psoriasis door ontsteking en schilfering, bij eczeem door een verstoorde huidbarrière, en bij vasculitis door ontsteking van kleine bloedvaten."
    caseLabel="Week 1 · Casus 2: De veranderde barrière"
    blokLabel="Blok 5"
    practiceLink="/oefenvragen?lme=blok5-week1-casus2-casusbijeenkomst"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={BookOpen} title="Leerdoelen" tone="primary" />
      <SectLeerdoelen />
    </section>

    <SectionDivider />

    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={Activity} title="Casus en klinische context" tone="accent" />
      <div className="space-y-5">
        <SectCasusEnKlinischeContext />
        <SectDeKernVanDeBijeenkomstIsDaaromSteeds />
      </div>
    </section>

    <SectionDivider />

    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SummarySectionHeader
        icon={Layers}
        title="Psoriasis: presentatie en klinische redenering"
        tone="purple"
      />
      <div className="space-y-5">
        <SectPsoriasisPresentatieEnKlinischeReden />
        <SectPsoriasisGeeftMeestal />
        <SectBelangrijkeBevindingenBijPsoriasis />
        <SectBijPsoriasisHorenInDezeCasusVooral />
        <SectTabel1KernverschijnselenBijPsoriasis />
      </div>
    </section>

    <SectionDivider />

    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={Stethoscope} title="Artritis psoriatica en de PEST-score" tone="indigo" />
      <div className="space-y-5">
        <SectArtritisPsoriaticaEnDePestScore />
        <SectDeVragenGaanOver />
      </div>
    </section>

    <SectionDivider />

    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={Pill} title="Behandeling van psoriasis" tone="rose" />
      <div className="space-y-5">
        <SectBehandelingVanPsoriasis />
        <SectLokaleEnSystemischeBehandeling />
        <SectTabel2BiologicalsBijPsoriasis />
        <SectErWordtOokEenOntwikkelingBeschrevenV />
        <SectBelangrijkeOverwegingenBijBehandelin />
        <SectInDezeCasusSpelenMeerderePraktischeP />
      </div>
    </section>

    <SectionDivider />

    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={Shield} title="Eczeem: de veranderde huidbarrière" tone="primary" />
      <div className="space-y-5">
        <SectEczeemDeVeranderdeHuidbarriRe />
        <SectSmerenIsDaaromEssentieel />
        <SectAtopischEczeemEnEczeemaHerpeticum />
        <SectDeHuidafwijkingenZijnBeschrevenAls />
        <SectContactallergieEnVoedselallergie />
        <SectBijDezePatiNtWordtOokGedachtAan />
      </div>
    </section>

    <SectionDivider />

    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={HeartPulse} title="Behandeling van eczeem" tone="accent" />
      <div className="space-y-5">
        <SectBehandelingVanEczeem />
        <SectSmeerEnWasadvies />
        <SectAanvullendOnderzoek />
        <SectMedicamenteuzeBehandeling />
      </div>
    </section>

    <SectionDivider />

    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={Droplets} title="Purpura, vasculitis en hematoom" tone="sky" />
      <SectPurpuraVasculitisEnHematoom />
    </section>

    <SectionDivider />

    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={Microscope} title="IgA-vasculitis" tone="amber" />
      <div className="space-y-5">
        <SectIgaVasculitis />
        <SectTypischeKenmerkenZijn />
        <SectIgaDepositiesBijImmunofluorescentie />
        <SectTabel3TypischeKenmerkenVanIgaVasculi />
        <SectBehandelingEnFollowUp />
      </div>
    </section>

    <SectionDivider />

    <section id="sect-10" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={FileText} title="Hemofilie A en stollingsonderzoek" tone="emerald" />
      <div className="space-y-5">
        <SectHemofilieAEnStollingsonderzoek />
        <SectHemofilieLabEnOnderzoek />
        <SectKliniekVanHemofilie />
        <SectDeErnstHangtAfVanDeFactoractiviteit />
        <SectBehandelingVanHemofilieA />
        <SectTabel4HemofilieAInHetKort />
        <SectVonWillebrandziekteType2N />
      </div>
    </section>

    <SectionDivider />

    <section id="sect-11" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={Table2} title="Samenvatting van de kern" tone="indigo" />
      <SectDezeCasusbijeenkomstLaatZienDatHuida />
    </section>

    <SectionDivider />

    <section id="sect-12" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={CircleCheck} title="Samenvatting" tone="emerald" />
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default Blok5Week1Casus2CasusbijeenkomstSummary
