import {
  BookOpen,
  ClipboardList,
  HeartHandshake,
  LayoutGrid,
  ListChecks,
  MessageCircle,
  Shield,
  Sparkles,
  Stethoscope,
  Table2,
  Users,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02PassendeZorgDeKern from './Sect02PassendeZorgDeKern'
import Sect03WaaromPassendeZorgBelangrijk from './Sect03WaaromPassendeZorgBelangrijk'
import Sect04Pics from './Sect04Pics'
import Sect05VierPijlers from './Sect05VierPijlers'
import Sect06Behandelbeperkingen from './Sect06Behandelbeperkingen'
import Sect07Communicatie from './Sect07Communicatie'
import Sect08Religie from './Sect08Religie'
import Sect09GesprekUitleggen from './Sect09GesprekUitleggen'
import Sect10SamenvattendeKern from './Sect10SamenvattendeKern'
import Sect11Samenvatting from './Sect11Samenvatting'

const Blok9Week4Casus8PassendeZorgOpDeIntensiveCareSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Passende zorg op de intensive care: de kern', icon: Stethoscope },
    { id: 'sect-03', title: 'Waarom passende zorg op de IC belangrijk is', icon: HeartHandshake },
    { id: 'sect-04', title: 'PICS: het post-IC syndroom', icon: Users },
    { id: 'sect-05', title: 'Passende zorg: de vier pijlers', icon: LayoutGrid },
    { id: 'sect-06', title: 'Behandelbeperkingen en het doel van stoppen', icon: Shield },
    { id: 'sect-07', title: 'Communicatie met patiënt en familie', icon: MessageCircle },
    { id: 'sect-08', title: 'Religie, overtuigingen en medische flexibiliteit', icon: ClipboardList },
    { id: 'sect-09', title: 'Hoe je dit in een gesprek kunt uitleggen', icon: Sparkles },
    { id: 'sect-10', title: 'Samenvattende kern', icon: Table2 },
    { id: 'sect-11', title: 'Samenvatting', icon: ListChecks },
  ]

  return (
    <SummaryLayout
      title="Passende zorg op de intensive care"
      description="Op de intensive care worden patiënten opgenomen die zo ernstig ziek zijn dat zij zonder orgaanondersteuning een grote kans hebben om te overlijden."
      caseLabel="Week 4 · Casus 8: Een leuk feestje"
      blokLabel="Blok 9"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=blok9-week4-casus8-passende-zorg-op-de-intensive-care"
      summaryVariantToggle={{
        activeLmeId: 'blok9-week4-casus8-passende-zorg-op-de-intensive-care',
        variants: [
          { id: 'blok9-week4-casus8-passende-zorg-op-de-intensive-care', label: 'Uitgebreid' },
          { id: 'blok9-week4-casus8-passende-zorg-op-de-intensive-care-mini', label: 'Kort' },
        ],
      }}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02PassendeZorgDeKern />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03WaaromPassendeZorgBelangrijk />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04Pics />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05VierPijlers />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06Behandelbeperkingen />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07Communicatie />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08Religie />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09GesprekUitleggen />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10SamenvattendeKern />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok9Week4Casus8PassendeZorgOpDeIntensiveCareSummary
