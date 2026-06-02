import {
  Activity,
  BookOpen,
  CircleCheck,
  FileText,
  HeartPulse,
  Layers,
  Lightbulb,
  Shield,
  Stethoscope,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import SummarySectionHeader from './SummarySectionHeader'
import SectLeerdoelen from './sections/SectLeerdoelen'
import SectCasusEnKlinischeContext from './sections/SectCasusEnKlinischeContext'
import SectDeOpbouwVanDeHuid from './sections/SectDeOpbouwVanDeHuid'
import SectDeHuidBestaatGlobaalUitDrieLagen from './sections/SectDeHuidBestaatGlobaalUitDrieLagen'
import SectDeEpidermisBevatVerschillendeCeltype from './sections/SectDeEpidermisBevatVerschillendeCeltype'
import SectVraagje from './sections/SectVraagje'
import SectDeEpidermisIsOpgebouwdUitVerschillen from './sections/SectDeEpidermisIsOpgebouwdUitVerschillen'
import SectBarriEfectLeidtTotInflammatie from './sections/SectBarriEfectLeidtTotInflammatie'
import SectAlsDeBarriReBeschadigdRaaktGebeurtOn from './sections/SectAlsDeBarriReBeschadigdRaaktGebeurtOn'
import SectInflammatieLeidtWeerTotVerdereBarriR from './sections/SectInflammatieLeidtWeerTotVerdereBarriR'
import SectVraagje2 from './sections/SectVraagje2'
import SectIrritatiefContacteczeem from './sections/SectIrritatiefContacteczeem'
import SectMechanisme from './sections/SectMechanisme'
import SectAllergischContacteczeemAlsDifferenti from './sections/SectAllergischContacteczeemAlsDifferenti'
import SectMechanisme2 from './sections/SectMechanisme2'
import SectDeStappenZijn from './sections/SectDeStappenZijn'
import SectVerschilInNOogopslag from './sections/SectVerschilInNOogopslag'
import SectKlinischRedenerenBijDeSchilder from './sections/SectKlinischRedenerenBijDeSchilder'
import SectDeSchilderKomtLaterTerugMet from './sections/SectDeSchilderKomtLaterTerugMet'
import SectBelangrijkeDenkstap from './sections/SectBelangrijkeDenkstap'
import SectBijEenSchilderMoetJeDusDenkenAan from './sections/SectBijEenSchilderMoetJeDusDenkenAan'
import SectOmgevingsfactorenDieDeHuidBeschadige from './sections/SectOmgevingsfactorenDieDeHuidBeschadige'
import SectUvStraling from './sections/SectUvStraling'
import SectVraagje3 from './sections/SectVraagje3'
import SectPreventieEnBescherming from './sections/SectPreventieEnBescherming'
import SectSpf50GebruikenVooralBijEenLichteHuid from './sections/SectSpf50GebruikenVooralBijEenLichteHuid'
import SectIrritatiefContacteczeem2 from './sections/SectIrritatiefContacteczeem2'
import SectAllergischContacteczeem from './sections/SectAllergischContacteczeem'
import SectAtopischEczeem from './sections/SectAtopischEczeem'
import SectFototoxischeReactie from './sections/SectFototoxischeReactie'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-02', title: 'Casus en klinische context', icon: Activity },
  { id: 'sect-03', title: 'De opbouw van de huid', icon: Layers },
  { id: 'sect-04', title: 'De lagen van de epidermis', icon: Table2 },
  { id: 'sect-05', title: 'De huidbarrière: hoe werkt die?', icon: Shield },
  { id: 'sect-06', title: 'Irritatief contacteczeem', icon: HeartPulse },
  { id: 'sect-07', title: 'Allergisch contacteczeem als differentiaaldiagnose', icon: Stethoscope },
  { id: 'sect-08', title: 'Klinisch redeneren bij de schilder', icon: Lightbulb },
  { id: 'sect-09', title: 'Omgevingsfactoren die de huid beschadigen', icon: FileText },
  { id: 'sect-10', title: 'Preventie en bescherming', icon: Shield },
  { id: 'sect-11', title: 'Belangrijke ziektebeelden', icon: HeartPulse },
  { id: 'sect-12', title: 'Samenvatting', icon: CircleCheck },
]

