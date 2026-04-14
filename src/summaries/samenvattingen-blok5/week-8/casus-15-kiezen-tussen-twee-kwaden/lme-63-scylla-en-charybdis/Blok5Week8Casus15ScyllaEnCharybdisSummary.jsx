import {
  Activity,
  BookOpen,
  CircleCheck,
  ClipboardList,
  Coins,
  FileQuestion,
  Lightbulb,
  Scale,
  ScrollText,
  Shield,
  Stethoscope,
  Table2,
  Users,
  Video,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02ScyllaEnCharybdis from './Sect02ScyllaEnCharybdis'
import Sect03KeuzesInDeZorgDagelijks from './Sect03KeuzesInDeZorgDagelijks'
import Sect04Tabel1DagelijkseKeuzes from './Sect04Tabel1DagelijkseKeuzes'
import Sect05PreventieScreeningZinvolHandelen from './Sect05PreventieScreeningZinvolHandelen'
import Sect06RokenVapenIndustrie from './Sect06RokenVapenIndustrie'
import Sect07TikTokMedischeInformatie from './Sect07TikTokMedischeInformatie'
import Sect08DilemmasReguliereZorgTabel2 from './Sect08DilemmasReguliereZorgTabel2'
import Sect09ArtseneedHippocrates from './Sect09ArtseneedHippocrates'
import Sect10IsDeEedAltijdGenoeg from './Sect10IsDeEedAltijdGenoeg'
import Sect11KeuzesKostenPrioriteiten from './Sect11KeuzesKostenPrioriteiten'
import Sect12VoorbereidingCasusImmunotherapie from './Sect12VoorbereidingCasusImmunotherapie'
import Sect13ReflectieOpDeLeerdoelen from './Sect13ReflectieOpDeLeerdoelen'
import Sect14Samenvatting from './Sect14Samenvatting'

const Blok5Week8Casus15ScyllaEnCharybdisSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    {
      id: 'sect-02',
      title: 'Scylla en Charybdis: een beeld voor moeilijke keuzes',
      icon: Lightbulb,
    },
    { id: 'sect-03', title: 'Keuzes in de zorg maken we iedere dag', icon: Users },
    { id: 'sect-04', title: 'Tabel 1. Voorbeelden van dagelijkse keuzes in de zorg', icon: Table2 },
    {
      id: 'sect-05',
      title: 'Preventie, screening en de vraag naar zinvol handelen',
      icon: Activity,
    },
    { id: 'sect-06', title: 'Roken, vapen en de invloed van industrie', icon: Shield },
    { id: 'sect-07', title: 'TikTok en medische informatie', icon: Video },
    { id: 'sect-08', title: 'Dilemma’s in de reguliere zorg', icon: Scale },
    { id: 'sect-09', title: 'Het handelen van een arts: de eed van Hippocrates', icon: ScrollText },
    { id: 'sect-10', title: 'Is de eed altijd genoeg?', icon: FileQuestion },
    { id: 'sect-11', title: 'Keuzes, kosten en prioriteiten in de zorg', icon: Coins },
    {
      id: 'sect-12',
      title: 'Voorbereiding op casus en de rol van immunotherapie',
      icon: Stethoscope,
    },
    { id: 'sect-13', title: 'Reflectie op de leerdoelen', icon: ClipboardList },
    { id: 'sect-14', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Scylla en Charybdis"
      description="De titel Scylla en Charybdis verwijst naar een bekende mythe uit de Griekse oudheid."
      caseLabel="Week 8 · Casus 15: Kiezen tussen twee kwaden"
      blokLabel="Blok 5"
      practiceLink="/oefenvragen?lme=blok5-week8-casus15-scylla-en-charybdis"
      tableOfContents={tableOfContents}
    summaryVariantToggle={{
      activeLmeId: 'blok5-week8-casus15-scylla-en-charybdis',
      variants: [
        { id: 'blok5-week8-casus15-scylla-en-charybdis', label: 'Uitgebreid' },
        { id: 'blok5-week8-casus15-scylla-en-charybdis-mini', label: 'Kort' },
      ],
    }}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02ScyllaEnCharybdis />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03KeuzesInDeZorgDagelijks />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04Tabel1DagelijkseKeuzes />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05PreventieScreeningZinvolHandelen />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06RokenVapenIndustrie />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07TikTokMedischeInformatie />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08DilemmasReguliereZorgTabel2 />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09ArtseneedHippocrates />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10IsDeEedAltijdGenoeg />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11KeuzesKostenPrioriteiten />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12VoorbereidingCasusImmunotherapie />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13ReflectieOpDeLeerdoelen />
      </section>
      <section id="sect-14" className="scroll-mt-24 mb-12">
        <Sect14Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week8Casus15ScyllaEnCharybdisSummary
