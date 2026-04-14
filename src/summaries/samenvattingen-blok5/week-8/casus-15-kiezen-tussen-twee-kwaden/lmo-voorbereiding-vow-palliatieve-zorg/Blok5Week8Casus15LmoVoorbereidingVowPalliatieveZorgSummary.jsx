import {
  BookOpen,
  CircleCheck,
  ClipboardList,
  HeartHandshake,
  Layers,
  MessageCircle,
  Scale,
  Sparkles,
  Table2,
  Users,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02VoorbereidingVow from './Sect02VoorbereidingVow'
import Sect03WatWelEnNiet from './Sect03WatWelEnNiet'
import Sect04VoorWieEnWanneer from './Sect04VoorWieEnWanneer'
import Sect05Fasen from './Sect05Fasen'
import Sect06Autonomie from './Sect06Autonomie'
import Sect07VierDimensies from './Sect07VierDimensies'
import Sect08WaaromBelangrijk from './Sect08WaaromBelangrijk'
import Sect09Samenwerking from './Sect09Samenwerking'
import Sect10SlotSamenvatting from './Sect10SlotSamenvatting'

const Blok5Week8Casus15LmoVoorbereidingVowPalliatieveZorgSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Palliatieve zorg als voorbereiding op het VOW', icon: Sparkles },
    { id: 'sect-03', title: 'Wat palliatieve zorg wél en niet is', icon: ClipboardList },
    { id: 'sect-04', title: 'Voor wie en wanneer', icon: Users },
    { id: 'sect-05', title: 'De fasen van palliatieve zorg', icon: Layers },
    { id: 'sect-06', title: 'Autonomie en maatwerk', icon: Scale },
    { id: 'sect-07', title: 'De vier dimensies van lijden', icon: Table2 },
    { id: 'sect-08', title: 'Waarom palliatieve zorg belangrijk is', icon: HeartHandshake },
    { id: 'sect-09', title: 'Samenwerking, communicatie en nazorg', icon: MessageCircle },
    { id: 'sect-10', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Voorbereiding VOW palliatieve zorg"
      description="Deze stof is bedoeld als voorbereiding op het VOW palliatieve zorg. Het onderwerp is belangrijk omdat palliatieve zorg steeds vaker voorkomt in het werk van artsen. Het gaat dus niet om een zeldzaam of heel specialistisch onderwerp, maar om gewone medische zorg waar je als arts regelmatig mee te maken krijgt."
      caseLabel="Week 8 · Casus 15: Kiezen tussen twee kwaden"
      blokLabel="Blok 5"
      moduleKind="lmo"
      practiceLink="/oefenvragen?lme=blok5-week8-casus15-lmo-voorbereiding-vow-palliatieve-zorg"
      tableOfContents={tableOfContents}
    summaryVariantToggle={{
      activeLmeId: 'blok5-week8-casus15-lmo-voorbereiding-vow-palliatieve-zorg',
      variants: [
        { id: 'blok5-week8-casus15-lmo-voorbereiding-vow-palliatieve-zorg', label: 'Uitgebreid' },
        { id: 'blok5-week8-casus15-lmo-voorbereiding-vow-palliatieve-zorg-mini', label: 'Kort' },
      ],
    }}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02VoorbereidingVow />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03WatWelEnNiet />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04VoorWieEnWanneer />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05Fasen />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06Autonomie />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07VierDimensies />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08WaaromBelangrijk />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09Samenwerking />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10SlotSamenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week8Casus15LmoVoorbereidingVowPalliatieveZorgSummary
