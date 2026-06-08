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
import Sect02HepatocellulairCarcinoomWatIsHet from './sections/Sect02HepatocellulairCarcinoomWatIsHet'
import Sect03EpidemiologieEnRisicofactoren from './sections/Sect03EpidemiologieEnRisicofactoren'
import Sect04KlinischePresentatie from './sections/Sect04KlinischePresentatie'
import Sect05Surveillance from './sections/Sect05Surveillance'
import Sect06DiagnoseVanHcc from './sections/Sect06DiagnoseVanHcc'
import Sect07Preventie from './sections/Sect07Preventie'
import Sect08BehandelingChirurgie from './sections/Sect08BehandelingChirurgie'
import Sect09LokaleTherapieen from './sections/Sect09LokaleTherapieen'
import Sect10SystemischeTherapieEnBclc from './sections/Sect10SystemischeTherapieEnBclc'
import Sect11Levertransplantatie from './sections/Sect11Levertransplantatie'
import Sect12Samenvatting from './sections/Sect12Samenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-02', title: 'Hepatocellulair carcinoom', icon: Stethoscope },
  { id: 'sect-03', title: 'Epidemiologie · Tabel 1–2', icon: Table2 },
  { id: 'sect-04', title: 'Klinische presentatie', icon: Activity },
  { id: 'sect-05', title: 'Surveillance · Tabel 3', icon: LayoutList },
  { id: 'sect-06', title: 'Diagnose · Tabel 4', icon: Table2 },
  { id: 'sect-07', title: 'Preventie', icon: Pill },
  { id: 'sect-08', title: 'Behandeling en chirurgie', icon: Stethoscope },
  { id: 'sect-09', title: 'Lokale therapieën · Tabel 5', icon: Activity },
  { id: 'sect-10', title: 'Systemische therapie en BCLC', icon: LayoutList },
  { id: 'sect-11', title: 'Levertransplantatie · Tabel 6', icon: Table2 },
  { id: 'sect-12', title: 'Samenvatting', icon: FileText },
]

const Blok10Week4CasusC08LevercirroseFlankerendOnderwijsLmvHccSummary = () => (
  <SummaryLayout
    title="HCC"
    moduleKind="lmv"
    description="Na het bestuderen van deze stof kun je de epidemiologie, surveillance, diagnose en behandeling van hepatocellulair carcinoom (HCC) beschrijven en begrijpen."
    caseLabel="Week 4 · Casus C08: Levercirrose"
    blokLabel="Blok 10"
    tableOfContents={tableOfContents}
    practiceLink="/oefenvragen?lme=blok10-week4-casus-c08-levercirrose-lmv-hcc"
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <Sect01Leerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <Sect02HepatocellulairCarcinoomWatIsHet />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <Sect03EpidemiologieEnRisicofactoren />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <Sect04KlinischePresentatie />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <Sect05Surveillance />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <Sect06DiagnoseVanHcc />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <Sect07Preventie />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <Sect08BehandelingChirurgie />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <Sect09LokaleTherapieen />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <Sect10SystemischeTherapieEnBclc />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <Sect11Levertransplantatie />
    </section>
    <section id="sect-12" className="scroll-mt-24 mb-12">
      <Sect12Samenvatting />
    </section>
  </SummaryLayout>
)

export default Blok10Week4CasusC08LevercirroseFlankerendOnderwijsLmvHccSummary
