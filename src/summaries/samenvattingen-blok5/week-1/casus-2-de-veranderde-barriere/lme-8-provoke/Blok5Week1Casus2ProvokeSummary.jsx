import {
  BookOpen,
  CircleCheck,
  Eye,
  Layers,
  ListChecks,
  MapPin,
  Palette,
  Ruler,
  Shapes,
  Sparkles,
  Square,
  Table2,
  LayoutGrid,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02DiagnostischProcesDermatologie from './Sect02DiagnostischProcesDermatologie'
import Sect03ProvokeGeheugensteunTabel1 from './Sect03ProvokeGeheugensteunTabel1'
import Sect04PVanPlaats from './Sect04PVanPlaats'
import Sect05RVanRangschikking from './Sect05RVanRangschikking'
import Sect06OVanOmvangTabel2 from './Sect06OVanOmvangTabel2'
import Sect07VVanVorm from './Sect07VVanVorm'
import Sect08OVanOmtrek from './Sect08OVanOmtrek'
import Sect09KVanKleur from './Sect09KVanKleur'
import Sect10EVanEfflorescentiesTabel3 from './Sect10EVanEfflorescentiesTabel3'
import Sect11EfflorescentiesVoorbeelden from './Sect11EfflorescentiesVoorbeelden'
import Sect12MorfologischeHoofdgroepen from './Sect12MorfologischeHoofdgroepen'
import Sect13ProvokeInDeSpreekkamer from './Sect13ProvokeInDeSpreekkamer'
import Sect14Samenvatting from './Sect14Samenvatting'

const Blok5Week1Casus2ProvokeSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Het diagnostisch proces in de dermatologie', icon: Eye },
    { id: 'sect-03', title: 'PROVOKE als geheugensteun', icon: Sparkles },
    { id: 'sect-04', title: 'P van Plaats', icon: MapPin },
    { id: 'sect-05', title: 'R van Rangschikking', icon: LayoutGrid },
    { id: 'sect-06', title: 'O van Omvang', icon: Ruler },
    { id: 'sect-07', title: 'V van Vorm', icon: Shapes },
    { id: 'sect-08', title: 'O van Omtrek', icon: Square },
    { id: 'sect-09', title: 'K van Kleur', icon: Palette },
    { id: 'sect-10', title: 'E van Efflorescenties', icon: Layers },
    { id: 'sect-11', title: 'Macula, papel, vesikel, crusta', icon: ListChecks },
    { id: 'sect-12', title: 'Morfologische hoofdgroepen', icon: Table2 },
    { id: 'sect-13', title: 'PROVOKE in de spreekkamer', icon: Sparkles },
    { id: 'sect-14', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="PROVOKE"
      description="Bij dermatologisch onderzoek is het belangrijk om eerst objectief te kijken en pas daarna te gaan interpreteren. Je beschrijft dus wat je ziet, zonder meteen een diagnose te noemen. Dat is precies waarom PROVOKE zo handig is: het dwingt je om geen kenmerken over het hoofd te zien."
      caseLabel="Week 1 · Casus 2: De veranderde barrière"
      blokLabel="Blok 5"
      practiceLink="/oefenvragen?lme=blok5-week1-casus2-provoke"
      tableOfContents={tableOfContents}
    summaryVariantToggle={{
      activeLmeId: 'blok5-week1-casus2-provoke',
      variants: [
        { id: 'blok5-week1-casus2-provoke', label: 'Uitgebreid' },
        { id: 'blok5-week1-casus2-provoke-mini', label: 'Kort' },
      ],
    }}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02DiagnostischProcesDermatologie />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03ProvokeGeheugensteunTabel1 />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04PVanPlaats />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05RVanRangschikking />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06OVanOmvangTabel2 />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07VVanVorm />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08OVanOmtrek />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09KVanKleur />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10EVanEfflorescentiesTabel3 />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11EfflorescentiesVoorbeelden />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12MorfologischeHoofdgroepen />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13ProvokeInDeSpreekkamer />
      </section>
      <section id="sect-14" className="scroll-mt-24 mb-12">
        <Sect14Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week1Casus2ProvokeSummary
