import {
  BookOpen,
  Activity,
  Factory,
  LayoutGrid,
  Droplets,
  FlaskConical,
  ShieldQuestion,
  Link2,
  TableProperties,
  GitCompare,
  Ban,
  Stethoscope,
  ClipboardList,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './sections/Sect01Leerdoelen'
import Sect02ExocrieneOpbouw from './sections/Sect02ExocrieneOpbouw'
import Sect03AcinaireCellen from './sections/Sect03AcinaireCellen'
import Sect04DuctaleEpitheel from './sections/Sect04DuctaleEpitheel'
import Sect05ProductenPancreassap from './sections/Sect05ProductenPancreassap'
import Sect06Pancreasenzymen from './sections/Sect06Pancreasenzymen'
import Sect07Zymogenen from './sections/Sect07Zymogenen'
import Sect08ActivatieZymogenen from './sections/Sect08ActivatieZymogenen'
import Sect09EnzymenActiefOfZymogeen from './sections/Sect09EnzymenActiefOfZymogeen'
import Sect10RegulatieSecretie from './sections/Sect10RegulatieSecretie'
import Sect11Remming from './sections/Sect11Remming'
import Sect12KlinischeRelevantie from './sections/Sect12KlinischeRelevantie'
import Sect13Samenvatting from './sections/Sect13Samenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-02', title: 'Exocriene pancreas: opbouw en hoofdtaak', icon: LayoutGrid },
  { id: 'sect-03', title: 'Acinaire cellen: enzymen en chloride', icon: Factory },
  { id: 'sect-04', title: 'Ductale epitheelcellen: bicarbonaat', icon: Droplets },
  { id: 'sect-05', title: 'Producten van het pancreassap · Tabel 2', icon: TableProperties },
  { id: 'sect-06', title: 'Pancreasenzymen en functie', icon: FlaskConical },
  { id: 'sect-07', title: 'Zymogenen en autodigestie · Tabel 3', icon: ShieldQuestion },
  { id: 'sect-08', title: 'Activering van zymogenen', icon: Link2 },
  { id: 'sect-09', title: 'Direct actieve enzymen · Tabel 4', icon: Activity },
  { id: 'sect-10', title: 'Regulatie pancreassecretie', icon: GitCompare },
  { id: 'sect-11', title: 'Remming van de secretie', icon: Ban },
  { id: 'sect-12', title: 'Klinische relevantie', icon: Stethoscope },
  { id: 'sect-13', title: 'Samenvatting', icon: ClipboardList },
]

const Blok10Week3CasusC05ChronischePancreatitisLmePancreasfysiologieSummary = () => (
  <SummaryLayout
    title="Pancreasfysiologie"
    moduleKind="lme"
    practiceLink="/oefenvragen?lme=blok10-week3-casus-c05-chronische-pancreatitis-pancreasfysiologie"
    description={
      <>
        De exocriene pancreas is een belangrijk orgaan in de vertering van voedsel. De klier bestaat grofweg uit twee
        soorten functionele onderdelen: <strong className="text-slate-800 dark:text-slate-100">acinaire cellen</strong> en{' '}
        <strong className="text-slate-800 dark:text-slate-100">ductale epitheelcellen</strong>. Samen zorgen zij ervoor
        dat de pancreasafscheiding goed past bij de vertering in het darmkanaal.
      </>
    }
    caseLabel="Week 3 · Casus C05: Chronische pancreatitis"
    blokLabel="Blok 10"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <Sect01Leerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <Sect02ExocrieneOpbouw />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <Sect03AcinaireCellen />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <Sect04DuctaleEpitheel />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <Sect05ProductenPancreassap />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <Sect06Pancreasenzymen />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <Sect07Zymogenen />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <Sect08ActivatieZymogenen />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <Sect09EnzymenActiefOfZymogeen />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <Sect10RegulatieSecretie />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <Sect11Remming />
    </section>
    <section id="sect-12" className="scroll-mt-24 mb-12">
      <Sect12KlinischeRelevantie />
    </section>
    <section id="sect-13" className="scroll-mt-24 mb-12">
      <Sect13Samenvatting />
    </section>
  </SummaryLayout>
)

export default Blok10Week3CasusC05ChronischePancreatitisLmePancreasfysiologieSummary
