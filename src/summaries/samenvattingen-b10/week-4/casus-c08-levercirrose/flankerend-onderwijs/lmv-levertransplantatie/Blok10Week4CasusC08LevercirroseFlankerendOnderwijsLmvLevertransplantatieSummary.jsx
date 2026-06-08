import {
  Activity,
  BookOpen,
  FileText,
  LayoutList,
  Pill,
  Stethoscope,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './sections/Sect01Leerdoelen'
import Sect02IndicatiesVoorLevertransplantatie from './sections/Sect02IndicatiesVoorLevertransplantatie'
import Sect03AcuutLeverfalen from './sections/Sect03AcuutLeverfalen'
import Sect04ChronischLeverfalenEnEindstadium from './sections/Sect04ChronischLeverfalenEnEindstadium'
import Sect05SelectieVoorLevertransplantatie from './sections/Sect05SelectieVoorLevertransplantatie'
import Sect06EurotransplantEnScreening from './sections/Sect06EurotransplantEnScreening'
import Sect07HccAlsOncologischeIndicatie from './sections/Sect07HccAlsOncologischeIndicatie'
import Sect08PscEnCholangiocarcinoom from './sections/Sect08PscEnCholangiocarcinoom'
import Sect09LevermetastasenVanNetEnCrc from './sections/Sect09LevermetastasenVanNetEnCrc'
import Sect10WachtlijstEnPlaatsing from './sections/Sect10WachtlijstEnPlaatsing'
import Sect11DonorOperatieEnMachineperfusie from './sections/Sect11DonorOperatieEnMachineperfusie'
import Sect12ComplicatiesNaLevertransplantatie from './sections/Sect12ComplicatiesNaLevertransplantatie'
import Sect13FollowUpNaLevertransplantatie from './sections/Sect13FollowUpNaLevertransplantatie'
import Sect14Samenvatting from './sections/Sect14Samenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-02', title: 'Indicaties', icon: Stethoscope },
  { id: 'sect-03', title: 'Acuut leverfalen', icon: Activity },
  { id: 'sect-04', title: 'Chronisch leverfalen', icon: LayoutList },
  { id: 'sect-05', title: 'Selectie', icon: Stethoscope },
  { id: 'sect-06', title: 'Screening', icon: Table2 },
  { id: 'sect-07', title: 'HCC', icon: Activity },
  { id: 'sect-08', title: 'PSC en cholangiocarcinoom', icon: Stethoscope },
  { id: 'sect-09', title: 'Levermetastasen NET/CRC', icon: LayoutList },
  { id: 'sect-10', title: 'Wachtlijst en MELD', icon: Table2 },
  { id: 'sect-11', title: 'Donor en operatie', icon: Activity },
  { id: 'sect-12', title: 'Complicaties', icon: Pill },
  { id: 'sect-13', title: 'Follow-up', icon: Stethoscope },
  { id: 'sect-14', title: 'Samenvatting', icon: FileText },
]

const Blok10Week4CasusC08LevercirroseFlankerendOnderwijsLmvLevertransplantatieSummary = () => (
  <SummaryLayout
    title="Levertransplantatie"
    moduleKind="lmv"
    description="Na deze samenvatting kun je de indicatie en selectie voor levertransplantatie beschrijven, de aspecten benoemen die het succes bepalen, en de belangrijkste complicaties benoemen."
    caseLabel="Week 4 · Casus C08: Levercirrose"
    blokLabel="Blok 10"
    tableOfContents={tableOfContents}
    practiceLink="/oefenvragen?lme=blok10-week4-casus-c08-levercirrose-lmv-levertransplantatie"
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <Sect01Leerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <Sect02IndicatiesVoorLevertransplantatie />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <Sect03AcuutLeverfalen />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <Sect04ChronischLeverfalenEnEindstadium />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <Sect05SelectieVoorLevertransplantatie />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <Sect06EurotransplantEnScreening />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <Sect07HccAlsOncologischeIndicatie />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <Sect08PscEnCholangiocarcinoom />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <Sect09LevermetastasenVanNetEnCrc />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <Sect10WachtlijstEnPlaatsing />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <Sect11DonorOperatieEnMachineperfusie />
    </section>
    <section id="sect-12" className="scroll-mt-24 mb-12">
      <Sect12ComplicatiesNaLevertransplantatie />
    </section>
    <section id="sect-13" className="scroll-mt-24 mb-12">
      <Sect13FollowUpNaLevertransplantatie />
    </section>
    <section id="sect-14" className="scroll-mt-24 mb-12">
      <Sect14Samenvatting />
    </section>
  </SummaryLayout>
)

export default Blok10Week4CasusC08LevercirroseFlankerendOnderwijsLmvLevertransplantatieSummary
