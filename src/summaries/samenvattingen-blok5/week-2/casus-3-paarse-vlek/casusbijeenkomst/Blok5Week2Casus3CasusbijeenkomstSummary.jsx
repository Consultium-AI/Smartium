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
  Stethoscope,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import SummarySectionHeader from './SummarySectionHeader'
import SectLeerdoelen from './sections/SectLeerdoelen'
import SectCasusEnKlinischeContext from './sections/SectCasusEnKlinischeContext'
import SectDeKlachtenEnBevindingenDieBelangrijk from './sections/SectDeKlachtenEnBevindingenDieBelangrijk'
import SectHierZijnDeBelangrijkstePunten from './sections/SectHierZijnDeBelangrijkstePunten'
import SectCasus1VanPurpuraNaarVasculitis from './sections/SectCasus1VanPurpuraNaarVasculitis'
import SectCasus1LabUitslagen from './sections/SectCasus1LabUitslagen'
import SectCasus2VanVerkleuringNaarBloedingspro from './sections/SectCasus2VanVerkleuringNaarBloedingspro'
import SectTabel1BelangrijksteDenkrichtingenBij from './sections/SectTabel1BelangrijksteDenkrichtingenBij'
import SectDeDrieGoedeAanvullendeBepalingenZijn from './sections/SectDeDrieGoedeAanvullendeBepalingenZijn'
import SectCasus2LabOnderzoek from './sections/SectCasus2LabOnderzoek'
import SectTabel2WaaromDezeBepalingen from './sections/SectTabel2WaaromDezeBepalingen'
import SectBijDeEersteCasusWordtGevraagdNaarDeP from './sections/SectBijDeEersteCasusWordtGevraagdNaarDeP'
import SectZiektebeeldenPaarseVlek from './sections/SectZiektebeeldenPaarseVlek'
import SectVasculitisBijHetKind from './sections/SectVasculitisBijHetKind'
import SectBloedingsprobleemVonWillebrandAchtig from './sections/SectBloedingsprobleemVonWillebrandAchtig'
import SectCasus1VasculitisEnFollowUp from './sections/SectCasus1VasculitisEnFollowUp'
import SectCasus2BeleidBijBloedingsneiging from './sections/SectCasus2BeleidBijBloedingsneiging'
import SectMelanoomKernstofUitDeCasusbespreking from './sections/SectMelanoomKernstofUitDeCasusbespreking'
import SectBelangrijkeBegrippen from './sections/SectBelangrijkeBegrippen'
import SectTabel3WatIsBelangrijkBijMelanoom from './sections/SectTabel3WatIsBelangrijkBijMelanoom'
import SectStadiRingEnPrognose from './sections/SectStadiRingEnPrognose'
import SectVoorMelanoomInStadiumIiiIsDeAanbevol from './sections/SectVoorMelanoomInStadiumIiiIsDeAanbevol'
import SectAdjuvanteSystemischeTherapie from './sections/SectAdjuvanteSystemischeTherapie'
import SectFollowUpBijMelanoom from './sections/SectFollowUpBijMelanoom'
import SectBijEenNieuwePigmentvlekNaEenEerderMe from './sections/SectBijEenNieuwePigmentvlekNaEenEerderMe'
import SectMogelijkeHulpmiddelen from './sections/SectMogelijkeHulpmiddelen'
import SectRolVanDeVerschillendeSpecialismen from './sections/SectRolVanDeVerschillendeSpecialismen'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-02', title: 'Casus en klinische context', icon: Activity },
  { id: 'sect-03', title: 'Belangrijke klachten en bevindingen', icon: Stethoscope },
  { id: 'sect-04', title: 'Klinisch redeneren', icon: Layers },
  { id: 'sect-05', title: 'Differentiaaldiagnose', icon: Table2 },
  { id: 'sect-06', title: 'Diagnostiek', icon: Microscope },
  { id: 'sect-07', title: 'Histopathologie', icon: FileText },
  { id: 'sect-08', title: 'Belangrijke ziektebeelden', icon: Droplets },
  { id: 'sect-09', title: 'Beleid en behandeling', icon: Pill },
  { id: 'sect-10', title: 'Melanoom: kernstof', icon: HeartPulse },
  { id: 'sect-11', title: 'Behandeling van melanoom', icon: Pill },
  { id: 'sect-12', title: 'Melanoomcasussen en specialismen', icon: Stethoscope },
  { id: 'sect-13', title: 'Samenvatting', icon: CircleCheck },
]

