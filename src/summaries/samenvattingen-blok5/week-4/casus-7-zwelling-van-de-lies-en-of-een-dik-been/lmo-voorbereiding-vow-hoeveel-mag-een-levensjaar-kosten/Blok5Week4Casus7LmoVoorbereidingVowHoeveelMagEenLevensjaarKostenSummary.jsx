import {
  BookOpen,
  CircleCheck,
  GitBranch,
  GraduationCap,
  HelpCircle,
  Landmark,
  Scale,
  Table2,
  TrendingUp,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02WaaromDeVraag from './Sect02WaaromDeVraag'
import Sect03Qaly from './Sect03Qaly'
import Sect04Kosten from './Sect04Kosten'
import Sect05Iker from './Sect05Iker'
import Sect06Kosteneffectiviteitsvlak from './Sect06Kosteneffectiviteitsvlak'
import Sect07NegatievePositieveIKER from './Sect07NegatievePositieveIKER'
import Sect08Nmb from './Sect08Nmb'
import Sect09BudgetallocatieEthiek from './Sect09BudgetallocatieEthiek'
import Sect10BasispakketTrechter from './Sect10BasispakketTrechter'
import Sect11DistributieveRechtvaardigheid from './Sect11DistributieveRechtvaardigheid'
import Sect12ToepassingOnderwijs from './Sect12ToepassingOnderwijs'
import Sect13SlotSamenvatting from './Sect13SlotSamenvatting'

const Blok5Week4Casus7LmoVoorbereidingVowHoeveelMagEenLevensjaarKostenSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Waarom de vraag “hoeveel mag een levensjaar kosten?” belangrijk is', icon: HelpCircle },
    { id: 'sect-03', title: 'Het meten van gezondheidswinst: de QALY', icon: TrendingUp },
    { id: 'sect-04', title: 'Het meten van kosten', icon: Scale },
    { id: 'sect-05', title: 'IKER of ICER: extra kosten per extra gezondheidswinst', icon: GitBranch },
    { id: 'sect-06', title: 'Het kosteneffectiviteitsvlak', icon: Table2 },
    { id: 'sect-07', title: 'Negatieve IKER, positieve IKER, WTP en WTA', icon: Table2 },
    { id: 'sect-08', title: 'Netto monetaire baten (NMB)', icon: TrendingUp },
    { id: 'sect-09', title: 'Van kosteneffectiviteit naar budgetallocatie', icon: Landmark },
    { id: 'sect-10', title: 'Het Nederlandse basispakket en de Trechter van Dunning', icon: Landmark },
    { id: 'sect-11', title: 'Distributieve en procedurele rechtvaardigheid', icon: Scale },
    { id: 'sect-12', title: 'Toepassing in het onderwijs', icon: GraduationCap },
    { id: 'sect-13', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Voorbereiding VOW: Hoeveel mag een levensjaar kosten?"
      description="De zorguitgaven in Nederland stijgen al jaren. Dat komt onder andere door vergrijzing, stijgende lonen in de zorg en nieuwe behandelingen die vaak duur zijn. Veel van die behandelingen leveren gezondheidswinst op, maar het zorgbudget is niet onbeperkt."
      caseLabel="Week 4 · Casus 7: Zwelling van de lies en of een dik been"
      blokLabel="Blok 5"
      moduleKind="lmo"
      practiceLink="/oefenvragen?lme=blok5-week4-casus7-lmo-voorbereiding-vow-hoeveel-mag-een-levensjaar-kosten"
      tableOfContents={tableOfContents}
    summaryVariantToggle={{
      activeLmeId: 'blok5-week4-casus7-lmo-voorbereiding-vow-hoeveel-mag-een-levensjaar-kosten',
      variants: [
        { id: 'blok5-week4-casus7-lmo-voorbereiding-vow-hoeveel-mag-een-levensjaar-kosten', label: 'Uitgebreid' },
        { id: 'blok5-week4-casus7-lmo-voorbereiding-vow-hoeveel-mag-een-levensjaar-kosten-mini', label: 'Kort' },
      ],
    }}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02WaaromDeVraag />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03Qaly />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04Kosten />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05Iker />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06Kosteneffectiviteitsvlak />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07NegatievePositieveIKER />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08Nmb />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09BudgetallocatieEthiek />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10BasispakketTrechter />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11DistributieveRechtvaardigheid />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12ToepassingOnderwijs />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13SlotSamenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week4Casus7LmoVoorbereidingVowHoeveelMagEenLevensjaarKostenSummary
