import {
  BookOpen,
  CircleCheck,
  Globe2,
  Home,
  LayoutList,
  Map,
  Stethoscope,
  Table2,
  Wind,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02Inleiding from './Sect02Inleiding'
import Sect03MilieugerelateerdeGezondheidsklachten from './Sect03MilieugerelateerdeGezondheidsklachten'
import Sect04BinnenmilieuKlachtenInHuis from './Sect04BinnenmilieuKlachtenInHuis'
import Sect05BuitenmilieuKlachtenInDeLeefomgeving from './Sect05BuitenmilieuKlachtenInDeLeefomgeving'
import Sect06WaaroverWordtDeGGDGebeldEnTabel1 from './Sect06WaaroverWordtDeGGDGebeldEnTabel1'
import Sect07EffectenVanLuchtkwaliteitOpGezondheid from './Sect07EffectenVanLuchtkwaliteitOpGezondheid'
import Sect08AcuteEnStructureleBlootstelling from './Sect08AcuteEnStructureleBlootstelling'
import Sect09GezondheidseffectenBijKinderen from './Sect09GezondheidseffectenBijKinderen'
import Sect10LuchtkwaliteitInNederlandEnRotterdamRijnmond from './Sect10LuchtkwaliteitInNederlandEnRotterdamRijnmond'
import Sect11DeAtlasLeefomgeving from './Sect11DeAtlasLeefomgeving'
import Sect12SamenhangTussenBinnenmilieuBuitenluchtEnGezondheid from './Sect12SamenhangTussenBinnenmilieuBuitenluchtEnGezondheid'
import Sect13KlinischeRelevantie from './Sect13KlinischeRelevantie'
import Sect14Samenvatting from './Sect14Samenvatting'

const TITLE = 'Slechte woningen lucht & luchtverontreiniging  bovenste luchtweginfecties'

const Blok5Week6Casus12SlechteWoningenLuchtLuchtverontreinigingBovensteLuchtweginfectiesSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    {
      id: 'sect-02',
      title: 'Inleiding: waarom zijn slechte woningen en luchtverontreiniging belangrijk?',
      icon: Home,
    },
    { id: 'sect-03', title: 'Milieugerelateerde gezondheidsklachten', icon: Wind },
    { id: 'sect-04', title: 'Binnenmilieu: klachten in huis', icon: Home },
    { id: 'sect-05', title: 'Buitenmilieu: klachten in de leefomgeving', icon: Globe2 },
    { id: 'sect-06', title: 'Waarover wordt de GGD gebeld?', icon: Table2 },
    { id: 'sect-07', title: 'Effecten van luchtkwaliteit op gezondheid', icon: Wind },
    { id: 'sect-08', title: 'Acute blootstelling en structurele blootstelling', icon: LayoutList },
    { id: 'sect-09', title: 'Gezondheidseffecten bij kinderen', icon: BookOpen },
    { id: 'sect-10', title: 'Luchtkwaliteit in Nederland en Rotterdam-Rijnmond', icon: Map },
    { id: 'sect-11', title: 'De Atlas Leefomgeving', icon: Map },
    {
      id: 'sect-12',
      title: 'Samenhang tussen binnenmilieu, buitenlucht en gezondheid',
      icon: LayoutList,
    },
    { id: 'sect-13', title: 'Klinische relevantie', icon: Stethoscope },
    { id: 'sect-14', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title={TITLE}
      description="In deze stof staat de relatie tussen wonen, lucht en gezondheid centraal."
      caseLabel="Week 6 · Casus 12: Verwarde patiënt met griepachtige klachten"
      blokLabel="Blok 5"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02Inleiding />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03MilieugerelateerdeGezondheidsklachten />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04BinnenmilieuKlachtenInHuis />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05BuitenmilieuKlachtenInDeLeefomgeving />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06WaaroverWordtDeGGDGebeldEnTabel1 />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07EffectenVanLuchtkwaliteitOpGezondheid />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08AcuteEnStructureleBlootstelling />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09GezondheidseffectenBijKinderen />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10LuchtkwaliteitInNederlandEnRotterdamRijnmond />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11DeAtlasLeefomgeving />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12SamenhangTussenBinnenmilieuBuitenluchtEnGezondheid />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13KlinischeRelevantie />
      </section>
      <section id="sect-14" className="scroll-mt-24 mb-12">
        <Sect14Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week6Casus12SlechteWoningenLuchtLuchtverontreinigingBovensteLuchtweginfectiesSummary
