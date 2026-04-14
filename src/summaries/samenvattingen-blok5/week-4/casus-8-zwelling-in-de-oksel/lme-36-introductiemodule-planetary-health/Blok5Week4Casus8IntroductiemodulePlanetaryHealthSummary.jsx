import {
  BookOpen,
  CircleCheck,
  ClipboardList,
  Globe2,
  Microscope,
  Stethoscope,
  Table2,
  ThermometerSun,
  Wind,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Brondocumentkop from './Sect01Brondocumentkop'
import Sect02Leerdoelen from './Sect02Leerdoelen'
import Sect03PlanetaryHealthGezondheidMensEnPlaneet from './Sect03PlanetaryHealthGezondheidMensEnPlaneet'
import Sect04KlimaatveranderingDirecteIndirecteEffecten from './Sect04KlimaatveranderingDirecteIndirecteEffecten'
import Sect05Infectieziekten from './Sect05Infectieziekten'
import Sect06VoedingEnVoedselzekerheid from './Sect06VoedingEnVoedselzekerheid'
import Sect07HittegerelateerdeAandoeningen from './Sect07HittegerelateerdeAandoeningen'
import Sect08LuchtvervuilingEnOzonAanDeGrond from './Sect08LuchtvervuilingEnOzonAanDeGrond'
import Sect09Allergieen from './Sect09Allergieen'
import Sect10MigratieEnConflict from './Sect10MigratieEnConflict'
import Sect11HulpmiddelOmVerbandenTeVerkennen from './Sect11HulpmiddelOmVerbandenTeVerkennen'
import Sect12Samenvatting from './Sect12Samenvatting'

const Blok5Week4Casus8IntroductiemodulePlanetaryHealthSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'LME 36 – Introductiemodule Planetary health', icon: BookOpen },
    { id: 'sect-02', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-03', title: 'Planetary health: gezondheid van mens én planeet', icon: Globe2 },
    { id: 'sect-04', title: 'Klimaatverandering en gezondheid: directe en indirecte effecten', icon: ThermometerSun },
    { id: 'sect-05', title: 'Infectieziekten', icon: Microscope },
    { id: 'sect-06', title: 'Voeding en voedselzekerheid', icon: ClipboardList },
    { id: 'sect-07', title: 'Hittegerelateerde aandoeningen', icon: ThermometerSun },
    { id: 'sect-08', title: 'Luchtvervuiling en ozon aan de grond', icon: Wind },
    { id: 'sect-09', title: 'Allergieën', icon: Stethoscope },
    { id: 'sect-10', title: 'Migratie en conflict', icon: Globe2 },
    { id: 'sect-11', title: 'Hulpmiddel om verbanden te verkennen', icon: Table2 },
    { id: 'sect-12', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Introductiemodule Planetary health"
      description="Planetary health gaat over meer dan alleen klimaatverandering."
      caseLabel="Week 4 · Casus 8: Zwelling in de oksel"
      blokLabel="Blok 5"
      practiceLink="/oefenvragen?lme=blok5-week4-casus8-introductiemodule-planetary-health"
      tableOfContents={tableOfContents}
    summaryVariantToggle={{
      activeLmeId: 'blok5-week4-casus8-introductiemodule-planetary-health',
      variants: [
        { id: 'blok5-week4-casus8-introductiemodule-planetary-health', label: 'Uitgebreid' },
        { id: 'blok5-week4-casus8-introductiemodule-planetary-health-mini', label: 'Kort' },
      ],
    }}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Brondocumentkop />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02Leerdoelen />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03PlanetaryHealthGezondheidMensEnPlaneet />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04KlimaatveranderingDirecteIndirecteEffecten />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05Infectieziekten />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06VoedingEnVoedselzekerheid />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07HittegerelateerdeAandoeningen />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08LuchtvervuilingEnOzonAanDeGrond />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09Allergieen />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10MigratieEnConflict />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11HulpmiddelOmVerbandenTeVerkennen />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week4Casus8IntroductiemodulePlanetaryHealthSummary