const SectionDivider = () => (
  <hr className="border-slate-200 dark:border-slate-700 my-10" />
)

const Blok5Week1Casus1CasusbijeenkomstSummary = () => (
  <SummaryLayout
    title="De huid als succesvolle barrière"
    moduleKind="casusbijeenkomst"
    description="De casus draait om de huid als barrière. De kern is dat de huid niet alleen een passieve bedekking is, maar een actieve beschermlaag die ons beschermt tegen uitdroging, irriterende stoffen, allergenen, micro-organismen en andere schadelijke invloeden van buitenaf."
    caseLabel="Week 1 · Casus 1: De huid als succesvolle barrière"
    blokLabel="Blok 5"
    practiceLink="/oefenvragen?lme=blok5-week1-casus1-casusbijeenkomst"
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
      <SummarySectionHeader icon={Layers} title="De opbouw van de huid" tone="purple" />
      <div className="space-y-5">
        <SectDeOpbouwVanDeHuid />
        <SectDeHuidBestaatGlobaalUitDrieLagen />
        <SectDeEpidermisBevatVerschillendeCeltype />
        <SectVraagje />
      </div>
    </section>

    <SectionDivider />

    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={Table2} title="De lagen van de epidermis" tone="indigo" />
      <SectDeEpidermisIsOpgebouwdUitVerschillen />
    </section>

    <SectionDivider />

    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={Shield} title="De huidbarrière: hoe werkt die?" tone="primary" />
      <div className="space-y-5">
        <SectBarriEfectLeidtTotInflammatie />
        <SectAlsDeBarriReBeschadigdRaaktGebeurtOn />
        <SectInflammatieLeidtWeerTotVerdereBarriR />
        <SectVraagje2 />
      </div>
    </section>

    <SectionDivider />

    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={HeartPulse} title="Irritatief contacteczeem" tone="rose" />
      <div className="space-y-5">
        <SectIrritatiefContacteczeem />
        <SectMechanisme />
      </div>
    </section>

    <SectionDivider />

    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SummarySectionHeader
        icon={Stethoscope}
        title="Allergisch contacteczeem als differentiaaldiagnose"
        tone="amber"
      />
      <div className="space-y-5">
        <SectAllergischContacteczeemAlsDifferenti />
        <SectMechanisme2 />
        <SectDeStappenZijn />
        <SectVerschilInNOogopslag />
      </div>
    </section>

    <SectionDivider />

    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={Lightbulb} title="Klinisch redeneren bij de schilder" tone="sky" />
      <div className="space-y-5">
        <SectKlinischRedenerenBijDeSchilder />
        <SectDeSchilderKomtLaterTerugMet />
        <SectBelangrijkeDenkstap />
        <SectBijEenSchilderMoetJeDusDenkenAan />
      </div>
    </section>

    <SectionDivider />

    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={FileText} title="Omgevingsfactoren die de huid beschadigen" tone="emerald" />
      <div className="space-y-5">
        <SectOmgevingsfactorenDieDeHuidBeschadige />
        <SectUvStraling />
        <SectVraagje3 />
      </div>
    </section>

    <SectionDivider />

    <section id="sect-10" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={Shield} title="Preventie en bescherming" tone="primary" />
      <div className="space-y-5">
        <SectPreventieEnBescherming />
        <SectSpf50GebruikenVooralBijEenLichteHuid />
      </div>
    </section>

    <SectionDivider />

    <section id="sect-11" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={HeartPulse} title="Belangrijke ziektebeelden" tone="accent" />
      <div className="grid gap-4 md:grid-cols-2">
        <SectIrritatiefContacteczeem2 />
        <SectAllergischContacteczeem />
        <SectAtopischEczeem />
        <SectFototoxischeReactie />
      </div>
    </section>

    <SectionDivider />

    <section id="sect-12" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={CircleCheck} title="Samenvatting" tone="emerald" />
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default Blok5Week1Casus1CasusbijeenkomstSummary
