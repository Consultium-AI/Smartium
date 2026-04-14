import {
  BookOpen,
  CircleCheck,
  ClipboardList,
  Dna,
  GitBranch,
  ListChecks,
  MapPin,
  Microscope,
  ShieldAlert,
  Stethoscope,
  Table2,
  Target,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02EpidemiologieEnRisicofactoren from './Sect02EpidemiologieEnRisicofactoren'
import Sect03KlinischeVerdenkingEnDiagnostiek from './Sect03KlinischeVerdenkingEnDiagnostiek'
import Sect04RisicofactorenEnVerhoogdRisico from './Sect04RisicofactorenEnVerhoogdRisico'
import Sect05FamiliairMelanoomEnFammmSyndroom from './Sect05FamiliairMelanoomEnFammmSyndroom'
import Sect06KlinischeCriteriaFamiliairMelanoom from './Sect06KlinischeCriteriaFamiliairMelanoom'
import Sect07SubtypenVanMelanoom from './Sect07SubtypenVanMelanoom'
import Sect08BreslowdikteEnSentinelNode from './Sect08BreslowdikteEnSentinelNode'
import Sect09SatellietEnInTransitMetastasen from './Sect09SatellietEnInTransitMetastasen'
import Sect10TnmEnAjccClassificatie from './Sect10TnmEnAjccClassificatie'
import Sect11Tabel2TnmAjccVoorbeelden from './Sect11Tabel2TnmAjccVoorbeelden'
import Sect12WatMoetJeUitDezeVoorbeeldenOnthouden from './Sect12WatMoetJeUitDezeVoorbeeldenOnthouden'
import Sect13PraktischeKernpunten from './Sect13PraktischeKernpunten'
import Sect14Samenvatting from './Sect14Samenvatting'

const Blok5Week2Casus4MelanoomGelokaliseerdSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Epidemiologie en risicofactoren', icon: GitBranch },
    { id: 'sect-03', title: 'Klinische verdenking en diagnostiek', icon: Stethoscope },
    { id: 'sect-04', title: 'Risicofactoren en verhoogd risico', icon: ShieldAlert },
    { id: 'sect-05', title: 'Familiair melanoom en FAMMM-syndroom', icon: Dna },
    { id: 'sect-06', title: 'Klinische criteria familiair / FAMMM', icon: ListChecks },
    { id: 'sect-07', title: 'Subtypen van melanoom', icon: Microscope },
    { id: 'sect-08', title: 'Breslowdikte en sentinel node', icon: Target },
    { id: 'sect-09', title: 'Satelliet- en in-transitmetastasen', icon: MapPin },
    { id: 'sect-10', title: 'TNM- en AJCC-classificatie', icon: Table2 },
    { id: 'sect-11', title: 'Tabel 2: TNM/AJCC-voorbeelden', icon: Table2 },
    { id: 'sect-12', title: 'Wat moet je onthouden?', icon: ClipboardList },
    { id: 'sect-13', title: 'Praktische kernpunten', icon: ListChecks },
    { id: 'sect-14', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Melanoom gelokaliseerd"
      description="De incidentie van huidkanker en melanoom is de afgelopen 40 jaar voortdurend gestegen. Dat betekent dat deze aandoeningen steeds vaker worden gezien. De incidentie verschilt ook sterk per land: wereldwijd lopen de cijfers uiteen, met bijvoorbeeld Australië hoog en Saudi-Arabië laag."
      caseLabel="Week 2 · Casus 4: Donkere vlek"
      blokLabel="Blok 5"
      practiceLink="/oefenvragen?lme=blok5-week2-casus4-melanoom-gelokaliseerd"
      tableOfContents={tableOfContents}
    summaryVariantToggle={{
      activeLmeId: 'blok5-week2-casus4-melanoom-gelokaliseerd',
      variants: [
        { id: 'blok5-week2-casus4-melanoom-gelokaliseerd', label: 'Uitgebreid' },
        { id: 'blok5-week2-casus4-melanoom-gelokaliseerd-mini', label: 'Kort' },
      ],
    }}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02EpidemiologieEnRisicofactoren />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03KlinischeVerdenkingEnDiagnostiek />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04RisicofactorenEnVerhoogdRisico />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05FamiliairMelanoomEnFammmSyndroom />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06KlinischeCriteriaFamiliairMelanoom />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07SubtypenVanMelanoom />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08BreslowdikteEnSentinelNode />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09SatellietEnInTransitMetastasen />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10TnmEnAjccClassificatie />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11Tabel2TnmAjccVoorbeelden />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12WatMoetJeUitDezeVoorbeeldenOnthouden />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13PraktischeKernpunten />
      </section>
      <section id="sect-14" className="scroll-mt-24 mb-12">
        <Sect14Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week2Casus4MelanoomGelokaliseerdSummary
