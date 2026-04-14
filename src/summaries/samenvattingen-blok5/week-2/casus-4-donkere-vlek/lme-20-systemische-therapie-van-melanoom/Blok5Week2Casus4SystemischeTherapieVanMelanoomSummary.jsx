import {
  Activity,
  BookOpen,
  Brain,
  CircleCheck,
  ClipboardList,
  Dna,
  Layers,
  ListChecks,
  Pill,
  ShieldAlert,
  Stethoscope,
  Syringe,
  Table2,
  Target,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02SystemischeTherapieBijKanker from './Sect02SystemischeTherapieBijKanker'
import Sect03Behandelprincipes from './Sect03Behandelprincipes'
import Sect04StadieringVanMelanoomAjcc from './Sect04StadieringVanMelanoomAjcc'
import Sect05TCategorie from './Sect05TCategorie'
import Sect06NCategorie from './Sect06NCategorie'
import Sect07MCategorie from './Sect07MCategorie'
import Sect08ImmunotherapieBijMelanoom from './Sect08ImmunotherapieBijMelanoom'
import Sect09NeoAdjuvantVersusAdjuvantImmunotherapie from './Sect09NeoAdjuvantVersusAdjuvantImmunotherapie'
import Sect10BijwerkingenImmunotherapie from './Sect10BijwerkingenImmunotherapie'
import Sect11DoelgerichteTherapieBijBrafMutatie from './Sect11DoelgerichteTherapieBijBrafMutatie'
import Sect12BijwerkingenBrafMekRemmers from './Sect12BijwerkingenBrafMekRemmers'
import Sect13KlinischeBetekenis from './Sect13KlinischeBetekenis'
import Sect14Samenvatting from './Sect14Samenvatting'

const Blok5Week2Casus4SystemischeTherapieVanMelanoomSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Systemische therapie bij kanker', icon: Syringe },
    { id: 'sect-03', title: 'Behandelprincipes', icon: ClipboardList },
    { id: 'sect-04', title: 'Stadiëring van melanoom (AJCC)', icon: Table2 },
    { id: 'sect-05', title: 'T-categorie', icon: Layers },
    { id: 'sect-06', title: 'N-categorie', icon: Target },
    { id: 'sect-07', title: 'M-categorie', icon: Activity },
    { id: 'sect-08', title: 'Immunotherapie bij melanoom', icon: ShieldAlert },
    { id: 'sect-09', title: 'Neo-adjuvant vs adjuvant immunotherapie', icon: ListChecks },
    { id: 'sect-10', title: 'Bijwerkingen immunotherapie', icon: Stethoscope },
    { id: 'sect-11', title: 'Doelgerichte therapie (BRAF)', icon: Dna },
    { id: 'sect-12', title: 'Bijwerkingen BRAF/MEK-remmers', icon: Pill },
    { id: 'sect-13', title: 'Klinische betekenis', icon: Brain },
    { id: 'sect-14', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Systemische therapie van melanoom"
      description="Systemische therapie betekent dat het geneesmiddel het hele lichaam kan bereiken. Dat gebeurt bijvoorbeeld via de bloedbaan, zoals bij een infuus, of via orale inname. Het idee is dus dat de behandeling niet alleen op één plek werkt, maar door het hele lichaam verspreid wordt. Dat is belangrijk bij kanker, omdat tumorcellen zich vaak al kunnen hebben verspreid, ook als dat nog niet zichtbaar is."
      caseLabel="Week 2 · Casus 4: Donkere vlek"
      blokLabel="Blok 5"
      practiceLink="/oefenvragen?lme=blok5-week2-casus4-systemische-therapie-van-melanoom"
      tableOfContents={tableOfContents}
    summaryVariantToggle={{
      activeLmeId: 'blok5-week2-casus4-systemische-therapie-van-melanoom',
      variants: [
        { id: 'blok5-week2-casus4-systemische-therapie-van-melanoom', label: 'Uitgebreid' },
        { id: 'blok5-week2-casus4-systemische-therapie-van-melanoom-mini', label: 'Kort' },
      ],
    }}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02SystemischeTherapieBijKanker />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03Behandelprincipes />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04StadieringVanMelanoomAjcc />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05TCategorie />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06NCategorie />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07MCategorie />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08ImmunotherapieBijMelanoom />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09NeoAdjuvantVersusAdjuvantImmunotherapie />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10BijwerkingenImmunotherapie />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11DoelgerichteTherapieBijBrafMutatie />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12BijwerkingenBrafMekRemmers />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13KlinischeBetekenis />
      </section>
      <section id="sect-14" className="scroll-mt-24 mb-12">
        <Sect14Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week2Casus4SystemischeTherapieVanMelanoomSummary
