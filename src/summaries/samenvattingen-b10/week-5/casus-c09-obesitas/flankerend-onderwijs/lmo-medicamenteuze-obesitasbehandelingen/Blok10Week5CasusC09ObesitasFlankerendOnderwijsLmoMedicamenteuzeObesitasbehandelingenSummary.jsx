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
import Sect02MedicamenteuzeBehandelingWanneer from './sections/Sect02MedicamenteuzeBehandelingWanneer'
import Sect03DeEersteStappenVoorMedicatie from './sections/Sect03DeEersteStappenVoorMedicatie'
import Sect04IndicatieEnVergoeding from './sections/Sect04IndicatieEnVergoeding'
import Sect05DeBelangrijksteMedicamenteuzeOpties from './sections/Sect05DeBelangrijksteMedicamenteuzeOpties'
import Sect06Orlistat from './sections/Sect06Orlistat'
import Sect07NaltrexonBupropion from './sections/Sect07NaltrexonBupropion'
import Sect08LiraglutideSemaglutideEnTirzepatide from './sections/Sect08LiraglutideSemaglutideEnTirzepatide'
import Sect09EffectenOpGewichtMetabolismeEnVoeding from './sections/Sect09EffectenOpGewichtMetabolismeEnVoeding'
import Sect10ContraIndicatiesEnPatientkenmerken from './sections/Sect10ContraIndicatiesEnPatientkenmerken'
import Sect11VergoedingEnGetrapteAanpak from './sections/Sect11VergoedingEnGetrapteAanpak'
import Sect12KlinischeToepassing from './sections/Sect12KlinischeToepassing'
import Sect13Samenvatting from './sections/Sect13Samenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-02', title: 'Wanneer medicatie?', icon: Stethoscope },
  { id: 'sect-03', title: 'Eerste stappen vóór medicatie', icon: LayoutList },
  { id: 'sect-04', title: 'Indicatie en vergoeding', icon: Activity },
  { id: 'sect-05', title: 'Medicamenteuze opties · Tabel 1', icon: Table2 },
  { id: 'sect-06', title: 'Orlistat', icon: Pill },
  { id: 'sect-07', title: 'Naltrexon/bupropion', icon: Pill },
  { id: 'sect-08', title: 'GLP-1/GIP-middelen', icon: Pill },
  { id: 'sect-09', title: 'Effecten op gewicht en metabolisme', icon: Activity },
  { id: 'sect-10', title: 'Contra-indicaties · Tabel 2', icon: Table2 },
  { id: 'sect-11', title: 'Vergoeding en getrapte aanpak', icon: LayoutList },
  { id: 'sect-12', title: 'Klinische toepassing', icon: Stethoscope },
  { id: 'sect-13', title: 'Samenvatting', icon: FileText },
]

const Blok10Week5CasusC09ObesitasFlankerendOnderwijsLmoMedicamenteuzeObesitasbehandelingenSummary = () => (
  <SummaryLayout
    title="Medicamenteuze obesitasbehandelingen"
    moduleKind="lmo"
    description="Na deze samenvatting kun je de verschillende medicamenteuze behandelopties voor obesitas beschrijven, uitleggen wat ze doen met gewicht, metabolisme en maag-darmfunctie, en beoordelen of een patiënt in aanmerking komt."
    caseLabel="Week 5 · Casus C09: Obesitas"
    blokLabel="Blok 10"
    tableOfContents={tableOfContents}
    practiceLink="/oefenvragen?lme=blok10-week5-casus-c09-obesitas-lmo-medicamenteuze-obesitasbehandelingen"
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <Sect01Leerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <Sect02MedicamenteuzeBehandelingWanneer />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <Sect03DeEersteStappenVoorMedicatie />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <Sect04IndicatieEnVergoeding />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <Sect05DeBelangrijksteMedicamenteuzeOpties />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <Sect06Orlistat />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <Sect07NaltrexonBupropion />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <Sect08LiraglutideSemaglutideEnTirzepatide />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <Sect09EffectenOpGewichtMetabolismeEnVoeding />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <Sect10ContraIndicatiesEnPatientkenmerken />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <Sect11VergoedingEnGetrapteAanpak />
    </section>
    <section id="sect-12" className="scroll-mt-24 mb-12">
      <Sect12KlinischeToepassing />
    </section>
    <section id="sect-13" className="scroll-mt-24 mb-12">
      <Sect13Samenvatting />
    </section>
  </SummaryLayout>
)

export default Blok10Week5CasusC09ObesitasFlankerendOnderwijsLmoMedicamenteuzeObesitasbehandelingenSummary
