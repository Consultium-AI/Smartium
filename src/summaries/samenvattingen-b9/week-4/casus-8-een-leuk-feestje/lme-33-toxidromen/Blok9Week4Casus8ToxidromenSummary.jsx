import {
  BookOpen,
  HelpCircle,
  ListTree,
  ScanSearch,
  Grid3x3,
  FlaskConical,
  Route,
  Dumbbell,
  ListChecks,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02WatIsEenIntoxicatie from './Sect02WatIsEenIntoxicatie'
import Sect03OorzakenVanIntoxicatie from './Sect03OorzakenVanIntoxicatie'
import Sect04HerkennenVanEenIntoxicatie from './Sect04HerkennenVanEenIntoxicatie'
import Sect05ToxidroomHerkennenVanHetPatroon from './Sect05ToxidroomHerkennenVanHetPatroon'
import Sect06VoorbeeldenUitDePraktijk from './Sect06VoorbeeldenUitDePraktijk'
import Sect07HoeKomJeViaSymptomenBijEenMiddel from './Sect07HoeKomJeViaSymptomenBijEenMiddel'
import Sect08OefenenMetToxidromen from './Sect08OefenenMetToxidromen'
import Sect09Samenvatting from './Sect09Samenvatting'

const Blok9Week4Casus8ToxidromenSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: '1. Wat is een intoxicatie?', icon: HelpCircle },
    { id: 'sect-03', title: '2. Oorzaken van intoxicatie', icon: ListTree },
    { id: 'sect-04', title: '3. Herkennen van een intoxicatie', icon: ScanSearch },
    { id: 'sect-05', title: '4. Toxidroom: herkennen van het patroon', icon: Grid3x3 },
    { id: 'sect-06', title: '5. Voorbeelden van intoxicaties uit de praktijk', icon: FlaskConical },
    { id: 'sect-07', title: '6. Hoe kom je via symptomen bij een middel?', icon: Route },
    { id: 'sect-08', title: '7. Oefenen met toxidromen en intoxicaties', icon: Dumbbell },
    { id: 'sect-09', title: 'Samenvatting', icon: ListChecks },
  ]

  return (
    <SummaryLayout
      title="Toxidromen"
      description="Een intoxicatie is een situatie waarin in het lichaam problemen ontstaan door een te grote hoeveelheid van een bepaalde lichaamsvreemde stof."
      caseLabel="Week 4 · Casus 8: Een leuk feestje"
      blokLabel="Blok 9"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=blok9-week4-casus8-toxidromen"
      summaryVariantToggle={{
        activeLmeId: 'blok9-week4-casus8-toxidromen',
        variants: [
          { id: 'blok9-week4-casus8-toxidromen', label: 'Uitgebreid' },
          { id: 'blok9-week4-casus8-toxidromen-mini', label: 'Kort' },
        ],
      }}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12"><Sect01Leerdoelen /></section>
      <section id="sect-02" className="scroll-mt-24 mb-12"><Sect02WatIsEenIntoxicatie /></section>
      <section id="sect-03" className="scroll-mt-24 mb-12"><Sect03OorzakenVanIntoxicatie /></section>
      <section id="sect-04" className="scroll-mt-24 mb-12"><Sect04HerkennenVanEenIntoxicatie /></section>
      <section id="sect-05" className="scroll-mt-24 mb-12"><Sect05ToxidroomHerkennenVanHetPatroon /></section>
      <section id="sect-06" className="scroll-mt-24 mb-12"><Sect06VoorbeeldenUitDePraktijk /></section>
      <section id="sect-07" className="scroll-mt-24 mb-12"><Sect07HoeKomJeViaSymptomenBijEenMiddel /></section>
      <section id="sect-08" className="scroll-mt-24 mb-12"><Sect08OefenenMetToxidromen /></section>
      <section id="sect-09" className="scroll-mt-24 mb-12"><Sect09Samenvatting /></section>
    </SummaryLayout>
  )
}

export default Blok9Week4Casus8ToxidromenSummary
