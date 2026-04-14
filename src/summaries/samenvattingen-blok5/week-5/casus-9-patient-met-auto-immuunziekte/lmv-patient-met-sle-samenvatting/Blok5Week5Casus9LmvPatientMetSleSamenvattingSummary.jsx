import {
  Activity,
  BookOpen,
  Brain,
  CircleCheck,
  ClipboardList,
  Droplets,
  HeartPulse,
  HelpCircle,
  Layers,
  Microscope,
  Pill,
  Shield,
  Stethoscope,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02WatIsSle from './Sect02WatIsSle'
import Sect03AandachtVraagjeSystemisch from './Sect03AandachtVraagjeSystemisch'
import Sect04EpidemiologieEnAlgemeneKlinischeBetekenis from './Sect04EpidemiologieEnAlgemeneKlinischeBetekenis'
import Sect05KlinischePresentatieVanSleTabel1 from './Sect05KlinischePresentatieVanSleTabel1'
import Sect06SpecifiekeOrgaanmanifestatiesTabel2 from './Sect06SpecifiekeOrgaanmanifestatiesTabel2'
import Sect07KlinischeDetailsPerOrgaan from './Sect07KlinischeDetailsPerOrgaan'
import Sect08AandachtVraagjeOrgaansystemen from './Sect08AandachtVraagjeOrgaansystemen'
import Sect09AntifosfolipidensyndroomBijSle from './Sect09AntifosfolipidensyndroomBijSle'
import Sect10EtiologieEnPathogenese from './Sect10EtiologieEnPathogenese'
import Sect11DiagnostiekVanSle from './Sect11DiagnostiekVanSle'
import Sect12Tabel3KernDiagnostiek from './Sect12Tabel3KernDiagnostiek'
import Sect13AandachtVraagjeAna from './Sect13AandachtVraagjeAna'
import Sect14Behandeling from './Sect14Behandeling'
import Sect15Prognose from './Sect15Prognose'
import Sect16HoeOnthoudJeHetZiektebeeld from './Sect16HoeOnthoudJeHetZiektebeeld'
import Sect17Samenvatting from './Sect17Samenvatting'

const Blok5Week5Casus9LmvPatientMetSleSamenvattingSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Wat is SLE?', icon: Layers },
    { id: 'sect-03', title: 'Aandacht-vraagje: systemische ziekte', icon: HelpCircle },
    { id: 'sect-04', title: 'Epidemiologie en algemene klinische betekenis', icon: Stethoscope },
    { id: 'sect-05', title: 'Klinische presentatie van SLE en tabel 1', icon: Table2 },
    { id: 'sect-06', title: 'Specifieke orgaanmanifestaties en tabel 2', icon: Microscope },
    { id: 'sect-07', title: 'Klinische details per orgaan', icon: ClipboardList },
    { id: 'sect-08', title: 'Aandacht-vraagje: orgaansystemen', icon: HelpCircle },
    { id: 'sect-09', title: 'Antifosfolipidensyndroom bij SLE', icon: Droplets },
    { id: 'sect-10', title: 'Etiologie en pathogenese', icon: Shield },
    { id: 'sect-11', title: 'Diagnostiek van SLE', icon: Activity },
    { id: 'sect-12', title: 'Tabel 3. Kern van de diagnostische benadering', icon: Table2 },
    { id: 'sect-13', title: 'Aandacht-vraagje: ANA', icon: HelpCircle },
    { id: 'sect-14', title: 'Behandeling', icon: Pill },
    { id: 'sect-15', title: 'Prognose', icon: HeartPulse },
    { id: 'sect-16', title: 'Hoe onthoud je het ziektebeeld het best?', icon: Brain },
    { id: 'sect-17', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Patiënt met SLE"
      description="Systemische lupus erythematosus, meestal afgekort als SLE, is een systemische auto-immuunziekte. Systemisch betekent dat de ziekte niet beperkt blijft tot één orgaan, maar meerdere orgaansystemen kan aantasten."
      caseLabel="Week 5 · Casus 9: Patiënt met auto-immuunziekte"
      blokLabel="Blok 5"
      moduleKind="lmv"
      practiceLink="/oefenvragen?lme=blok5-week5-casus9-lmv-patient-met-sle-samenvatting"
      tableOfContents={tableOfContents}
    summaryVariantToggle={{
      activeLmeId: 'blok5-week5-casus9-lmv-patient-met-sle-samenvatting',
      variants: [
        { id: 'blok5-week5-casus9-lmv-patient-met-sle-samenvatting', label: 'Uitgebreid' },
        { id: 'blok5-week5-casus9-lmv-patient-met-sle-samenvatting-mini', label: 'Kort' },
      ],
    }}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02WatIsSle />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03AandachtVraagjeSystemisch />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04EpidemiologieEnAlgemeneKlinischeBetekenis />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05KlinischePresentatieVanSleTabel1 />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06SpecifiekeOrgaanmanifestatiesTabel2 />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07KlinischeDetailsPerOrgaan />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08AandachtVraagjeOrgaansystemen />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09AntifosfolipidensyndroomBijSle />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10EtiologieEnPathogenese />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11DiagnostiekVanSle />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12Tabel3KernDiagnostiek />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13AandachtVraagjeAna />
      </section>
      <section id="sect-14" className="scroll-mt-24 mb-12">
        <Sect14Behandeling />
      </section>
      <section id="sect-15" className="scroll-mt-24 mb-12">
        <Sect15Prognose />
      </section>
      <section id="sect-16" className="scroll-mt-24 mb-12">
        <Sect16HoeOnthoudJeHetZiektebeeld />
      </section>
      <section id="sect-17" className="scroll-mt-24 mb-12">
        <Sect17Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week5Casus9LmvPatientMetSleSamenvattingSummary
