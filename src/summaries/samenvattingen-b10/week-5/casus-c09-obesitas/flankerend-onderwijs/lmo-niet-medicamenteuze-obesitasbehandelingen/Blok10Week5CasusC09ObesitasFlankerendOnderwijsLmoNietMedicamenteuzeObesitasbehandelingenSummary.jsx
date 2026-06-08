import {
  Activity,
  BookOpen,
  FileText,
  Heart,
  LayoutList,
  Stethoscope,
  Table2,
  Users,
} from 'lucide-react'
import SummaryLayout from '../../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './sections/Sect01Leerdoelen'
import Sect02NietMedicamenteuzeBehandelingVanObesitas from './sections/Sect02NietMedicamenteuzeBehandelingVanObesitas'
import Sect03LeefstijlbehandelingenBijObesitas from './sections/Sect03LeefstijlbehandelingenBijObesitas'
import Sect04BasisVanDeBehandeling from './sections/Sect04BasisVanDeBehandeling'
import Sect05GecombineerdeLeefstijlinterventie from './sections/Sect05GecombineerdeLeefstijlinterventie'
import Sect06AndereLeefstijlbehandelingen from './sections/Sect06AndereLeefstijlbehandelingen'
import Sect07EffectenOpLichaamsgewichtMetabolismeEndocrinologieEnVoedingsstatus from './sections/Sect07EffectenOpLichaamsgewichtMetabolismeEndocrinologieEnVoedingsstatus'
import Sect08WelkeBehandelingPastBijWelkePatient from './sections/Sect08WelkeBehandelingPastBijWelkePatient'
import Sect09Tabel1BelangrijkeOnderdelen from './sections/Sect09Tabel1BelangrijkeOnderdelen'
import Sect10Tabel2KeuzeLeefstijlbehandeling from './sections/Sect10Tabel2KeuzeLeefstijlbehandeling'
import Sect11KlinischeRelevantie from './sections/Sect11KlinischeRelevantie'
import Sect12Samenvatting from './sections/Sect12Samenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-02', title: 'Niet-medicamenteuze behandeling', icon: Heart },
  { id: 'sect-03', title: 'Leefstijlbehandelingen', icon: LayoutList },
  { id: 'sect-04', title: 'Voeding, beweging en gedrag', icon: Activity },
  { id: 'sect-05', title: 'Gecombineerde leefstijlinterventie', icon: LayoutList },
  { id: 'sect-06', title: 'Andere leefstijlbehandelingen', icon: LayoutList },
  { id: 'sect-07', title: 'Effecten op gewicht en metabolisme', icon: Activity },
  { id: 'sect-08', title: 'Welke behandeling past?', icon: Users },
  { id: 'sect-09', title: 'Tabel 1 · Onderdelen leefstijlbehandeling', icon: Table2 },
  { id: 'sect-10', title: 'Tabel 2 · Keuze leefstijlbehandeling', icon: Table2 },
  { id: 'sect-11', title: 'Klinische relevantie', icon: Stethoscope },
  { id: 'sect-12', title: 'Samenvatting', icon: FileText },
]

const Blok10Week5CasusC09ObesitasFlankerendOnderwijsLmoNietMedicamenteuzeObesitasbehandelingenSummary = () => (
  <SummaryLayout
    title="Niet-medicamenteuze obesitasbehandelingen"
    moduleKind="lmo"
    description="Na deze leermodule kun je de verschillende leefstijlbehandelingen voor obesitas beschrijven, uitleggen wat ze doen met gewicht, metabolisme en voedingsstatus, en beoordelen welke aanpak het beste past bij een patiënt."
    caseLabel="Week 5 · Casus C09: Obesitas"
    blokLabel="Blok 10"
    tableOfContents={tableOfContents}
    practiceLink="/oefenvragen?lme=blok10-week5-casus-c09-obesitas-lmo-niet-medicamenteuze-obesitasbehandelingen"
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <Sect01Leerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <Sect02NietMedicamenteuzeBehandelingVanObesitas />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <Sect03LeefstijlbehandelingenBijObesitas />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <Sect04BasisVanDeBehandeling />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <Sect05GecombineerdeLeefstijlinterventie />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <Sect06AndereLeefstijlbehandelingen />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <Sect07EffectenOpLichaamsgewichtMetabolismeEndocrinologieEnVoedingsstatus />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <Sect08WelkeBehandelingPastBijWelkePatient />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <Sect09Tabel1BelangrijkeOnderdelen />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <Sect10Tabel2KeuzeLeefstijlbehandeling />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <Sect11KlinischeRelevantie />
    </section>
    <section id="sect-12" className="scroll-mt-24 mb-12">
      <Sect12Samenvatting />
    </section>
  </SummaryLayout>
)

export default Blok10Week5CasusC09ObesitasFlankerendOnderwijsLmoNietMedicamenteuzeObesitasbehandelingenSummary
