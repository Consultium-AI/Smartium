import {
  Activity,
  BookOpen,
  CircleCheck,
  FileText,
  HeartPulse,
  Layers,
  Microscope,
  Stethoscope,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import SummarySectionHeader from './SummarySectionHeader'
import SectLeerdoelen from './sections/SectLeerdoelen'
import SectCasusEnKlinischeContext from './sections/SectCasusEnKlinischeContext'
import SectBelangrijkeOorzaken from './sections/SectBelangrijkeOorzaken'
import SectKlinischRedeneren from './sections/SectKlinischRedeneren'
import SectDifferentiaaldiagnosePerKlinischBeel from './sections/SectDifferentiaaldiagnosePerKlinischBeel'
import SectCasusLymfoedeemSecundaireInfectie from './sections/SectCasusLymfoedeemSecundaireInfectie'
import SectCasusErysipelas from './sections/SectCasusErysipelas'
import SectCasusPalpabeleKlier from './sections/SectCasusPalpabeleKlier'
import SectHidradenitisSuppurativa from './sections/SectHidradenitisSuppurativa'
import SectAanvullendOnderzoekInterpretatie from './sections/SectAanvullendOnderzoekInterpretatie'
import SectKlinischeAanpak from './sections/SectKlinischeAanpak'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-02', title: 'Casus en klinische context', icon: Activity },
  { id: 'sect-03', title: 'Belangrijke oorzaken', icon: Table2 },
  { id: 'sect-04', title: 'Klinisch redeneren', icon: Layers },
  { id: 'sect-05', title: 'Differentiaaldiagnose', icon: Stethoscope },
  { id: 'sect-06', title: 'Casusvarianten', icon: HeartPulse },
  { id: 'sect-07', title: 'Hidradenitis suppurativa', icon: FileText },
  { id: 'sect-08', title: 'Aanvullend onderzoek', icon: Microscope },
  { id: 'sect-09', title: 'Klinische aanpak', icon: Layers },
  { id: 'sect-10', title: 'Samenvatting', icon: CircleCheck },
]

const SectionDivider = () => (
  <hr className="border-slate-200 dark:border-slate-700 my-10" />
)

const Blok5Week4Casus7CasusbijeenkomstSummary = () => (
  <SummaryLayout
    title="Zwelling van de lies en/of een dik been"
    moduleKind="casusbijeenkomst"
    description="De casusbijeenkomst leert je een rood en gezwollen oksel, lies of dik been te benaderen via vasculaire, lymfatische en maligne oorzaken, met casusvarianten rond erysipelas, lymfoedeem en hidradenitis."
    caseLabel="Week 4 · Casus 7: Zwelling van de lies en of een dik been"
    blokLabel="Blok 5"
    practiceLink="/oefenvragen?lme=blok5-week4-casus7-casusbijeenkomst"
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
      <SummarySectionHeader icon={Table2} title="Belangrijke oorzaken" tone="sky" />
      <SectBelangrijkeOorzaken />
    </section>

    <SectionDivider />

    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={Layers} title="Klinisch redeneren" tone="indigo" />
      <SectKlinischRedeneren />
    </section>

    <SectionDivider />

    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={Stethoscope} title="Differentiaaldiagnose" tone="purple" />
      <SectDifferentiaaldiagnosePerKlinischBeel />
    </section>

    <SectionDivider />

    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={HeartPulse} title="Casusvarianten" tone="rose" />
      <div className="space-y-5">
        <SectCasusLymfoedeemSecundaireInfectie />
        <SectCasusErysipelas />
        <SectCasusPalpabeleKlier />
      </div>
    </section>

    <SectionDivider />

    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={FileText} title="Hidradenitis suppurativa" tone="amber" />
      <SectHidradenitisSuppurativa />
    </section>

    <SectionDivider />

    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={Microscope} title="Aanvullend onderzoek" tone="emerald" />
      <SectAanvullendOnderzoekInterpretatie />
    </section>

    <SectionDivider />

    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={Layers} title="Klinische aanpak" tone="primary" />
      <SectKlinischeAanpak />
    </section>

    <SectionDivider />

    <section id="sect-10" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={CircleCheck} title="Samenvatting" tone="emerald" />
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default Blok5Week4Casus7CasusbijeenkomstSummary