const SectionDivider = () => (
  <hr className="border-slate-200 dark:border-slate-700 my-10" />
)

const Blok5Week2Casus3CasusbijeenkomstSummary = () => (
  <SummaryLayout
    title="Paarse vlek"
    moduleKind="casusbijeenkomst"
    description="De casusbijeenkomst draait om paarse huidafwijkingen bij kind en jongere: vasculitis versus bloedingsprobleem, met aanvullend uitgebreide melanoomstof over stadiëring, prognose en behandeling."
    caseLabel="Week 2 · Casus 3: Paarse vlek"
    blokLabel="Blok 5"
    practiceLink="/oefenvragen?lme=blok5-week2-casus3-casusbijeenkomst"
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
        <SectDeKlachtenEnBevindingenDieBelangrijk />
        <SectHierZijnDeBelangrijkstePunten />
      </div>
    </section>

    <SectionDivider />

    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={Layers} title="Klinisch redeneren" tone="indigo" />
      <div className="space-y-5">
        <SectCasus1VanPurpuraNaarVasculitis />
        <SectCasus1LabUitslagen />
        <SectCasus2VanVerkleuringNaarBloedingspro />
      </div>
    </section>

    <SectionDivider />

    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={Table2} title="Differentiaaldiagnose" tone="sky" />
      <SectTabel1BelangrijksteDenkrichtingenBij />
    </section>

    <SectionDivider />

    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={Microscope} title="Diagnostiek" tone="amber" />
      <div className="space-y-5">
        <SectDeDrieGoedeAanvullendeBepalingenZijn />
        <SectCasus2LabOnderzoek />
        <SectTabel2WaaromDezeBepalingen />
      </div>
    </section>

    <SectionDivider />

    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={FileText} title="Histopathologie" tone="emerald" />
      <SectBijDeEersteCasusWordtGevraagdNaarDeP />
    </section>

    <SectionDivider />

    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={Droplets} title="Belangrijke ziektebeelden" tone="rose" />
      <div className="space-y-5">
        <SectZiektebeeldenPaarseVlek />
        <SectVasculitisBijHetKind />
        <SectBloedingsprobleemVonWillebrandAchtig />
      </div>
    </section>

    <SectionDivider />

    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={Pill} title="Beleid en behandeling" tone="primary" />
      <div className="space-y-5">
        <SectCasus1VasculitisEnFollowUp />
        <SectCasus2BeleidBijBloedingsneiging />
      </div>
    </section>

    <SectionDivider />

    <section id="sect-10" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={HeartPulse} title="Melanoom: kernstof" tone="accent" />
      <div className="space-y-5">
        <SectMelanoomKernstofUitDeCasusbespreking />
        <SectBelangrijkeBegrippen />
        <SectTabel3WatIsBelangrijkBijMelanoom />
        <SectStadiRingEnPrognose />
      </div>
    </section>

    <SectionDivider />

    <section id="sect-11" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={Pill} title="Behandeling van melanoom" tone="purple" />
      <div className="space-y-5">
        <SectVoorMelanoomInStadiumIiiIsDeAanbevol />
        <SectAdjuvanteSystemischeTherapie />
        <SectFollowUpBijMelanoom />
      </div>
    </section>

    <SectionDivider />

    <section id="sect-12" className="scroll-mt-24 mb-12">
      <SummarySectionHeader
        icon={Stethoscope}
        title="Melanoomcasussen en specialismen"
        tone="indigo"
      />
      <div className="space-y-5">
        <SectBijEenNieuwePigmentvlekNaEenEerderMe />
        <SectMogelijkeHulpmiddelen />
        <SectRolVanDeVerschillendeSpecialismen />
      </div>
    </section>

    <SectionDivider />

    <section id="sect-13" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={CircleCheck} title="Samenvatting" tone="emerald" />
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default Blok5Week2Casus3CasusbijeenkomstSummary
